<template>
  <el-dialog :title="form.type === 'view' ? '查看' : '编辑'" :visible="true">
    <el-form :model="form" :readonly="form.type === 'view'">
      <el-form-item label="日期" :label-width="formLabelWidth">
        <el-input v-model="form.date" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="姓名" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="省份" :label-width="formLabelWidth">
        <el-input v-model="form.province" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="市区" :label-width="formLabelWidth">
        <el-input v-model="form.city" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="地址" :label-width="formLabelWidth">
        <el-input v-model="form.address" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="handleOk">取 消</el-button>
      <el-button type="primary" @click="handleOk">确 定</el-button>
    </div>
  </el-dialog>
</template>
<script>
export default {
  data() {
    return {
      dialogTableVisible: false,
      form: {},
      formLabelWidth: "120px",
      readonlyVisible: false
    }
  },
  methods: {
    init(listValue, type) {
      this.form = { ...listValue }
      this.form.type = type
    },
    /**
     * 确定按钮,关闭弹框,
     */
    handleOk() {
      this.$emit("closeDialog")
    }
  }
}
</script>
