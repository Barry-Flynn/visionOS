<template>
  <div class="player">
    <img class="player-bg" :src="musicInfo.cover" alt="music cover" />

    <div class="player-wrap">
      <div class="cover-container">
        <div class="cover">
          <img :src="musicInfo.cover" alt="music cover" />
        </div>

        <div class="develop-controls" style="display: none">
          <!-- <audio :src="getAudioUrl('569214247.m4a')" controls></audio> -->

          <audio controls ref="audioRef">
            <source src="@/assets/songs/569214247.m4a" />
          </audio>
        </div>
      </div>
      <div class="lyrics-container hide-scrollbar" ref="lyricsContainerRef">
        <div
          class="lyric-item"
          :class="currentLyricIndex === -1 ? 'active' : ''"
          ref="currentLyricRef"
        >
          <span class="mgc_round_fill" style="margin-right: 4px; font-size: 18px"></span>
          <span class="mgc_round_fill" style="margin-right: 4px; font-size: 18px"></span>
          <span class="mgc_round_fill" style="margin-right: 4px; font-size: 18px"></span>
        </div>
        <div
          class="lyric-item"
          :class="currentLyricIndex === index ? 'active' : ''"
          v-for="(item, index) in lyric"
          :key="index"
          ref="lyricItemRefs"
          @click="jumpToLyric(index)"
        >
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

import { ref, onMounted, watch, nextTick } from 'vue'
// 模拟歌词请求获取结果
import lyricJson from '@/assets/songs/569214247.json'

// 接收参数
const props = defineProps<{
  // 是否显示歌词播放器，即当前组件的显示状态
  show: boolean
  // 是否正在播放
  isPlaying: boolean
  // 当前音乐信息
  musicInfo: {
    name: string
    musician: string
    cover: string
  }
}>()

// 监听当前组件的的显示状态变化
watch(
  () => props.show,
  (newValue) => {
    // console.log(newValue)
    // 如果当前组件的显示状态转变为true
    if (newValue) {
      // 在下一帧执行
      nextTick(() => {
        // 滚动歌词到当前高亮的位置
        scrollLyricToCurrent()
      })
    }
  }
)

// 监听传入的音乐播放状态变化
watch(
  () => props.isPlaying,
  (newValue) => {
    // console.log(newValue)
    // 如果当前音乐播放状态为true
    if (newValue) {
      // 播放音乐
      audioRef.value?.play()
    } else {
      // 暂停音乐
      audioRef.value?.pause()
    }
  }
)

// 获取歌词原始数据
const lyricData = lyricJson.lrc.lyric
// console.log(lyricData)

// 歌词解析函数
const lyricParse = (lyricData: string) => {
  // 根据换行符进行分割
  let lines = lyricData.split('\n')
  // console.log(lines)

  let lyric = []
  for (let i = 0; i < lines.length; i++) {
    // 获取当前行
    let line = lines[i]
    // console.log(line)

    // 检索字符串，匹配歌词时间
    const time = line.match(/\[(\d{2}):(\d{2})\.(\d{2,3})\]/)
    // console.log(time)

    if (time) {
      // 获取时间
      const min = time[1]
      const sec = time[2]
      const msec = time[3].length === 3 ? time[3] : time[3] + '0'
      // 获取歌词
      const text = line.replace(/\[(\d{2}):(\d{2})\.(\d{2,3})\]/, '')

      let wordObj = {
        time: Number(min) * 60 + Number(sec) + Number(msec) / 1000,
        text: text
      }

      lyric.push(wordObj)
    }
  }
  return lyric
}
const lyric = lyricParse(lyricData)
// console.log(lyric)

// 获取音频元素
const audioRef = ref<HTMLAudioElement>()
// console.log(audioRef.value)
// 当前播放时间
// const audioCurrentTime = ref(0)
// 当前音乐时长
// const audioDuration = ref(0)

// 当前高亮的歌词索引
const currentLyricIndex = ref(-1)
// 计算当前需要高亮歌词的索引
const updateCurrentLyricIndex = () => {
  if (!audioRef.value) {
    return (currentLyricIndex.value = -1)
  }

  // 当前音乐的播放时间
  // console.log(audioRef.value.currentTime)
  for (let i = 0; i < lyric.length; i++) {
    // console.log(lyric[i])
    if (audioRef.value.currentTime <= lyric[i].time) {
      // console.log(i - 1)
      return (currentLyricIndex.value = i - 1)
    }
  }
  // 如果当前时间大于最后一句歌词的时间
  return (currentLyricIndex.value = lyric.length - 1)
}

// 获取歌词元素
const lyricItemRefs = ref<HTMLDivElement[]>([])
// console.log(lyricItemRefs)
// 滚动歌词到当前高亮的位置
const scrollLyricToCurrent = () => {
  // console.log(currentLyricIndex.value)
  // 如果当前高亮的歌词索引为-1，则表示还未到第一句歌词的高亮时间
  let currentLyricElement = lyricItemRefs.value[0]
  if (currentLyricIndex.value === -1) {
    currentLyricElement = lyricItemRefs.value[0]
  } else {
    currentLyricElement = lyricItemRefs.value[currentLyricIndex.value]
  }
  // 滚动歌词到当前位置
  currentLyricElement.scrollIntoView({
    behavior: 'smooth',
    block: 'center'
  })
}
// 监听当前高亮的歌词索引变化
watch(currentLyricIndex, () => {
  // 滚动歌词到当前高亮的位置
  scrollLyricToCurrent()
})

const emit = defineEmits(['update:is-playing', 'update:current-time', 'update:duration'])

onMounted(() => {
  // 监听音频元素播放时间变化
  audioRef.value?.addEventListener('timeupdate', () => {
    if (!audioRef.value) return
    // console.log(audioRef.value.currentTime)

    // 更新当前高亮的歌词索引
    updateCurrentLyricIndex()

    // 更新当前播放进度
    // 触发父组件 @update:current-time
    emit('update:current-time', audioRef.value.currentTime)
    // 触发父组件 @update:duration
    emit('update:duration', audioRef.value.duration)

    // 触发父组件 @update:is-playing
    // 判断 audioRef 的状态，触发父组件 update:is-playing
    if (audioRef.value?.paused) {
      // 如果为暂停状态
      emit('update:is-playing', false)
    } else {
      // 如果为播放状态
      emit('update:is-playing', true)
    }
  })
})

// 跳转播放进度到指定歌词的对应时间
const jumpToLyric = (index: number) => {
  // console.log(index)
  if (!audioRef.value) return
  audioRef.value.currentTime = lyric[index].time
}
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
      flex-shrink: 0; // 不缩小

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
      padding: 250px 0;
      // 允许点击，否则鼠标滚轮无法滚动歌词
      pointer-events: all;

      .lyric-item {
        // border: 1px solid yellow;
        // background-color: rgba(255, 255, 255, 0.2);
        border-radius: 8px;
        padding: 4px 8px;
        margin: 4px;
        font-size: 18px;
        min-height: 32px;
        font-weight: bold;
        color: rgba(255, 255, 255, 0.2);
        // 禁止选中
        user-select: none;
        // 允许点击
        pointer-events: all;
        // 过渡
        transition: all 0.4s ease-out;

        &:hover {
          background-color: rgba(255, 255, 255, 0.2);
        }

        &.active {
          color: rgba(255, 255, 255, 0.8);
          font-size: 24px;
          margin: 18px 4px;
        }
      }
    }
  }
}
</style>
