import Vue from "vue"
import VueRouter from "vue-router"
import Layout from "../layout"
Vue.use(VueRouter)
// RBAC权限,根据不同的用户,返回不同的路径,返回不同的权限
const routes = [
  // {
  //   path: "/",
  //   name: "home",
  //   component:
  // },
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
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: () => import("@/views/dashboard/index"),
        meta: { title: "首页", icon: "dashboard" }
      },
      {
        path: "deparments",
        name: "deparments",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ "../views/departments/index.vue")
      },
      {
        path: "attendance",
        name: "attendance",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ "../views/attendance/index.vue")
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
