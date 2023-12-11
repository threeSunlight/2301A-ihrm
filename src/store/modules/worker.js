// 员工基本信息
import { getuserList } from "@/api/api"

const state = {
  page: 1,
  size: 10,
  total: 0,
  tableList: []
}

const mutations = {
  UpdaTableList(state, played) {
    state.total = played.data.total
    state.tableList = played.data.rows
  }
}

const actions = {
  async getUserListInfo({ state, commit }) {
    try {
      let result = await getuserList({ page: state.page, size: state.size })
      commit("UpdaTableList", { ...result })
      console.log(result)
    } catch (error) {
      console.log(error, "员工列表错误")
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
