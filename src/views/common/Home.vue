<template>
  <el-container>
    <el-aside width="200px">
      <!-- 图标 -->
      <el-image
        style="width: 140px; margin-left: 30px; margin-top: 6px"
        :src="require('../../assets/common/logo.png')"
        fit="contain"
      ></el-image>
      <!-- 侧边栏 -->
      <el-menu
        default-active="1-4-1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
        background-color="transparent"
        text-color="#fff"
        active-text-color="#fff"
        router
      >
        <el-menu-item index="/dashboard">
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">员工</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">公司设置</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">权限管理</span>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="el-icon-setting"></i>
          <span slot="title">社保</span>
        </el-menu-item>
        <el-menu-item index="6">
          <i class="el-icon-setting"></i>
          <span slot="title">考勤</span>
        </el-menu-item>
        <el-menu-item index="/deparments">
          <i class="el-icon-setting"></i>
          <span slot="title">组织架构</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
  <!--
		require: 同步的,会阻止代码运行,代码任意位置都可以写
		import:  异步的,只能放在顶部去编写,是编译的时候再运行
		兼容性: 现在的浏览器不兼容import,基本都会通过babel吧他转化为require
	 -->
</template>
<script>
export default {}
</script>
<style lang="scss">
.el-menu-item:hover {
  color: #5b8cff !important;
  i {
    color: #5b8cff !important;
    vertical-align: middle;
  }
}
i {
  display: inline-block !important;
  font-size: 24px !important;
  margin-right: 16px !important;
  color: #fff !important;
  vertical-align: middle;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background: url("../../assets/common/leftnavBg.png") no-repeat 0 100%,
    -webkit-linear-gradient(bottom, #3d6df8, #5b8cff);
  transition: width 0.28s;
  width: 210px !important;
  background-color: transparent;
  height: 100vh;
  overflow-x: hidden !important;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
