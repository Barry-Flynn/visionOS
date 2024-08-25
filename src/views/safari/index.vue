<template>
  <div>
    <Window>
      <template v-slot:navigation>
        <div class="navigation glass-material">
          <Button bg icon="layout_9_line" />
          <Button bg icon="left_line" />
          <Button bg icon="right_line" />

          <Input
            class="search-input"
            placeholder="Search or Enter website name"
            :width="350"
            round
            center
            v-model="inputValue"
          >
            <template v-slot:prefix>
              <Button icon="world_2_line"></Button>
            </template>

            <template v-slot:suffix>
              <Button icon="refresh_1_line" />
            </template>
          </Input>

          <Button bg icon="upload_line" />
          <Button bg icon="add_line" />
          <Button bg icon="copy_2_line" />
        </div>
      </template>

      <!-- 网页内容 -->
      <div class="web-content">
        <iframe :src="inputValue" frameborder="0"></iframe>
      </div>
    </Window>
  </div>
</template>

<script setup lang="ts">
// import { ref } from 'vue'

import Window from '@/components/Window/index.vue'
import Button from '@/components/Button/index.vue'
import Input from '@/components/Input/index.vue'

defineOptions({
  name: 'SafariView'
})

// 这里暂时将 inputValue 设置为字符串，因为 ref 值的变动会导致 iframe 重新加载过于频繁
// let inputValue = ref('https://barry-flynn.github.io/')
const inputValue = 'https://barry-flynn.github.io/'
</script>

<style scoped lang="scss">
.navigation {
  // border: 1px solid red;
  width: 600px;
  height: 40px;
  margin-bottom: 15px;
  padding: 8px;
  // 布局
  display: flex;
  align-items: center;
  justify-content: space-between;

  .search-input {
    margin: 0 10px;
  }
}

.web-content {
  // border: 1px solid red;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  overflow: hidden;

  iframe {
    width: 100%;
    height: 100%;
  }
}
</style>
