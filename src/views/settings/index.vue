<template>
  <TabBar />
  <Window>
    Window画布内容
    <template v-slot:ornaments>
      <Ornaments />
    </template>
  </Window>
</template>

<script setup lang="ts">
import TabBar from '@/components/TabBar/index.vue'
import Window from '@/components/Window/index.vue'
import Ornaments from '@/components/Ornaments/index.vue'

defineOptions({
  name: 'SettingsView'
})
</script>

<style scoped lang="scss"></style>
