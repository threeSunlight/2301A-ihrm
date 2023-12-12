import Vue from "vue"
import Vuex from "vuex"
import users from "./modules/user"
import worker from "./modules/worker"
import menuList from "./modules/menu"
import getters from "./getters"
Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  modules: {
    users,
    worker,
    menuList
  }
})
