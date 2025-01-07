const testRoutes = [
  {
    path: '/main/dashboard/analysis',
    name: '营收报表',
    component: () => import('@/views/main/dashboard/analysis/analysis.vue'),
  },
  {
    path: '/main/dashboard/workbench',
    name: '工作台',
    component: () => import('@/views/main/dashboard/workbench/workbench.vue'),
  },
  {
    path: '/main/application/menu',
    name: '菜单管理',
    component: () => import('@/views/main/application/menu/menu.vue'),
  },
  {
    path: '/main/application/dept',
    name: '部门管理',
    component: () => import('@/views/main/application/dept/dept.vue'),
  },
  {
    path: '/main/application/user-management',
    name: '角色管理',
    component: () => import('@/views/main/application/userManagement/userManagement.vue'),
  },
  {
    path: '/main/application/user',
    name: '用户管理',
    component: () => import('@/views/main/application/user/user.vue'),
  },
  {
    path: '/resources/class',
    name: '课程资源',
    component: () => import('@/views/main/resources/classResources/classResources.vue'),
  },
]
export default testRoutes
