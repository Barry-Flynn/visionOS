<template>
  <div class="loading" ref="containerRef"></div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'HelloView'
})

import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

// Lottie动画
import lottie from 'lottie-web'
// import animationData from '@/assets/lottie/welcome-green.json'
// import animationData from '@/assets/lottie/welcome.json'
// import animationData from '@/assets/lottie/hello-black.json'
// import animationData from '@/assets/lottie/hello-white.json'
import animationData from '@/assets/lottie/hello.json'

// 路由
const router = useRouter()
// 获取Lottie动画容器
const containerRef = ref()

// 挂载完成时
onMounted(() => {
  // Lottie动画
  const container = containerRef.value
  if (container) {
    let animation = lottie.loadAnimation({
      animationData: animationData,
      loop: false,
      autoplay: false,
      renderer: 'svg',
      container: container
    })
    animation.setSpeed(0.8)
    animation.play()
    // 监听动画播放完成事件
    animation.addEventListener('complete', () => {
      console.log('跳转')
      setTimeout(() => {
        router.push('/apps')
      }, 1000)
    })
  }
})
</script>

<style scoped lang="scss">
.loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
