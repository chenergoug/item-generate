<template>
  <div class="app_side">
    <el-tabs v-model="activeName">
      <el-tab-pane label="组件属性" name="0">
        <el-scrollbar>
          <el-form :model="sideConfig" label-width="80px">
            <el-form-item label="组件类型">
              <el-select clearable v-model="sideConfig.type" placeholder="请选择组件类型">
                <el-option label="单行文本框" value="text" />
                <el-option label="多行文本框" value="textarea" />
              </el-select>
            </el-form-item>
            <el-form-item label="组件名称">
              <el-input clearable v-model="sideConfig.name" placeholder="请输入组件名称" />
            </el-form-item>
            <el-form-item label="Max">
              <el-input-number v-model="sideConfig.maxlength" placeholder="请输入最长字符长度" style="width: 100%" />
            </el-form-item>
            <el-form-item label="Min">
              <el-input-number v-model="sideConfig.minlength" placeholder="请输入最短字符长度" style="width: 100%" />
            </el-form-item>
            <el-form-item label="行数">
              <el-input-number v-model="sideConfig.rows" placeholder="请输入行数" style="width: 100%" />
            </el-form-item>
            <el-form-item label="前缀">
              <el-input clearable v-model="sideConfig.prefix" placeholder="请输入输入框前缀" />
            </el-form-item>
            <el-form-item label="后缀">
              <el-input clearable v-model="sideConfig.suffix" placeholder="请输入输入框后缀" />
            </el-form-item>
            <el-form-item label="前缀图标">
              <el-input clearable v-model="sideConfig.prefixIcon" placeholder="请选择输入框前缀图标">
                <template #append> <el-button :icon="Pointer"> 选择</el-button> </template>
              </el-input>
            </el-form-item>
            <el-form-item label="后缀图标">
              <el-input clearable v-model="sideConfig.suffixIcon" placeholder="请选择输入框后缀图标">
                <template #append> <el-button :icon="Pointer"> 选择</el-button></template>
              </el-input>
            </el-form-item>
            <el-form-item label="占位文本">
              <el-input clearable v-model="sideConfig.placeholder" placeholder="请输入占位文本" />
            </el-form-item>
            <el-form-item label="清除按钮">
              <el-switch v-model="sideConfig.clearable" />
            </el-form-item>
            <el-form-item label="密码图标">
              <el-switch v-model="sideConfig.showPassword" />
            </el-form-item>
            <el-form-item label="是否禁用">
              <el-switch v-model="sideConfig.disabled" />
            </el-form-item>
            <el-form-item label="统计字数">
              <el-switch v-model="sideConfig.showNumber" />
            </el-form-item>
            <el-form-item label="高度自动">
              <el-switch v-model="sideConfig.autosize" />
            </el-form-item>
          </el-form>
        </el-scrollbar>
      </el-tab-pane>

      <el-tab-pane label="全局配置" name="1">
        <el-scrollbar>
          <el-form :model="parentConfig" label-width="80px">
            <el-form-item label="表单名">
              <el-input clearable v-model="parentConfig.name" placeholder="请输入表单名" />
            </el-form-item>
            <el-form-item label="数据名称">
              <el-input clearable v-model="parentConfig.model" placeholder="请输入数据名称" />
            </el-form-item>
            <el-form-item label="标签宽度">
              <el-input-number clearable v-model="parentConfig.labelWidth" style="width: 100%" />
            </el-form-item>
            <el-form-item label="表单尺寸">
              <el-radio-group v-model="parentConfig.size">
                <el-radio-button label="large">large</el-radio-button>
                <el-radio-button label="default">default</el-radio-button>
                <el-radio-button label="small">small</el-radio-button>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="标签位置">
              <el-radio-group v-model="parentConfig.labelPosition">
                <el-radio-button label="left">Left</el-radio-button>
                <el-radio-button label="right">Right</el-radio-button>
                <el-radio-button label="top">Top</el-radio-button>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="星号位置">
              <el-radio-group v-model="parentConfig.requireAsteriskPosition">
                <el-radio-button label="left">Left</el-radio-button>
                <el-radio-button label="right">Right</el-radio-button>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="验证规则">
              <el-input type="textarea" v-model="parentConfig.rules" placeholder="请输入验证规则" />
            </el-form-item>

            <el-form-item label="行内信息">
              <el-switch v-model="parentConfig.inlineMessage" />
            </el-form-item>
            <el-form-item label="行内模式">
              <el-switch v-model="parentConfig.inline" />
            </el-form-item>
            <el-form-item label="必填项">
              <el-switch v-model="parentConfig.required" />
            </el-form-item>
            <el-form-item label="禁用">
              <el-switch v-model="parentConfig.disabled" />
            </el-form-item>
            <el-form-item label="校验信息">
              <el-switch v-model="parentConfig.showMessage" />
            </el-form-item>
            <el-form-item label="隐藏必填">
              <el-switch v-model="parentConfig.hideRequiredAsterisk" />
            </el-form-item>
          </el-form>
        </el-scrollbar>
      </el-tab-pane>
    </el-tabs>
  </div>

  <dialog-icon />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Pointer } from '@element-plus/icons-vue'
import ComponentData from '@/server/Component.json'
import StructureData from '@/server/Structure.json'
import DialogIcon from '@/components/dialog/icon/index.vue'

const sideData = ComponentData[0].data[0]
const parentData = StructureData.filter((i) => i.id == sideData.__item__.parentId)

const activeName = ref('0')
const sideConfig = ref(sideData.__config__)
const parentConfig = ref(parentData[0].__config__)
</script>

<style lang="scss" scoped></style>
