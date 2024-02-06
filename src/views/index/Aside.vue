<template>
  <div class="app_aside">
    <div class="aside_body">
      <div class="aside_list" v-for="item in ComponentData" :key="item.id">
        <span class="aside_list-title">{{ item.title }}</span>
        <draggable
          :sort="false"
          :list="item.data"
          item-key="label"
          :clone="cloneComponent"
          :group="{ name: 'people', pull: 'clone', put: false }"
        >
          <template #item="{ element }">
            <div class="aside_list-draggable" @click="addComponent(element)">
              {{ element.__item__.label }}
            </div>
          </template>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import draggable from 'vuedraggable'
import Bus from '@/utils/bus.ts'
import { generateId, deepClone } from '@/utils/index'
import ComponentData from '@/server/Component.json'

// 点击组件
const addComponent = (event: any) => {
  const clone = cloneComponent(event)
  Bus.emit('on-click', clone)
}

// 复制组件
const cloneComponent = (origin: any) => {
  let data = deepClone(origin)
  const uuid = generateId()
  data.__config__.id = uuid
  data.__vModel__ = 'fileId' + uuid
  return data
}
</script>

<style lang="scss" scoped>
.aside_body {
  flex: 1;
  overflow-y: auto;
  padding: $unify-interval;

  .aside_list {
    margin-bottom: 10px;

    .aside_list-title {
      font-size: $font-size-middle;
      font-weight: $font-weight-heavy;
    }

    div {
      display: flex;
      flex-wrap: wrap;

      .aside_list-draggable {
        cursor: $cursor-grab;
        display: flex;
        border: $unify-line;
        padding: 4px 8px;
        margin: 5px;
      }
    }
  }
}
</style>
