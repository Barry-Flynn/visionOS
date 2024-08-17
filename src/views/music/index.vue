<template>
  <TabBar />

  <Window>
    <Container>
      <Side style="height: 410px">
        <div class="top">
          <div class="left">
            <div class="title">Library</div>
            <div class="desc">All Music</div>
          </div>
          <div class="right">
            <Button></Button>
          </div>
        </div>

        <div class="menu">
          <div class="item">
            <div class="item-icon"></div>
            <div class="item-name">Recently Added</div>
          </div>
          <div class="item">
            <div class="item-icon"></div>
            <div class="item-name">Artists</div>
          </div>
          <div class="item">
            <div class="item-icon"></div>
            <div class="item-name">Albums</div>
          </div>
          <div class="item">
            <div class="item-icon"></div>
            <div class="item-name">Songs</div>
          </div>
          <div class="item">
            <div class="item-icon"></div>
            <div class="item-name">Made For You</div>
          </div>
          <div class="item">
            <div class="item-icon"></div>
            <div class="item-name"></div>
          </div>
          <div class="item active">
            <div class="item-icon"></div>
            <div class="item-name">All Playlists</div>
          </div>
          <div class="item">
            <div class="item-icon"></div>
            <div class="item-name">Good Vibes Only</div>
          </div>
          <div class="item">
            <div class="item-icon"></div>
            <div class="item-name">Indie Anthems</div>
          </div>
          <div class="item">
            <div class="item-icon">
              <button></button>
            </div>
            <div class="item-name">Add Playlist</div>
          </div>
        </div>
      </Side>

      <Main>
        <div class="top">
          <div class="left">
            <div class="title">Playlists</div>
            <div class="desc">254 Playlists</div>
          </div>
          <div class="right">
            <Button></Button>
          </div>
        </div>

        <div class="content">
          <Input />

          <div class="playlists hide-scrollbar">
            <div class="playlist" v-for="playlist in playlists" :key="playlist.name">
              <div class="playlist-cover">
                <img :src="playlist.cover" alt="playlist.name" />
              </div>
              <div class="playlist-info">
                <div class="playlist-name ellipsis">{{ playlist.name }}</div>
                <div class="playlist-desc ellipsis">{{ playlist.desc }}</div>
              </div>
            </div>
          </div>
        </div>
      </Main>
    </Container>

    <template v-slot:ornaments>
      <Ornaments />
    </template>
  </Window>
</template>

<script setup lang="ts">
import TabBar from '@/components/TabBar/index.vue'
import Window from '@/components/Window/index.vue'
import Ornaments from '@/components/Ornaments/index.vue'
import Container from '@/components/Container/index.vue'
import Side from '@/components/Container/Side.vue'
import Main from '@/components/Container/Main.vue'
import Input from '@/components/Input/index.vue'
import Button from '@/components/Button/index.vue'

defineOptions({
  name: 'MusicView'
})

const playlists = [
  {
    name: 'Good Vibes Only',
    desc: 'Apple Music Dance',
    cover: 'https://via.placeholder.com/110x110'
  },
  {
    name: 'Indie Anthems',
    desc: 'Apple Music Indie',
    cover: 'https://via.placeholder.com/110x110'
  },
  {
    name: 'Family Dance Party',
    desc: 'Apple Music Family',
    cover: 'https://via.placeholder.com/110x110'
  },
  {
    name: 'La Formula',
    desc: 'Apple Music Latin',
    cover: 'https://via.placeholder.com/110x110'
  },
  {
    name: 'Solid Gold Hits',
    desc: 'Apple Music Pop',
    cover: 'https://via.placeholder.com/110x110'
  },
  {
    name: 'Caffeine Country',
    desc: 'Apple Music Country',
    cover: 'https://via.placeholder.com/110x110'
  },
  {
    name: 'Melodic Rap',
    desc: 'Apple Music Hip-Hop',
    cover: 'https://via.placeholder.com/110x110'
  },
  {
    name: 'Viral Remixed',
    desc: 'Apple Music',
    cover: 'https://via.placeholder.com/110x110'
  }
]
</script>

<style scoped lang="scss">
.side {
  display: block;

  .top {
    // 尺寸
    height: 60px;
    // 布局
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    // 禁止鼠标选中
    user-select: none;

    .left {
      padding: 14px;
      text-align: left;
      .title {
        font-size: 14px;
        font-weight: bold;
        color: rgba(255, 255, 255, 0.9);
      }
      .desc {
        font-size: 8px;
        color: rgba(255, 255, 255, 0.5);
        margin-top: 4px;
      }
    }

    .right {
      padding: 12px;
    }
  }

  .menu {
    // border: 1px solid red;
    text-align: left;
    padding: 0 6px;
    // 禁止鼠标选中
    user-select: none;
    .item {
      height: 30px;
      transition: background-color 0.2s;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      border-radius: 8px;
      // 消除空白节点，避免 inline-block 间距
      font-size: 0;

      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }
      &:not(:first-child) {
        margin-top: 2px;
      }

      &:active {
        background-color: rgba(255, 255, 255, 0.2);
      }
      &.active {
        background-color: rgba(255, 255, 255, 0.2);
      }

      .item-icon {
        margin: 6px;
        button {
          width: 18px;
          height: 18px;
          border: none;
          border-radius: 4px;
          background-color: rgba(255, 255, 255, 0.2);
        }
      }

      .item-name {
        font-size: 8px;
        color: rgba(255, 255, 255, 0.9);
      }
    }
  }
}

.main {
  display: block;

  .top {
    // 尺寸
    height: 60px;
    // 布局
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    // 禁止鼠标选中
    user-select: none;

    .left {
      padding: 14px 24px;
      text-align: left;
      .title {
        font-size: 14px;
        font-weight: bold;
        color: rgba(255, 255, 255, 0.9);
      }
      .desc {
        font-size: 8px;
        color: rgba(255, 255, 255, 0.8);
        margin-top: 4px;
      }
    }

    .right {
      padding: 12px;
    }
  }

  .content {
    // border: 1px solid red;
    padding: 0 24px;

    .playlists {
      // border: 1px solid red;
      margin-top: 14px;
      padding-bottom: 24px;
      // 自动布局，每行 4 个，间距 14px，最后一行左对齐
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 14px;
      justify-content: space-between;
      // 设置列表最大高度，超出部分滚动
      max-height: 312px;
      overflow-y: auto;
      overflow-x: hidden;

      .playlist {
        // border: 1px solid yellow;
        width: 110px;
        // height: 134px;

        .playlist-cover {
          // border: 1px solid blue;
          width: 110px;
          height: 110px;
          border-radius: 6px;
          overflow: hidden;
          background-color: rgba(255, 255, 255, 0.2);
        }

        .playlist-info {
          // border: 1px solid green;
          text-align: left;
          margin-top: 4px;

          .playlist-name {
            font-size: 8px;
            color: rgba(255, 255, 255, 0.9);
          }
          .playlist-desc {
            font-size: 8px;
            color: rgba(255, 255, 255, 0.5);
          }
        }
      }
    }
  }
}
</style>
