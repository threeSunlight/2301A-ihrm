<template>
  <div class="sideLink">
    <el-row>
      <el-col :span="8">
        <a href="#">
          <span class="icon iconGuide" />
          <p>入门指南</p>
        </a>
      </el-col>
      <el-col :span="8">
        <a href="#">
          <span class="icon iconHelp" />
          <p>在线帮助手册</p>
        </a>
      </el-col>
      <el-col :span="8">
        <a href="#">
          <span class="icon iconTechnology" />
          <p>联系技术支持</p>
        </a>
      </el-col>
    </el-row>
  </div>
</template>
<script></script>
<style lang="scss" scoped>
.sideNav,
.sideLink {
  padding: 30px 0 12px;
  .sideBtn {
    padding: 16px 26px;
    font-size: 16px;
    margin: 10px 5px;
  }
}
.sideLink {
  text-align: center;
  .icon {
    display: inline-block;
    width: 76px;
    height: 76px;
    background: url("../../../assets/common/icon.png") no-repeat;
  }
  .iconGuide {
    background-position: 0 0;
  }
  .iconHelp {
    background-position: -224px 0;
  }
  .iconTechnology {
    background-position: -460px 0;
  }
}
</style>
