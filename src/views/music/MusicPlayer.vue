<template>
  <div class="music-player">
    <Button size="large" icon="fast_rewind_fill" />
    <Button size="huge" icon="pause_fill" v-show="isPlaying" @click="handlePlay" />
    <Button size="huge" icon="play_fill" v-show="!isPlaying" @click="handlePlay" />
    <Button size="large" icon="fast_forward_fill" />

    <div class="music-info">
      <div class="music-cover">
        <img :src="musicInfo.cover" alt="music cover" />
      </div>
      <div class="music-detail">
        <div class="music-name ellipsis">{{ musicInfo.name }}</div>
        <div class="music-musician ellipsis">{{ musicInfo.musician }}</div>
      </div>
      <Button icon="bow_tie_fill" />
      <Button icon="more_1_fill" />

      <div class="progress-bar">
        <div class="progress" style="width: 33%"></div>
      </div>
    </div>

    <Button size="large" icon="message_4_line" />
    <Button size="large" icon="list_check_line" />
    <Button size="large" icon="volume_line" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from '@/components/Button/index.vue'

defineOptions({
  name: 'MusicPlayer'
})

// 当前音乐信息
const musicInfo = ref({
  name: 'Flowers',
  musician: 'Miley Cyrus',
  cover: 'https://picsum.photos/30/30?random=1'
})

// 是否播放
const isPlaying = ref(true)

// 播放/暂停
const handlePlay = () => {
  isPlaying.value = !isPlaying.value
}
</script>

<style scoped lang="scss">
.music-player {
  // border: 1px solid red;
  width: 500px;
  height: 40px;
  // 布局
  display: flex;
  justify-content: space-between;
  align-items: center;

  .music-info {
    // border: 1px solid yellow;
    width: 250px;
    height: 36px;
    margin: 2px 0;
    padding: 2px 4px 4px 4px;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    // 布局
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    overflow: hidden;

    .music-cover {
      // border: 1px solid green;
      width: 26px;
      height: 26px;
      border-radius: 4px;
      overflow: hidden;
      // 图片填充
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        // 禁止拖拽
        pointer-events: none;
      }
    }

    .music-detail {
      // border: 1px solid blue;
      width: 150px;
      height: 36px;
      padding: 4px;
      // 布局
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      .music-name {
        font-size: 12px;
        color: rgba(255, 255, 255, 0.9);
        width: 100%;
        // 禁止选中
        user-select: none;
      }
      .music-musician {
        font-size: 10px;
        color: rgba(255, 255, 255, 0.4);
        width: 100%;
        // 禁止选中
        user-select: none;
      }
    }

    .progress-bar {
      width: 242px;
      height: 2px;
      background-color: rgba(0, 0, 0, 0.4);
      border-radius: 2px;
      position: absolute;
      bottom: 0;

      .progress {
        height: 2px;
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 2px;
      }
    }
  }
}
</style>
