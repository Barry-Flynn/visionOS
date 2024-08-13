<template>
  <div class="window canvas">
    <div class="apps-row">
      <!-- 循环渲染第1-4个app-item -->
      <div class="app-item" v-for="(app, index) in appList.slice(0, 4)" :key="index">
        <div class="app-icon glass-material">
          <!-- <img :src="`@/assets/images/app-icons/${app.icon}`" :alt="app.name" /> -->
        </div>
        <div class="app-name ellipsis">{{ app.name }}</div>
      </div>
    </div>
    <div class="apps-row">
      <!-- 循环渲染第5-9个app-item -->
      <div class="app-item" v-for="(app, index) in appList.slice(4, 9)" :key="index">
        <div class="app-icon glass-material">
          <!-- <img :src="`@/assets/images/app-icons/${app.icon}`" alt="app.name" /> -->
        </div>
        <div class="app-name ellipsis">{{ app.name }}</div>
      </div>
    </div>
    <div class="apps-row">
      <!-- 循环渲染第10-13个app-item -->
      <div class="app-item" v-for="(app, index) in appList.slice(9, 13)" :key="index">
        <div class="app-icon glass-material">
          <!-- <img :src="`@/assets/images/app-icons/${app.icon}`" alt="app.name" /> -->
        </div>
        <div class="app-name ellipsis">{{ app.name }}</div>
      </div>
    </div>
  </div>
  <TabBar />
</template>

<script setup lang="ts">
import TabBar from '@/components/TabBar/index.vue'

defineOptions({
  name: 'AppsView'
})

// 定义app列表
const appList = [
  {
    name: 'TV',
    icon: 'TV.png'
  },
  {
    name: 'Music',
    icon: 'Music.png'
  },
  {
    name: 'Mindfulness',
    icon: 'Mindfulness.png'
  },
  {
    name: 'Settings',
    icon: 'Settings.png'
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
    icon: 'Photos.png'
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
    name: 'Compatinle Apps',
    icon: 'CompatibleApps.png'
  }
]
</script>

<style scoped lang="scss">
.canvas {
  border: 1px solid red;
  .apps-row {
    display: flex;
    margin-top: 20px;
    gap: 16px;
    justify-content: center;

    .app-item {
      // 尺寸
      width: 120px;
      height: 100px;
      // 边框
      border: 1px solid yellow;
      .app-icon {
        // 尺寸
        width: 70px;
        height: 70px;
        // 边框，用于覆盖glass-material部分属性
        border-radius: 50%;
        // 定位
        margin: 4px auto;

        //   img {
        //     width: 100%;
        //     height: 100%;
        //   }
        // }
      }

      .app-name {
        font-size: 12px;
        color: #f2f2f2;
        opacity: 0.7;
        text-align: center;
      }
    }
  }
}
</style>
