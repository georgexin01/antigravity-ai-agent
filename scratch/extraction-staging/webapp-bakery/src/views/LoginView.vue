<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useUserStore } from "../stores/user";
import { useLoadingStore } from "../stores/loading";
import { setStorageData } from "../utils/capacitor/localstorage";
import { StorageKeys } from "../types/localStorageType";

const phoneNo = ref("");
const errorMessage = ref("");
const router = useRouter();
const route = useRoute();
const loadingStore = useLoadingStore();
const userStore = useUserStore();
const phoneRegex = /^(01\d{8,9}|65\d{8})$/;

onMounted(() => {
  if (route.query.phoneNo) {
    setStorageData(StorageKeys.ReferralId, route.query.phoneNo);
  }
});

watch(phoneNo, (newValue) => {
  const cleaned = newValue.replace(/[^\d]/g, "").slice(0, 12);
  phoneNo.value = cleaned;

  if (!phoneRegex.test(cleaned)) {
    errorMessage.value =
      "Please enter a valid phone number: Malaysia (01...) or Singapore (65...)";
  } else {
    errorMessage.value = "";
  }
});

// updated at 30032026
const handleSubmit = async (method: "sms" | "whatsapp") => {
  const cleanedPhone = phoneNo.value;

  if (!phoneRegex.test(cleanedPhone)) {
    errorMessage.value =
      "Please enter a valid phone number: Malaysia (01...) or Singapore (65...)";
    return;
  }

  errorMessage.value = "";

  userStore.phoneNo = cleanedPhone;
  userStore.otpMethod = method;

  router.push({
    name: "OTP",
    query: { redirect: route.query.redirect },
  });
};

// original
// const handleSubmit = async (method: "sms" | "whatsapp") => {
//   const cleanedPhone = phoneNo.value;

//   if (!phoneRegex.test(cleanedPhone)) {
//     errorMessage.value =
//       "Please enter a valid phone number: Malaysia (01...) or Singapore (65...)";
//     return;
//   }

//   errorMessage.value = "";
//   loadingStore.startLoading();

//   try {
//     userStore.otpMethod = method;
//     if (method === "sms") {
//       await userStore.sendOTP(cleanedPhone);
//     } else if (method === "whatsapp") {
//       await userStore.sendWhatsappOTP(cleanedPhone);
//     }

//     userStore.phoneNo = cleanedPhone;
//     router.push({
//       name: "OTP",
//       query: { redirect: route.query.redirect },
//     });
//   } catch (error: any) {
//     console.error("Failed to send OTP:", error);
//     toast.error("Failed to send OTP: " + error.message);
//   } finally {
//     loadingStore.stopLoading();
//   }
// };
</script>

<template>
  <main class="page-content">
    <div class="container" style="height: calc(-67px + 100vh)">
      <div
        class="dz-authentication-area dz-flex-box"
        style="justify-content: center"
      >
        <div class="account-section">
          <div
            style="
              width: 150px;
              height: 150px;
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 0 auto;
            "
          >
            <img src="/assets/images/app-logo/logo.png" alt="" />
          </div>
          <form @submit.prevent>
            <div class="form-group">
              <label
                for="FormControlInput2"
                class="form-label d-flex align-items-center justify-content-center"
                >Enter your phone number</label
              >
              <input
                type="text"
                v-model="phoneNo"
                class="form-control"
                placeholder="Phone Number"
              />
              <p
                v-if="errorMessage"
                class="text-danger"
                style="margin-top: 4px"
              >
                {{ errorMessage }}
              </p>
            </div>

            <button
              @click="handleSubmit('whatsapp')"
              :disabled="loadingStore.isLoading"
              type="button"
              class="btn style-2 btn-primary w-100 btn-sm"
              style="justify-content: center"
            >
              <span>Send OTP</span>
            </button>

            <!-- <div class="dz-saprate text-lowercase mbf-3">
              <span>receive 4-digit code via</span>
            </div> 

            <button
              @click="handleSubmit('sms')"
              :disabled="loadingStore.isLoading"
              type="button"
              class="btn style-2 btn-primary w-100 btn-sm"
              style="justify-content: center"
            >
              <span class="btn-icon"
                ><i class="fa-regular fa-message"></i
              ></span>
              <span>SMS</span>
            </button>

            <button
              @click="handleSubmit('whatsapp')"
              :disabled="loadingStore.isLoading"
              type="button"
              class="btn style-2 w-100 btn-sm mt-2"
              style="
                justify-content: center;
                background-color: #25d366;
                color: white;
              "
            >
              <span class="btn-icon"
                ><i class="fa-brands fa-whatsapp fs-5"></i
              ></span>
              <span>WHATSAPP</span>
            </button>
            -->

            <div class="mt-3">
              <label class="form-check-label" for="flexCheckDefault"
                >By Logging in or registering, you agree to our
                <span class="text-primary"
                  >Terms of Service, Privacy Policy</span
                >
                and
                <span class="text-primary"
                  >Personal Data Protection Policy</span
                ></label
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.form-label {
  color: var(--bs-primary);
}
</style>
