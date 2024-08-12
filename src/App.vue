<template>
  <TheEnvironment />
  <TheScreen />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

import TheEnvironment from '@/views/environment/index.vue'
import TheScreen from '@/views/screen/index.vue'

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
    '%cvisionOS',
    'color: #fff; background: #00f; padding: 5px 10px; border-radius: 5px; font-size: 16px;'
  )
  console.log('%chttps://github.com/Barry-Flynn/visionOS', 'color: #00f; font-size: 12px;')
})
</script>

<style scoped></style>
