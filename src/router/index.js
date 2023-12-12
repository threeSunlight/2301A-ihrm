import Vue from "vue"
import VueRouter from "vue-router"
import store from "@/store"
import Layout from "../layout"
import NProgress from "nprogress"
import "nprogress/nprogress.css"
import { getToken } from "@/utils/auth"
Vue.use(VueRouter)

// RBAC权限,根据不同的用户,返回不同的路径,返回不同的权限
export const routes = [
  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/common/Login.vue")
  },

  {
    path: "/",
    name: "layout",
    redirect: "/dashboard",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Layout,
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: () => import("@/views/dashboard/index"),
        meta: { title: "首页", icon: "menu", isAthoout: false }
      }
    ]
  }
]

// 首页信息
const Dashboard = {
  path: "dashboard",
  name: "dashboard",
  component: () => import("@/views/dashboard/index"),
  meta: { title: "首页", icon: "menu", isAthoout: false }
}

/**实例化路由,注册路由 ,完成路由表*/
const createRouter = () =>
  new VueRouter({
    routes
  })

const router = createRouter()

// {
// 	path: "settings",
// 	name: "settings",
// 	component: () => import(/* webpackChunkName: "about" */ "../views/settings/index.vue"),
// 	meta: {
// 		icon: "setting",
// 		title: "公司设置" // 这里为什么非要叫title? 因为layout组件中用到了这个组件
// 	}
// },

/***
 * 思路
 * 1. 前置路由守卫是进入路由的第一步关卡,所以动态路由的接口在这里去请求.获取路由信息
 * 			获取路由表信息有两种方法
 *      (1). store.getters.menuNewList
 *      (2). store.state.menuList.newList
 * 2. 我们获取到的路由信息,不符合路由规则,所以我们需要处理数据,变成路由规则的数据
 * 3. 注册一条新的子路由,调用router.addRoute的方法, router.addRoute(parentname,child)
 * 4. 但是,左侧side组件是引用路由表中的动态路由完成子路由页面渲染,需要将动态路由添加到一个数组中,
 *    方便Side.vue页面使用
 * 5. 首页是每个人都可以看到的信息,所以我们手动添加首页信息
 *
 *
 * 权限按钮标识
 * 1. 后端在返回菜单的信息的时候,会返回一个permission标识,里面包含按钮的权限标识
 * 2. 我们使用v-if控制权限按钮的加载,
 * 			1. 写一个公共方法,判断一下传递进来的按钮标识,是否包含在数组中,返回true和false显隐
 *      2. 自定义指令
 */

/**路由前置守卫 */
router.beforeEach((to, from, next) => {
  NProgress.start()
  const admin = getToken()
  console.log(admin, "admin")
  console.log(!admin)
  if (!admin) {
    if (to.path !== "/login") {
      next({ path: "/login" })
    } else {
      next()
    }
  } else {
    // 一进页面请求接口,进行预加载
    store.dispatch("menuList/getpermission")
    setTimeout(() => {
      // 没有处理的初始化动态路由信息
      let initDynamic = store.state.menuList.newList
      let Dynamic = []
      initDynamic.forEach((childRoute) => {
        // 符合规则的一条子路由已经完成
        let item = {
          path: "/" + childRoute.code,
          name: childRoute.code,
          component: () => import(/* webpackChunkName: "about" */ `@/views/${childRoute.code}/index.vue`),
          meta: {
            icon: "setting",
            title: childRoute.name // 这里为什么非要叫title? 因为layout组件中用到了这个组件
          }
        }
        router.addRoute("layout", item)
        // 放至空数组,供侧边栏使用
        Dynamic.push(item)
      })
      Dynamic.unshift(Dashboard)
      localStorage.setItem("Routes", JSON.stringify(Dynamic))
    }, 1000)
    next()
  }
})

router.afterEach(() => {
  NProgress.done()
})
export default router
