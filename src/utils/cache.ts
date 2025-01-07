enum MYCacheType {
  local,
  session,
}

class MYCache {
  storage: Storage
  constructor(type: MYCacheType) {
    this.storage = type === MYCacheType.local ? localStorage : sessionStorage
  }

  setCache(key: string, value: any) {
    this.storage.setItem(key, JSON.stringify(value))
  }

  getCache(key: string) {
    const value = this.storage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }

  removeCache(key: string) {
    this.storage.removeItem(key)
  }

  clearCache() {
    this.storage.clear()
  }
}

const localCache = new MYCache(MYCacheType.local)

const sessionCache = new MYCache(MYCacheType.session)

export { localCache, sessionCache }
