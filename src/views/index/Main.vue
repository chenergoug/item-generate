<template>
  <div class="app_main">
    <draggable class="main_dragArea" :list="mainComponent" group="people" item-key="label">
      <template #item="{ element }">
        <div class="main_dragArea-item">
          <!-- {{ element.__item__.label }} -->
          <dynamic-module :conf="element" />
        </div>
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Bus from '@/utils/bus.ts'
import draggable from 'vuedraggable'
import ComponentData from '@/server/Component.json'
import DynamicModule from '@/components/render'

const mainComponent = ref(ComponentData[0].data)

const fn = (data: any) => {
  if (data) {
    mainComponent.value.push(data)
  }
}

Bus.on('on-click', fn)
</script>

<style lang="scss" scoped>
.main_dragArea {
  width: 100%;
  height: 100%;
}
</style>
