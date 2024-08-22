<template>
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

    Window画布内容
  </Window>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import Window from '@/components/Window/index.vue'
import Button from '@/components/Button/index.vue'
import Input from '@/components/Input/index.vue'

defineOptions({
  name: 'SafariView'
})

let inputValue = ref('teenage.engineering')
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
</style>
