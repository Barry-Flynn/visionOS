import { createRouter } from 'vue-router'
// import { createWebHistory } from 'vue-router'
import { createWebHashHistory } from 'vue-router'
import HelloView from '@/views/hello/index.vue'
import AppsView from '@/views/apps/index.vue'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes: [
    // {
    //   // Redirect to the first child route
    //   path: '/',
    //   redirect: { name: 'apps' }
    // },
    {
      path: '/',
      name: 'hello',
      component: HelloView
    },
    {
      path: '/apps',
      name: 'apps',
      component: AppsView
    },
    {
      path: '/music',
      name: 'music',
      component: () => import('@/views/music/index.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('@/views/settings/index.vue'),
      redirect: { name: 'profile' },
      children: [
        {
          path: 'profile',
          name: 'profile',
          component: () => import('@/views/settings/profile.vue')
        },
        {
          path: 'environments',
          name: 'environments',
          component: () => import('@/views/settings/environments.vue')
        }
      ]
    },
    {
      path: '/safari',
      name: 'safari',
      component: () => import('@/views/safari/index.vue')
    },
    {
      path: '/photos',
      name: 'photos',
      component: () => import('@/views/photos/index.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/about/index.vue')
    }
  ]
})

export default router
