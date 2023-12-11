/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  const valid_map = ["admin", "editor"]
  return valid_map.indexOf(str.trim()) >= 0
}

function padLeftZero(str) {
  return ("00" + str).substr(str.length)
}

/**
 * 校验手机号
 * // 格式校验 1开头 11位的数字 第二位是3-9之间的数字  正则表达式/自定义校验函数
 * **/
export function validateMobile(str) {
  return /^1[3-9]\d{9}$/.test(str) // 校验得到一个布尔值
}

export function formatDate(date, fmt = "yyyy-MM-dd") {
  if (!(date instanceof Array)) {
    date = new Date(date)
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length))
  }
  const o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds()
  }
  for (const k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      const str = o[k] + ""
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str))
    }
  }
  return fmt
}
