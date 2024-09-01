<template>
  <div>
    <div class="mask-for-animation" ref="containerRef"></div>

    <div class="mask-for-waiting" @click="animationFunction" v-show="waiting">
      <span class="waiting-icon mgc_mouse_line animation-scale"></span>
      <div class="waiting-tip">Click anywhere to enter</div>
      <div class="waiting-tip">点击任意位置进入</div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'HelloView'
})

import { ref } from 'vue'
import { useRouter } from 'vue-router'

// Lottie动画
import lottie from 'lottie-web'
import animationData from '@/assets/lottie/hello.json'

// 路由
const router = useRouter()

// 等待状态
let waiting = ref(true)

// 获取Lottie动画容器
const containerRef = ref()

const animationFunction = () => {
  // console.log('animationFunction')
  if (!waiting.value) return
  waiting.value = false

  // Lottie动画
  const container = containerRef.value
  let animation = lottie.loadAnimation({
    animationData: animationData,
    loop: false,
    autoplay: false,
    renderer: 'svg',
    container: container
  })
  animation.setSpeed(0.6)
  // 播放动画
  animation.play()

  // 监听动画播放完成事件
  animation.addEventListener('complete', () => {
    // 动画销毁
    animation.destroy()

    // 跳转页面
    setTimeout(() => {
      router.push('/home')
    }, 0)
  })
}
</script>

<style scoped lang="scss">
.mask-for-animation {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.mask-for-waiting {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  // background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.6);
  // 禁止选中
  user-select: none;

  .waiting-icon {
    font-size: 100px;
    margin-bottom: 30px;
  }

  .waiting-tip {
    font-size: 16px;
    line-height: 30px;
  }
}

// 动画样式：原地放大缩小，循环播放
.animation-scale {
  animation: scale 1.5s linear infinite;
}
@keyframes scale {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}
</style>
