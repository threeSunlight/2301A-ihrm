/**
 * 第一步: 引入封装的axios,http
 * 第二步:  封装返回的登录接口
 */

import http from "../util/httpRequest"

// 登录
const login = (params) => http.post(http.addURL("/sys/login"), params)

export { login }
