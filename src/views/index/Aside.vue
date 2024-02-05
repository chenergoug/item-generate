<template>
  <div class="app_aside">
    <div class="aside_body">
      <div class="aside_list" v-for="item in asideData" :key="item.id">
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
import Bus from '../../utils/bus.ts'
import { asideComponents, formConfig } from '../../config/generator/index.ts'

let idGlobal = 100
let tempActiveData
let drawingList: any[] = []
let activeData = []
let activeId = null
// 组件列表
const asideData = ref(asideComponents)

// 点击组件
const addComponent = (event: any) => {
  const clone = cloneComponent(event)
  // fetchData(clone)
  // drawingList.push(clone)
  // activeFormItem(clone)
  Bus.emit('on-click', clone)
}

// 复制组件
const cloneComponent = (origin: any) => {
  const clone = JSON.parse(JSON.stringify(origin))
  const config = clone.__config__
  config.span = formConfig.span // 生成代码时，会根据span做精简判断
  createIdAndKey(clone)
  clone.placeholder !== undefined && (clone.placeholder += config.label)
  tempActiveData = clone
  return tempActiveData
}

// 创建dom
const createIdAndKey = (item: { __config__: any; __vModel__: string }) => {
  const config = item.__config__
  config.formId = ++idGlobal
  config.renderKey = `${config.formId}${+new Date()}` // 改变renderKey后可以实现强制更新组件
  if (config.layout === 'colFormItem') {
    item.__vModel__ = `field${idGlobal}`
  } else if (config.layout === 'rowFormItem') {
    config.componentName = `row${idGlobal}`
    !Array.isArray(config.children) && (config.children = [])
    delete config.label // rowFormItem无需配置label属性
  }
  if (Array.isArray(config.children)) {
    config.children = config.children.map((childItem: { __config__: any; __vModel__: string }) =>
      createIdAndKey(childItem)
    )
  }
  return item
}

//
const fetchData = (component: any) => {
  const { dataType, method, url } = component.__config__
  if (dataType === 'dynamic' && method && url) {
    setLoading(component, true)
    // this.$axios({
    //   method,
    //   url
    // }).then((resp: { data: any }) => {
    //   setLoading(component, false)
    //   setRespData(component, resp.data)
    // })
  }
}
//
const activeFormItem = (currentItem: any[]) => {
  activeData = currentItem
  activeId = currentItem.__config__.formId
}
//
const setLoading = (component: { directives: any }, val: any) => {
  const { directives } = component
  if (Array.isArray(directives)) {
    const t = directives.find((d) => d.name === 'loading')
    if (t) t.value = val
  }
}

const setRespData = (component: { __config__: { dataPath: any; renderKey: any; dataConsumer: any } }, resp: any) => {
  const { dataPath, renderKey, dataConsumer } = component.__config__
  if (!dataPath || !dataConsumer) return
  const respData = dataPath.split('.').reduce((pre: { [x: string]: any }, item: string | number) => pre[item], resp)

  // 将请求回来的数据，赋值到指定属性。
  // 以el-tabel为例，根据Element文档，应该将数据赋值给el-tabel的data属性，所以dataConsumer的值应为'data';
  // 此时赋值代码可写成 component[dataConsumer] = respData；
  // 但为支持更深层级的赋值（如：dataConsumer的值为'options.data'）,使用setObjectValueReduce
  setObjectValueReduce(component, dataConsumer, respData)
  const i = drawingList.findIndex((item) => item.__config__.renderKey === renderKey)
  if (i > -1) this.$set(drawingList, i, component)
}

const setObjectValueReduce = (
  obj: { __config__: { dataPath: any; renderKey: any; dataConsumer: any } },
  strKeys: string,
  data: any
) => {
  const arr = strKeys.split('.')
  arr.reduce((pre: { [x: string]: any }, item: string | number, i: number) => {
    if (arr.length === i + 1) {
      pre[item] = data
    } else if (!isObjectObject(pre[item])) {
      pre[item] = {}
    }
    return pre[item]
  }, obj)
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
