<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, FreeMode, Thumbs } from "swiper/modules";

import "swiper/swiper-bundle.css";
import { useCartStore } from "../stores/cart";
import { useOutletStore } from "../stores/outlet";
import { useLocale } from "../utils/locale";
import { useCategoryStore } from "../stores/category";
import { Category } from "../model/categoryResponse";
import { useProductStore } from "../stores/product";
import { ProductWithPromotion } from "../model/productResponse";
import { useLoadingStore } from "../stores/loading";
import ProductCard from "../components/ProductCard.vue";
// import { isApp } from "../utils/capacitor";
import { useAddressStore } from "../stores/address";
import { ShippingType } from "../model/orderResponse";
import { useUserStore } from "../stores/user";

const { translate, currentLanguageIndex } = useLocale();

const outletStore = useOutletStore();
const categoryStore = useCategoryStore();
const productStore = useProductStore();
const loadingStore = useLoadingStore();
const cartStore = useCartStore();
const addressStore = useAddressStore();
const categories = ref<Category[]>([]);

const modules = ref([FreeMode, Navigation, Thumbs]);
const thumbsSwiper = ref(null);
const mainSwiper = ref<any>(null);

const setThumbsSwiper = (swiper: any) => {
  thumbsSwiper.value = swiper;
};

// Whenever the user scrolls, the position is stored in sessionStorage
const saveScrollPosition = () => {
  if (mainSwiper.value) {
    sessionStorage.setItem(
      "productsScroll",
      mainSwiper.value.translate.toString(),
    );
  }
};

// When coming back, the scroll position is restored instantly with setTranslate.
const restoreScrollPosition = () => {
  const saved = sessionStorage.getItem("productsScroll");
  if (saved && mainSwiper.value) {
    mainSwiper.value.setTranslate(parseFloat(saved), 0); // 0ms animation
  }
};

// When Swiper initializes, onSwiperInit saves the instance and restores the last saved translate value.
const onSwiperInit = (swiper: any) => {
  mainSwiper.value = swiper;
  restoreScrollPosition();
};

onMounted(async () => {
  try {
    loadingStore.startLoading();
    const [categoryResponse, productResponse] = await Promise.all([
      categoryStore.getCategories(),
      productStore.getProducts(),
      addressStore.loadCurrentAddress(addressStore.selectedAddress?.addressId),
    ]);

    if (categoryResponse) {
      categories.value = categoryResponse;
    }

    if (productResponse) {
      await cartStore.updateCartWithLatestProducts(productResponse);
    }
  } catch (error) {
    console.error("Error fetching data", error);
  } finally {
    loadingStore.stopLoading();
  }
});

onBeforeUnmount(() => {
  saveScrollPosition();
});

const filteredCategories = computed(() => {
  return categories.value;
});

// Method to filter products by categoryId
const filteredProducts = (categoryId: number) => {
  return productStore.products
    .filter((product: ProductWithPromotion) => {
      if (product.categoryId !== categoryId) return false;

      return true;
    })
    .sort(
      (a: ProductWithPromotion, b: ProductWithPromotion) => a.sort - b.sort,
    ); // sort ASC by `sort` field;
};

const totalPrice = computed(() => {
  return cartStore.products.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
});

const totalQty = computed(() => {
  return cartStore.products.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
});

const getCategoryIcon = (path: string) => {
  // import defaultUserLogo from "@/assets/profile.png";

  return `/assets/icons/category/${path}.png`;
};
</script>

<template>
  <main class="page-content space-bottom">
    <div class="container p-0 heightNoIncludeFooter safe-area-top">
      <div class="header py-3 pt-3">
        <!-- Row 1: Outlet + Search icon -->
        <div class="menu-header-top">
          <router-link
            :to="{ name: 'SelectOutlet' }"
            class="menu-header-row"
            style="flex: 1; min-width: 0"
          >
            <i class="fi fi-sr-store-alt menu-header-icon"></i>
            <span class="menu-header-label">{{
              cartStore.shippingType === ShippingType.DELIVERY
                ? translate("Served By")
                : translate("Pickup At")
            }}</span>
            <span class="menu-header-value text-ellipsis">{{
              outletStore.selectedOutlet?.name
            }}</span>
            <i class="fi fi-rr-angle-small-right menu-header-arrow"></i>
          </router-link>
          <router-link :to="{ name: 'Search' }" class="menu-search-btn">
            <i class="fi fi-rr-search"></i>
          </router-link>
        </div>

        <!-- Row 2: Address (delivery only) -->
        <router-link
          v-if="
            cartStore.shippingType === ShippingType.DELIVERY &&
            useUserStore().isLogin
          "
          :to="{ name: 'Address' }"
          class="menu-header-row mt-2"
        >
          <i class="fi fi-sr-marker menu-header-icon"></i>
          <span class="menu-header-label">{{ translate("Deliver To") }}</span>
          <span class="menu-header-value text-ellipsis">{{
            addressStore.selectedAddress?.label || translate("Select address")
          }}</span>
          <i class="fi fi-rr-angle-small-right menu-header-arrow"></i>
        </router-link>
      </div>

      <!--
      ORIGINAL HEADER (kept for reference):
      <div class="header">
        <div
          class="btn-group btn-group-sm w-100 my-3"
          role="group"
          aria-label="Small button group"
        >
          <router-link
            v-if="
              cartStore.shippingType === ShippingType.DELIVERY &&
              useUserStore().isLogin
            "
            :to="{ name: 'Address' }"
            class="btn btn-outline-primary d-flex justify-content-center align-items-center gap-1"
            style="
              border-top-left-radius: 50rem;
              border-bottom-left-radius: 50rem;
              width: calc(100% - 106px);
            "
          >
            <i class="fi fi-sr-marker"></i>
            <span class="text-ellipsis text-start">{{
              addressStore.selectedAddress?.label
            }}</span>
          </router-link>
          <router-link
            v-else
            :to="{ name: 'SelectOutlet' }"
            class="btn btn-outline-primary d-flex justify-content-center align-items-center gap-1"
            style="
              border-top-left-radius: 50rem;
              border-bottom-left-radius: 50rem;
              width: calc(100% - 106px);
            "
          >
            <i class="fi fi-sr-marker"></i>
            {{ outletStore.selectedOutlet?.name }}
          </router-link>
          <router-link
            :to="{ name: 'Search' }"
            class="btn btn-primary"
            style="
              border-top-right-radius: 50rem;
              border-bottom-right-radius: 50rem;
            "
          >
            {{ translate("Search Menu") }}
          </router-link>
        </div>
      </div>
      -->

      <!-- categories & products -->
      <div
        v-if="filteredCategories.length > 0 && productStore.products.length > 0"
        class="grid"
      >
        <swiper
          @swiper="onSwiperInit"
          @touchEnd="saveScrollPosition"
          @slideChangeTransitionEnd="saveScrollPosition"
          :direction="'vertical'"
          :slidesPerView="'auto'"
          :freeMode="true"
          :thumbs="{ swiper: thumbsSwiper }"
          :modules="modules"
          :lazy="true"
          :class="{ gotCart: cartStore.products.length > 0 }"
          class="swiperProducts"
        >
          <swiper-slide
            v-for="(category, index) in filteredCategories"
            :key="index"
          >
            <h6 class="categoryName">
              {{ category.name[currentLanguageIndex] }}
            </h6>
            <div class="row g-1">
              <div
                v-for="(product, index) in filteredProducts(
                  category.categoryId,
                )"
                :key="index"
                class="col-6"
              >
                <ProductCard :product="product" />
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div style="height: 200px"></div>
          </swiper-slide>
        </swiper>

        <swiper
          @swiper="setThumbsSwiper"
          :direction="'vertical'"
          :slidesPerView="'auto'"
          :freeMode="true"
          :watchSlidesProgress="true"
          :modules="modules"
          :spaceBetween="10"
          :class="{ gotCart: cartStore.products.length > 0 }"
          class="swiperPagination"
        >
          <swiper-slide
            v-for="(category, index) in filteredCategories"
            :key="index"
          >
            <!-- <i class="fa-solid fa-bread-slice"></i> -->
            <img
              v-if="category.images && category.images.length > 0"
              :src="category.images[0]"
              style="width: 40px; margin: auto"
            />
            <img
              v-else
              :src="getCategoryIcon(category.iconName)"
              style="width: 40px; margin: auto"
            />
            <span>{{ category.name[currentLanguageIndex] }}</span>
          </swiper-slide>
          <swiper-slide>
            <div style="height: 50px"></div>
          </swiper-slide>
        </swiper>
      </div>

      <!-- Cart Detail  -->
      <div v-if="cartStore.products.length > 0" class="cartDetail">
        <div
          class="container d-flex align-items-center justify-content-between py-2 px-3"
          style="padding: 0"
        >
          <div class="left">
            <span style="font-size: 10px">{{
              translate("Price Estimation")
            }}</span>
            <h5 class="mb-0" style="font-weight: 700">
              RM{{ totalPrice.toFixed(2) }}
            </h5>
          </div>
          <div class="right">
            <router-link
              :to="{ name: 'Cart' }"
              type="button"
              class="btn rounded-pill btn-primary btn-sm w-100 me-3"
              style="position: relative"
            >
              {{ translate("Order Now") }}
              <span class="redDot">{{ totalQty }}</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.safe-area-top {
  position: relative;
  top: env(safe-area-inset-top, 0);
}

$height: calc(100vh - 69px - 52px - env(safe-area-inset-top, 0));
$heightNotIncludeFooter: calc(100vh - 52px);
// 69px header
// 50px is the addToCar info
// 52px footer

.page-content.space-bottom {
  padding-bottom: 52px;
}
.heightNoIncludeFooter {
  height: $heightNotIncludeFooter;
}
.cartDetail {
  position: fixed;
  bottom: calc(env(safe-area-inset-bottom) + 52px);
  left: 0;
  right: 0;
  height: 52px;
  border-top: 1px solid var(--bs-border-color);
  z-index: 99;
  background-color: white;
}

.redDot {
  position: absolute;
  top: 0;
  right: 0;
  width: 12px;
  height: 12px;
  background-color: red;
  border-radius: 50px;
  font-size: 8px;
  line-height: 1.6;
}

.grid {
  display: grid;
  grid-template-columns: 80px 1fr;
}
.swiperProducts {
  padding: 0.25rem;
  order: 2;
  height: $height;
  width: 100%;
  &.gotCart {
    height: calc(#{$height} - 52px);
  }
  .swiper-slide {
    height: auto;
    width: 100%;
    position: relative;
    margin-bottom: 0.25rem;
  }
}
.swiperPagination {
  order: 1;
  width: 80px;
  height: $height;
  &.gotCart {
    height: calc(#{$height} - 52px);
  }
  text-align: center;
  line-height: 1.2;
  border-right: 2px solid #eeeeee;

  .swiper-slide {
    padding: 2px;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 8px;
    cursor: pointer;
    &.swiper-slide-thumb-active {
      color: var(--bs-primary);
      font-weight: 700;
    }

    i {
      font-size: 14px;
      display: block;
      margin-bottom: 6px;
    }
  }
}

.categoryName {
  border-left: 3px solid #74362d;
  margin-top: 20px;
  padding-left: 4px;
  font-weight: 800;
}

/* Menu header styles */
.menu-header-info {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 10px;
}

.menu-header-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  height: 38px;
  background: #f8f8f8;
  border-radius: 10px;
  text-decoration: none;
  color: inherit;
  transition: background 0.2s;
}

.menu-header-row:active {
  background: #f0f0f0;
}

.menu-header-icon {
  font-size: 14px;
  color: var(--bs-primary);
  flex-shrink: 0;
}

.menu-header-label {
  font-size: 11px;
  color: #999;
  flex-shrink: 0;
  white-space: nowrap;
}

.menu-header-value {
  font-size: 13px;
  font-weight: 600;
  flex: 1;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.menu-header-arrow {
  font-size: 14px;
  color: #ccc;
  flex-shrink: 0;
}

.menu-header-top {
  display: flex;
  align-items: center;
  gap: 8px;
}

.menu-search-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: var(--bs-primary);
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  flex-shrink: 0;
  transition: opacity 0.2s;
}

.menu-search-btn:active {
  opacity: 0.8;
}
</style>
