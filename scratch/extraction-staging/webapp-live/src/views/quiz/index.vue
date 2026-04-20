<script setup lang="ts">
// 1. Imports
import { ref, computed, watch, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import {
  useAuthStore,
  useLessonsStore,
  useQuestionsStore,
  useQuestionAnswersStore,
} from '@/stores';
import type { Question, QuizAttempt } from '@/types';

// 2. Define (Props/Emits)
// None for this page

// 3. Stores
const authStore = useAuthStore();
const lessonsStore = useLessonsStore();
const questionsStore = useQuestionsStore();
const qaStore = useQuestionAnswersStore();
const route = useRoute();
const router = useRouter();

// 4. Local State
const loading = ref<boolean>(true);
const currentIndex = ref<number>(0);
const sessionQuestions = ref<Question[]>([]);
const answers = ref<Record<string, string>>({});

// 5. Computed
const totalQuestions = computed<number>(
  () => sessionQuestions.value.length,
);

const currentQuestion = computed<Question | undefined>(
  () => sessionQuestions.value[currentIndex.value],
);

const progress = computed<number>(
  () => totalQuestions.value > 0 ? ((currentIndex.value + 1) / totalQuestions.value) * 100 : 0,
);

// 6. Watchers
watch(currentIndex, () => {
  window.scrollTo(0, 0);
});

// 7. Lifecycle Hooks
onMounted(async () => {
  const id = route.params.id as string;
  if (!authStore.user?.id) {
    await authStore.fetchUser();
  }
  const course = await lessonsStore.getDetail(id, authStore.user?.id);

  if (!course) {
    router.replace('/courses');
    return;
  }

  // Fetch questions for this specific lesson (Relational Audit)
  const pool = await questionsStore.getByLesson(id);

  if (pool.length === 0) {
    loading.value = false;
    return;
  }

  // Shuffle the lesson pool for the quiz flow
  const shuffled = [...pool].sort(() => 0.5 - Math.random());
  
  // Note: We show ALL questions available for this lesson right? (As requested: "so if only found 2 it should be 0/2 count at start")
  sessionQuestions.value = shuffled;
  loading.value = false;
});

// 8. Functions / Handlers
function handleSelect(key: string): void {
  if (!currentQuestion.value) return;
  answers.value = { ...answers.value, [currentQuestion.value.id]: key };
}

function handleNext(): void {
  if (!currentQuestion.value) return;

  if (currentIndex.value < totalQuestions.value - 1) {
    currentIndex.value = currentIndex.value + 1;
  } else {
    // Quiz completed (Relational Audit: ensure accurate count of correct answers)
    let correct: number = 0;
    sessionQuestions.value.forEach((q) => {
      if (answers.value[q.id] === q.correctKey) correct++;
    });

    const attempt: QuizAttempt = {
      correctCount: correct,
      date: new Date().toISOString().split('T')[0]!,
      questions: sessionQuestions.value,
      score: totalQuestions.value > 0 ? Math.round((correct / totalQuestions.value) * 100) : 0,
      subjectName: lessonsStore.currentCourse?.title ?? '',
      totalQuestions: totalQuestions.value,
      userAnswers: answers.value,
      snapshots: sessionQuestions.value.map(q => ({
        questionId: q.id,
        options: q.options.map(o => o.text),
        correctKey: q.correctKey,
        selectedKey: answers.value[q.id] || ''
      }))
    };
    
    qaStore.handleQuizFinish(attempt);
  }
}

function handleCancel(): void {
  router.push(`/courses/${route.params.id}`);
}
</script>

<template>
  <div v-if="loading" class="flex flex-col items-center justify-center min-h-screen bg-[#f8f8f5] dark:bg-[#1a180b] gap-4">
    <div class="animate-spin size-10 border-4 border-primary border-t-transparent rounded-full"></div>
    <p class="text-gray-500 font-medium">Preparing your quiz...</p>
  </div>

  <div v-else-if="sessionQuestions.length === 0" class="flex flex-col items-center justify-center min-h-screen bg-[#f8f8f5] dark:bg-[#1a180b] px-10 text-center gap-6">
    <div class="size-20 rounded-full bg-red-50 flex items-center justify-center text-red-500">
      <span class="material-symbols-outlined text-4xl">error_outline</span>
    </div>
    <div class="space-y-2">
      <h2 class="text-xl font-bold">No Questions Found</h2>
      <p class="text-gray-500 text-sm">We couldn't find any questions for this course. Please contact your instructor.</p>
    </div>
    <button @click="handleCancel" class="flex items-center gap-2 text-primary font-bold">
      <span class="material-symbols-outlined text-sm">arrow_back</span>
      Back to Courses
    </button>
  </div>

  <div v-else class="flex flex-col min-h-screen bg-[#f8f8f5] dark:bg-[#1a180b]">
    <header class="flex items-center bg-white dark:bg-[#1a180b] p-4 pb-2 border-b border-gray-100 dark:border-gray-800 justify-between sticky top-0 z-10">
      <div class="flex size-14 items-center" @click="handleCancel">
        <span class="material-symbols-outlined text-gray-500 cursor-pointer">arrow_back</span>
      </div>
      <h2 class="text-[#1a180b] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center truncate px-2">
        {{ lessonsStore.currentCourse?.title }}
      </h2>
      <div class="flex size-14 items-center justify-end" @click="handleCancel">
        <span class="material-symbols-outlined text-gray-500 cursor-pointer">close</span>
      </div>
    </header>

    <div class="px-6 pt-3 pb-2 bg-white dark:bg-[#1a180b]">
      <div class="flex items-center justify-between mb-2">
        <p class="text-gray-400 text-xs font-bold uppercase tracking-wider">Progress</p>
        <p class="text-primary text-xs font-bold">{{ currentIndex }} / {{ totalQuestions }}</p>
      </div>
      <div class="rounded-full bg-gray-100 dark:bg-gray-800 h-2 overflow-hidden w-full">
        <div class="h-full rounded-full bg-primary transition-all duration-300" :style="{ width: `${progress}%` }"></div>
      </div>
    </div>

    <main v-if="currentQuestion" class="flex-1 p-5 space-y-4 overflow-y-auto">
      <h3 class="text-[#1a180b] dark:text-white text-lg font-bold leading-tight">
        {{ currentQuestion.text }}
      </h3>

      <div class="space-y-2">
        <div
          v-for="opt in currentQuestion.options"
          :key="opt.key"
          @click="handleSelect(opt.key)"
          :class="[
            'flex items-center gap-3 p-3 rounded-xl border transition-all cursor-pointer',
            answers[currentQuestion.id] === opt.key
              ? 'bg-ge-yellow/10 border-ge-yellow ring-1 ring-ge-yellow/20'
              : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 active:bg-gray-50',
          ]"
        >
          <div
            :class="[
              'size-8 rounded-lg flex items-center justify-center font-bold text-sm',
              answers[currentQuestion.id] === opt.key
                ? 'bg-ge-yellow text-black'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-500',
            ]"
          >
            {{ opt.key }}
          </div>
          <p class="flex-1 font-medium text-[13px] text-[#1a180b] dark:text-gray-200 leading-snug">
            {{ opt.text }}
          </p>
          <div
            :class="[
              'size-5 rounded-full border-2 flex items-center justify-center',
              answers[currentQuestion.id] === opt.key
                ? 'border-ge-yellow bg-ge-yellow'
                : 'border-gray-200',
            ]"
          >
            <span
              v-if="answers[currentQuestion.id] === opt.key"
              class="material-symbols-outlined text-black text-[10px] font-bold"
            >
              check
            </span>
          </div>
        </div>
      </div>
    </main>

    <footer class="p-4 bg-white dark:bg-[#1a180b] border-t border-gray-100 dark:border-gray-800 flex gap-3">
      <button
        @click="currentIndex > 0 && (currentIndex = currentIndex - 1)"
        :disabled="currentIndex === 0"
        class="flex-1 flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 border border-gray-200 dark:border-gray-700 text-[#1a180b] dark:text-white text-sm font-bold disabled:opacity-30"
      >
        <span class="truncate">Previous</span>
      </button>
      <button
        @click="handleNext"
        :disabled="!currentQuestion || !answers[currentQuestion.id]"
        class="flex-[2] flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-primary text-white text-sm font-bold disabled:opacity-50"
      >
        <span class="truncate">{{ currentIndex === totalQuestions - 1 ? 'Submit' : 'Next' }}</span>
      </button>
    </footer>
  </div>
</template>

