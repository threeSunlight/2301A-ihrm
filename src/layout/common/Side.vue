<template>
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    background-color="transparent"
    text-color="#fff"
    active-text-color="#fff"
    router
  >
    <SideItem :routes="routes" />
  </el-menu>
</template>
<script>
import SideItem from "./SideItem.vue"
import { childrenRoutes } from "@/router"
export default {
  name: "Side",
  components: {
    SideItem
  },
  props: ["isCollapse"],
  data() {
    return {
      routes: childrenRoutes
    }
  }
}
</script>
<style lang="scss">
i {
  display: inline-block !important;
  font-size: 24px !important;
  margin-right: 16px !important;
  color: #fff !important;
  vertical-align: middle;
  font-family: "Courier New", Courier, monospace;
}
.el-menu {
  border: none !important;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 101%;
  min-height: 400px;
  border: none !important;
}
</style>
