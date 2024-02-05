<template>
  <div class="app_main">
    <draggable class="main_dragArea" :list="mainComponent" group="people" @change="log" item-key="label">
      <template #item="{ element }">
        <div class="main_dragArea-item">
          <dynamic-module :conf="element" />
        </div>
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Bus from '../../utils/bus.ts'
import draggable from 'vuedraggable'
import DynamicModule from '../../components/render'

const mainComponent = ref([])

const fn = (data: any) => {
  mainComponent.value.push(data)
}

Bus.on('on-click', fn)

const log = (evt: any) => {
  // console.log('2', evt)
}
</script>

<style lang="scss" scoped>
.main_dragArea {
  width: 100%;
  height: 100%;
}
</style>
