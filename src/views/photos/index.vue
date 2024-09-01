<template>
  <div>
    <Window>
      <div class="wrap hide-scrollbar">
        <div class="photo-album" v-for="album in albums" :key="album.name">
          <img class="album-cover" :src="album.cover" alt="album.name" />
          <div class="album-name ellipsis">{{ album.name }}</div>
        </div>
      </div>

      <template v-slot:ornaments>
        <Ornaments>
          <div class="button-group">
            <Button size="large" bg>Years</Button>
            <Button size="large">Months</Button>
            <Button size="large">Days</Button>
            <Button size="large">All Photos</Button>
          </div>
        </Ornaments>
      </template>
    </Window>

    <TabBar :tabs="tabs" />
  </div>
</template>

<script setup lang="ts">
import { type Tab } from '@/types/tabBar'
import { useI18n } from 'vue-i18n'
import Window from '@/components/Window/index.vue'
import TabBar from '@/components/TabBar/index.vue'
import Ornaments from '@/components/Ornaments/index.vue'
import Button from '@/components/Button/index.vue'

defineOptions({
  name: 'PhotosView'
})

const { t } = useI18n()

// 定义标签项
const tabs: Tab[] = [
  {
    icon: 'pic_fill',
    name: t('photos.tabs.Spatial'),
    path: '/spatial',
    active: false
  },
  {
    icon: 'history_anticlockwise_line',
    name: t('photos.tabs.Memories'),
    path: '/memories',
    active: false
  },
  {
    icon: 'photo_album_line',
    name: t('photos.tabs.Library'),
    path: '/library',
    active: true
  },
  {
    icon: 'album_2_fill',
    name: t('photos.tabs.Albums'),
    path: '/albums',
    active: false
  },
  {
    icon: 'panoramas_fill',
    name: t('photos.tabs.Panoramas'),
    path: '/panoramas',
    active: false
  },
  {
    icon: 'search_line',
    name: t('photos.tabs.Search'),
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

.button-group {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
}
</style>
