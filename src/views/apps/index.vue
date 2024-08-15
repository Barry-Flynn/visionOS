<template>
  <div class="window canvas">
    <div class="apps-row">
      <!-- 循环渲染第1-4个app-item -->
      <div class="app-item" v-for="(app, index) in appList.slice(0, 4)" :key="index">
        <div class="app-icon glass-material" @click="goTo(app.path)">
          <img :src="`/images/app-icons/${app.icon}`" :alt="app.name" />
        </div>
        <div class="app-name ellipsis">{{ app.name }}</div>
      </div>
    </div>
    <div class="apps-row">
      <!-- 循环渲染第5-9个app-item -->
      <div class="app-item" v-for="(app, index) in appList.slice(4, 9)" :key="index">
        <div class="app-icon glass-material" @click="goTo(app.path)">
          <img :src="`/images/app-icons/${app.icon}`" alt="app.name" />
        </div>
        <div class="app-name ellipsis">{{ app.name }}</div>
      </div>
    </div>
    <div class="apps-row">
      <!-- 循环渲染第10-13个app-item -->
      <div class="app-item" v-for="(app, index) in appList.slice(9, 13)" :key="index">
        <div class="app-icon glass-material" @click="goTo(app.path)">
          <img :src="`/images/app-icons/${app.icon}`" alt="app.name" />
        </div>
        <div class="app-name ellipsis">{{ app.name }}</div>
      </div>
    </div>

    <!-- 分页器 -->
    <div class="canvas-bottom">
      <PaginationDots />
    </div>
  </div>
  <TabBar />
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

import TabBar from '@/components/TabBar/index.vue'
import PaginationDots from '@/components/Pagination/index.vue'

defineOptions({
  name: 'AppsView'
})

// 数据
// 定义app列表
const appList = [
  {
    name: 'TV',
    icon: 'TV.png'
  },
  {
    name: 'Music',
    icon: 'Music.png',
    path: '/music'
  },
  {
    name: 'Mindfulness',
    icon: 'Mindfulness.png'
  },
  {
    name: 'Settings',
    icon: 'Settings.png',
    path: '/settings'
  },
  {
    name: 'Freeform',
    icon: 'Freeform.png'
  },
  {
    name: 'Safari',
    icon: 'Safari.png'
  },
  {
    name: 'Photos',
    icon: 'Photos.png',
    path: '/photos'
  },
  {
    name: 'Notes',
    icon: 'Notes.png'
  },
  {
    name: 'App Store',
    icon: 'AppStore.png'
  },
  {
    name: 'Mail',
    icon: 'Mail.png'
  },
  {
    name: 'Messages',
    icon: 'Messages.png'
  },
  {
    name: 'Keynote',
    icon: 'Keynote.png'
  },
  {
    name: 'Compatible Apps',
    icon: 'CompatibleApps.png'
  }
]

// 方法
const router = useRouter()
// 跳转到指定路径
const goTo = (path?: string) => {
  // console.log('goTo', path)
  if (path) {
    router.push(path)
  } else {
    console.log('未指定路径')
  }
}
</script>

<style scoped lang="scss">
.canvas {
  // border: 1px solid red;
  // 禁止鼠标选中
  user-select: none;

  .apps-row {
    // border: 1px solid green;
    display: flex;
    margin-top: 20px;
    gap: 16px;
    justify-content: center;

    .app-item {
      // border: 1px solid yellow;
      // 尺寸
      width: 120px;
      height: 100px;

      .app-icon {
        // 尺寸
        width: 70px;
        height: 70px;
        // 背景模糊，用于覆盖glass-material部分属性，从而获得更好效果
        backdrop-filter: blur(10px);
        // 边框，用于覆盖glass-material部分属性
        border-radius: 50%;
        // 定位
        margin: 4px auto;
        // 过渡
        transition: transform 0.2s ease-in-out;

        img {
          width: 100%;
          height: 100%;
          // 禁止鼠标拖拽
          pointer-events: none;
        }

        &:hover {
          // 放大
          transform: scale(1.1);
        }
      }

      .app-name {
        font-size: 12px;
        color: #f2f2f2;
        opacity: 0.7;
        text-align: center;
      }
    }
  }

  .canvas-bottom {
    // border: 1px solid blue;
    margin-top: 20px;
  }
}
</style>
