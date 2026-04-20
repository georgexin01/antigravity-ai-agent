<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useQuestionAnswersStore } from '@/stores'
import type { HistoryRecord, QuizAttempt } from '@/types'

const qaStore = useQuestionAnswersStore()
const router = useRouter()

onMounted(async (): Promise<void> => {
  await qaStore.fetchHistory()
})

function handleItemClick(item: HistoryRecord): void {
  const attempt: QuizAttempt = {
    date: item.date,
    score: item.score,
    totalQuestions: item.totalQuestions,
    correctCount: item.correctCount || 0,
    subjectName: item.title,
    questions: item.questions,
    userAnswers: item.userAnswers,
    snapshots: item.snapshots || [],
  }
  qaStore.lastAttempt = attempt
  router.push('/quiz-review')
}
</script>

<template>
  <div class="flex h-full min-h-screen w-full flex-col bg-white overflow-x-hidden">
    <div class="flex items-center bg-white px-4 py-2 justify-between sticky top-0 z-20 border-b border-gray-200/60">
      <div
        class="text-slate-800 flex size-10 shrink-0 items-center cursor-pointer active:opacity-60"
        @click="router.push('/courses')"
      >
        <span class="material-symbols-outlined text-xl font-bold">arrow_back_ios_new</span>
      </div>
      <h2 class="text-slate-900 text-base font-bold leading-tight tracking-tight flex-1 text-center pr-10">Score History</h2>
    </div>

    <div class="px-4 py-1.5 sticky top-[52px] bg-white z-10">
      <div class="flex p-1 bg-gray-200 rounded-xl h-9 items-center">
        <div
          class="flex-1 flex justify-center items-center h-full rounded-lg cursor-pointer transition-all duration-200 text-gray-600 text-[13px] font-medium"
          @click="router.push('/courses')"
        >
          Current Quiz
        </div>
        <div class="flex-1 flex justify-center items-center h-full rounded-lg cursor-pointer transition-all duration-200 bg-white shadow-sm text-slate-900 font-bold text-[13px]">
          Score History
        </div>
      </div>
    </div>

    <div class="flex flex-col flex-1 px-4 py-1 gap-3">
      <div
        v-for="(item, idx) in qaStore.historyList"
        :key="idx"
        @click="handleItemClick(item)"
        class="flex items-center gap-4 bg-white border border-gray-200/80 rounded-2xl px-4 min-h-[82px] py-2.5 justify-between premium-card-shadow active:scale-[0.98] transition-all duration-200 cursor-pointer"
      >
        <div class="flex items-center gap-3">
          <div class="text-primary/80 flex items-center justify-center rounded-xl bg-primary/[0.04] border border-primary/5 shrink-0 size-11">
            <span class="material-symbols-outlined text-xl">{{ item.icon }}</span>
          </div>
          <div class="flex flex-col justify-center">
            <p class="text-slate-900 text-[14px] font-bold leading-tight line-clamp-1">{{ item.title }}</p>
            <p class="text-gray-500 text-[11px] font-medium leading-normal mt-1 flex items-center gap-3">
              <span class="flex items-center gap-1">
                <span class="material-symbols-outlined text-[10px]">calendar_today</span>
                {{ item.date }}
              </span>
              <span class="flex items-center gap-1">
                <span class="material-symbols-outlined text-[10px]">quiz</span>
                {{ item.correctCount }} / {{ item.totalQuestions }}
              </span>
            </p>
          </div>
        </div>
        <div class="shrink-0 flex flex-col items-end">
          <p class="score-gradient-text text-2xl font-extrabold leading-none">{{ item.score }}</p>
          <p :class="['text-[8px] font-bold uppercase tracking-[0.1em] mt-1', item.tag === 'EXCELLENT' ? 'text-orange-400' : 'text-gray-500']">
            {{ item.tag }}
          </p>
        </div>
      </div>

      <div class="p-3 mt-2 bg-gray-100 rounded-2xl border border-gray-200/60">
        <div class="flex items-center gap-2 mb-0.5">
          <span class="material-symbols-outlined text-primary text-xs font-bold">info</span>
          <p class="text-[9px] font-bold text-gray-500 uppercase tracking-widest">About Records</p>
        </div>
        <p class="text-[11px] text-gray-600 leading-snug italic">
          Score history is retained for the last 12 months. Tap a card to view answer details.
        </p>
      </div>
      <div class="h-24 w-full"></div>
    </div>

    <!-- Nav -->
    <nav class="fixed bottom-0 w-full max-w-[480px] bg-white/90 dark:bg-background-dark/90 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800 flex justify-around items-center h-20 pb-4 z-40">
      <div class="flex-1 flex flex-col items-center justify-center gap-1 text-gray-500 dark:text-gray-600 cursor-pointer" @click="router.push('/courses')">
        <span class="material-symbols-outlined text-[28px]">menu_book</span>
        <span class="text-xs font-medium">Learning</span>
      </div>
      <div class="flex-1 flex flex-col items-center justify-center gap-1 text-primary cursor-pointer">
        <span class="material-symbols-outlined font-bold text-[28px]" style="font-variation-settings: 'FILL' 1">history_edu</span>
        <span class="text-xs font-bold">History</span>
      </div>
    </nav>
    <div class="h-6 bg-white dark:bg-background-dark w-full fixed bottom-0 max-w-[480px] z-30"></div>
  </div>
</template>
