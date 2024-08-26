<template>
  <div class="menu">
    <div
      class="menu-item"
      :class="{ active: item.active }"
      v-for="(item, index) in menuData"
      :key="index"
      @click="goTo(item)"
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

import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Button from '@/components/Button/index.vue'

const router = useRouter()

type Menu = {
  icon: string
  name: string
  path: string
  active?: boolean
}

// 接收参数
const props = defineProps<{
  menuList: Menu[]
}>()

// 保存菜单数据
const menuData = ref(props.menuList)
// 遍历菜单数据，添加激活状态
props.menuList.forEach((item) => {
  item.active = false
})
// 获取当前路由，设置激活状态
const currentRoute = router.currentRoute.value
menuData.value.forEach((item) => {
  // console.log('currentRoute', currentRoute)
  // console.log('item', item)
  // 判断当前路由是否与菜单路由相同
  if (currentRoute.path === item.path) {
    item.active = true
  } else {
    item.active = false
  }
})

// 路由跳转
const goTo = (item: Menu) => {
  // console.log('goTo', path)
  if (item.path) {
    router.push(item.path)
    // 更新菜单数据
    menuData.value.forEach((item) => {
      item.active = false
    })
    item.active = true
  } else {
    console.log('未指定路径')
  }
}
</script>

<style scoped lang="scss">
.menu {
  // border: 1px solid red;
  text-align: left;
  padding: 0 8px;
  // 禁止选中
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
