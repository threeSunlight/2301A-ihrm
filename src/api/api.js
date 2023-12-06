/**
 * 第一步: 引入封装的axios,http
 * 第二步:  封装返回的登录接口
 */

import http from "../utils/httpRequest"

// 登录
const login = (params) => http.post(http.addURL("/sys/login"), params)

/**组织架构 */
const departList = () => http.get(http.addURL("/company/department"))

export { login, departList }
