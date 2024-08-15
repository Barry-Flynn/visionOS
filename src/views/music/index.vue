<template>
  <Window>
    <Container>
      <Side style="height: 410px">Side</Side>
      <Main>Main</Main>
    </Container>
  </Window>
  <TabBar />
</template>

<script setup lang="ts">
import Window from '@/components/Window/index.vue'
import Container from '@/components/Container/index.vue'
import Side from '@/components/Container/Side.vue'
import Main from '@/components/Container/Main.vue'
import TabBar from '@/components/TabBar/index.vue'

defineOptions({
  name: 'MusicView'
})
</script>

<style scoped lang="scss"></style>
