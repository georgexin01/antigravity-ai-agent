import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/login/index.vue'),
      meta: { requiresAuth: false, title: 'Login' },
    },
    {
      path: '/courses',
      name: 'CourseList',
      component: () => import('@/views/courses/list.vue'),
      meta: { requiresAuth: true, title: 'My Courses' },
    },
    {
      path: '/courses/:id',
      name: 'CourseDetail',
      component: () => import('@/views/courses/detail.vue'),
      meta: { requiresAuth: true, title: 'Course Details' },
    },
    {
      path: '/courses/:id/video',
      name: 'CourseVideo',
      component: () => import('@/views/courses/video.vue'),
      meta: { requiresAuth: true, title: 'Training Video' },
    },
    {
      path: '/courses/:id/quiz',
      name: 'Quiz',
      component: () => import('@/views/quiz/index.vue'),
      meta: { requiresAuth: true, title: 'Interactive Quiz' },
    },
    {
      path: '/quiz-result',
      name: 'QuizResult',
      component: () => import('@/views/quiz/result.vue'),
      meta: { requiresAuth: true, title: 'Quiz Results' },
    },
    {
      path: '/quiz-review',
      name: 'QuizReview',
      component: () => import('@/views/quiz/review.vue'),
      meta: { requiresAuth: true, title: 'Result Review' },
    },
    {
      path: '/history',
      name: 'History',
      component: () => import('@/views/history/index.vue'),
      meta: { requiresAuth: true, title: 'Attempt History' },
    },
    {
      path: '/',
      redirect: '/courses',
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/login',
    },
  ],
})

// Navigation guard
router.beforeEach((to) => {
  const token = localStorage.getItem('accessToken')
  const isAuthenticated = !!token

  if (to.meta.requiresAuth && !isAuthenticated) {
    return { name: 'Login' }
  }
  if (to.name === 'Login' && isAuthenticated) {
    return { name: 'CourseList' }
  }
  return true
})

router.afterEach((to) => {
  const baseTitle = 'LAA Training Quiz'
  document.title = to.meta.title ? `${to.meta.title} | ${baseTitle}` : baseTitle
})

export default router
