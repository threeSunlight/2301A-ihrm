<template>
  <el-container>
    <el-aside :width="!isCollapse ? '210px' : '65px'">
      <!-- 图标 -->
      <el-image
        class="imgSet"
        :class="{ imgSetCoplles: isCollapse }"
        :src="require('../../assets/common/logo.png')"
        fit="contain"
      ></el-image>
      <!-- 侧边栏 -->
      <el-menu
        default-active="1-4-1"
        class="el-menu-vertical-demo"
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
      <el-header>
        <!-- 左侧图标: 用svg
				  1. 点击折叠的时候,让菜单折叠起来,并且Ihrm图标样式缩小,
					2. 点击的时候,当进行折叠,动态加载样式. 图标进行翻转,样式修改,进行转换 :class :style
						:class="{is-active: true}"


					代码逻辑:
						给当前图标,添加一个事件,在data中定义一个值,来回切换,修改值的属性,实现动态折叠

				 -->
        <div class="left">
          <div style="padding: 0 15px; vertical-align: sub" @click="toggleClick">
            <svg
              :class="{ 'is-actives': !isCollapse }"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#fff"
            >
              <path
                d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z"
              />
            </svg>
          </div>
          <!-- 中间字体 -->
          <div class="app-breadcrumb">{{ $t("test.companyName") }}</div>
          <!-- 体验版 -->
          <div class="breadBtn">体验版</div>
        </div>

        <div class="right">
          <!-- 右侧切换字体 -->
          <div>
            <Lang />
          </div>
          <!-- 全屏 -->
          <div><FullScreen /></div>
          <!-- 头像下拉展示 -->
          <div>头像下拉</div>
        </div>
      </el-header>
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
import Lang from "@/components/lang"
import FullScreen from "@/components/ScreenFulls"

export default {
  components: {
    Lang,
    FullScreen
  },

  data() {
    return {
      isCollapse: false
    }
  },
  methods: {
    toggleClick() {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>
<style lang="scss">
// .el-menu {
//   width: 101%;
// }
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
.el-header,
.el-footer {
  padding: 0 !important;
  height: 50px !important;
  color: #e9eef3 !important;
  font-family: "Courier New", Courier, monospace;
  background-color: #3d6df8;
  text-align: center;
  line-height: 50px;
  div {
    display: inline-block;
  }
  & .left {
    float: left;
    & .app-breadcrumb {
      font-size: 18px;
      margin-left: 10px;
      color: #fff;
      cursor: text;
    }
    & .breadBtn {
      background: #84a9fe;
      font-size: 14px;
      padding: 0 6px;
      display: inline-block;
      height: 30px;
      line-height: 34px;
      border-radius: 10px;
      margin-left: 15px;
      margin-bottom: 4px;
      color: #fff !important;
    }
  }
  .right {
    float: right;
    margin-right: 20px;
    & div {
      margin-right: 10px;
    }
  }
}
.asideCollapse {
  width: 64px !important;
}
.el-aside {
  transition: width 0.28s;
  background: url("../../assets/common/leftnavBg.png") no-repeat 0 100%,
    -webkit-linear-gradient(bottom, #3d6df8, #5b8cff);
  transition: width 0.28s;

  background-color: transparent;
  height: 100vh;
  overflow-x: hidden !important;

  & .imgSet {
    width: 138px;
    height: 10%;
    margin-left: 28px;
    margin-top: 6px;
    transition: width 0.28s;
  }
  & .imgSetCoplles {
    width: 64px;
    margin-left: 2px;
    // height: 10%;
    margin-top: 6px;
    transition: width 0.28s;
  }
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

.is-actives {
  transform: rotate(180deg);
}
</style>
