<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useLocale } from "../utils/locale";
import { useUserStore } from "../stores/user";
import { User } from "../model/userResponse";
import { useLoadingStore } from "../stores/loading";
import userlogo from "../assets/avatar.jpeg";
import { useSettingStore } from "../stores/setting";
import { Setting } from "../model/settingResponse";

const { translate, changeLocale, locale } = useLocale();

const user = ref<User>();
const setting = ref<Setting>();

const userStore = useUserStore();
const settingStore = useSettingStore();
const loadingStore = useLoadingStore();

const userLogo = ref("");

onMounted(async () => {
  try {
    loadingStore.startLoading();
    const [userResponse, settingResponse] = await Promise.all([
      userStore.getUser(),
      settingStore.getSetting(),
    ]);
    setting.value = settingResponse;
    userLogo.value = userResponse.avatar ?? userlogo; // Update user logo based on API response
    user.value = userResponse;
  } catch (error) {
    console.error("Error fetching user:", error);
    // Display error message to user or handle it further
  } finally {
    loadingStore.stopLoading();
  }
});

// vip naming
// 1. mini bakers
// 2. rising bakers
// 3. pro bakers
// 4. master bakers

// Computed property to map language code to a friendly name
const currentLanguageName = computed(() => {
  switch (locale.value) {
    case "gb":
      return "English";
    case "cn":
      return "中文";
    default:
      return "Unknown Language";
  }
});

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

const deleteAccount = async () => {
  try {
    loadingStore.startLoading();
    await userStore.deleteAccount();
  } catch (error) {
    console.error("Delete account error:", error);
  } finally {
    loadingStore.stopLoading();
  }
};

const logout = () => {
  userStore.logOut();
};
</script>

<template>
  <main v-if="user" class="page-content space-top space-bottom">
    <div class="container safe-area-container">
      <div class="profile-area">
        <div class="main-profile d-flex align-items-center">
          <!-- Profile Info -->
          <router-link :to="{ name: 'EditProfile' }" class="edit-profile">
            <div class="profile-image m-0">
              <div class="avatar-upload">
                <div class="avatar-preview">
                  <div
                    id="imagePreview"
                    :style="`background-image: url(${userLogo})`"
                  ></div>
                  <div class="change-btn">
                    <input
                      type="file"
                      class="form-control d-none"
                      id="imageUpload"
                      accept=".png, .jpg, .jpeg"
                    />
                    <label for="imageUpload">
                      <i class="fi fi-rr-pencil"></i>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </router-link>
          <div style="color: var(--bs-primary)">
            <h6 class="mb-1" style="font-weight: 800">{{ user.name }}</h6>
            <p class="mb-0">
              {{ user.phoneNo }}
            </p>
          </div>
        </div>

        <!-- Point & Tier -->
        <div class="card" style="margin-bottom: 20px">
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
                  alt=""
                  style="width: 60px; height: 60px; margin-top: 0px"
                />
                <img
                  v-else-if="
                    translate(user.tier) === translate('Rising Bakers')
                  "
                  src="/assets/member tiers/vip2.png"
                  alt=""
                  style="width: 60px; height: 60px; margin-top: 0px"
                />
                <img
                  v-else-if="translate(user.tier) === translate('Pro Bakers')"
                  src="/assets/member tiers/vip3.png"
                  alt=""
                  style="width: 60px; height: 60px; margin-top: 0px"
                />
                <img
                  v-else-if="
                    translate(user.tier) === translate('Master Bakers')
                  "
                  src="/assets/member tiers/vip4.png"
                  alt=""
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

        <!-- Place an Order  -->
        <div class="title-bar mb-0">
          <h6 class="title">{{ translate("Place an Order") }}</h6>
        </div>
        <ul class="custom-list list-group rounded-0 gap-1">
          <router-link
            :to="{ name: 'OrderHistory' }"
            class="list-group-item border-0 px-0"
          >
            <div class="item-link">
              <div class="dz-icon">
                <i class="fa-solid fa-receipt"></i>
              </div>
              <div class="dz-inner">
                <span class="title">{{ translate("Orders") }}</span>
              </div>
            </div>
          </router-link>
          <!-- <router-link :to="{ name: 'Rewards' }" class="list-group-item border-0 px-0">
            <a href="" class="item-link">
              <div class="dz-icon">
                <i class="fa-solid fa-award"></i>
              </div>
              <div class="dz-inner">
                <span class="title">Missions & Rewards</span>
              </div>
            </a>
          </router-link> -->
        </ul>

        <!-- Rewards & Loyalty  -->
        <div class="title-bar mb-0">
          <h6 class="title">{{ translate("Rewards & Loyalty") }}</h6>
        </div>
        <ul class="custom-list list-group rounded-0 gap-1">
          <router-link
            :to="{ name: 'Vouchers' }"
            class="list-group-item border-0 px-0"
          >
            <div class="item-link">
              <div class="dz-icon">
                <i class="fa-solid fa-ticket-simple"></i>
              </div>
              <div class="dz-inner">
                <span class="title">{{ translate("My Vouchers") }}</span>
              </div>
            </div>
          </router-link>
          <router-link
            :to="{ name: 'PointTransaction' }"
            class="list-group-item border-0 px-0"
          >
            <div class="item-link">
              <div class="dz-icon">
                <i class="fa-solid fa-bread-slice"></i>
              </div>
              <div class="dz-inner">
                <span class="title">{{ translate("Point Transactions") }}</span>
              </div>
            </div>
          </router-link>
          <router-link
            :to="{ name: 'Stamps' }"
            class="list-group-item border-0 px-0"
          >
            <div class="item-link">
              <div class="dz-icon">
                <i class="fi fi-sr-paid"></i>
              </div>
              <div class="dz-inner">
                <span class="title">{{ translate("Stamps") }}</span>
              </div>
            </div>
          </router-link>
          <router-link
            :to="{ name: 'StampTransaction' }"
            class="list-group-item border-0 px-0"
          >
            <div class="item-link">
              <div class="dz-icon">
                <i class="fi fi-sr-paid"></i>
              </div>
              <div class="dz-inner">
                <span class="title">{{ translate("Stamp Transactions") }}</span>
              </div>
            </div>
          </router-link>
        </ul>

        <!-- Especially For You -->
        <div class="title-bar mb-0">
          <h6 class="title">{{ translate("Especially For You") }}</h6>
        </div>
        <ul class="custom-list list-group rounded-0 gap-1">
          <router-link
            :to="{ name: 'QRCode' }"
            class="list-group-item border-0 px-0"
          >
            <div class="item-link">
              <div class="dz-icon">
                <i class="fa-solid fa-qrcode"></i>
              </div>
              <div class="dz-inner">
                <span class="title">{{ translate("Membership QR Code") }}</span>
              </div>
            </div>
          </router-link>
          <router-link
            :to="{ name: 'InviteFriends' }"
            class="list-group-item border-0 px-0"
          >
            <div class="item-link">
              <div class="dz-icon">
                <i class="fa-solid fa-user-group"></i>
              </div>
              <div class="dz-inner">
                <span class="title">{{
                  translate("Invite Your Friends")
                }}</span>
              </div>
            </div>
          </router-link>
          <router-link
            :to="{ name: 'Gift' }"
            class="list-group-item border-0 px-0"
            v-if="false"
          >
            <div class="item-link">
              <div class="dz-icon">
                <i class="fa-solid fa-gift"></i>
              </div>
              <div class="dz-inner">
                <span class="title">{{ translate("Gifts") }}</span>
              </div>
            </div>
          </router-link>
        </ul>

        <!-- Account Settings -->
        <div class="title-bar mb-0">
          <h6 class="title">{{ translate("Account Settings") }}</h6>
        </div>
        <ul class="custom-list list-group rounded-0 gap-1">
          <li class="list-group-item border-0 px-0">
            <a
              class="item-link"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasLang"
              aria-controls="offcanvasLang"
            >
              <div class="dz-icon">
                <i class="fi fi-br-language"></i>
              </div>
              <div class="dz-inner d-flex justify-content-between w-100">
                <span class="title select-lang">{{
                  translate("Language")
                }}</span>
                <span style="font-size: 12px; margin-right: 20px">
                  {{ currentLanguageName }}
                </span>
              </div>
            </a>
          </li>
          <li class="list-group-item border-0 px-0">
            <a
              class="item-link"
              aria-controls="offcanvasLang"
              data-bs-toggle="modal"
              data-bs-target="#checkInModal"
            >
              <div class="dz-icon">
                <i class="fa fa-trash"></i>
              </div>
              <div class="dz-inner d-flex justify-content-between w-100">
                <span class="title select-lang">{{
                  translate("Delete Account")
                }}</span>
              </div>
            </a>
          </li>
          <li class="list-group-item border-0 px-0">
            <a class="item-link" aria-controls="offcanvasLang" @click="logout">
              <div class="dz-icon">
                <i class="fas fa-sign-out-alt"></i>
              </div>
              <div class="dz-inner d-flex justify-content-between w-100">
                <span class="title select-lang">{{ translate("Logout") }}</span>
              </div>
            </a>
          </li>
        </ul>
      </div>

      <!-- Copyright  -->
      <div class="copyright-section">
        <p class="copyright-text">
          {{ translate("Powered by") }} Zeta Capital Sdn Bhd (JB)
        </p>
      </div>

      <!-- Language Picker -->
      <div
        class="offcanvas offcanvas-bottom m-3 rounded-2"
        tabindex="-1"
        id="offcanvasLang"
        style="bottom: env(safe-area-inset-bottom)"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">
            {{ translate("Language") }}
          </h5>
        </div>
        <div class="offcanvas-body">
          <div class="dz-list">
            <ul class="list-group confirm-lang">
              <li class="list-group-item p-2" data-lang="English">
                <a
                  href="javascript:void(0);"
                  class="nav-link"
                  data-bs-dismiss="offcanvas"
                  :class="{ selected: locale === 'gb' }"
                  @click="changeLocale('gb')"
                >
                  <div class="dz-inner">
                    <span class="title">English</span>
                  </div>
                </a>
              </li>
              <li class="list-group-item p-2" data-lang="Chinese">
                <a
                  href="javascript:void(0);"
                  class="nav-link"
                  data-bs-dismiss="offcanvas"
                  :class="{ selected: locale === 'cn' }"
                  @click="changeLocale('cn')"
                >
                  <div class="dz-inner">
                    <span class="title">中文</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </main>
  <div
    class="modal fade"
    id="checkInModal"
    tabindex="-1"
    aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header" style="border-bottom: none">
          <h5 class="modal-title" id="exampleModalCenterTitle">
            {{ translate("Account Deletion") }}
          </h5>
        </div>
        <div class="modal-body">
          <p>
            {{
              translate(
                "Are you sure you want to delete your account? This action cannot be undone.",
              )
            }}
          </p>
          <!-- <p>{{ translate("Check-ins will restart if you skip a day.") }}</p> -->
        </div>
        <div class="modal-footer" style="border-top: none">
          <button
            type="button"
            class="btn rounded-pill btn-primary btn-sm w-100 yes-button-revert"
            data-bs-dismiss="modal"
            @click="deleteAccount"
          >
            {{ translate("Yes") }}
          </button>
          <button
            type="button"
            class="btn rounded-pill btn-primary btn-sm w-100"
            data-bs-dismiss="modal"
          >
            {{ translate("No") }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.yes-button-revert {
  background-color: white;
  color: #75342c;
}
.safe-area-container {
  top: env(safe-area-inset-top, 0);
  padding-bottom: calc(70px + env(safe-area-inset-bottom));
  position: relative;
}

.edit-profile .avatar-upload .avatar-preview {
  width: 60px;
  height: 60px;
  border: 1px solid var(--bs-border-color);
}
.edit-profile .avatar-upload .avatar-preview > #imagePreview {
  width: 58px;
  height: 58px;
}
.edit-profile .avatar-upload .change-btn {
  top: 0;
  right: 0;
  width: 20px;
  height: 20px;
  font-size: 10px;
  border: none;
  background-color: var(--bs-primary);
}
.title-bar {
  padding: 10px 0 10px 0;
  border-bottom: 1px solid var(--bs-border-color);
}
.profile-area .custom-list .list-group-item {
  border-bottom: 1px solid var(--bs-border-color) !important;
}
.card .card-title {
  font-weight: 800;
}
.dz-list .nav-link::after {
  content: none;
}
.dz-list .nav-link.selected::after {
  content: "\e83f";
  color: var(--bs-primary);
}
.copyright-section {
  padding: 20px 0;
  text-align: center;
}

.copyright-text {
  margin: 0;
  font-size: 12px;
  color: var(--bs-body-color);
  opacity: 0.7;
  font-weight: 400;
  line-height: 1.5;
}
</style>
