/**
 * 状态码默认封装
 */

const DEFAULTSTATUS = {
  /**错误请求 */
  ERRORPRO: 400,
  /**资源未授权 */
  UNAUTHORIZED: 401,
  /**禁止访问 */
  ACCESSFORBIDDEN: 403,
  /**未找到所请求资源 */
  NOTFOUND: 404,
  /**不允许使用该方法 */
  NOTALLOW: 405,
  /**请求超时 */
  TIMEOUT: 408,
  /**内部服务器错误 */
  SERVERERROE: 500,
  /**未实现 */
  UNREALIZED: 501,
  /**网关错误 */
  GATEWAY: 502,
  /**服务不可用 */
  SERVICEUN: 503,
  /**网关超时 */
  GATEWAYTIMEOUT: 504,
  /**HTTP版本不受支持 */
  UNSUPPORT: 505
}

export default DEFAULTSTATUS
