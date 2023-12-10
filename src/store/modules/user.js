import { getUserProfile, getUserDetailById } from "@/api/api"

/**储存用户state信息 */
const state = {
  // 共享一下资源信息
  // 为什么不共享呢?因为刷新会意味着重新登陆或者token失效
  userInfo: {}
}

/**同步更改state的信息 */
const mutations = {
  SAVEINFO(state, payload) {
    state.userInfo = payload
  }
}

/**异步调取个人信息 */
const actions = {
  async getUserInfo({ commit }) {
    let { data } = await getUserProfile()
    const { data: detailResult } = await getUserDetailById(data.userId) // 获取用户信息中的头像
    commit("SAVEINFO", { ...data, ...detailResult }) // 提交mutations
    console.log({ ...data, ...detailResult }, "setUserInfo")
    return data // 这里写return 是为了八天之后的一次相遇  一次伏笔 一次萍水相逢
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
