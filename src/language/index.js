// 完成多语言的实例化
import Vue from "vue"
import Cookies from "js-cookie"
import VueI18n from "vue-i18n"
//引入element处理语言

import enLocale from "element-ui/lib/locale/lang/en"
import zhLocale from "element-ui/lib/locale/lang/zh-CN"
import CN from "./zh"
import EN from "./en"

Vue.use(VueI18n)
// 实例化
export default new VueI18n({
  locale: Cookies.get("language") || "zh",
  messages: {
    zh: {
      ...zhLocale, //elementui中文包
      ...CN
    },
    en: {
      ...enLocale, //elementui英文包
      ...EN
    }
  },
  silentTranslationWarn: true
})
