import { createRouter, createWebHashHistory } from 'vue-router'
import { firstRoute, mapMenuToRoutes } from '@/utils/map-menu'
import { localCache } from '@/utils/cache'
import { TOKEN } from '@/constants'

// mock
import testRoutes from './testRoutes'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/main',
    },
    {
      path: '/main',
      component: () => import('@/views/main/main.vue'),
      children: testRoutes,
    },
    {
      path: '/login',
      component: () => import('@/views/login/login.vue'),
    },
    {
      path: '/:patchMatch(.*)',
      component: () => import('@/views/notFound/not-found.vue'),
    },
  ],
})

export function addRoutesWithMenu(menus: any) {
  // 获取匹配到的所有路由
  const routes = mapMenuToRoutes(menus)

  // 动态添加路由到router中
  for (const route of routes) {
    router.addRoute('main', route)
  }
}

router.beforeEach((to) => {
  const token = localCache.getCache(TOKEN)
  if (to.path.startsWith('/main') && !token) {
    return '/login'
  }
  if (to.path === '/login' && token) {
    return '/main'
  }
  if (to.path === '/main' && firstRoute) {
    return firstRoute.path
  }
})

export default router
