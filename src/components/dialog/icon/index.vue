<template>
  <el-dialog v-model="dialogTableVisible" title="选择图标" width="60%">
    <div class="dialog-icon">
      <div v-for="item in ElementPlusIconsVue" class="icon-module" @click="handleClick(item.name)">
        <el-icon :size="30">
          <component :is="item" />
        </el-icon>
        <span>{{ item.name }}</span>
      </div>
    </div>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const dialogTableVisible = ref(true)
const handleClick = (item) => {
  console.log('item', item)
}
</script>

<style lang="scss" scoped>
.dialog-icon {
  height: 800px;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.icon-module {
  width: 140px;
  height: 140px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  cursor: $cursor-pointer;

  span {
    margin-top: 10px;
  }
}
</style>
