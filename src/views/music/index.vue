<template>
  <!-- <TabBar /> -->

  <Window>
    <Container>
      <Side style="height: 410px">
        <div class="top">
          <div class="left">
            <!-- <div class="title">Library</div>
            <div class="desc">All Music</div> -->
          </div>
          <div class="right">
            <Button></Button>
          </div>
        </div>

        <div class="menu">
          <div class="item">
            <div class="item-icon"></div>
            <div class="item-name"></div>
          </div>
          <div class="item">
            <div class="item-icon"></div>
            <div class="item-name"></div>
          </div>
          <div class="item">
            <div class="item-icon"></div>
            <div class="item-name"></div>
          </div>
          <div class="item">
            <div class="item-icon"></div>
            <div class="item-name"></div>
          </div>
          <div class="item">
            <div class="item-icon"></div>
            <div class="item-name"></div>
          </div>
          <div class="item">
            <div class="item-icon"></div>
            <div class="item-name"></div>
          </div>
          <div class="item active">
            <div class="item-icon"></div>
            <div class="item-name"></div>
          </div>
          <div class="item">
            <div class="item-icon"></div>
            <div class="item-name"></div>
          </div>
          <div class="item">
            <div class="item-icon"></div>
            <div class="item-name"></div>
          </div>
          <div class="item">
            <div class="item-icon">
              <button></button>
            </div>
            <div class="item-name"></div>
          </div>
        </div>
      </Side>

      <Main>
        <div class="top">
          <div class="left">
            <!-- <div class="title">Playlists</div>
            <div class="desc">254 Playlists</div> -->
          </div>
          <div class="right">
            <Button></Button>
          </div>
        </div>

        <div class="content">
          <Input />
        </div>
      </Main>
    </Container>
  </Window>
</template>

<script setup lang="ts">
// import TabBar from '@/components/TabBar/index.vue'
import Window from '@/components/Window/index.vue'
import Container from '@/components/Container/index.vue'
import Side from '@/components/Container/Side.vue'
import Main from '@/components/Container/Main.vue'
import Input from '@/components/Input/index.vue'
import Button from '@/components/Button/index.vue'

defineOptions({
  name: 'MusicView'
})
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

    .left {
      padding: 14px;
      text-align: left;
      .title {
        font-size: 14px;
        font-weight: bold;
        color: rgba(255, 255, 255, 0.8);
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
    .item {
      height: 32px;
      transition: background-color 0.2s;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      // 消除空白节点，避免 inline-block 间距
      font-size: 0;

      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }
      border-radius: 8px;

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
        color: rgba(255, 255, 255, 0.6);
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

    .left {
      padding: 14px 24px;
      text-align: left;
      .title {
        font-size: 14px;
        font-weight: bold;
        color: rgba(255, 255, 255, 0.8);
      }
      .desc {
        font-size: 8px;
        color: rgba(255, 255, 255, 0.6);
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
  }
}
</style>
