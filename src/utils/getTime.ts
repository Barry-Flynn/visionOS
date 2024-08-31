/**
 * 获取指定时区时间 Date
 * @param zone 时区，正数为东，负数为西。如获取东八区(北京)时间，zone为8
 * @returns
 */

export function getLocalTime(zone: number) {
  const d = new Date()
  // 获取本地时间
  const local_ms = d.getTime()
  // 本地时间与UTC时间的 时间偏移差(getTimezoneOffset的单位是min)
  const offset_ms = d.getTimezoneOffset() * 60 * 1000
  // 转为utc时间，因为各时区的utc时间相同
  const utc_ms = local_ms + offset_ms
  // 计算出 目标时区 的标准时间
  const target_ms = utc_ms + zone * 60 * 60 * 1000
  return new Date(target_ms)
}

/**
 * 格式化时间 Date 为 YYYY-MM-DD HH:mm:ss
 * @param date Date 类型的时间
 * @returns
 */
export function formatDate(date: Date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
  const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
  const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
  const minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
  const second = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`
}
