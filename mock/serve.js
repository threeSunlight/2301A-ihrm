// node.js
// 启动node.js服务地址,写接口的地方
// 模拟接口数据,编写接口
/***
 * 第一步: 引入express服务
 * 第二步: 引入mock.js随机生成mock数据
 * 第三步: 引入模拟json
 *
 * 第四步: 实例化express
 * 第五步: 启动服务
 * 第六步: 编写接口
 */
const express = require("express")
const Mock = require("mockjs")
const loginRes = require("./common/login.json")
const port = 3001
const app = express()

app.post("/sys/login", (require, response) => {
  response.json(Mock.mock(loginRes))
})

app.listen(port, () => {
  console.log(`我启动服务了${port}`)
})
