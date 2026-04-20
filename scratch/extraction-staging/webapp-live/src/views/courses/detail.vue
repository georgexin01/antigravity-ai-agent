<script setup lang="ts">
// 1. Imports
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { useAuthStore, useLessonsStore } from '@/stores';
import AppImage from '@/components/AppImage.vue';

// 2. Define (Props/Emits)
// None for this page

// 3. Stores
const authStore = useAuthStore();
const lessonsStore = useLessonsStore();
const route = useRoute();
const router = useRouter();

// 4. Local State
const loading = ref<boolean>(true);

// 5. Lifecycle Hooks
onMounted(async () => {
  const id = route.params.id as string;
  try {
    if (!authStore.user?.id) {
      await authStore.fetchUser();
    }
    const course = await lessonsStore.getDetail(id, authStore.user?.id);
    if (!course) {
      router.replace('/courses');
      return;
    }
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error('Failed to load course details:', msg);
    router.replace('/courses');
  } finally {
    loading.value = false;
  }
});

// 6. Functions / Handlers
function handleVideoClick(): void {
  router.push(`/courses/${route.params.id}/video`);
}

function handleBack(): void {
  router.push('/courses');
}
</script>

<template>
  <div v-if="!loading && lessonsStore.currentCourse" class="flex flex-col min-h-screen bg-white">
    <!-- Header -->
    <header class="sticky top-0 z-50 flex items-center bg-white/80 backdrop-blur-md p-3 pb-1.5 justify-between border-b border-gray-100">
      <button @click="handleBack" class="flex size-9 shrink-0 items-center">
        <span class="material-symbols-outlined text-slate-800 text-lg font-bold">arrow_back_ios</span>
      </button>
      <h2 class="text-gray-900 text-base font-bold flex-1 text-center pr-9">Course Details</h2>
    </header>

    <main class="flex-1 overflow-y-auto pb-44">
      <!-- Banner -->
      <div class="px-5 py-3">
        <div class="relative rounded-2xl overflow-hidden aspect-[16/9] shadow-xl">
          <AppImage
            :src="lessonsStore.currentCourse.image"
            :alt="lessonsStore.currentCourse.title"
            customClass="w-full h-full"
          />
          <div class="absolute bottom-3.5 left-3.5 bg-primary px-2.5 py-0.5 rounded-lg text-[9px] font-extrabold uppercase tracking-widest text-white shadow-lg">
             COURSE MODULE
          </div>
        </div>
      </div>

      <!-- Text Section -->
      <div class="px-6 text-center space-y-1.5">
        <h1 class="text-xl font-extrabold text-slate-900 leading-tight">{{ lessonsStore.currentCourse.title }} Scripts</h1>
        <p class="text-slate-500 text-[9px] leading-relaxed px-2 font-medium mb-[10px] pb-[10px]">
          {{ lessonsStore.currentCourse.description }}. Master core competitive advantages, improve deal closure through practical simulation, and reach new career heights.
        </p>
      </div>

      <!-- Stats Grid -->
      <div class="flex gap-3 px-5 py-4.5">
        <div class="flex-1 bg-gray-50 rounded-2xl p-4 flex flex-col items-center justify-center space-y-1.5 ios-shadow border border-gray-100">
          <span class="material-symbols-outlined text-primary text-xl" style="font-variation-settings: 'FILL' 1">schedule</span>
          <p class="text-gray-400 text-[9px] font-bold uppercase tracking-widest">Est. Time</p>
          <p class="text-base font-extrabold">15 min</p>
        </div>
        <div class="flex-1 bg-gray-50 rounded-2xl p-4 flex flex-col items-center justify-center space-y-1.5 ios-shadow border border-gray-100">
          <span class="material-symbols-outlined text-primary text-xl" style="font-variation-settings: 'FILL' 1">quiz</span>
          <p class="text-gray-400 text-[9px] font-bold uppercase tracking-widest">Questions</p>
          <p class="text-base font-extrabold">{{ lessonsStore.currentCourse.questionsCount }} Qs</p>
        </div>
      </div>

      <!-- Steps List -->
      <div class="px-5 space-y-2.5 mt-5">
        <div class="flex items-center gap-3">
          <div class="size-7 rounded-full bg-primary text-white flex items-center justify-center text-[11px] font-bold shrink-0 shadow-lg shadow-primary/20">1</div>
          <div class="flex-1 bg-white border border-gray-100 p-3.5 rounded-2xl flex items-center justify-between ios-shadow active:scale-[0.99] transition-transform">
            <span class="font-bold text-[13px] text-slate-800 tracking-tight">Watch Training Video</span>
            <span class="material-symbols-outlined text-primary text-xl" style="font-variation-settings: 'FILL' 1">play_circle</span>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="fixed bottom-0 w-full max-w-[480px] p-4 bg-white/95 backdrop-blur-xl border-t border-gray-100 space-y-2.5 z-30 shadow-[0_-4px_12px_rgba(0,0,0,0.03)] pb-5">
      <button
        @click="handleVideoClick"
        class="w-full bg-primary text-white font-extrabold h-12 rounded-2xl shadow-xl shadow-primary/20 flex items-center justify-center gap-2.5 active:scale-95 transition-all"
      >
        <span class="material-symbols-outlined text-lg">play_arrow</span>
        <span class="text-sm font-bold">Start Video Lesson</span>
      </button>
      <div class="flex justify-center items-center gap-2 pt-0.5">
        <div class="size-3.5 bg-primary/20 flex items-center justify-center rounded-[3px]">
          <span class="text-[7px] font-bold text-primary">LAA</span>
        </div>
        <span class="text-[9px] text-gray-400 uppercase tracking-widest font-bold">LAA Training</span>
      </div>
    </footer>
  </div>
</template>
