<script setup lang="ts">
// 1. Imports
import { computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';

import { useQuestionAnswersStore } from '@/stores';

// 2. Define (Props/Emits)
// None for this page

// 3. Stores
const qaStore = useQuestionAnswersStore();
const router = useRouter();

// 4. Local State
// Reactive state handled by Pinia stores

// 5. Computed
const attempt = computed(() => qaStore.lastAttempt!);
const isPass = computed(() => (attempt.value?.score ?? 0) >= 80);

function formatDate(dateStr?: string): string {
  if (!dateStr) return 'N/A';
  const [y, m, d] = dateStr.split('-');
  return `${d}/${m}/${y}`;
}

const analysisItems = computed(() => [
  {
    label: 'Question',
    en: 'Correct Answered',
    score: `${attempt.value?.correctCount}/${attempt.value?.totalQuestions}`,
    pass: isPass.value,
  },
  {
    label: 'Date',
    en: 'Completion Date',
    score: formatDate(attempt.value?.date),
    pass: true,
  },
]);

// 6. Lifecycle Hooks
onMounted(() => {
  if (!qaStore.lastAttempt) {
    router.replace('/courses');
  }
});

// 7. Functions / Handlers
function handleReview() {
  router.push('/quiz-review');
}

function handleBackToCourses() {
  router.push('/courses');
}
</script>

<template>
  <div v-if="attempt" class="flex flex-col min-h-screen bg-white dark:bg-background-dark">
    <!-- Header -->
    <header class="sticky top-0 z-50 flex items-center bg-white/80 dark:bg-background-dark/80 backdrop-blur-md p-3 pb-1.5 justify-between border-b border-gray-100 dark:border-gray-800">
      <button @click="handleBackToCourses" class="size-9 flex items-center justify-center">
        <span class="material-symbols-outlined text-gray-900 dark:text-white text-xl font-bold">arrow_back_ios</span>
      </button>
      <h2 class="text-gray-900 dark:text-white text-base font-bold leading-tight flex-1 text-center pr-9">Quiz Results</h2>
    </header>

    <main class="flex-1 overflow-y-auto pb-40">
      <!-- Top section -->
      <div class="flex flex-col items-center pt-6 px-6">
        <div class="bg-primary/10 p-3.5 rounded-full mb-2 shadow-inner">
          <span class="material-symbols-outlined text-primary !text-5xl" style="font-variation-settings: 'FILL' 1">emoji_events</span>
        </div>
        <h2 class="text-xl font-extrabold text-center text-slate-900 dark:text-white">
          {{ isPass ? 'Congratulations! You Passed' : 'Unfortunately, you did not pass' }}
        </h2>
        <p class="text-slate-400 text-[13px] text-center px-8 mt-1.5 leading-relaxed">
          {{ isPass ? 'Excellent performance! You have met the requirements for this module.' : 'Keep trying! Please review the incorrect answers, strengthen weak areas and try again.' }}
        </p>
      </div>

      <!-- Score Card -->
      <div class="flex flex-col items-center py-7 px-6 relative">
        <div class="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          <div class="w-56 h-56 bg-primary rounded-full blur-[50px]"></div>
        </div>
        <div class="relative z-10 bg-white dark:bg-gray-900 border border-primary/20 rounded-[2.2rem] px-10 py-6 flex flex-col items-center shadow-2xl shadow-primary/10">
          <div class="flex items-baseline justify-center gap-1">
            <h1 class="score-gradient-text-red text-7xl font-extrabold leading-none tracking-tighter">
              {{ attempt.score }}
            </h1>
            <span class="text-primary font-bold text-xl">/100</span>
          </div>
          <div
            :class="[
              'mt-4 px-7 py-1.5 rounded-full shadow-lg flex items-center gap-2 transition-all duration-300',
              isPass ? 'bg-gradient-to-r from-red-500 to-red-700' : 'bg-slate-400',
            ]"
          >
            <span v-if="isPass" class="material-symbols-outlined text-white text-sm font-bold">check</span>
            <span class="text-white text-xs font-extrabold uppercase tracking-widest">
              {{ isPass ? 'Pass' : 'Fail' }}
            </span>
          </div>
        </div>
      </div>

      <!-- Analysis Section -->
      <div class="px-6 mt-2">
        <div class="flex items-center justify-between mb-3">
          <h3 class="text-[11px] font-extrabold uppercase tracking-widest text-slate-400">Detailed Analysis</h3>
          <div class="h-px bg-gray-100 dark:bg-gray-800 flex-1 ml-3"></div>
        </div>
        <div class="space-y-2">
          <div
            v-for="(item, idx) in analysisItems"
            :key="idx"
            class="flex justify-between items-center p-3.5 bg-gray-50 dark:bg-gray-900/40 rounded-xl border border-gray-100 dark:border-gray-800"
          >
            <div class="flex flex-col">
              <p class="text-sm font-bold text-slate-800 dark:text-white">{{ item.label }}</p>
              <p class="text-[9px] text-slate-400 dark:text-gray-500 uppercase tracking-widest font-bold">{{ item.en }}</p>
            </div>
            <div class="flex items-center gap-3">
              <p class="text-lg font-extrabold text-slate-900 dark:text-white">{{ item.score }}</p>
              <span
                :class="['material-symbols-outlined !text-xl', item.pass ? 'text-emerald-500' : 'text-primary']"
                :style="item.pass ? { fontVariationSettings: `'FILL' 1` } : {}"
              >
                {{ item.pass ? 'check_circle' : 'info' }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="fixed bottom-0 w-full max-w-[480px] p-5 pt-4 space-y-3 bg-white/95 dark:bg-background-dark/95 backdrop-blur-xl border-t border-gray-100 dark:border-gray-800 z-30 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] pb-7">
      <button
        @click="handleReview"
        class="w-full bg-primary text-white font-extrabold h-14 rounded-2xl shadow-xl shadow-primary/20 active:scale-95 transition-all text-sm uppercase tracking-widest"
      >
        Review Incorrect Answers
      </button>
      <button
        @click="handleBackToCourses"
        class="w-full bg-slate-50 dark:bg-gray-800 text-slate-500 dark:text-gray-400 font-bold h-11 rounded-2xl active:scale-95 transition-all text-xs"
      >
        Back to Course Center
      </button>
    </footer>
    <div class="h-5 bg-white dark:bg-background-dark w-full fixed bottom-0 max-w-[480px] z-40"></div>
  </div>
</template>

<style scoped>
.score-gradient-text-red {
  background: linear-gradient(135deg, #ef4444 0%, #b91c1c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>

