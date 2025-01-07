const navMenusMockData = [
  {
    id: 1,
    name: '首页',
    icon: 'homeIcon',
    children: [
      {
        id: 101,
        name: '营收报表',
        icon: 'IncomeIcon',
        path: '/main/dashboard/analysis',
      },
      {
        id: 102,
        name: '工作台',
        icon: 'WorkStationIcon',
        path: '/main/dashboard/workbench',
      },
    ],
  },
  {
    id: 2,
    name: '项目管理',
    icon: 'ApplicationIcon',
    children: [
      {
        id: 201,
        icon: 'MenuIcon',
        path: '/main/application/menu',
        name: '菜单管理',
      },
      {
        id: 202,
        icon: 'DeptIcon',
        path: '/main/application/dept',
        name: '部门管理',
      },
      {
        id: 203,
        icon: 'UserManagementIcon',
        path: '/main/application/user-management',
        name: '角色管理',
      },
      {
        id: 204,
        icon: 'UsersIcon',
        path: '/main/application/user',
        name: '用户管理',
      },
    ],
  },
  {
    id: 3,
    icon: 'LogIcon',
    name: '日志模块',
  },
  {
    id: 4,
    icon: 'BookResourcesIcon',
    name: '课程资源模块',
    children: [
      {
        id: 401,
        icon: 'MediaIcon',
        path: '/resources/class',
        name: '课程资源',
      },
    ],
  },
]

export default navMenusMockData
