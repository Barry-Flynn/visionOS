<template>
  <div class="screen">
    <Window>
      Window画布内容
      <template v-slot:ornaments>
        <Ornaments />
      </template>
    </Window>
    <TabBar />
  </div>
</template>

<script setup lang="ts">
import Window from '@/components/Window/index.vue'
import TabBar from '@/components/TabBar/index.vue'
import Ornaments from '@/components/Ornaments/index.vue'

defineOptions({
  name: 'TheScreen'
})
</script>

<style scoped>
.screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  font-size: 16px;
}
</style>
