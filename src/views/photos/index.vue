<template>
  <Window>
    Window画布内容
    <template v-slot:ornaments>
      <Ornaments />
    </template>
  </Window>
  <TabBar />
</template>

<script setup lang="ts">
import Window from '@/components/Window/index.vue'
import TabBar from '@/components/TabBar/index.vue'
import Ornaments from '@/components/Ornaments/index.vue'

defineOptions({
  name: 'PhotosView'
})
</script>

<style scoped lang="scss"></style>
