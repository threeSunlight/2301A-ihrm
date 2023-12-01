<template>
  <div class="about">
    <h1></h1>
    <Helloword />
    <el-button @click="getRole">角色</el-button>
  </div>
</template>

<script>
import Helloword from "$components/HelloWorld.vue"
import { setToken } from "@/util/auth"
export default {
  data() {
    return {}
  },
  components: {
    Helloword
  },
  created() {
    console.log(process.env)
    setTimeout(() => {
      this.$http
        .post(this.$http.addURL("/sys/login"), {
          mobile: "13800000002",
          password: "hm#qd@23!"
        })
        .then((res) => {
          console.log(res, "res")
          // 表示请求成功
          if (res.code === 10000) {
            setToken(res.data)
          } else {
            alert(res.message)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }, 1000)
  },

  methods: {
    getRole() {
      this.$http
        .get(this.$http.addURL("/sys/role"))
        .then((res) => {
          console.log(res, "res")
          // 表示请求成功
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>
