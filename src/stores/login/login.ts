import { defineStore } from 'pinia'
import router, { addRoutesWithMenu } from '@/router'
import type { AccountInfo } from './type'
import { accountLogin, getUserById, getRoleMenus } from '@/service/login/login'
import { localCache } from '@/utils/cache'
import { TOKEN, USER_INFO, USER_MENUES, USER_PERMISSIONS } from '@/constants'
import { mapMenuToPermissions } from '@/utils/map-menu'

interface ILoginState {
  token: string
  userInfo: any
  userMenus: any[]
  permission: string[]
}

const userLoginStore = defineStore('login', {
  state: (): ILoginState => ({
    token: '',
    userInfo: {},
    userMenus: [],
    permission: [],
  }),
  actions: {
    async accountLoginAction(account: AccountInfo) {
      // 返回的登录信息
      const loginRes = await accountLogin(account)

      const { id, token } = loginRes.data
      this.token = token

      // 保存cache
      localCache.setCache(TOKEN, token)

      // 保存用户信息
      // 根据用户id获取用户的信息
      const userRs = await getUserById(id)
      this.userInfo = userRs.data
      localCache.setCache(USER_INFO, this.userInfo)

      // 根据role的id获取菜单
      const roleId = this.userInfo.role.id
      // 获取的登录用户的权限表
      const menusRes = await getRoleMenus(roleId)
      this.userMenus = menusRes.data
      localCache.setCache(USER_MENUES, this.userMenus)

      // 保存权限信息
      const permission = mapMenuToPermissions(this.userMenus)
      this.permission = permission
      localCache.setCache(USER_PERMISSIONS, this.permission)

      // 获取所有数据
      // const mainStore = useMainStore()
      // mainStore.fetchEntireDataAction()

      // 5.添加动态路由
      addRoutesWithMenu(this.userMenus)
      // 跳转到首页
      router.push('/main')
    },
  },
})
