import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import http from "./utils/httpRequest"
import "@/styles/index.scss" // global css
import "@/icons"
import {
  Button,
  Select,
  MessageBox,
  Table,
  TableColumn,
  Dialog,
  Input,
  Form,
  FormItem,
  Notification,
  Message,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Image,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup
} from "element-ui"

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Select)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Dialog)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Image)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message
Vue.prototype.$http = http
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app")
