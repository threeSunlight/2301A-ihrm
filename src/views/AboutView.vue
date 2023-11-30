<template>
  <div class="about">
    <h1></h1>
    <Helloword />
  </div>
</template>

<script>
import axios from "axios"
import Helloword from "$components/HelloWorld.vue"
export default {
  data() {
    return {}
  },
  components: {
    Helloword
  },
  created() {
    axios
      .post("/api/sys/login", {
        mobile: "17764049967",
        password: 123456
      })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>
