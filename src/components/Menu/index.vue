<template>
  <div class="menu">
    <div
      class="menu-item"
      :class="{ active: item.active }"
      v-for="(item, index) in menuList"
      :key="index"
      @click="$router.push(item.path)"
    >
      <div class="menu-item-icon">
        <Button :icon="item.icon" />
      </div>
      <div class="menu-item-name ellipsis">{{ item.name }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'TheMenu'
})

import Button from '@/components/Button/index.vue'

// 接收参数
defineProps<{
  menuList: {
    icon: string
    name: string
    path: string
    active: boolean
  }[]
}>()
</script>

<style scoped lang="scss">
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

      .playlist-cover {
        background-color: rgba(255, 255, 255, 0.2);
      }
    }

    .menu-item-name {
      font-size: 11px;
      color: rgba(255, 255, 255, 0.9);
    }
  }
}
</style>
