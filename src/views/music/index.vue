<template>
  <div>
    <Window>
      <!-- 路由占位符 -->
      <router-view />

      <Transition>
        <LyricsPlayer v-show="showLyricsPlayer" :show="showLyricsPlayer" :music-info="musicInfo" />
      </Transition>

      <template v-slot:ornaments>
        <Ornaments>
          <PlayerBar
            :music-info="musicInfo"
            :show-lyrics="showLyricsPlayer"
            @toggle-lyrics="toggleLyricsPlayer"
          />
        </Ornaments>
      </template>
    </Window>

    <TabBar :tabs="tabs" />
  </div>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'
import { type Tab } from '@/types/tabBar'
import TabBar from '@/components/TabBar/index.vue'
import Window from '@/components/Window/index.vue'
import Ornaments from '@/components/Ornaments/index.vue'
import PlayerBar from './PlayerBar.vue'
// 异步加载歌词播放器组件
// import LyricsPlayer from './LyricsPlayer.vue'
const LyricsPlayer = defineAsyncComponent(() => import('./LyricsPlayer.vue'))

defineOptions({
  name: 'MusicView'
})

// 当前音乐信息
const musicInfo = ref({
  name: '平凡的一天',
  musician: '毛不易',
  cover:
    'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/09/71/70/09717058-6e6d-b1a2-5bd0-dc8932d76f2a/4894944725954.jpg/316x316bb.webp'
})

// 是否显示歌词播放器
const showLyricsPlayer = ref(true)
// 切换歌词播放器显示状态
const toggleLyricsPlayer = () => {
  showLyricsPlayer.value = !showLyricsPlayer.value
}

// 定义标签项
const tabs: Tab[] = [
  {
    icon: 'home_3_fill',
    name: 'Home',
    path: '/home',
    active: false
  },
  {
    icon: 'grid_line',
    name: 'Grid',
    path: '/music',
    active: false
  },
  {
    icon: 'tv_1_line',
    name: 'TV',
    path: '/music',
    active: false
  },
  {
    icon: 'radar_line',
    name: 'Radar',
    path: '/Radar',
    active: false
  },
  {
    icon: 'album_2_line',
    name: 'Album',
    path: '/music',
    active: true
  },
  {
    icon: 'search_line',
    name: 'Search',
    path: '/music',
    active: false
  }
]
</script>

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
