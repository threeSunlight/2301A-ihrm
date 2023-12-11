<template>
  <div class="dashboard-container">
    <div class="app-container">
      <!-- 基础布局 -->
      <el-card class="page-tools">
        <!-- 卡片 -->
        <el-row type="flex" justify="space-between" align="middle">
          <el-col>
            <div class="before">
              <!-- 这里要放置一个图标 因为所有的用组件的地方都有图标-->
              <!-- 队首-插槽 -->
              <i class="el-icon-info" />
              <span>共{{ workerTotal }}条记录</span>
            </div>
          </el-col>
          <el-col>
            <el-row type="flex" justify="end">
              <el-button size="small" type="danger" @click="exportData">简单表头导出</el-button>
              <el-button size="small" type="info">复杂表头导出</el-button>
              <el-button size="small" type="success" @click="$router.push('/import')">excel导入</el-button>
              <el-button size="small" type="primary" @click="showDialog = true">新增员工</el-button>
            </el-row>
          </el-col>
        </el-row>
      </el-card>
      <!-- 表格 -->
      <el-card>
        <el-table :data="workertableList">
          <!-- prop属性 -->
          <!-- type=index表示索引下标 + 1 -->
          <el-table-column label="序号" sortable="" type="index" />
          <el-table-column label="姓名" sortable="" prop="username" />
          <el-table-column label="头像">
            <template v-slot="{ row }">
              <img
                v-imagerror="require('@/assets/common/bigUserHeader.png')"
                style="width: 100px; height: 100px"
                :src="row.staffPhoto"
                alt=""
              />
            </template>
          </el-table-column>
          <el-table-column label="手机号" sortable="" prop="mobile" />
          <el-table-column label="工号" sortable="" prop="workNumber" />
          <el-table-column label="聘用形式" sortable="" prop="formOfEmployment" :formatter="formatEmployment" />
          <el-table-column label="部门" sortable="" prop="departmentName" />
          <el-table-column label="入职时间" sortable="" prop="timeOfEntry">
            <!-- 传入插槽- 作用域插槽 -->
            <template v-slot="{ row }">
              <!-- 过滤器   表达式值 | 过滤器 -->
              <!-- 过滤器想要传参？？？ -->
              {{ row.timeOfEntry }}
            </template>
          </el-table-column>
          <el-table-column label="账户状态" sortable="" prop="enableState">
            <template v-slot="{ row }">
              <!-- 没有值 -->
              <!-- 用switch组件 enable等于1 表示当前用户是ok的 否则状态是没设置的-->
              <el-switch :value="row.enableState === 1" />
            </template>
          </el-table-column>
          <el-table-column label="操作" width="280">
            <template v-slot="{ row }">
              <!-- 放置按钮 -->
              <el-button size="small" type="text" @click="$router.push(`/employees/detail/${row.id}`)">查看</el-button>
              <el-button size="small" type="text">转正</el-button>
              <el-button size="small" type="text">调岗</el-button>
              <el-button size="small" type="text">离职</el-button>
              <el-button size="small" type="text" @click="editRole(row.id)">角色</el-button>
              <el-button size="small" type="text" @click="deleteEmployee(row.id)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-row style="height: 80px" type="flex" justify="center" align="middle">
          <!-- 放置分页组件 -->
          <!-- layout表示分页组件要显示部件内容 -->
          <el-pagination :total="workerTotal" :current-page="1" :page-size="10" background layout="prev,pager,next" />
        </el-row>
      </el-card>
    </div>
  </div>
</template>

<script>
import { xlsx } from "@/utils/dowload"
import { mapActions, mapGetters } from "vuex"
import EmployeeEnum from "@/api/constant/employees" // 引入枚举对象

export default {
  data() {
    return {
      EmployeeEnum,
      listHander: {
        username: "姓名",
        mobile: "手机号",
        workNumber: "工号",
        formOfEmployment: "聘用形式",
        departmentName: "部门",
        timeOfEntry: "入职时间",
        enableState: "用户状态"
      }
    }
  },
  created() {},
  computed: {
    ...mapGetters(["workerTotal", "workertableList"])
  },
  methods: {
    ...mapActions("worker", ["getUserListInfo"]),
    // 格式化聘用格式
    // 需要返回值- 和计算属性没关系
    formatEmployment(row, column, cellValue) {
      // 可以通过row获取对应的值
      // 也可以直接用cellValue 但是请注意 需要配置prop
      const obj = this.EmployeeEnum.hireType.find((item) => item.id + "" === cellValue + "")
      // 找满足条件的对象
      return obj ? obj.value : "未知"
    },
    exportData() {
      xlsx(this.workertableList, this.listHander, "人资列表下载")
    }
  },
  mounted() {
    this.getUserListInfo()
  }
}
</script>

<style lang="scss" scoped>
.page-tools {
  margin: 10px 0;
  .before {
    line-height: 34px;
    i {
      margin-right: 5px;
      color: #409eff !important;
    }
    display: inline-block;
    padding: 0px 10px;
    border-radius: 3px;
    border: 1px solid rgba(145, 213, 255, 1);
    background: rgba(230, 247, 255, 1);
  }
}
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
