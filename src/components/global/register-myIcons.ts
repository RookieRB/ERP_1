import component from 'element-plus/es/components/tree-select/src/tree-select-option.mjs'
import type { App } from 'vue'

function addMyIconComponents(app: App) {
  const iconComponents: Record<string, any> = import.meta.glob('../myIconsComponents/*.vue', {
    eager: true,
  })
  // 遍历组件
  for (const path in iconComponents) {
    // 获取组件的默认导出
    const component = iconComponents[path].default
    // 提取文件名作为组件名，例如：MyButton.vue -> MyButton
    const componentName = path
      .split('/')
      .pop()
      ?.replace(/\.\w+$/, '')
    // 注册全局组件
    app.component(componentName as string, component)
  }
}

export default addMyIconComponents
