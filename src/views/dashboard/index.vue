<template>
  <div class="dashboard-container">
    <!-- 顶部 -->
    <el-card class="header-card">
      <div class="header-card-div">
        <div class="headImg">
          <el-image :src="defaultImg" />
        </div>
        <div class="headInfoTip">
          <p class="firstChild">早安，{{ userInfo.username }}，祝你开心每一天！</p>
          <p class="lastChild">{{ userInfo.username }} | {{ userInfo.company }} - {{ userInfo.departmentName }}</p>
        </div>
      </div>
    </el-card>
    <!-- 中间 -->
    <el-row :gutter="24">
      <el-col :span="13">
        <!-- 日历 -->
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>工作日历</span>
          </div>
          <workCalendar />
        </el-card>
        <!-- 公告 -->
        <el-card class="box-card">
          <div class="advContent">
            <div class="title">公告</div>
            <div class="contentItem">
              <ul class="noticeList">
                <li>
                  <div class="item">
                    <img src="@/assets/common/img.jpeg" alt="" />
                    <div>
                      <p><span class="col">朱继柳</span> 发布了 第1期“传智大讲堂”互动讨论获奖名单公布</p>
                      <p>2018-07-21 15:21:38</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <img src="@/assets/common/img.jpeg" alt="" />
                    <div>
                      <p><span class="col">朱继柳</span> 发布了 第2期“传智大讲堂”互动讨论获奖名单公布</p>
                      <p>2018-07-21 15:21:38</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <img src="@/assets/common/img.jpeg" alt="" />
                    <div>
                      <p><span class="col">朱继柳</span> 发布了 第3期“传智大讲堂”互动讨论获奖名单公布</p>
                      <p>2018-07-21 15:21:38</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="11">
        <!-- 流程申请 -->
        <el-card class="box-card headTit">
          <div slot="header" class="header headTit">
            <span>流程申请</span>
          </div>
          <div class="text item">
            <el-button>加班离职</el-button>
            <el-button>请假调休</el-button>
            <el-button>审批列表</el-button>
            <el-button>我的信息</el-button>
          </div>
        </el-card>
        <!-- 绩效指数 -->
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>绩效指数</span>
          </div>
          <radar />
        </el-card>
        <!-- 帮助连接 -->
        <el-card class="box-card">
          <div class="header headTit">
            <span>帮助链接</span>
          </div>
          <helpSrc />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex"
import radar from "./comonents/radar.vue"
import workCalendar from "./comonents/work-calendar.vue"
import helpSrc from "./comonents/helpSrc.vue"
export default {
  components: {
    radar,
    workCalendar,
    helpSrc
  },
  data() {
    return {
      value: new Date(),
      defaultImg: require("../../assets/common/head.jpg")
    }
  },
  computed: mapState("users", ["userInfo"]), // user 模块名称)
  methods: {
    ...mapActions("users", ["getUserInfo"])
  },
  created() {
    // 用语法糖
    this.getUserInfo()
  },
  mounted() {}
}
</script>
<style lang="scss" scoped>
.dashboard-container {
  margin: 10px;
  li {
    list-style: none;
  }
  .header-card {
    margin-bottom: 20px;
    p {
      margin: 10px 0px;
      padding: 0;
    }
    & .header-card-div {
      display: flex;
      align-items: center;
      .headImg {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background: #999;
        margin-right: 10px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .headInfoTip {
        .firstChild {
          font-size: 24px;
        }
        .lastChild {
          color: #7f8c8d;
          font-size: 20px;
        }
      }
    }
  }

  .box-card {
    padding: 5px 10px;
    margin-top: 20px;
    .header {
      span {
        color: #2c3e50;
        font-size: 24px;
      }
      .item {
        color: #97a8be;
        float: right;
        padding: 3px 0;
      }
    }
    .headTit {
      span {
        border-bottom: 4px solid #8a97f8;
        padding-bottom: 10px;
      }
    }
  }
  .advContent {
    background: #fff;
    border-radius: 5px 5px 0px 0px;
    .title {
      font-size: 16px;
      padding: 20px;
      font-weight: bold;
      border-bottom: solid 1px #ccc;
    }
    .contentItem {
      padding: 0 30px;
      min-height: 350px;
      .item {
        display: flex;
        padding: 18px 0 10px;
        border-bottom: solid 1px #ccc;
        .col {
          color: #8a97f8;
        }
        img {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          margin-right: 10px;
        }
        p {
          padding: 0 0 8px;
        }
      }
    }
  }
}
</style>
