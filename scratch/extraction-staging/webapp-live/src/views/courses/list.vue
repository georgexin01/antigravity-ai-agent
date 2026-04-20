<script setup lang="ts">
// 1. Imports
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

import { useAuthStore, useLessonsStore, useQuestionAnswersStore } from '@/stores';
import type { Course } from '@/types';
import AppImage from '@/components/AppImage.vue';

// 2. Define (Props/Emits)
// None for this page

// 3. Stores
const authStore = useAuthStore();
const lessonsStore = useLessonsStore();
const qaStore = useQuestionAnswersStore();
const router = useRouter();

// 4. Local State (Ref/Reactive)
const loading = ref<boolean>(true);
const todayStats = ref({
  quizzes: 0,
  lessons: 0,
  totalQuestions: 0,
  correctAnswers: 0,
  accuracy: 0,
});

// 5. Lifecycle Hooks
onMounted(async () => {
  loading.value = true;
  try {
    // Sequential: fetchUser MUST resolve before getList so that lessons
    // are filtered by the logged-in agent's assignments.
    await authStore.fetchUser();
    if (!authStore.user?.id) {
      lessonsStore.courses = [];
      return;
    }
    await lessonsStore.getList(authStore.user.id);
    todayStats.value = await qaStore.fetchTodayStats(authStore.user.id);
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error('Failed to load courses:', msg);
  } finally {
    loading.value = false;
  }
});

// 6. Functions / Handlers
function selectCourse(course: Course): void {
  lessonsStore.currentCourse = course;
  router.push(`/courses/${course.id}`);
}

function getTagIcon(tag?: string): string {
  if (tag === 'Core Courses') return 'verified';
  if (tag === 'New Releases') return 'new_releases';
  return 'gavel';
}
</script>

<template>
  <div class="relative flex min-h-screen w-full flex-col overflow-x-hidden max-w-[480px] mx-auto bg-white dark:bg-background-dark">
    <!-- Header -->
    <header class="sticky top-0 z-50 flex items-center bg-white/80 dark:bg-background-dark/80 backdrop-blur-md p-4 pb-2 justify-between border-b border-gray-100 dark:border-gray-800">
      <div class="flex size-10 shrink-0 items-center">
        <div
          class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8"
          :style="{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBCvbXaLj3lCnrvF_wQY3iLJs4RRWpOLKyNO_NB8x1QaoY5NMbjkrSg3jZQBvbJcmsNnWt_loRlgs7Zhql_SQ7mxmydh8yFrB4yZ-4V6v_hVKBaTF2J5cUMbCxJQDiKnNAHUUu1b8-BDT3CTwibq0pkLdp874jEz77A_LU3BHhYg6CqZrM1iVtBgT_gA7VS7UlFewx6SthNkuB0-_Gaq680zINAl2td2AWNDW3eYo3OuQMne3BCSRfAhPvU9sNBYD8Am3Y1rPjAxaI')` }"
        ></div>
      </div>
      <h2 class="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center">Course Selection</h2>
      <div class="flex w-10 items-center justify-end">
        <button
          @click="authStore.logout()"
          class="text-primary text-sm font-bold leading-normal tracking-tight shrink-0 active:opacity-60"
        >
          Logout
        </button>
      </div>
    </header>

    <main class="flex-1 overflow-y-auto pb-24">
      <!-- Profile Section -->
      <section v-if="authStore.user" class="flex p-4 bg-white dark:bg-background-dark">
        <div class="flex w-full flex-col gap-4">
          <div class="flex items-center gap-4">
            <div
              class="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-20 w-20 border-2 border-primary/10"
              :style="{ backgroundImage: `url('${authStore.user.avatar}')` }"
            ></div>
            <div class="flex flex-col justify-center">
              <p class="text-gray-900 dark:text-white text-xl font-bold leading-tight tracking-tight">{{ authStore.user.name }} ({{ authStore.user.nameEn }})</p>
              <p class="text-gray-500 dark:text-gray-400 text-sm font-normal">{{ authStore.user.title }} | {{ authStore.user.titleEn }}</p>
              <p class="text-gray-400 dark:text-gray-500 text-xs font-normal mt-1">Agent ID: {{ authStore.user.agentId }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Daily Activity Card — derived from question_answers for today only -->
      <section v-if="authStore.user" class="flex flex-col gap-3 p-4 mx-4 my-2 rounded-xl bg-gray-50 dark:bg-gray-900/50">
        <div class="flex gap-6 justify-between items-center">
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-primary text-xl">target</span>
            <p class="text-gray-900 dark:text-white text-sm font-bold leading-normal">Today's Accuracy</p>
          </div>
          <p class="text-primary text-sm font-bold leading-normal">{{ todayStats.accuracy }}%</p>
        </div>
        <div class="rounded-full bg-gray-200 dark:bg-gray-800 h-2 overflow-hidden">
          <div class="h-full rounded-full bg-primary transition-all" :style="{ width: `${todayStats.accuracy}%` }"></div>
        </div>
        <div class="flex justify-between text-xs font-normal text-gray-500 dark:text-gray-400">
          <span>{{ todayStats.correctAnswers }} / {{ todayStats.totalQuestions }} correct</span>
          <span>{{ todayStats.quizzes }} {{ todayStats.quizzes === 1 ? 'quiz' : 'quizzes' }}</span>
        </div>
      </section>

      <div class="flex items-center justify-between px-4 pb-2 pt-6">
        <h2 class="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-tight">Training Categories</h2>
        <span class="material-symbols-outlined text-gray-400">filter_list</span>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="flex flex-col gap-4 p-4">
        <div v-for="i in 3" :key="i" class="animate-pulse flex items-stretch justify-between gap-4 rounded-xl bg-gray-50 dark:bg-gray-900/40 p-4 border border-gray-100 dark:border-gray-800">
          <div class="flex-1 space-y-3 py-1">
            <div class="h-2 bg-gray-200 rounded w-1/4"></div>
            <div class="h-4 bg-gray-200 rounded w-3/4"></div>
            <div class="h-2 bg-gray-200 rounded w-1/2"></div>
          </div>
          <div class="size-24 bg-gray-200 rounded-lg"></div>
        </div>
      </div>

      <!-- Courses List -->
      <div v-else-if="lessonsStore.courses.length > 0" class="flex flex-col gap-4 p-4">
        <div
          v-for="course in lessonsStore.courses"
          :key="course.id"
          @click="course.progress !== 100 && selectCourse(course)"
          :class="[
            'flex items-stretch justify-between gap-4 rounded-xl bg-white dark:bg-gray-900/40 p-4 ios-shadow border border-gray-100 dark:border-gray-800 transition-all',
            course.progress === 100 ? 'opacity-80' : 'cursor-pointer active:scale-95',
          ]"
        >
          <div class="flex flex-[2_2_0px] flex-col justify-between gap-3">
            <div class="flex flex-col gap-1">
              <div class="flex items-center gap-1 mb-1">
                <span class="material-symbols-outlined text-primary text-xs" style="font-variation-settings: 'FILL' 1">
                  {{ getTagIcon(course.tag) }}
                </span>
                <p class="text-primary text-[10px] font-bold uppercase tracking-wider">{{ course.tag }}</p>
              </div>
              <p class="text-primary text-base font-bold leading-tight">{{ course.title }}</p>
              <p class="text-gray-500 dark:text-gray-400 text-xs font-normal line-clamp-1">{{ course.description }}</p>
              <p class="text-gray-400 text-xs font-normal mt-1">
                {{ course.duration }} &bull; {{ course.questionsCount }} questions &bull;
                {{ course.progress === 100 ? 'Completed' : (course.progress && course.progress > 0 ? `${course.progress}% completed` : 'Not started') }}
              </p>
            </div>
            <button
              :disabled="course.progress === 100"
              :class="[
                'flex min-w-[100px] max-w-[120px] items-center justify-center rounded-lg h-9 px-4 text-sm font-bold shadow-sm transition-transform',
                course.progress === 100
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-primary text-white active:scale-95',
              ]"
            >
              <span class="truncate">
                {{ course.progress === 100 ? 'Completed' : (course.progress && course.progress > 0 ? 'Continue' : 'Start') }}
              </span>
            </button>
          </div>
          <AppImage
            :src="course.image"
            alt="Course Image"
            customClass="w-24 h-24 rounded-lg flex-shrink-0"
          />
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="flex flex-col items-center justify-center py-20 px-10 text-center gap-4">
        <div class="size-20 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          <span class="material-symbols-outlined text-gray-400 text-4xl">inventory_2</span>
        </div>
        <div class="space-y-1">
          <p class="text-gray-900 dark:text-white font-bold text-lg">No courses available</p>
          <p class="text-gray-500 dark:text-gray-400 text-sm">Please check back later or contact your instructor.</p>
        </div>
        <button @click="lessonsStore.getList(authStore.user?.id)" class="text-primary font-bold text-sm mt-2">Refresh</button>
      </div>
    </main>

    <!-- Nav -->
    <nav class="fixed bottom-0 w-full max-w-[480px] bg-white/90 dark:bg-background-dark/90 backdrop-blur-lg border-t border-gray-100 dark:border-gray-800 flex justify-around items-center h-20 pb-4 z-40">
      <div class="flex-1 flex flex-col items-center justify-center gap-1 text-primary cursor-pointer">
        <span class="material-symbols-outlined font-bold text-[28px]" style="font-variation-settings: 'FILL' 1">menu_book</span>
        <span class="text-xs font-bold">Learning</span>
      </div>
      <div
        class="flex-1 flex flex-col items-center justify-center gap-1 text-gray-400 dark:text-gray-600 cursor-pointer"
        @click="router.push('/history')"
      >
        <span class="material-symbols-outlined text-[28px]">history_edu</span>
        <span class="text-xs font-medium">History</span>
      </div>
    </nav>
    <div class="h-6 bg-white dark:bg-background-dark w-full fixed bottom-0 max-w-[480px] z-30"></div>
  </div>
</template>

