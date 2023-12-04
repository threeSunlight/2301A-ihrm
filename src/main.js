import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import http from "./util/httpRequest"
import { Button, Select, MessageBox, Table, TableColumn, Dialog, Input, Form, FormItem } from "element-ui"

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Select)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Dialog)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$http = http
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app")
