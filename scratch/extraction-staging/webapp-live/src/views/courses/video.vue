<script setup lang="ts">
// 1. Imports
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { useAuthStore, useLessonsStore } from '@/stores';

// 2. Define (Props/Emits)
// None for this page

// 3. Stores
const authStore = useAuthStore();
const lessonsStore = useLessonsStore();
const route = useRoute();
const router = useRouter();

// 4. Local State
const showVideoModal = ref<boolean>(false);
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
    console.error('Failed to load video details:', msg);
    router.replace('/courses');
  } finally {
    loading.value = false;
  }
});

// 6. Functions / Handlers
function handleToggleVideo(): void {
  showVideoModal.value = !showVideoModal.value;
}

function handleBack(): void {
  router.push(`/courses/${route.params.id}`);
}

function handleStartQuiz(): void {
  router.push(`/courses/${route.params.id}/quiz`);
}
</script>

<template>
  <div v-if="!loading && lessonsStore.currentCourse" class="flex flex-col min-h-screen bg-white">
    <!-- Header -->
    <header class="sticky top-0 z-50 flex items-center bg-white/80 backdrop-blur-md p-3 pb-1.5 justify-between border-b border-gray-100">
      <button @click="handleBack" class="size-10 flex items-center justify-center">
        <span class="material-symbols-outlined text-lg font-bold">arrow_back_ios</span>
      </button>
      <h2 class="text-gray-900 text-base font-bold flex-1 text-center pr-10">Video Training</h2>
    </header>

    <main class="flex-1 overflow-y-auto pb-44">
      <!-- Video Player Thumbnail -->
      <div class="px-5 py-3">
        <div
          class="relative rounded-xl overflow-hidden aspect-video bg-black shadow-2xl cursor-pointer"
          @click="handleToggleVideo"
        >
          <img
            src="https://picsum.photos/seed/video/800/450"
            class="w-full h-full object-cover opacity-60"
            alt="Video thumbnail"
          />
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="size-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 shadow-2xl transition-transform active:scale-90 hover:scale-105">
              <span class="material-symbols-outlined text-white text-3xl" style="font-variation-settings: 'FILL' 1">play_arrow</span>
            </div>
          </div>
          <div class="absolute bottom-4 left-4 right-4 space-y-1.5">
            <div class="flex justify-between text-white text-[9px] font-bold tracking-widest">
              <span>00:00</span>
              <span>12:00</span>
            </div>
            <div class="h-1.5 bg-white/30 rounded-full relative">
              <div class="absolute top-0 left-0 h-full bg-ge-yellow rounded-full shadow-[0_0_8px_rgba(255,214,0,0.8)]" style="width: 0%"></div>
              <div class="absolute top-1/2 left-0 -translate-y-1/2 size-3.5 bg-white rounded-full shadow-lg border-2 border-ge-yellow"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Title Info -->
      <div class="px-6 space-y-1.5">
        <p class="text-primary text-[9px] font-extrabold uppercase tracking-[0.15em]">EPISODE 1</p>
        <h1 class="text-xl font-extrabold text-slate-900 leading-tight">Core Sales Skills: Effective Communication & Building Trust</h1>
        <div class="flex items-center gap-2.5 pt-0.5">
          <span class="bg-gray-100 px-1.5 py-0.5 rounded text-[9px] text-gray-500 font-bold uppercase">Featured</span>
          <p class="text-gray-400 text-xs font-medium">Click play to start learning</p>
        </div>
      </div>

      <!-- Unlock Card -->
      <div class="px-5 py-5">
        <div class="bg-ge-yellow/10 border border-ge-yellow/20 rounded-2xl p-5 relative overflow-hidden ios-shadow">
          <div class="flex justify-between items-start relative z-10">
            <div class="space-y-1.5">
              <p class="text-gray-500 text-[9px] font-bold uppercase tracking-widest">Unlock Progress</p>
              <div class="flex items-baseline gap-1.5">
                <p class="text-4xl font-extrabold text-red-600">{{ lessonsStore.currentCourse.duration }}</p>
              </div>
            </div>
          </div>

          <div class="mt-5 space-y-3 relative z-10">
            <div class="h-2 w-full bg-white rounded-full overflow-hidden shadow-inner">
              <div class="h-full bg-ge-yellow transition-all duration-500" style="width: 0%"></div>
            </div>
            <div class="flex items-center gap-2.5 text-primary">
              <span class="material-symbols-outlined text-[18px] animate-pulse" style="font-variation-settings: 'FILL' 1">radio_button_checked</span>
              <p class="text-xs font-bold italic">Recording learning duration...</p>
            </div>
            <div class="h-px bg-ge-yellow/10 w-full"></div>
            <div class="flex items-start gap-2.5 text-gray-400">
              <span class="material-symbols-outlined text-[18px] mt-0.5">lock</span>
              <p class="text-[10px] font-medium leading-relaxed">
                Please finish watching the remaining duration to unlock <span class="font-bold text-slate-700">{{ lessonsStore.currentCourse.questionsCount }} quiz questions</span>.
              </p>
            </div>
          </div>
          <div class="absolute top-0 right-0 size-28 bg-ge-yellow/5 rounded-full -mr-14 -mt-14"></div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="fixed bottom-0 w-full max-w-[480px] p-4.5 bg-white/95 backdrop-blur-xl border-t border-gray-100 space-y-3 z-30 shadow-[0_-4px_12px_rgba(0,0,0,0.03)] p-3 pb-7">
      <button
        @click="handleStartQuiz"
        class="w-full bg-primary text-white font-extrabold h-14 rounded-2xl shadow-xl shadow-primary/20 flex items-center justify-center gap-3 active:scale-95 transition-all"
      >
        <span class="material-symbols-outlined text-xl">lock</span>
        <span class="text-base font-bold tracking-wide">Start Final Quiz</span>
      </button>
      <div class="text-center space-y-0.5">
        <p class="text-[10px] text-gray-300 font-bold uppercase tracking-widest">Please watch the video to unlock this quiz</p>
      </div>
    </footer>

    <!-- YouTube Video Modal -->
    <Teleport to="body">
      <div
        v-if="showVideoModal"
        class="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm"
        @click.self="handleToggleVideo"
      >
        <div class="relative w-[90%] max-w-[480px] aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0"
            class="w-full h-full"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <button
            @click="handleToggleVideo"
            class="absolute -top-0 -right-0 size-9 bg-white/90 rounded-full flex items-center justify-center shadow-lg m-2 active:scale-90 transition-transform"
          >
            <span class="material-symbols-outlined text-slate-900 text-lg">close</span>
          </button>
        </div>
      </div>
    </Teleport>
  </div>
</template>
