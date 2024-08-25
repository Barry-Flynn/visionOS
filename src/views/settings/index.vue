<template>
  <div>
    <Window>
      <Container>
        <Side>
          <div class="top">
            <div class="left">
              <div class="title">Settings</div>
              <div class="desc">System settings items</div>
            </div>
            <div class="right">
              <Button icon="more_1_fill" bg />
            </div>
          </div>

          <Menu :menu-list="menuList"></Menu>
        </Side>
        <Main></Main>
      </Container>
    </Window>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'SettingsView'
})

import Window from '@/components/Window/index.vue'
import Container from '@/components/Container/index.vue'
import Side from '@/components/Container/Side.vue'
import Main from '@/components/Container/Main.vue'
import Menu from '@/components/Menu/index.vue'
import Button from '@/components/Button/index.vue'

// 菜单列表
const menuList = [
  {
    icon: 'user_heart_line',
    name: 'Developer',
    path: '/settings',
    active: true
  },
  {
    icon: 'translate_2_line',
    name: 'Language',
    path: '/settings',
    active: false
  },
  {
    icon: 'pic_line',
    name: 'Environment',
    path: '/settings',
    active: false
  },
  {
    icon: 'alert_octagon_line',
    name: 'About',
    path: '/settings',
    active: false
  },
  {
    icon: 'currency_dollar_line',
    name: 'Reward',
    path: '/settings',
    active: false
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
}
</style>
