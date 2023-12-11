import Vue from "vue"
import VueRouter from "vue-router"
import Layout from "../layout"
Vue.use(VueRouter)

// 静态需要处理的路由信息
/**
 * 将静态路由变成动态路由,我的动态路由信息是从接口请求过来的,我的路由表应该怎么配置
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

const router = new VueRouter({
  routes
})

export default router
