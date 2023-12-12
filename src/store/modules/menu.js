import { getUserProfile, getMenuList } from "@/api/api"

const state = {
  permissionList: [],
  profileList: [],
  newList: [],
  // 权限标识
  permission: []
}
const mutations = {
  getpermis(state, data) {
    state.permissionList = data.data

    // console.log(state.permissionList, "permissionList")
  },
  getpro(state, data) {
    state.profileList = data.data.roles.menus
    // 模拟接口返回数据
    state.permission = ["employees:add", "employees:list", "employees:info", "employees:daochu"]
    // console.log(state.profileList, "profileList")
  },
  filterList(state, played) {
    console.log(played)
    const {
      singleList,
      alliMenlist: { data }
    } = played
    const { menus } = singleList.data.roles
    state.newList = data.filter((item) => {
      return menus.filter((element) => element === item.code).length > 0
    })
    console.log(state.newList, "新数组")
  }
}

const actions = {
  async getpermission({ commit }) {
    let alliMenlist = await getMenuList()
    let singleList = await getUserProfile()
    commit("filterList", { alliMenlist, singleList })
    commit("getpermis", alliMenlist)
    // 单人信息储存
    commit("getpro", singleList)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
