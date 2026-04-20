<script setup lang="ts">
import TheToast from '@/components/TheToast.vue';
</script>

<template>
  <div class="flex justify-center min-h-screen bg-[#0a0b10]">
    <!-- Premium Toast Layer -->
    <TheToast />

    <div class="w-full max-w-[480px] bg-white dark:bg-[#111111] min-h-screen relative flex flex-col shadow-2xl overflow-x-hidden">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
