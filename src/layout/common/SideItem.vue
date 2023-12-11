<template>
  <div>
    <el-menu-item v-for="childRoute in routes" :key="childRoute.path" :index="childRoute.path">
      <i :class="`el-icon-${childRoute.meta.icon}`"></i>
      <span slot="title">{{ childRoute.meta.title }}</span>
    </el-menu-item>
  </div>
</template>
<script>
export default {
  props: ["routes"],

  created() {
    console.log(this.routes)
  }
}
</script>
<style lang="scss">
.el-menu-item:hover {
  color: #5b8cff !important;
  i {
    color: #5b8cff !important;
    vertical-align: middle;
  }
}
</style>
