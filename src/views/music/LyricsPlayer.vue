<template>
  <div class="player">
    <img class="player-bg" :src="musicInfo.cover" alt="music cover" />

    <div class="player-wrap">
      <div class="cover-container">
        <div class="cover">
          <img :src="musicInfo.cover" alt="music cover" />
        </div>

        <div class="develop-controls">
          <!-- <audio :src="getAudioUrl('569214247.m4a')" controls></audio> -->

          <audio controls>
            <source src="@/assets/songs/569214247.m4a" />
          </audio>
        </div>
      </div>
      <div class="lyrics-container" ref="lyricsContainer">
        <div class="lyric-item active">哈哈哈哈哈哈哈哈哈</div>
        <div class="lyric-item" v-for="(item, index) in lyric" :key="index">
          {{ item?.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'LyricsPlayer'
})

// 模拟歌词请求获取结果
import lyricJson from '@/assets/songs/569214247.json'

// 接收参数
defineProps<{
  // 当前音乐信息
  musicInfo: {
    name: string
    musician: string
    cover: string
  }
}>()

// 获取歌词原始数据
const lyricData = lyricJson.lrc.lyric
// console.log(lyricData)

// 歌词解析函数
const lyricParse = (lyricData: string) => {
  // 根据换行符进行分割
  let lyricList = lyricData.split('\n')
  // 如果最后一行为 undefined，则删除
  if (lyricList[lyricList.length - 1] === '') {
    lyricList.pop()
  }
  // console.log(lyricList)

  return lyricList.map((item) => {
    // 获取时间
    const time = item.match(/\[(\d{2}):(\d{2})\.(\d{2,3})\]/)
    if (time) {
      // 获取时间
      const min = time[1]
      const sec = time[2]
      const msec = time[3].length === 3 ? time[3] : time[3] + '0'
      return {
        time: Number(min) * 60 + Number(sec) + Number(msec) / 1000,
        text: item.replace(/\[(\d{2}):(\d{2})\.(\d{2,3})\]/, '')
      }
    }
  })
}

const lyric = lyricParse(lyricData)
console.log(lyric)

// 获取音频地址
// const getAudioUrl = (audio: string) => {
//   return new URL(`../../assets/songs/${audio}`, import.meta.url).href
// }
</script>

<style scoped lang="scss">
.player {
  // border: 1px solid red;
  border-radius: 30px;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 0;
  // 禁止拖拽
  pointer-events: none;

  .player-bg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    // 禁止选中
    user-select: none;
  }

  .player-wrap {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    // 背景模糊
    backdrop-filter: blur(40px);
    // 背景色
    background-color: rgba(0, 0, 0, 0.4);
    // 布局
    display: flex;
    justify-content: space-between;
    padding: 0 30px;

    .cover-container {
      // border: 1px solid yellow;
      width: 430px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .cover {
        // border: 1px solid green;
        width: 240px;
        height: 240px;
        border-radius: 14px;
        overflow: hidden;
        background-color: rgba(0, 0, 0, 0.2);
        margin-left: 30px;
        // 禁止选中
        user-select: none;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .develop-controls {
        // 允许点击
        pointer-events: all;
        margin-left: 30px;
        margin-top: 20px;
      }
    }

    .lyrics-container {
      // border: 1px solid blue;
      flex-grow: 1; // 可放大

      .lyric-item {
        // border: 1px solid yellow;
        // background-color: rgba(255, 255, 255, 0.2);
        border-radius: 8px;
        padding: 4px 8px;
        margin: 4px;
        font-size: 18px;
        font-weight: bold;
        color: rgba(255, 255, 255, 0.2);
        // 禁止选中
        user-select: none;
        // 允许点击
        pointer-events: all;
        // 过渡
        transition: all 0.2s ease-in-out;

        &:hover {
          background-color: rgba(255, 255, 255, 0.2);
        }

        &.active {
          color: rgba(255, 255, 255, 0.8);
          font-size: 24px;
        }
      }
    }
  }
}
</style>
