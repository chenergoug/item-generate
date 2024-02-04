<template>
  <div class="app_main">
    <draggable class="app_main-dragArea" :list="mainComponent" group="people" @change="log" item-key="label">
      <template #item="{ element }">
        <div class="list-group-item">
          {{ element.__config__.label }}
        </div>
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import draggable from 'vuedraggable'
import { ref } from 'vue'
const mainComponent = ref([])

const log = (evt) => {
  console.log('2', evt)
}
</script>

<style lang="scss" scoped>
.app_main-dragArea {
  width: 100%;
  height: 100%;
}
</style>
