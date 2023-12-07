<template>
  <div @click="handlerClick">
    <svg-icon :icon-class="isfull ? 'exit-fullscreen' : 'fullscreen'" class="svgIcon"> </svg-icon>
    <!-- <svg-icon icon-class="exit-fullscreen" class="svgIcon"> </svg-icon> -->
  </div>
</template>
<script>
import screenfull from "screenfull"

export default {
  data() {
    return {
      isfull: false
    }
  },
  mounted() {
    //this.init()
  },
  methods: {
    handlerClick() {
      screenfull.toggle()
      if (screenfull.isEnabled) {
        screenfull.on("change", () => {
          this.isfull = screenfull.isFullscreen
        })
      }
    },
    change() {
      console.log("chang")
      this.isfull = screenfull.isFullscreen
      console.log(this.isfull)
    }
    // init() {
    //   console.log(screenfull.isEnabled, "screenfull.isEnabled")
    //   if (screenfull.isEnabled) {
    //     screenfull.on("click", this.change())
    //   }
    //   console.log("全屏初始化")
    // }
  },
  destroyed() {
    screenfull.off("change", () => {
      console.log("销毁")
    })
  }
}
</script>
<style lang="scss">
.svgIcon {
  margin: 5px;
}
</style>
