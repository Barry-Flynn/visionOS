<template>
  <TheEnvironment />
  <TheScreen />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

import TheEnvironment from '@/views/environment/index.vue'
import TheScreen from '@/views/screen/index.vue'
// 鼠标样式
import cursorInit from '@/utils/cursor'

// 挂载完成时
onMounted(() => {
  // console.log('App mounted')

  // 自定义鼠标样式
  cursorInit()

  // 屏蔽右键
  document.oncontextmenu = () => {
    // ElMessage({
    //   message: "为了浏览体验，本站禁用右键",
    //   grouping: true,
    //   duration: 2000,
    // });
    return false
  }

  // 屏蔽F12
  document.onkeydown = (e) => {
    if (e.keyCode === 123) {
      // ElMessage({
      //   message: "为了浏览体验，本站禁用F12",
      //   grouping: true,
      //   duration: 2000,
      // });
      return false
    }
  }

  // 屏蔽Ctrl+Shift+I
  document.onkeydown = (e) => {
    if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
      // ElMessage({
      //   message: "为了浏览体验，本站禁用Ctrl+Shift+I",
      //   grouping: true,
      //   duration: 2000,
      // });
      return false
    }
  }

  // 屏蔽Ctrl+U
  document.onkeydown = (e) => {
    if (e.ctrlKey && e.keyCode === 85) {
      // ElMessage({
      //   message: "为了浏览体验，本站禁用Ctrl+U",
      //   grouping: true,
      //   duration: 2000,
      // });
      return false
    }
  }

  // 控制台输出 https://github.com/Barry-Flynn/visionOS
  console.log(
    '\n%c visionOS %c https://github.com/Barry-Flynn/visionOS \n',
    'color: #ffffff; background: #0000ff; padding:5px 0; border-radius: 5px 0 0 5px;',
    'background: #b9ddff; padding:5px 0;'
  )
})
</script>

<style scoped lang="scss"></style>
