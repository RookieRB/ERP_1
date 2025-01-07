import type { AccountInfo } from '@/stores/login/type'
import myRequest from '../index'

export function accountLogin(account: AccountInfo) {
  return myRequest.post({
    url: '/login',
    data: account,
  })
}

export function getUserById(id: number) {
  return myRequest.get({
    url: `/users/${id}`,
  })
}

export function getRoleMenus(id: number) {
  return myRequest.get({
    url: `/role/${id}/menu`,
  })
}
