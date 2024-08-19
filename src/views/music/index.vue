<template>
  <Window>
    <Container>
      <Side>
        <div class="top">
          <div class="left">
            <div class="title">Library</div>
            <div class="desc">All Music</div>
          </div>
          <div class="right">
            <Button icon="more_1_fill" bg />
          </div>
        </div>

        <div class="menu">
          <div class="menu-item">
            <div class="menu-item-icon">
              <Button icon="time_line" />
            </div>
            <div class="menu-item-name">Recently Added</div>
          </div>
          <div class="menu-item">
            <div class="menu-item-icon">
              <Button icon="microphone_line" />
            </div>
            <div class="menu-item-name">Artists</div>
          </div>
          <div class="menu-item">
            <div class="menu-item-icon">
              <Button icon="album_2_line" />
            </div>
            <div class="menu-item-name">Albums</div>
          </div>
          <div class="menu-item">
            <div class="menu-item-icon">
              <Button icon="music_2_line" />
            </div>
            <div class="menu-item-name">Songs</div>
          </div>
          <div class="menu-item">
            <div class="menu-item-icon">
              <Button icon="user_2_line" />
            </div>
            <div class="menu-item-name">Made For You</div>
          </div>
          <div class="sub-menu">
            <div class="sub-menu-name">Playlists</div>
            <Button class="sub-menu_icon-arrow" icon="down_line" />
          </div>
          <div class="menu-item active">
            <div class="menu-item-icon">
              <Button icon="grid_2_line" />
            </div>
            <div class="menu-item-name">All Playlists</div>
          </div>
          <div class="menu-item">
            <div class="menu-item-icon">
              <!-- <Button icon="add_line" /> -->
              <img
                class="playlist-cover"
                src="https://via.placeholder.com/22x22"
                alt="playlist cover"
              />
            </div>
            <div class="menu-item-name">Good Vibes Only</div>
          </div>
          <div class="menu-item">
            <div class="menu-item-icon">
              <!-- <Button icon="add_line"> </Button> -->
              <img
                class="playlist-cover"
                src="https://via.placeholder.com/22x22"
                alt="playlist cover"
              />
            </div>
            <div class="menu-item-name">Indie Anthems</div>
          </div>
          <div class="menu-item">
            <div class="menu-item-icon">
              <Button icon="add_line" bg />
            </div>
            <div class="menu-item-name">Add Playlist</div>
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
            <Button icon="filter_2_line" bg />
          </div>
        </div>

        <div class="content">
          <Input class="search-input" />

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
      <Ornaments></Ornaments>
    </template>
  </Window>

  <TabBar />
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
    cover: 'https://via.placeholder.com/135x135'
  },
  {
    name: 'Indie Anthems',
    desc: 'Apple Music Indie',
    cover: 'https://via.placeholder.com/135x135'
  },
  {
    name: 'Family Dance Party',
    desc: 'Apple Music Family',
    cover: 'https://via.placeholder.com/135x135'
  },
  {
    name: 'La Formula',
    desc: 'Apple Music Latin',
    cover: 'https://via.placeholder.com/135x135'
  },
  {
    name: 'Solid Gold Hits',
    desc: 'Apple Music Pop',
    cover: 'https://via.placeholder.com/135x135'
  },
  {
    name: 'Caffeine Country',
    desc: 'Apple Music Country',
    cover: 'https://via.placeholder.com/135x135'
  },
  {
    name: 'Melodic Rap',
    desc: 'Apple Music Hip-Hop',
    cover: 'https://via.placeholder.com/135x135'
  },
  {
    name: 'Viral Remixed',
    desc: 'Apple Music',
    cover: 'https://via.placeholder.com/135x135'
  }
]
</script>

<style scoped lang="scss">
.side {
  display: block;

  .top {
    // 尺寸
    height: 66px;
    // 布局
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    // 禁止鼠标选中
    user-select: none;

    .left {
      padding: 14px 18px;
      text-align: left;
      .title {
        font-size: 18px;
        font-weight: bold;
        color: rgba(255, 255, 255, 0.9);
      }
      .desc {
        font-size: 10px;
        color: rgba(255, 255, 255, 0.5);
        margin-top: 4px;
      }
    }

    .right {
      padding: 14px;
    }
  }

  .menu {
    // border: 1px solid red;
    text-align: left;
    padding: 0 8px;
    // 禁止鼠标选中
    user-select: none;

    .menu-item {
      height: 36px;
      transition: background-color 0.2s;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      border-radius: 10px;
      // 消除空白节点，避免 inline-block 间距
      font-size: 0;

      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }
      &:not(:first-child) {
        margin-top: 4px;
      }

      &:active {
        background-color: rgba(255, 255, 255, 0.2);
      }
      &.active {
        background-color: rgba(255, 255, 255, 0.2);
      }

      .menu-item-icon {
        margin: 7px 7px;

        button,
        img {
          width: 22px;
          height: 22px;
          border: none;
          border-radius: 4px;
        }
      }

      .menu-item-name {
        font-size: 11px;
        color: rgba(255, 255, 255, 0.9);
      }
    }

    .sub-menu {
      // 布局
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 10px;

      .sub-menu-name {
        height: 44px;
        line-height: 44px;
        font-size: 14px;
        font-weight: bold;
        color: rgba(255, 255, 255, 0.9);
      }
    }
  }
}

.main {
  display: block;

  .top {
    // 尺寸
    height: 66px;
    // 布局
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    // 禁止鼠标选中
    user-select: none;

    .left {
      padding: 14px 28px;
      text-align: left;
      .title {
        font-size: 18px;
        font-weight: bold;
        color: rgba(255, 255, 255, 0.9);
      }
      .desc {
        font-size: 10px;
        color: rgba(255, 255, 255, 0.7);
        margin-top: 4px;
      }
    }

    .right {
      padding: 14px;
    }
  }

  .content {
    // border: 1px solid red;
    padding: 0 8px;

    .search-input {
      width: 594px;
      margin: 0 auto;
    }

    .playlists {
      // border: 1px solid red;
      width: 610px;
      margin: 10px auto 0;
      padding-bottom: 24px;
      // 自动布局，每行 4 个，间距 14px，最后一行左对齐
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 4px;
      justify-content: space-between;
      // 设置列表最大高度，超出部分滚动
      max-height: 386px;
      overflow-y: auto;
      overflow-x: hidden;

      .playlist {
        // border: 1px solid yellow;
        width: 149px;
        border-radius: 10px;
        padding: 7px;
        transition: background-color 0.8s;

        &:hover {
          background-color: rgba(255, 255, 255, 0.2);
        }

        .playlist-cover {
          // border: 1px solid blue;
          width: 135px;
          height: 135px;
          border-radius: 8px;
          overflow: hidden;
          background-color: rgba(255, 255, 255, 0.2);
          // 禁止拖拽
          pointer-events: none;
          // 禁止选中
          user-select: none;
          // 图片填充
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        .playlist-info {
          // border: 1px solid green;
          text-align: left;
          margin-top: 4px;

          .playlist-name {
            font-size: 11px;
            color: rgba(255, 255, 255, 0.9);
            // 禁止选中
            user-select: none;
          }
          .playlist-desc {
            font-size: 11px;
            color: rgba(255, 255, 255, 0.5);
            // 禁止选中
            user-select: none;
          }
        }
      }
    }
  }
}
</style>
