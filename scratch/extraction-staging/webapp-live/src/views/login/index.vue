<script setup lang="ts">
// 1. Imports
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore, useUiStore } from '@/stores';

// 3. Stores
const authStore = useAuthStore();
const uiStore = useUiStore();
const router = useRouter();

// 4. Local State
const email = ref<string>('agent1@quizlaa.com');
const password = ref<string>('123456'); 
const showPassword = ref<boolean>(false);
const loading = ref<boolean>(false);
const error = ref<string>('');

// 6. Functions / Handlers
async function handleLogin(): Promise<void> {
  if (loading.value) return;
  loading.value = true;
  error.value = '';
  try {
    await authStore.login({
      email: email.value,
      password: password.value,
    });
    
    // Success Toast
    uiStore.addToast(
      'Access Granted',
      'System identity verified. Welcome back to LAA Training.',
      'success'
    );
    
    // 🧭 Navigate to Dashboard
    router.push('/');
  } catch (e: unknown) {
    const errorMsg = e instanceof Error ? e.message : 'Verification failed. Please check your credentials.';
    error.value = errorMsg;
    
    // Error Toast
    uiStore.addToast(
      'Access Denied',
      errorMsg,
      'error'
    );
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div class="flex flex-col min-h-screen bg-white dark:bg-[#0a0b10]">
    <div class="h-12 w-full"></div>

    <div class="flex flex-col items-center justify-center px-4 py-10">
      <div class="w-24 h-24 mb-6 flex items-center justify-center rounded-2xl bg-primary/10 shadow-xl shadow-primary/5">
        <span class="material-symbols-outlined text-primary text-5xl" style="font-variation-settings: 'FILL' 1">security</span>
      </div>
      <h1 class="text-[#0a0b10] dark:text-white text-3xl font-bold tracking-tight">LAA Sovereign</h1>
      <p class="text-[#6b7280] dark:text-gray-400 text-sm mt-2 font-medium">Secure Agent Portal V2.0</p>
    </div>

    <div class="flex items-center px-8 pb-4">
      <h2 class="text-[#0a0b10] dark:text-white text-xl font-bold leading-tight">Identity Verification</h2>
    </div>

    <div data-nosnippet="" class="flex flex-col gap-1 px-6">
      <form autocomplete="off" @submit.prevent="handleLogin">
        <div class="flex flex-col w-full py-3">
          <label class="flex flex-col w-full">
            <p class="text-[#374151] dark:text-gray-300 text-xs font-bold uppercase tracking-wider pb-2 ml-1">Agent Credentials</p>
            <input
              v-model="email"
              class="form-input flex w-full border border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-white/5 rounded-xl h-14 placeholder:text-gray-400 p-4 text-base font-medium focus:ring-2 focus:ring-primary/50 focus:bg-white dark:focus:bg-white/10 transition-all outline-none"
              placeholder="Enter Agent Email"
              type="email"
              autocomplete="off"
            />
          </label>
        </div>
        <div class="flex flex-col w-full py-3">
          <label class="flex flex-col w-full">
            <p class="text-[#374151] dark:text-gray-300 text-xs font-bold uppercase tracking-wider pb-2 ml-1">Access Password</p>
            <div class="relative flex w-full items-stretch">
              <input
                v-model="password"
                class="form-input flex w-full border border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-white/5 rounded-xl h-14 placeholder:text-gray-400 p-4 text-base font-medium focus:ring-2 focus:ring-primary/50 focus:bg-white dark:focus:bg-white/10 transition-all outline-none"
                placeholder="••••••••"
                :type="showPassword ? 'text' : 'password'"
                autocomplete="off"
              />
              <div
                class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer p-2 hover:text-primary transition-colors"
                @click="showPassword = !showPassword"
              >
                <span class="material-symbols-outlined text-xl">{{ showPassword ? 'visibility_off' : 'visibility' }}</span>
              </div>
            </div>
          </label>
        </div>

        <div v-if="error" class="px-2 mt-2">
          <div class="flex items-center gap-2 text-red-500 bg-red-500/10 p-3 rounded-lg border border-red-500/20">
            <span class="material-symbols-outlined text-lg">error</span>
            <p class="text-xs font-bold">{{ error }}</p>
          </div>
        </div>

        <div class="flex justify-end py-3">
          <button type="button" class="text-primary text-xs font-bold hover:underline tracking-tight">Recover Identity</button>
        </div>

        <div class="flex py-8">
          <button
            type="submit"
            :disabled="loading"
            class="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-5 bg-primary text-white text-base font-bold leading-normal tracking-wide shadow-xl shadow-primary/30 active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <span class="truncate">{{ loading ? 'Verifying Identity...' : 'Authorize Login' }}</span>
          </button>
        </div>
      </form>
    </div>

    <div class="mt-auto pb-12 flex flex-col items-center gap-4">
      <div class="flex items-center gap-3 w-full px-16">
        <div class="h-[1px] flex-1 bg-gray-100 dark:bg-white/5"></div>
        <span class="text-[10px] font-black text-gray-300 dark:text-gray-600 uppercase tracking-[0.2em]">LAA Sovereign OS</span>
        <div class="h-[1px] flex-1 bg-gray-100 dark:bg-white/5"></div>
      </div>
      <p class="text-gray-400 text-xs font-medium">New Agent?<button class="text-primary font-bold ml-1 hover:underline">Request Access</button></p>
    </div>
    <div class="h-8 w-full"></div>
  </div>
</template>
