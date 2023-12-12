import Vue from "vue"
import VueRouter from "vue-router"
import store from "@/store"
import Layout from "../layout"
import NProgress from "nprogress"
import "nprogress/nprogress.css"

Vue.use(VueRouter)
// 一进页面请求接口,进行预加载
store.dispatch("menuList/getpermission")
// 静态需要处理的路由信息
/**
 * 将静态路由变成动态路由,我的动态路由信息是从接口请求过来的,我的路由表应该怎么配置
 * 请求接口,动态路由再哪里去请求,我登录请求接口,立马调用请求接口.在路由前置守卫中,获取动态路由,
 * 如何把动态路由和静态路由结合起来  router.addRoute()
 *
 * 我们的/sys/profile是每个人可以查看的单独路由信息,当前角色下的信息,只有路由信息,没有名称
 * /sys/permission 所有的路由信息,有路由信息和名称
 * 两者结合,可以筛选出 属于当前用户独特的路由加名称
 *
 * filters,筛选两个数组的相同数据
 *
 */
export const childrenRoutes = [
  {
    path: "dashboard",
    name: "dashboard",
    component: () => import("@/views/dashboard/index"),
    meta: { title: "首页", icon: "menu", isAthoout: false }
  },
  {
    path: "employees",
    name: "employees",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/employees/index.vue"),
    meta: {
      icon: "menu",
      title: "员工" // 这里为什么非要叫title? 因为layout组件中用到了这个组件
    }
  },
  {
    path: "setting",
    name: "setting",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/setting/index.vue"),
    meta: {
      icon: "setting",
      title: "公司设置" // 这里为什么非要叫title? 因为layout组件中用到了这个组件
    }
  },
  {
    path: "permissions",
    name: "permissions",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/permission/index.vue"),
    meta: {
      icon: "lock",
      title: "权限管理" // 这里为什么非要叫title? 因为layout组件中用到了这个组件
    }
  },
  {
    path: "deparments",
    name: "deparments",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/departments/index.vue"),
    meta: {
      icon: "menu",
      title: "组织架构" // 这里为什么非要叫title? 因为layout组件中用到了这个组件
    }
  },
  {
    path: "attendance",
    name: "attendance",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/attendance/index.vue"),
    meta: {
      icon: "menu",
      title: "考勤" // 这里为什么非要叫title? 因为layout组件中用到了这个组件
    }
  }
]

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
    redirect: "/dashboard",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Layout,
    children: childrenRoutes
  }
]

/**实例化路由,注册路由 ,完成路由表*/
const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  console.log(store)

  setTimeout(() => {
    console.log(store.getters.menuNewList, "store.getters.menuNewList")
  }, 1000)

  next()
})

router.afterEach(() => {
  NProgress.done()
})
export default router
