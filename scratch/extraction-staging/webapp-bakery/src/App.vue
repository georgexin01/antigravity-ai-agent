<script setup lang="ts">
import { App } from "@capacitor/app";
import { Capacitor } from "@capacitor/core";
import { useRoute, useRouter } from "vue-router";
import { isApp } from "./utils/capacitor";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

import { computed, nextTick, onMounted, ref, watch } from "vue";
import { PopupBanner } from "./model/popupBannerResponse";
import { usePopupBannerStore } from "./stores/popupBanner";
import { useCartStore } from "./stores/cart";
import { useLoadingStore } from "./stores/loading";
import { useOutletStore } from "./stores/outlet";
import { useUserStore } from "./stores/user";
import { useLocale } from "./utils/locale";
import { useVersionStore } from "./stores/version";
import { Version } from "./model/versionResponse";
import { removeStorageData } from "./utils/capacitor/localstorage";
import { StorageKeys } from "./types/localStorageType";
import { initPush } from "./utils/capacitor/pushnotification/fcm";
import { isOutdatedVersion, toggleModal } from "./utils/helperUtils";
import { OrderType, ShippingType } from "./model/orderResponse";
import { useStoreClosureStore } from "./stores/storeClosure";
import { StoreClosure } from "./model/storeClosureResponse";
import { checkAndRegisterIfEnabled } from "./utils/capacitor/pushnotification/fcm";
import { useSplashAdStore } from "./stores/splashAd";
import { SplashAd } from "./model/splashAdResponse";
import { useAddressStore } from "./stores/address";
import { useProductStore } from "./stores/product";
import { useSettingStore } from "./stores/setting";

let lastSplashAdShownAt = 0; // timestamp of last splash ad display
let lastPopupBannerShownAt = 0; // timestamp of last popup banner display

const { translate, initLocale, currentLanguageIndex } = useLocale();

const loadingStore = useLoadingStore();
const outletStore = useOutletStore();
const userStore = useUserStore();
const popupBannerStore = usePopupBannerStore();
const splashAdStore = useSplashAdStore();
const storeClosureStore = useStoreClosureStore();
const addressStore = useAddressStore();
const settingStore = useSettingStore();
const isShowPopUpAds = ref(false);
const isShowSplashAds = ref(false);
const countdown = ref(3);
let interval: ReturnType<typeof setInterval> | null = null;
const popupBanners = ref<PopupBanner[]>([]);
const splashAds = ref<SplashAd[]>([]);
const storeClosures = ref<StoreClosure[]>([]);

onMounted(async () => {
  const cartStore = useCartStore();
  await Promise.all([
    outletStore.getBranches(),
    cartStore.loadCart(),
    cartStore.loadPickupData(),
    addressStore.loadCurrentAddress(),
  ]);
  await outletStore.loadSelectedOutlet();

  const [splashAdResponse, popupBannerResponse, storeClosureResponse] =
    await Promise.all([
      splashAdStore.getSplashAds(),
      popupBannerStore.getPopupBanners(),
      storeClosureStore.getStoreClosures(),
      settingStore.getSetting(),
    ]);

  if (splashAdResponse) splashAds.value = splashAdResponse;
  if (popupBannerResponse) popupBanners.value = popupBannerResponse;
  if (storeClosureResponse) storeClosures.value = storeClosureResponse;

  // --- Step 1: Version Check (native only) ---
  if (Capacitor.getPlatform() !== "web") {
    const updateResult = await checkForAppUpdate();

    if (updateResult === "webAppOnly") {
      await showWebAppOnlyModal(); // never resolves - blocks here
    }

    if (updateResult === "version") {
      await showVersionUpdateModal();
    }

    // --- Step 1.5: FCM Push Permission ---
    try {
      await initPush();
    } catch (e) {
      console.error("Push init error:", e);
    }
  }

  // --- Step 2: Splash Ad (first open + every 30 min on Home/Menu pages) ---
  const splashAdPages = ["Home", "Menu"];
  const now = Date.now();
  if (
    activeSplashAd.value &&
    now - lastSplashAdShownAt >=
      (settingStore.setting.ads?.splashIntervalMinutes ?? 30) * 60 * 1000 &&
    splashAdPages.includes(route.name as string)
  ) {
    lastSplashAdShownAt = now;
    await showSplashAd();
  }

  // --- Step 3: Popup Banner (Home page only, every 30 min) ---
  const popupNow = Date.now();
  if (
    popupBanners.value.length > 0 &&
    popupNow - lastPopupBannerShownAt >=
      (settingStore.setting.ads?.popupIntervalMinutes ?? 30) * 60 * 1000 &&
    route.name === "Home"
  ) {
    lastPopupBannerShownAt = popupNow;
    await showPopupBanner();
  }

  // --- Step 4: Order Type Modal ---
  await useCartStore().loadOrderType();

  // ✅ WAIT until popup is fully closed (if it's open)
  if (isShowPopUpAds.value) {
    await new Promise<void>((resolve) => {
      const stop = watch(isShowPopUpAds, (val) => {
        if (!val) {
          stop();
          resolve();
        }
      });
    });

    // extra safety for animation
    await nextTick();
    await new Promise((r) => setTimeout(r, 500));
  }

  if (
    !useCartStore().orderType &&
    (route.name === "Home" || route.name === "Menu")
  ) {
    await showOrderTypeModal();
  }

  // Non-blocking
  initLocale().catch((err) => console.error("initLocale failed:", err));
});

const startCountdown = () => {
  countdown.value = activeSplashAd.value?.duration ?? 3;
  // Clear any existing interval to avoid multiple timers running
  if (interval) clearInterval(interval);

  interval = setInterval(() => {
    countdown.value--;
    if (countdown.value <= 0) {
      if (interval) clearInterval(interval);
      interval = null; // Reset interval reference
      isShowSplashAds.value = false;
    }
  }, 1000);
};

const skipSplashAd = () => {
  isShowSplashAds.value = false;

  if (interval) {
    clearInterval(interval);
    interval = null;
  }
};

const skipPopupBanner = () => {
  isShowPopUpAds.value = false;
  document.body.style.overflow = "";
};

const router = useRouter();
const route = useRoute();
const goBack = () => {
  // router.go(-1);
  window.history.back();
};

const isActive = (routeName: string): boolean => {
  if (routeName == "Rewards") {
    return (
      route.name == "Missions" ||
      route.name == "RedeemRewards" ||
      route.name == "MyRewards"
    );
  }
  return route.name === routeName;
};

const handleMenuClick = () => {
  if (outletStore.selectedOutlet !== null) {
    router.push({ name: "Menu" });
  } else {
    router.push({ name: "SelectOutlet" });
  }
};

const handleAccount = () => {
  if (userStore.isLogin) {
    router.push({ name: "Account" });
  } else {
    router.push({ name: "Login", query: { redirect: "/account" } });
  }
};

const handleRewards = () => {
  if (userStore.isLogin) {
    router.push({ name: "Rewards" });
  } else {
    router.push({ name: "Login", query: { redirect: "/rewards" } });
  }
};

// Handle Mobile Back Button
if (isApp) {
  App.addListener("backButton", () => {
    if (route.name === "Home") {
      App.exitApp();
    } else {
      window.history.back();
    }
  });
}

// Handles the JS event triggers from MainActivity.java and Appdelegate.swift
App.addListener("appUrlOpen", (data) => {
  const url = data.url; // e.g., bakery365://login?phoneNo=0123456789
  if (!url) return;

  const urlObj = new URL(url);
  const phoneNo = urlObj.searchParams.get("phoneNo");

  if (url.includes("login")) {
    router.isReady().then(() => {
      nextTick(() => {
        // Check if we're already on the login page
        if (router.currentRoute.value.name === "Login") {
          router.replace({ name: "Login", query: { phoneNo } });
        } else {
          router.push({ name: "Login", query: { phoneNo } });
        }
      });
    });
  }
});

//For checking if theres newer version & display modal
const isUpdateAvailable = ref(false);
const isMandatoryUpdate = ref(false);
const platform = Capacitor.getPlatform() as "android" | "ios";
const versionStore = useVersionStore();
const latestUpdate = ref<Version | null>(null);

const openStoreLink = () => {
  if (latestUpdate.value?.link) {
    window.open(latestUpdate.value.link, "_system");
  }
};

// --- Promise-based Popup System ---
let resolveVersionPromise: (() => void) | null = null;

// Resume flow when app becomes active
if (Capacitor.getPlatform() !== "web") {
  App.addListener("appStateChange", async ({ isActive }) => {
    if (isActive) {
      const { version: currentVersion, build: currentBuild } =
        await getCurrentAppInfo();

      latestUpdate.value = await versionStore.getVersionByPlatform(platform);

      if (latestUpdate.value) {
        const latestVersion = latestUpdate.value.version;
        const latestBuild = latestUpdate.value.build;

        // Always show WebAppOnly modal no matter version difference
        if (latestUpdate.value?.isWebAppOnly) {
          toggleModal("webAppOnlyModal", "show");
          return;
        }

        // Check if app is outdated using new helper
        const outdated = isOutdatedVersion(
          currentVersion,
          currentBuild,
          latestVersion,
          latestBuild,
          platform,
        );

        console.log("[VersionCheck] App Active State:");
        console.log({
          platform,
          currentVersion,
          currentBuild,
          latestVersion,
          latestBuild,
          outdated,
        });

        if (outdated) {
          isUpdateAvailable.value = true;

          if (latestUpdate.value?.isMandatoryUpdate) {
            toggleModal("updateVersionModal", "show");
            return;
          }
        }

        // Version is up to date or not mandatory -> resolve pending promise
        if (resolveVersionPromise) {
          const resolve = resolveVersionPromise;
          resolveVersionPromise = null;
          resolve();
        }
      }

      // Check if user enabled notification from phone settings
      await checkAndRegisterIfEnabled();

      // Show splash ad again if interval has passed (Home/Menu pages only)
      const splashAdPages = ["Home", "Menu"];
      const now = Date.now();
      if (
        activeSplashAd.value &&
        now - lastSplashAdShownAt >=
          (settingStore.setting.ads?.splashIntervalMinutes ?? 30) * 60 * 1000 &&
        splashAdPages.includes(route.name as string)
      ) {
        lastSplashAdShownAt = now;
        await showSplashAd();
      }

      // Show popup banner again if interval has passed (Home page only)
      const popupNow = Date.now();
      if (
        popupBanners.value.length > 0 &&
        popupNow - lastPopupBannerShownAt >=
          (settingStore.setting.ads?.popupIntervalMinutes ?? 30) * 60 * 1000 &&
        route.name === "Home"
      ) {
        lastPopupBannerShownAt = popupNow;
        await showPopupBanner();
      }
    }
  });
}

const getCurrentAppInfo = async () => {
  if (Capacitor.getPlatform() === "web") {
    // Mock info for web
    return {
      version: "1.0.0",
      build: 1,
    };
  }
  const info = await App.getInfo();
  return {
    version: info.version,
    build: parseInt(info.build),
  };
};

const checkForAppUpdate = async (): Promise<
  "webAppOnly" | "version" | null
> => {
  if (Capacitor.getPlatform() === "web") return null;

  const { version: currentVersion, build: currentBuild } =
    await getCurrentAppInfo();

  latestUpdate.value = await versionStore.getVersionByPlatform(platform);

  if (latestUpdate.value) {
    const latestVersion = latestUpdate.value.version;
    const latestBuild = latestUpdate.value.build;

    // Always show WebAppOnly modal, even if version is same
    if (latestUpdate.value?.isWebAppOnly) {
      return "webAppOnly";
    }

    // Use new comparison logic
    const outdated = isOutdatedVersion(
      currentVersion,
      currentBuild,
      latestVersion,
      latestBuild,
      platform,
    );

    console.log("[VersionCheck] Initial App Launch:");
    console.log({
      platform,
      currentVersion,
      currentBuild,
      latestVersion,
      latestBuild,
      outdated,
    });

    if (outdated) {
      isUpdateAvailable.value = true;
      isMandatoryUpdate.value = !!latestUpdate.value?.isMandatoryUpdate;
      return "version";
    }
  }

  return null;
};

// Update Now / Later Handlers
const handleUpdateNow = () => {
  toggleModal("updateVersionModal", "hide");
  openStoreLink();
  // Don't resolve the promise - wait for appStateChange to check if updated
};

const handleUpdateLater = () => {
  toggleModal("updateVersionModal", "hide");
  // Resolve the promise to continue the flow
  if (resolveVersionPromise) {
    const resolve = resolveVersionPromise;
    resolveVersionPromise = null;
    resolve();
  }
};

const handleRedirectToWebApp = () => {
  window.open("https://365bakerygroup.com/#/", "_system");
};

// --- Promise-based Popup Functions ---
const showWebAppOnlyModal = () => {
  if (route.name !== "Home") return Promise.resolve();

  return new Promise<void>(() => {
    // Never resolves - intentionally blocks the flow
    toggleModal("webAppOnlyModal", "show");
  });
};

const showVersionUpdateModal = () => {
  if (route.name !== "Home") return Promise.resolve();

  return new Promise<void>((resolve) => {
    resolveVersionPromise = resolve;
    toggleModal("updateVersionModal", "show");
  });
};

const showSplashAd = () =>
  new Promise<void>((resolve) => {
    // Notify Android to go fullscreen (remove status bar margins)
    if ((window as any).NativeBridge) {
      (window as any).NativeBridge.setSplashAdVisible(true);
    }

    isShowSplashAds.value = true;
    startCountdown();

    const stopWatching = watch(isShowSplashAds, async (val) => {
      if (!val) {
        stopWatching();

        // ✅ wait for DOM update + fade animation
        await nextTick();
        await new Promise((r) => setTimeout(r, 500)); // match CSS (0.5s)

        resolve();
      }
    });
  });

const showPopupBanner = () =>
  new Promise<void>((resolve) => {
    isShowPopUpAds.value = true;

    const stopWatching = watch(isShowPopUpAds, async (val) => {
      if (!val) {
        stopWatching();

        // ✅ wait for DOM update + fade animation
        await nextTick();
        await new Promise((r) => setTimeout(r, 500)); // match CSS

        resolve();
      }
    });
  });

const showOrderTypeModal = () => {
  if (route.name !== "Home" && route.name !== "Menu") return Promise.resolve();

  return new Promise<void>((resolve) => {
    toggleModal("orderTypeModal", "show", () => {
      resolve();
    });
  });
};

// Pick the splash ad where now falls within startDate–endDate
// If overlapping, show the one with the latest startDate (then latest createdDate)
const activeSplashAd = computed(() => {
  const now = new Date();

  const active = splashAds.value
    .filter((ad) => {
      const startDate = new Date(ad.startDate);
      startDate.setHours(0, 0, 0, 0);
      const endDate = new Date(ad.endDate);
      endDate.setHours(23, 59, 59, 999);
      return now >= startDate && now <= endDate;
    })
    .sort((a, b) => {
      const startDiff =
        new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
      if (startDiff !== 0) return startDiff;
      return (
        new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime()
      );
    });

  return active.length > 0 ? active[0] : null;
});

// Check if today falls within any store closure date range
const activeStoreClosure = computed(() => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  for (const closure of storeClosures.value) {
    const startDate = new Date(closure.startDate);
    const endDate = new Date(closure.endDate);
    startDate.setHours(0, 0, 0, 0);
    endDate.setHours(23, 59, 59, 999);

    if (today >= startDate && today <= endDate) {
      return closure;
    }
  }
  return null;
});

const isTodayOrderDisabled = computed(() => !!activeStoreClosure.value);
const canDismissOrderModal = computed(() => !!useCartStore().orderType);

const openOrderTypeModal = async () => {
  toggleModal("orderTypeModal", "show");
};

const finalizeOrderSelection = async () => {
  const cart = useCartStore();
  if (!cart.orderType || !cart.shippingType) return;

  await cart.loadOrderType();
  await cart.loadShippingType();

  if (cart.orderType === OrderType.TODAY) {
    cart.setIsToday(true);
    cart.setIsTodayPickupNow(true);
    removeStorageData(StorageKeys.CurrentCart);
    cart.clearCart();
    removeStorageData(StorageKeys.NotTodayScheduleTime);
    removeStorageData(StorageKeys.NotTodayScheduleDate);
  } else {
    cart.setIsToday(false);
    cart.setIsTodayPickupNow(false);
    removeStorageData(StorageKeys.TodayScheduleTime);
  }

  // Re-fetch products with updated orderType & shippingType for promotion filtering
  await useProductStore().getProducts();

  handleMenuClick();
  toggleModal("orderTypeModal", "hide");
};

const selectOrderType = (
  selectedType: OrderType.TODAY | OrderType.PREORDER,
) => {
  useCartStore().setOrderType(selectedType);
  finalizeOrderSelection();
};

const selectOrderMethod = (
  selectedMethod: ShippingType.PICKUP | ShippingType.DELIVERY,
) => {
  useCartStore().setShippingType(selectedMethod);
  finalizeOrderSelection();
};

watch(isShowPopUpAds, (visible) => {
  document.body.style.overflow = visible ? "hidden" : "";
});
</script>

<template>
  <div class="page-wrapper">
    <!-- Splash Ad  -->
    <transition name="fade">
      <div v-if="isShowSplashAds && activeSplashAd" class="splashAds">
        <img :src="activeSplashAd.images[0]" />
        <button
          @click="skipSplashAd"
          type="button"
          class="btn btn-link rounded-pill btn-sm text-white"
          style="background-color: rgba(21, 21, 21, 0.4)"
        >
          {{ translate("Skip") }}({{ countdown }})
        </button>
      </div>
    </transition>

    <!-- Popup Banner  -->
    <transition name="fade">
      <div
        v-if="isShowPopUpAds && popupBanners && popupBanners.length > 0"
        class="popUpAdsWrapper"
      >
        <div class="popUpAds">
          <button
            @click="skipPopupBanner"
            type="button"
            class="close-btn"
            aria-label="Close"
          >
            <img src="/assets/icons/close.png" />
          </button>
          <div class="popUpContent">
            <swiper
              :loop="true"
              :modules="[Autoplay]"
              :lazy="true"
              :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
              }"
              class="popupBannerSwiper"
            >
              <swiper-slide
                v-for="(banner, index) in popupBanners"
                :key="index"
              >
                <img :src="banner.images[0]" alt="Popup Banner" />
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </transition>

    <!-- Preloader -->
    <transition name="fade">
      <div v-show="loadingStore.isLoading" id="preloader">
        <div class="loader" style="flex-direction: column">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <p v-if="route.name === 'SelectOutlet'" class="mt-3 text-muted">
            {{ translate("Finding nearest store...") }}
          </p>
        </div>
      </div>
    </transition>
    <!-- Preloader end-->

    <!-- Header -->
    <header
      v-if="
        route.name !== 'Home' &&
        route.name !== 'BannerDetail' &&
        route.name !== 'Menu' &&
        route.name !== 'Item' &&
        route.name !== 'SmallBannerDetail' &&
        route.name !== 'NotificationDetail' &&
        route.name !== 'VoucherDetail' &&
        route.name !== 'PickLocation'
      "
      class="header header-fixed safe-area-header-height"
    >
      <div class="container safe-area-top" style="padding: 0">
        <div class="header-content">
          <div class="left-content">
            <div v-if="route.name == 'Home'" class="header-logo logo-lg">
              <img
                class="logo-dark"
                src="/assets/images/app-logo/logo.png"
                alt=""
              />
              <img
                class="logo-white d-none"
                src="/assets/images/app-logo/logo-white.png"
                alt=""
              />
            </div>
            <div v-else-if="route.name == 'PaymentDone'"></div>
            <a v-else @click="goBack" class="back-btn">
              <i class="fa-solid fa-chevron-left"></i>
            </a>
          </div>
          <div class="mid-content">
            <h4 v-if="route.name != 'Home'" style="margin-bottom: 0">
              <!-- eslint-disable -->
              <!-- {{ translate(route.meta.title as string) }} -->
              {{ translate((route.meta.title as string) ?? "none") }}
              <!-- eslint-enable -->
            </h4>
          </div>
          <div class="right-content d-flex align-items-center gap-3 lh-1"></div>
        </div>
      </div>
    </header>

    <header
      v-if="route.name === 'Item' || route.name === 'BannerDetail'"
      class="header header-fixed safe-area-top safe-area-header-height"
      style="background-color: transparent; box-shadow: none; border: none"
    >
      <div class="container" style="padding: 0">
        <div class="header-content">
          <div class="left-content">
            <a @click="goBack" class="back-btn">
              <i class="fa-solid fa-chevron-left"></i>
            </a>
          </div>
          <div class="mid-content"></div>
          <div class="right-content"></div>
        </div>
      </div>
    </header>
    <!-- Header -->

    <!-- Button with circular text around it -->
    <div
      v-if="['Home', 'Menu'].includes(route.name as string)"
      class="float-button-wrapper"
    >
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        style="
          position: absolute;
          top: -23px;
          left: -30px;
          pointer-events: none;
        "
      >
        <defs>
          <path
            id="circlePath"
            d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0"
          />
        </defs>
        <text font-size="12" fill="#75342c" font-family="Arial">
          <textPath href="#circlePath" startOffset="25%" text-anchor="middle">
            {{ translate("Change Order Type") }}
          </textPath>
        </text>
      </svg>

      <div @click="openOrderTypeModal()" class="float-button">
        <i class="fa-solid fa-bag-shopping"></i>
      </div>
    </div>

    <!-- Modal for order type and method -->
    <div
      class="modal fade"
      id="orderTypeModal"
      tabindex="-1"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
      :data-bs-backdrop="canDismissOrderModal ? true : 'static'"
      :data-bs-keyboard="canDismissOrderModal"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalCenterTitle">
              {{ translate("How would you like to order") }}?
            </h5>
          </div>
          <div class="modal-body">
            <div class="alert alert-light" role="alert">
              <i class="fi fi-rr-info me-1"></i>
              {{ translate("Changing your selection will clear your cart.") }}
            </div>
            <!-- Step 1: Display store closure notice (if any) -->
            <div
              v-if="isTodayOrderDisabled && activeStoreClosure"
              class="alert alert-danger"
              role="alert"
            >
              <i class="fi fi-rr-megaphone me-1"></i>
              <!-- <i class="fi fi-rr-info me-1"></i> -->
              {{
                currentLanguageIndex === 0
                  ? activeStoreClosure.messageEN
                  : activeStoreClosure.messageCN
              }}
            </div>
            <!-- Step 2: Choose Order Type -->
            <h6 class="mb-2">{{ translate("Select order type") }}</h6>
            <div class="row g-2 mb-3">
              <div class="col-6">
                <div
                  class="card text-center"
                  :style="{
                    backgroundColor: isTodayOrderDisabled
                      ? '#e0e0e0'
                      : useCartStore().orderType === OrderType.TODAY
                        ? '#c2b59b'
                        : 'var(--bs-dark-bg-subtle)',
                    cursor: isTodayOrderDisabled ? 'not-allowed' : 'pointer',
                    opacity: isTodayOrderDisabled ? 0.6 : 1,
                  }"
                  @click="
                    !isTodayOrderDisabled && selectOrderType(OrderType.TODAY)
                  "
                >
                  <div
                    class="card-body d-flex flex-column align-items-center justify-content-center"
                    style="height: 100%"
                  >
                    <img src="./assets/img/today.svg" style="height: 50px" />
                    <p class="mb-0 mt-2">{{ translate("Today") }}</p>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div
                  class="card text-center"
                  :style="{
                    backgroundColor:
                      useCartStore().orderType === OrderType.PREORDER
                        ? '#c2b59b'
                        : 'var(--bs-dark-bg-subtle)',
                    cursor: 'pointer',
                  }"
                  @click="selectOrderType(OrderType.PREORDER)"
                >
                  <div
                    class="card-body d-flex flex-column align-items-center justify-content-center"
                    style="height: 100%"
                  >
                    <img src="./assets/img/preorder.svg" style="height: 50px" />
                    <p class="mb-0 mt-2">{{ translate("Pre-Order") }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Step 3: Choose Shipping Type -->
            <h6 class="mb-2">{{ translate("Select order method") }}</h6>
            <div class="row g-2 mb-3">
              <div class="col-6">
                <div
                  class="card text-center"
                  :style="{
                    backgroundColor:
                      useCartStore().shippingType === ShippingType.PICKUP
                        ? '#c2b59b'
                        : 'var(--bs-dark-bg-subtle)',
                    cursor: 'pointer',
                  }"
                  @click="selectOrderMethod(ShippingType.PICKUP)"
                >
                  <div
                    class="card-body d-flex flex-column align-items-center justify-content-center"
                    style="height: 100%"
                  >
                    <img src="./assets/img/pickup.svg" style="height: 50px" />
                    <p class="mb-0 mt-2">{{ translate("Pickup") }}</p>
                  </div>
                </div>
              </div>

              <div class="col-6">
                <div
                  class="card text-center"
                  :style="{
                    backgroundColor:
                      useCartStore().shippingType === ShippingType.DELIVERY
                        ? '#c2b59b'
                        : 'var(--bs-dark-bg-subtle)',
                    cursor: 'pointer',
                  }"
                  @click="selectOrderMethod(ShippingType.DELIVERY)"
                >
                  <div
                    class="card-body d-flex flex-column align-items-center justify-content-center"
                    style="height: 100%"
                  >
                    <img src="./assets/img/delivery.svg" style="height: 50px" />
                    <p class="mb-0 mt-2">{{ translate("Delivery") }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Hidden button to trigger the modal -->
    <button
      id="openUpdateVersionModal"
      type="button"
      class="btn btn-primary"
      style="display: none"
      data-bs-toggle="modal"
      data-bs-target="#updateVersionModal"
    >
      Open Update Version Modal
    </button>

    <!-- Modal update version Modal -->
    <div
      class="modal fade"
      id="updateVersionModal"
      tabindex="-1"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div
            class="modal-header"
            style="border-bottom: none; justify-content: center"
          >
            <h5 class="modal-title" id="exampleModalCenterTitle">
              {{ translate("New Version Available") }}
            </h5>
          </div>
          <div class="modal-body">
            <p class="text-center">
              {{
                translate(
                  "A new version of the app is available. Please update to continue enjoying the latest features and improvements.",
                )
              }}
            </p>
          </div>
          <div class="modal-footer" style="border-top: none">
            <div class="d-grid gap-2 w-100">
              <button
                @click="handleUpdateNow"
                type="button"
                class="btn rounded-pill btn-primary btn-sm"
                data-bs-dismiss="modal"
              >
                {{ translate("Update Now") }}
              </button>
              <button
                v-if="!isMandatoryUpdate"
                @click="handleUpdateLater"
                type="button"
                class="btn rounded-pill btn-light btn-sm"
                data-bs-dismiss="modal"
              >
                {{ translate("Update Later") }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal force redirect to webapp  -->
    <div
      class="modal fade"
      id="webAppOnlyModal"
      tabindex="-1"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div
            class="modal-header"
            style="border-bottom: none; justify-content: center"
          >
            <h5 class="modal-title" id="exampleModalCenterTitle">
              {{ translate("App Under Review") }}
            </h5>
          </div>
          <div class="modal-body">
            <p class="text-center">
              {{
                translate(
                  "The latest app update is currently under review. Please continue using our Web App for now.",
                )
              }}
            </p>
          </div>
          <div class="modal-footer" style="border-top: none">
            <div class="d-grid gap-2 w-100">
              <button
                @click="handleRedirectToWebApp"
                type="button"
                class="btn rounded-pill btn-primary btn-sm"
                data-bs-dismiss="modal"
              >
                {{ translate("Go to Web App") }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- router-view -->
    <router-view />

    <!-- Footer/ Menubar -->
    <div
      v-if="
        route.name == 'Home' ||
        route.name == 'Menu' ||
        route.name == 'Gift' ||
        route.name == 'Rewards' ||
        route.name == 'Missions' ||
        route.name == 'RedeemRewards' ||
        route.name == 'MyRewards' ||
        route.name == 'Account' ||
        route.name == 'SmallBannerDetail'
      "
      class="menubar-area footer-fixed safe-area-bottom"
    >
      <div class="container" style="padding: 0">
        <div class="toolbar-inner menubar-nav">
          <router-link
            class="nav-link"
            :class="{ active: isActive('Home') }"
            :to="{ name: 'Home' }"
            style="width: 25%"
          >
            <img
              src="../src/assets/bakery/icon/store.png"
              alt=""
              style="width: 18px; height: 18px"
            />
            <span class="name">{{ translate("Home") }}</span>
          </router-link>
          <div
            class="nav-link"
            :class="{ active: isActive('Menu') }"
            @click="handleMenuClick"
            style="cursor: pointer; width: 25%"
          >
            <img
              src="../src/assets/bakery/icon/menu.png"
              alt=""
              style="width: 18px; height: 18px"
            />
            <span class="name">{{ translate("Menu") }}</span>
          </div>
          <router-link
            class="nav-link"
            :class="{ active: isActive('Gift') }"
            :to="{ name: 'Gift' }"
            v-if="false"
          >
            <img
              src="../src/assets/bakery/icon/gift.png"
              alt=""
              style="width: 18px; height: 18px"
            />
            <span class="name">{{ translate("Gift") }}</span>
          </router-link>
          <div
            class="nav-link"
            :class="{ active: isActive('Rewards') }"
            @click="handleRewards"
            style="width: 25%"
          >
            <img
              src="../src/assets/bakery/icon/voucher.png"
              alt=""
              style="width: 18px; height: 18px"
            />
            <span class="name">{{ translate("Rewards") }}</span>
          </div>
          <div
            class="nav-link"
            :class="{ active: isActive('Account') }"
            @click="handleAccount"
            style="cursor: pointer; width: 25%"
          >
            <img
              src="../src/assets/bakery/icon/myAccount.png"
              alt=""
              style="width: 18px; height: 18px"
            />
            <span class="name">{{ translate("Account") }}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- Menubar -->
  </div>
</template>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.popUpAdsWrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2); // semi-transparent overlay
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 15px;
  box-sizing: border-box;
}

.popUpAds {
  position: relative;
  width: 100%;
  max-width: 500px;
  max-height: 80vh;
  box-sizing: border-box;
  border-radius: 8px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 8px;
  }
}

.close-btn {
  position: absolute;
  bottom: -50px;
  right: 50%;
  transform: translateX(50%);
  background: transparent;
  border: none;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  z-index: 10;
}

.safe-area-top {
  position: relative;
  top: env(safe-area-inset-top, 0);
}

.safe-area-header-height {
  height: calc(env(safe-area-inset-top, 0) + 60px);
}

.safe-area-bottom {
  height: calc(env(safe-area-inset-bottom, 0) + 52px);
}

.float-button-wrapper {
  position: fixed;
  bottom: calc(110px + env(safe-area-inset-bottom));
  right: max(25px, calc((100vw - min(100%, 540px)) / 2 + 25px));
  z-index: 1000;
}

.float-button {
  background-color: #75342c;
  color: white;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  position: relative;
  z-index: 2;
  right: 4px;
}

.splashAds {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 500px;
  height: 100%;
  z-index: 99999;
  background-color: white;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button {
    position: absolute;
    top: calc(
      var(--android-status-bar-height, env(safe-area-inset-top, 0px)) + 10px
    );
    right: 10px;
  }
}
</style>
