export const getCurrentTimeFormat = (date: Date): string => {
  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0') // 月份+1，补齐两位
  const day = date.getDate().toString().padStart(2, '0') // 获取日期
  const hour = date.getHours().toString().padStart(2, '0') // 小时
  const minute = date.getMinutes().toString().padStart(2, '0') // 分钟
  const second = date.getSeconds().toString().padStart(2, '0') // 秒

  return `${year}-${month}-${day} ${hour}:${minute}:${second}`
}

// 将number转化为string类型并每三位添加一个,坐区分
export const numberToString = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

// 获取组件中的tranform属性的tanslateX值
export function getTranslateX(currentTransform: string): Array<number> {
  // 更新后的正则表达式，提取 translate、rotate 和 scale 中的值
  const transformRegex =
    /translate\(([-+]?\d+(\.\d+)?)px,\s*([-+]?\d+(\.\d+)?)px\)\s*rotate\(([-+]?\d+(\.\d+)?)deg\)\s*scale\(([-+]?\d+(\.\d+)?)\)/

  const match = currentTransform.match(transformRegex)

  if (match) {
    const translateX = match[1] // 第一个数字：x 值
    const translateY = match[3] // 第二个数字：y 值
    const rotate = match[5] // 旋转角度
    const scale = match[7] // 缩放比例

    return [Number(translateX), Number(translateY), Number(rotate), Number(scale)]
  } else {
    console.log('No transform values found.')
  }
  return [0, 0, 0, 0]
}
