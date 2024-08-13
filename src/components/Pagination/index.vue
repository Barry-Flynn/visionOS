<template>
  <div class="pagination-dots">
    <div class="dot active"></div>
    <div class="dot"></div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'PaginationDots'
})
</script>

<style scoped lang="scss">
.pagination-dots {
  display: flex;
  justify-content: center;
  margin: 4px;
  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.3);
    margin: 0 5px;
    &:hover {
      background-color: rgba(255, 255, 255, 0.5);
    }

    &.active {
      background-color: rgba(255, 255, 255, 0.7);
    }
  }
}
</style>
