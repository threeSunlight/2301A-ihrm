<template>
  <div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="date" label="日期" width="150"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
      <el-table-column prop="province" label="省份" width="120"> </el-table-column>
      <el-table-column prop="city" label="市区" width="120"> </el-table-column>
      <el-table-column prop="address" label="地址" width="300"> </el-table-column>
      <el-table-column prop="zip" label="邮编" width="120"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row, 'view')" type="text" size="small">查看</el-button>
          <el-button type="text" size="small" @click="handleClick(scope.row, 'editor')">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--
      3组: 声明一个变量,传递给子组件,子组件通过v-show和v-if判断,传过去的变量能否被1或2整除,整除显示,不整除隐藏,三元表达式
			点击关闭,写一个子传父的事件,在减1
			2组: 绑定ref,获取子组件的方法,控制显隐,子组件件点击取消,子传父,复制为false
			1组: 定义一个变量,点击v-show
			4组: 父组件.sync,传过去,点击查看,
		 -->
    <ViewAndEditor v-if="ViewAndEditorVisibles" ref="ViewAndEditorRef" @closeDialog="closeDialog" />
  </div>
  <!-- 弹框 -->
</template>

<script>
import ViewAndEditor from "./ViewAndEditor.vue"
export default {
  name: "DepartementsValue",
  components: {
    ViewAndEditor
  },

  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333
        }
      ],
      ViewAndEditorVisibles: false
    }
  },
  methods: {
    handleClick(row, type) {
      console.log(row) // DOM元素更新是异步的
      this.ViewAndEditorVisibles = true

      this.$nextTick(() => {
        // console.log(this.$refs.ViewAndEditorRef, "82")
        this.$refs.ViewAndEditorRef.init(row, type)
      })
    },
    /**关闭弹框 */
    closeDialog() {
      this.ViewAndEditorVisibles = false
    }
  }
}
</script>
