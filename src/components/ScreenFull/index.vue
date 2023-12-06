<template>
  <!-- 放置一个图标 -->
  <div style="display: inline-block" @click="click">
    <svg-icon :icon-class="isFullscreen ? 'exit-fullscreen' : 'fullscreen'" />
    <!-- // 注意：要想这个图片能正确显示，还必须在`src\icons\svg`下有对应的fullscreen.svg文件 -->
  </div>
</template>

<script>
import screenfull from "screenfull"

export default {
  name: "FullScreen",
  data() {
    return {
      isFullscreen: false
    }
  },
  mounted() {
    this.init()
  },
  beforeDestroy() {
    this.destroy()
  },
  methods: {
    click() {
      screenfull.toggle()
    },
    change() {
      this.isFullscreen = screenfull.isFullscreen
    },
    init() {
      if (screenfull.enabled) {
        screenfull.on("change", this.change)
      }
    },
    destroy() {
      if (screenfull.enabled) {
        screenfull.off("change", this.change)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.fullscreen {
  width: 20px;
  height: 20px;
  color: #fff;
  cursor: pointer;
}
</style>
