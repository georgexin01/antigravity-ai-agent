<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import {
  Autoplay,
  Pagination,
  Navigation,
  FreeMode,
  Thumbs,
} from "swiper/modules";
import "swiper/swiper-bundle.css";
import { useLocale } from "../utils/locale";
import { useProductStore } from "../stores/product";
import { useRouter } from "vue-router";
import { useBannerStore } from "../stores/banner";
import { Banner } from "../model/bannerResponse";
import { useUserStore } from "../stores/user";
import { User } from "../model/userResponse";
import { useLoadingStore } from "../stores/loading";
import { useSettingStore } from "../stores/setting";
import { Setting } from "../model/settingResponse";
import { useCategoryStore } from "../stores/category";
import { useSmallBannerStore } from "../stores/smallBanner";
import { SmallBanner, SmallBannerType } from "../model/smallBannerResponse";
import ProductCard from "../components/ProductCard.vue";
import { Capacitor } from "@capacitor/core";
import { openBrowser } from "../utils/capacitor/inappbrowser";
import { useInviteLink } from "../composables/useInviteLink";

const { translate } = useLocale();
const productStore = useProductStore();
const bannerStore = useBannerStore();
const smallBannerStore = useSmallBannerStore();
const categoryStore = useCategoryStore();
const userStore = useUserStore();
const settingStore = useSettingStore();
const loadingStore = useLoadingStore();
const allFeatureProducts = ref<any>([]);
const router = useRouter();

const banners = ref<Banner[]>([]);
const smallBanners = ref<SmallBanner[]>([]);

const user = ref<User>();
const setting = ref<Setting>();

const tabs = ref([
  translate("All"),
  translate("New Arrivals"),
  translate("Hot Sale"),
  translate("Recommended"),
]);

const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper: any) => {
  thumbsSwiper.value = swiper;
};

onMounted(async () => {
  try {
    loadingStore.startLoading();

    // Start all the asynchronous calls in parallel
    const [
      productResponse,
      categoryResponse,
      settingResponse,
      bannerResponse,
      smallBannerResponse,
    ] = await Promise.all([
      productStore.getProducts(),
      categoryStore.getCategories(),
      settingStore.getSetting(),
      bannerStore.getBanners(),
      smallBannerStore.getSmallBanners(),
    ]);

    setting.value = settingResponse;

    if (bannerResponse) {
      banners.value = bannerResponse;
    }
    if (smallBannerResponse) {
      smallBanners.value = smallBannerResponse;
    }
    const stringsToCheck = ["New Arrivals", "Hot Sale", "Recommended"];
    if (productResponse) {
      const filterFeatureCategorys = productResponse.filter((p) => {
        const foundCategory = categoryResponse.find(
          (cr) => cr.categoryId === p.categoryId,
        );
        if (!foundCategory) {
          return undefined;
        }

        return stringsToCheck.some((category) =>
          p.featureCategories.includes(category),
        );
      });
      const newArrivalProducts = filterFeatureCategorys.filter((p) =>
        p.featureCategories.includes("New Arrivals"),
      );
      const hotSalesProducts = filterFeatureCategorys.filter((p) =>
        p.featureCategories.includes("Hot Sale"),
      );
      const recommendedProducts = filterFeatureCategorys.filter((p) =>
        p.featureCategories.includes("Recommended"),
      );

      allFeatureProducts.value.push(
        filterFeatureCategorys,
        newArrivalProducts,
        hotSalesProducts,
        recommendedProducts,
      );
    }

    if (userStore.isLogin) {
      const userResponse = await userStore.getUser();

      user.value = userResponse;
    }
  } catch (error) {
    console.error("Error!", error);
    // Display error message to user or handle it further
  } finally {
    loadingStore.stopLoading();
  }
});

const goBannerDetail = (banner: Banner) => {
  if (banner.isUrlPath) {
    router.push({
      name: "BannerDetail",
      params: { bannerId: banner.bannerId },
    });
  }
};

const getNexTierRange = computed(() => {
  const currentTier = user.value?.tier;
  const tiers = setting.value?.tierName || [];
  const ranges = setting.value?.tierPointRange || [];

  if (!currentTier) return null;

  const currentIndex = tiers.indexOf(currentTier);

  // Return the next tier's point range if it exists
  if (currentIndex !== -1 && currentIndex + 1 < ranges.length) {
    return ranges[currentIndex + 1];
  }

  return null; // Top tier or not found
});

const { copyInviteLink, shareInviteLink } = useInviteLink(
  () => user.value?.phoneNo,
);

const goSmallBannerDetail = (banner: SmallBanner) => {
  if (banner.isUrlPath) {
    if (banner.type === SmallBannerType.VOUCHER) {
      router.push({
        name: "SmallBannerDetail",
        params: { smallBannerId: banner.smallBannerId },
      });
    } else if (banner.type === SmallBannerType.OTHER) {
      if (Capacitor.isNativePlatform()) {
        openBrowser(banner.urlPath);
      } else {
        window.open(banner.urlPath, "_blank");
        //window.location.replace(banner.urlPath);
      }
    }
  }
};
</script>

<template>
  <main class="page-content space-bottom">
    <!-- Banner DONE-->
    <div class="bannerSwiper safe-area-top">
      <swiper
        v-if="banners && banners.length > 0"
        :loop="banners.length > 1"
        :centeredSlides="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :pagination="{
          clickable: true,
        }"
        :modules="[Autoplay, Pagination]"
        :lazy="true"
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
      >
        <swiper-slide v-for="(banner, index) in banners" :key="index">
          <div @click="goBannerDetail(banner)" class="bannerBox">
            <img
              v-if="banner.images && banner.images.length > 0"
              :src="banner.images[0]"
              class="card-img-top"
              loading="lazy"
            />
            <img
              v-else-if="banner.image"
              :src="banner.image"
              class="card-img-top"
              loading="lazy"
            />
            <img v-else src="../assets/no-images.jpg" />
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <!-- container -->
    <div class="container safe-area-top" style="position: relative">
      <!-- Greeting, Tier & Point, Invite & Check In (only for logged-in users) -->
      <template v-if="user">
        <h6 class="mb-3 mt-4" style="font-weight: 800">
          {{ translate("Hi") }}, {{ user ? user.name : translate("User") }}!
        </h6>

        <!-- Tier & Point -->
        <div class="card mb-5" style="min-height: 90px">
          <div class="card-body d-flex align-items-center">
            <router-link
              :to="{ name: 'Tier' }"
              class="left w-50 d-flex align-items-center justify-content-between"
            >
              <div>
                <h6 class="card-title mb-0">{{ translate(user.tier) }}</h6>
                <p class="mt-1 mb-0" style="color: var(--bs-primary)">
                  <template v-if="getNexTierRange">
                    {{ `${user.totalPoint} / ${getNexTierRange}` }}
                  </template>
                  <template v-else>
                    {{ user.totalPoint }}
                  </template>
                  <i class="fa-solid fa-bread-slice ms-2"></i>
                </p>
              </div>
              <div>
                <img
                  v-if="translate(user.tier) === translate('Mini Bakers')"
                  src="/assets/member tiers/vip1.png"
                  style="width: 60px; height: 60px; margin-top: 0px"
                />
                <img
                  v-else-if="
                    translate(user.tier) === translate('Rising Bakers')
                  "
                  src="/assets/member tiers/vip2.png"
                  style="width: 60px; height: 60px; margin-top: 0px"
                />
                <img
                  v-else-if="translate(user.tier) === translate('Pro Bakers')"
                  src="/assets/member tiers/vip3.png"
                  style="width: 60px; height: 60px; margin-top: 0px"
                />
                <img
                  v-else-if="
                    translate(user.tier) === translate('Master Bakers')
                  "
                  src="/assets/member tiers/vip4.png"
                  style="width: 60px; height: 60px; margin-top: 0px"
                />
              </div>
            </router-link>
            <router-link
              :to="{ name: 'Rewards' }"
              class="right w-50"
              style="
                border-left: 1px solid var(--bs-border-color);
                padding-left: 10px;
              "
            >
              <h6 class="card-title mb-0">{{ translate("Points") }}</h6>
              <p class="mt-1 mb-0" style="color: var(--bs-primary)">
                {{ user.totalPoint }} {{ translate("buns") }}
                <i class="fa-solid fa-chevron-right ms-2"></i>
              </p>
            </router-link>
          </div>
        </div>

        <!-- Invite Friends & Check In - Alt Design -->
        <div class="row g-2 mb-4">
          <div class="col-6">
            <router-link
              :to="{ name: 'InviteFriends' }"
              class="alt-action-card"
            >
              <div class="alt-card-header">
                <div class="alt-icon-wrapper">
                  <img src="/assets/rewards/referral.png" alt="Share" />
                </div>
                <div class="alt-card-text">
                  <h6>{{ translate("Invite Friends") }}</h6>
                  <p>{{ translate("Share & Earn") }}</p>
                </div>
              </div>
              <div class="alt-card-actions">
                <a
                  @click.stop="copyInviteLink"
                  href="javascript:void(0);"
                  class="alt-action-btn"
                >
                  <i class="fi fi-rr-copy-alt"></i>
                </a>
                <a
                  @click.stop="shareInviteLink"
                  href="javascript:void(0);"
                  class="alt-action-btn alt-action-btn-primary"
                >
                  <i class="fi fi-rr-share"></i>
                </a>
              </div>
            </router-link>
          </div>
          <div class="col-6">
            <router-link
              :to="{ name: 'Rewards' }"
              class="alt-action-card alt-checkin-card"
            >
              <div class="alt-card-header">
                <div class="alt-icon-wrapper">
                  <img src="/assets/rewards/checkin.png" alt="Check In" />
                </div>
                <div class="alt-card-text">
                  <h6>{{ translate("Check In") }}</h6>
                  <p>{{ translate("Earn Points") }}</p>
                </div>
              </div>
              <div class="alt-card-actions">
                <span class="alt-checkin-btn">
                  {{ translate("Check In") }}
                </span>
              </div>
            </router-link>
          </div>
        </div>
      </template>

      <!-- Small Banner -->
      <div
        v-if="smallBanners && smallBanners.length > 0"
        class="small-banner-container mb-0"
        style="border-radius: 8px"
      >
        <swiper
          :centeredSlides="true"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          :loop="smallBanners.length > 1"
          :pagination="{
            clickable: true,
          }"
          :modules="[Autoplay, Pagination]"
          :lazy="true"
          class="smallBannerSwiper"
          style="
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 8px;
          "
          ><swiper-slide v-for="(banner, index) in smallBanners" :key="index">
            <div
              @click="goSmallBannerDetail(banner)"
              style="width: 100%; height: 100%"
            >
              <img
                v-if="banner.images"
                :src="banner.images[0]"
                loading="lazy"
              />
              <img v-else src="../assets/no-images.jpg" />
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div
        v-if="
          !loadingStore.isLoading &&
          (!smallBanners || smallBanners.length === 0)
        "
        class="offer-box mb-0"
        style="
          background-image: url(assets/images/svg/vector.svg);
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          align-items: center;
          padding: 15px 0 0 20px;
        "
      >
        <div class="left-content" style="flex-shrink: 0">
          <div>
            <h6 class="title">{{ translate("1st Bun RM0.99") }}</h6>
            <p class="mb-0 fw-semibold">
              *{{ translate("Limited to first-time app user") }}
            </p>
          </div>
        </div>
        <div class="dz-media" style="border-bottom-right-radius: 15px">
          <img src="/assets/images/0.99rewards.png" />
        </div>
      </div>

      <!-- from template  -->
      <!-- <div class="swiper bnr-swiper swiper-lr mb-0" style="margin: 0 -15px">
        <swiper
          :lazy="true"
          :slides-per-view="1.3"
          :space-between="5"
          class="smallBannerSwiper"
          style="padding: 0 15px"
          ><swiper-slide v-for="(banner, index) in smallBanners" :key="index">
            <div
              @click="goSmallBannerDetail(banner)"
              class="small-banner-container"
            >
              <img
                v-if="banner.images"
                :src="banner.images[0]"
                loading="lazy"
              />
              <img v-else src="../assets/no-images.jpg"  />
            </div>
          </swiper-slide>
        </swiper>
      </div> -->
    </div>

    <div
      class="container safe-area-top"
      style="
        background-color: white;
        position: relative;
        padding-bottom: calc(env(safe-area-inset-bottom) + 52px);
        overflow: hidden;
      "
    >
      <div class="footerProduct">
        <div class="order2">
          <swiper
            :style="{
              '--swiper-navigation-color': '#fff',
              '--swiper-pagination-color': '#fff',
            }"
            :thumbs="{ swiper: thumbsSwiper }"
            :modules="[FreeMode, Navigation, Thumbs]"
            :lazy="true"
            class="swiperFooterProduct"
          >
            <swiper-slide
              v-for="(allFeatureProduct, index) in allFeatureProducts"
              :key="index"
            >
              <div class="row g-1">
                <div v-if="allFeatureProduct.length === 0">
                  <p style="height: 300px; text-align: center">Not Found</p>
                </div>
                <div
                  v-for="(product, index) in allFeatureProduct"
                  :key="index"
                  class="col-6"
                >
                  <ProductCard :product="product" />
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>

        <div class="order1">
          <swiper
            @swiper="setThumbsSwiper"
            :slidesPerView="'auto'"
            :spaceBetween="10"
            :freeMode="true"
            :watchSlidesProgress="true"
            :modules="[FreeMode, Navigation, Thumbs]"
            class="swiperFooterPagination"
          >
            <swiper-slide v-for="(tab, index) in tabs" :key="index">
              {{ tab }}</swiper-slide
            >
          </swiper>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.safe-area-top {
  top: env(safe-area-inset-top, 0);
}

.footerProduct {
  width: 100%;
  display: flex;
  flex-direction: column;

  .order2 {
    order: 2;
  }
  .order1 {
    order: 1;
  }
  .swiperFooterPagination {
    margin-left: -16px;
    padding-left: 16px;
    margin-right: -16px;
    margin-bottom: 10px;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.05);
    border-top: 1px solid #e2e2e2;
    border-bottom: 1px solid #e2e2e2;
    .swiper-slide {
      height: 41px;
      width: auto;
      font-size: 14px;
      font-weight: 500;
      color: var(--bs-body-color);
      position: relative;
      padding: 10px;
      margin: 0 !important;
      cursor: pointer;

      &.swiper-slide-thumb-active {
        color: var(--bs-primary);
        font-weight: 700;
        &:after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 3px;
          background-color: var(--bs-primary);
          transition: all 0.2s;
        }
      }
      // display: inline;
    }
  }
}

.bannerSwiper {
  position: relative;
  padding-top: calc(640 / 800 * 100%);
  height: 0;
  background-color: #f5e6cb;
  .swiper-wrapper {
    height: 100%;
  }
  .bannerBox {
    display: block;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
}
.card {
  .card-title {
    font-weight: 800;
  }

  img {
    //margin-top: -40px;
    height: 100px;
  }
}

.action-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  text-decoration: none;
  color: inherit;
  background: #ede0c5;
  border: none;
  border-radius: 12px;
  padding: 30px 10px 10px;
  cursor: pointer;
  height: 100%;
  position: relative;

  .action-icon-circle {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #ede0c5;
    border: 2px solid var(--bs-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -25px;
    left: 50%;
    transform: translateX(-50%);

    img {
      width: 34px;
      height: 34px;
      object-fit: contain;
    }
  }

  h6 {
    font-weight: 700;
    font-size: 12px;
    margin-bottom: 2px;
    color: var(--bs-primary);
  }

  p {
    font-size: 12px;
    font-weight: 700;
    color: #333;
    margin-bottom: 4px;
  }

  .actions {
    display: flex;
    gap: 10px;
    justify-content: center;
  }

  .btn-icon {
    background: #75342c;
    border-color: #75342c;
    color: #fff;
    font-size: 12px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

/* Alt Design */
.alt-action-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #fff;
  border-radius: 16px;
  padding: 30px 14px 14px;
  height: 100%;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(117, 52, 44, 0.1);
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  position: relative;

  &:active {
    transform: scale(0.97);
  }

  .alt-card-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    margin-bottom: 12px;
  }

  .alt-icon-wrapper {
    position: absolute;
    top: -32px;
    left: 50%;
    transform: translateX(-50%);

    img {
      width: 62px;
      height: 62px;
      object-fit: contain;
    }
  }

  .alt-card-text {
    text-align: center;

    h6 {
      font-weight: 700;
      font-size: 13px;
      margin-bottom: 1px;
      color: #333;
    }

    p {
      font-size: 11px;
      font-weight: 500;
      color: #999;
      margin-bottom: 0;
    }
  }

  .alt-card-actions {
    display: flex;
    gap: 8px;
    justify-content: center;
  }

  .alt-action-btn {
    width: 42px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-weight: 600;
    text-decoration: none;
    color: #75342c;
    background: #f5ead6;
    border: none;
    cursor: pointer;
    transition: background 0.2s;

    i {
      font-size: 16px;
    }

    &.alt-action-btn-primary {
      background: #75342c;
      color: #fff;
    }
  }

  .alt-checkin-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    width: 100%;
    padding: 7px 0;
    border-radius: 50px;
    font-size: 12px;
    font-weight: 600;
    background: linear-gradient(135deg, #75342c, #a0524a);
    color: #fff;
  }
}

.small-banner-container {
  width: 100%;
  padding-top: calc(1 / 3 * 100%);
  // padding-top: calc(5 / 16 * 100%);
  position: relative;
  overflow: hidden;
  background-color: #f5e6cb;

  img {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    object-position: left;
  }
}
</style>
