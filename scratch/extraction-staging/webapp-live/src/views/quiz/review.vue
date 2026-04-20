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

const KEYS = ['A', 'B', 'C', 'D', 'E', 'F'] as const;

/**
 * Normalized review items — always resolved from snapshots when available,
 * otherwise from legacy (questions + userAnswers). Options keep the frozen
 * order from the time the quiz was submitted so A/B/C/D → correctKey lines up.
 */
interface ReviewItem {
  questionId: string;
  questionText: string;
  explanation: string;
  options: { key: string; text: string }[];
  correctKey: string;
  selectedKey: string;
  isCorrect: boolean;
}

const items = computed<ReviewItem[]>(() => {
  if (!attempt.value) return [];
  const questions = attempt.value.questions || [];

  // Prefer frozen snapshots (new JSON structure)
  if (attempt.value.snapshots && attempt.value.snapshots.length > 0) {
    return attempt.value.snapshots.map((snap) => {
      const q = questions.find((x) => x.id === snap.questionId);
      return {
        questionId: snap.questionId,
        questionText: q?.text || 'Question text missing',
        explanation: q?.explanation || '',
        options: (snap.options || []).map((text, i) => ({
          key: KEYS[i] || String(i + 1),
          text,
        })),
        correctKey: snap.correctKey,
        selectedKey: snap.selectedKey,
        isCorrect: snap.selectedKey === snap.correctKey,
      };
    });
  }

  // Legacy fallback — only used for old records without snapshots
  return questions.map((q) => {
    const selectedKey = attempt.value.userAnswers?.[q.id] || '';
    return {
      questionId: q.id,
      questionText: q.text,
      explanation: q.explanation || '',
      options: q.options.map((o) => ({ key: o.key, text: o.text })),
      correctKey: q.correctKey,
      selectedKey,
      isCorrect: selectedKey === q.correctKey,
    };
  });
});

// 6. Lifecycle Hooks
onMounted(() => {
  if (!qaStore.lastAttempt) {
    router.replace('/courses');
  }
});

// 7. Functions / Handlers
function handleBack(): void {
  router.push('/history');
}
</script>

<template>
  <div v-if="attempt" class="flex flex-col min-h-screen bg-[#f8f8f5] dark:bg-[#1a180b]">
    <!-- Header -->
    <header class="sticky top-0 z-50 flex items-center bg-white dark:bg-[#1a180b] p-4 pb-2 border-b border-gray-100 dark:border-gray-800 justify-between">
      <div class="flex size-14 items-center" @click="handleBack">
        <span class="material-symbols-outlined text-gray-500 cursor-pointer">arrow_back</span>
      </div>
      <h2 class="text-[#1a180b] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center truncate px-2">
        Quiz Review
      </h2>
      <div class="flex size-14 items-center justify-end"></div>
    </header>

    <main class="flex-1 overflow-y-auto pb-8">
      <!-- Score Summary -->
      <div class="px-4 py-5">
        <div class="bg-gradient-to-br from-red-600 to-red-500 rounded-3xl p-6 text-white shadow-xl flex justify-between items-center relative overflow-hidden">
          <div class="relative z-10">
            <div class="flex items-baseline gap-1">
              <span class="text-5xl font-extrabold">{{ attempt.score }}</span>
              <span class="text-lg font-bold text-white/90">Pts</span>
            </div>
            <div class="mt-3 flex flex-col gap-1.5">
              <div class="flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-3 py-1 w-fit">
                <span class="material-symbols-outlined text-[10px] font-bold">quiz</span>
                <span class="text-[10px] font-bold uppercase tracking-wider">Total Questions: {{ attempt.totalQuestions }}</span>
              </div>
              <div class="flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-3 py-1 w-fit">
                <span class="material-symbols-outlined text-[10px] font-bold">verified</span>
                <span class="text-[10px] font-bold uppercase tracking-wider">Correct Score: {{ attempt.correctCount }} / {{ attempt.totalQuestions }}</span>
              </div>
            </div>
          </div>
          <div class="relative z-10 opacity-20">
            <span class="material-symbols-outlined text-[80px]" style="font-variation-settings: 'FILL' 1">workspace_premium</span>
          </div>
          <div class="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full"></div>
          <div class="absolute -bottom-4 -left-4 w-20 h-20 bg-black/5 rounded-full"></div>
        </div>
      </div>

      <!-- Question List -->
      <div class="px-4 space-y-6">
        <div
          v-for="(item, idx) in items"
          :key="item.questionId"
          :class="[
            'rounded-[2rem] p-6 space-y-4 border-2 transition-all duration-300',
            item.isCorrect
              ? 'bg-emerald-50 border-emerald-200'
              : 'bg-rose-50 border-rose-200',
          ]"
        >
          <div class="flex items-start gap-3">
            <span
              :class="[
                'flex items-center justify-center font-bold rounded-lg px-2.5 py-1 text-[10px] whitespace-nowrap mt-0.5 shadow-md',
                item.isCorrect ? 'bg-emerald-600 text-white' : 'bg-rose-500 text-white',
              ]"
            >Q{{ idx + 1 }}</span>
            <p
              :class="[
                'font-bold leading-relaxed text-[17px] flex-1',
                item.isCorrect ? 'text-emerald-900' : 'text-rose-900',
              ]"
            >{{ item.questionText }}</p>
          </div>

          <div class="space-y-3">
            <div class="space-y-2.5">
              <div
                v-for="opt in item.options"
                :key="opt.key"
                :class="[
                  'flex items-center gap-4 p-4 rounded-3xl border-2 transition-all duration-200 relative',
                  opt.key === item.correctKey
                    ? 'bg-emerald-100 border-emerald-500/40'
                    : opt.key === item.selectedKey
                      ? 'bg-rose-100 border-rose-500/40'
                      : 'bg-white border-slate-100',
                ]"
              >
                <!-- Icon -->
                <div
                  v-if="opt.key === item.correctKey"
                  class="size-7 rounded-full bg-emerald-500 flex items-center justify-center shadow-md shrink-0"
                >
                  <span class="material-symbols-outlined text-white text-lg font-black">check</span>
                </div>
                <div
                  v-else-if="opt.key === item.selectedKey"
                  class="size-7 rounded-full bg-rose-500 flex items-center justify-center shadow-md shrink-0"
                >
                  <span class="material-symbols-outlined text-white text-lg font-black">close</span>
                </div>
                <div v-else class="size-7 border-2 border-slate-100 rounded-full shrink-0 flex items-center justify-center bg-slate-50/50">
                  <div class="size-3 rounded-full bg-white opacity-0"></div>
                </div>

                <p
                  :class="[
                    'text-[15px] font-bold flex-1',
                    opt.key === item.correctKey
                      ? 'text-emerald-900'
                      : opt.key === item.selectedKey
                        ? 'text-rose-900'
                        : 'text-slate-600',
                  ]"
                >
                  <span class="mr-2 text-slate-400 text-xs font-black">{{ opt.key }}.</span>{{ opt.text }}
                </p>

                <!-- Labels -->
                <div v-if="opt.key === item.correctKey" class="flex flex-col items-end">
                  <span class="text-[8px] font-black uppercase tracking-widest text-emerald-700 bg-emerald-200 px-2.5 py-1 rounded-lg border border-emerald-300 shadow-sm text-center min-w-[90px] whitespace-pre-line">{{ item.isCorrect ? 'CORRECT ANSWER\n- MATCHED' : 'CORRECT\nANSWER' }}</span>
                </div>
                <div v-else-if="opt.key === item.selectedKey" class="flex flex-col items-end">
                  <span class="text-[8px] font-black uppercase tracking-widest text-rose-700 bg-rose-200 px-2.5 py-1 rounded-lg border border-rose-300 shadow-sm text-center min-w-[90px] whitespace-pre-line">{{ 'YOUR ANSWER\n- WRONG' }}</span>
                </div>
              </div>
            </div>

            <!-- Explanation -->
            <div
              v-if="item.explanation && item.explanation.trim() !== ''"
              class="mt-6 bg-slate-50/80 rounded-[2rem] p-5 border border-slate-100"
            >
              <div class="flex items-center gap-2 mb-2 text-slate-400">
                <span class="material-symbols-outlined text-lg">info</span>
                <span class="text-[10px] font-black uppercase tracking-widest">Training Insights</span>
              </div>
              <p class="text-slate-600 text-sm leading-relaxed font-medium italic">
                {{ item.explanation }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
