import type { RouteRecordRaw } from 'vue-router'

// export let firstRoute: RouteRecordRaw | undefined = undefined
export let firstRoute: RouteRecordRaw | undefined = {
  path: '/main/dashboard/analysis',
  component: () => import('@/views/main/dashboard/analysis/analysis.vue'),
}

function loadLocalRoutes() {
  // 加载 所有的模板
  const modules: Record<string, any> = import.meta.glob('../router/main/**/*.ts', { eager: true })

  // 遍历所有模板返回路由对象
  const routes: RouteRecordRaw[] = []
  for (const key in modules) {
    const route = modules[key]
    routes.push(route)
  }
  return routes
}

export function mapMenuToPermissions(menus: any[]) {
  const permissions: string[] = []

  function _recurseGetPermission(menuList: any[]) {
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        _recurseGetPermission(menu.children ?? [])
      } else {
        permissions.push(menu.permission)
      }
    }
  }
  _recurseGetPermission(menus)
  return permissions
}

export function mapMenuToRoutes(menus: any[]) {
  // 加载所有的路由对象
  const localRoutes = loadLocalRoutes()

  // 进行权限匹配
  const finalRoutes: RouteRecordRaw[] = []

  function _recureseGetRoute(menus: any[]) {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = localRoutes.find((item) => item.path === menu.url)
        if (route) finalRoutes.push(route)
        if (!firstRoute && route) {
          firstRoute = route
        } else {
          if (menu.type === 1 && menu.children.length) {
            finalRoutes.push({ path: menu.url, redirect: menu.children[0].url })
          }
          _recureseGetRoute(menu.children ?? [])
        }
      }
    }
  }
  _recureseGetRoute(menus)

  return finalRoutes
}
