// import { getUserInfo } from "@/api/user"

/**储存用户state信息 */
const state = {
  // 共享一下资源信息
  // 为什么不共享呢?因为刷新会意味着重新登陆或者token失效
  userInfo: {}
}

/**同步更改state的信息 */
const mutations = {}

/**异步调取个人信息 */
const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
