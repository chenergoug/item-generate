<template>
  <div class="app_aside">
    <div class="aside_body">
      <div class="aside_list" v-for="item in asideData" :key="item.id">
        <span class="aside_list-title">{{ item.title }}</span>
        <draggable
          :list="item.data"
          :group="{ name: 'people', pull: 'clone', put: false }"
          @change="onEnd"
          item-key="label"
          :sort="false"
        >
          <template #item="{ element }">
            <div class="aside_list-draggable">
              {{ element.__config__.label }}
            </div>
          </template>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import draggable from 'vuedraggable'
import { asideComponents } from '../../config/generator/index.ts'
const asideData = ref(asideComponents)

const onEnd = (evt) => {
  console.log('1', evt)
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
