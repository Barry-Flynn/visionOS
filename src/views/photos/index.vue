<template>
  <Window>
    <div class="wrap hide-scrollbar">
      <div class="photo-album" v-for="album in albums" :key="album.name">
        <img class="album-cover" :src="album.cover" alt="album.name" />
        <div class="album-name ellipsis">{{ album.name }}</div>
      </div>
    </div>
  </Window>

  <TabBar :tabs="tabs" />
</template>

<script setup lang="ts">
import { type Tab } from '@/types/tabBar'
import Window from '@/components/Window/index.vue'
import TabBar from '@/components/TabBar/index.vue'

defineOptions({
  name: 'PhotosView'
})

// 定义标签项
const tabs: Tab[] = [
  {
    icon: 'moment_line',
    name: 'Moments',
    path: '/moments',
    active: false
  },
  {
    icon: 'history_anticlockwise_line',
    name: 'Memories',
    path: '/memories',
    active: false
  },
  {
    icon: 'photo_album_line',
    name: 'Photo Albums',
    path: '/photoAlbums',
    active: true
  },
  {
    icon: 'album_2_fill',
    name: 'Albums',
    path: '/albums',
    active: false
  },
  {
    icon: 'panoramas_fill',
    name: 'Panoramas',
    path: '/panoramas',
    active: false
  },
  {
    icon: 'search_line',
    name: 'Search',
    path: '/search',
    active: false
  }
]

// 定义相册列表
const albums = [
  {
    name: '2021',
    cover: 'https://picsum.photos/192/140?random=1'
  },
  {
    name: '2013',
    cover: 'https://picsum.photos/192/140?random=2'
  },
  {
    name: '2014',
    cover: 'https://picsum.photos/192/140?random=3'
  },
  {
    name: '2015',
    cover: 'https://picsum.photos/192/140?random=4'
  },
  {
    name: '2016',
    cover: 'https://picsum.photos/192/140?random=5'
  },
  {
    name: '2017',
    cover: 'https://picsum.photos/192/140?random=6'
  },
  {
    name: '2018',
    cover: 'https://picsum.photos/192/140?random=7'
  },
  {
    name: '2019',
    cover: 'https://picsum.photos/192/140?random=8'
  },
  {
    name: '2020',
    cover: 'https://picsum.photos/192/140?random=9'
  },
  {
    name: '2021',
    cover: 'https://picsum.photos/192/140?random=10'
  },
  {
    name: '2022',
    cover: 'https://picsum.photos/192/140?random=11'
  },
  {
    name: '2023',
    cover: 'https://picsum.photos/192/140?random=12'
  }
]
</script>

<style scoped lang="scss">
.wrap {
  // border: 1px solid red;
  margin: 20px;
  // 设置列表高度，超出部分滚动
  height: 462px;
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: 20px;
  // 自动布局，每行 4 个，间距 20px，最后一行左对齐
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  justify-content: space-between;

  .photo-album {
    // border: 1px solid yellow;
    width: 192px;
    height: 140px;
    border-radius: 20px;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.2);
    position: relative;
    // 禁止选中
    user-select: none;

    .album-cover {
      width: 100%;
      height: 100%;
      object-fit: cover;
      // 禁止拖拽
      pointer-events: none;
      // 过渡
      transition: transform 0.2s ease-in-out;
    }

    .album-name {
      font-size: 16px;
      font-weight: bold;
      color: rgba(255, 255, 255, 0.9);
      text-align: left;
      padding: 20px;
      // 定位
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      // 阴影
      text-shadow: 0 1px 10px rgba(0, 0, 0, 0.4);
    }

    &:hover {
      .album-cover {
        // 放大
        transform: scale(1.2);
      }
    }
  }
}
</style>
