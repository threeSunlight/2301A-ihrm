<template>
  <div>
    <div>组织架构</div>
    <svg-icon icon-class="订阅" />
    <svg-icon icon-class="email" />
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
    <span class="btn">ddddddd</span>
  </div>

  <!-- 弹框 -->
</template>

<script>
/**
 * 业务判断步骤,
 * 第一步: 判断pid = -1,
 * 第二步: 循环判断,pid="", push到chuidren中
 * 第三部: 判断,pid=id,push到children
 * {
		"id": "604e115c7bfcfa45d019d3e9",
		"pid": "-1",
		"name": "传智教育",
		"code": "1",
		"introduce": "程序员的摇篮",
		"createTime": "2023-11-17 10:04:22"
		},
		我们想要的数据结构
		[
			{
				"id": "604e115c7bfcfa45d019d3e9",
				"pid": "-1",
				"name": "传智教育",
				"code": "1",
				"introduce": "程序员的摇篮",
				"createTime": "2023-11-17 10:04:22",
				children: [
					{
						"id": "",
						"pid": "",
						"name": "",
						"code": "1",
						"introduce": "程序员的摇篮",
						"createTime": "2023-11-17 10:04:22",
						children: [{
									"id": "",
							"pid": "",
							"name": "",
							"code": "1",
							"introduce": "程序员的摇篮",
							"createTime": "2023-11-17 10:04:22",
					}]
				]
			}
		]
 */
import * as API from "@/api/api"

export default {
  name: "DepartementsValue",
  created() {
    API.departList().then((res) => {
      console.log(res)
      let result = this.transListToTreeData(res.data.depts, "")
      console.log(result, "55")
    })
  },
  methods: {
    /**
     * pid = -1这个特殊情况外,
     * pid= "" // 父节点
     * pid= id // 父节点下面子节点
     * 总结: 先找到根节点,
     * 永远对比得是pid和id,
     * 然后把id传递过去,将获取到的子节点进行添加
     * 然后再想id的item去添加children节点
     *
     * 第一步: 对比 ""拿到父节点,push到新的数组中
     * 第二步: 根据父节点的id对比pid,拿到相关的children,push到children中
     *
     */
    transListToTreeData(list, id) {
      var arr = []
      // 遍历数组 一条一条的去找
      // 从哪里开始找 我怎么知道找到的是对的呢？
      // 树遍历一般先找到根
      // 如果pid为空 表示他是根, 他是第一级的节点
      list.forEach((item) => {
        if (item.pid === id) {
          // 认为找了第一级的节点  找pid等于当前item.id的节点
          const children = this.transListToTreeData(list, item.id)
          if (!item.children) {
            // 如果长度大于0 表示我有孩子
            item.children = children
          }
          arr.push(item) // 当前节点
        }
      })
      return arr
    }
  }
}
</script>
<style lang="scss">
@import "../../assets/styles/index.scss";
</style>
