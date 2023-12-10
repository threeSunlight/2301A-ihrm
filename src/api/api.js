/**
 * 第一步: 引入封装的axios,http
 * 第二步:  封装返回的登录接口
 */

import http from "../utils/httpRequest"

// 登录
const login = (params) => http.post(http.addURL("/sys/login"), params)

/**组织架构 */
const departList = () => http.get(http.addURL("/company/department"))

/**获取用户信息 */

/**获取用户信息 */
const getUserProfile = () =>
  http({
    method: "post",
    url: http.addURL("/sys/profile"),
    header: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  })
/**获取用户头像 */
/** *
 *
 * 获取用户的基本信息  现在写它 完全是为了显示头像,以及获取全部的信息
 * **/
const getUserDetailById = (id) => http.get(http.addURL(`/sys/user/${id}`))

export { login, departList, getUserProfile, getUserDetailById }
