import { h, defineComponent, defineAsyncComponent } from 'vue';
import StructureData from '@/server/Structure.json'

console.log('StructureData',StructureData)
function loadComponent(event: any) {

  const tag = event.__item__.tag
  const children = StructureData.filter(i=>i.id == event.__item__.parentId)
  console.log('eeee',children)
  const componentName = tag.replace(/-(\w)/g, (_: any, c: any) => c.toUpperCase()).replace(/^\w/, c => c.toUpperCase());
  return () => import('element-plus').then(elementPlus => elementPlus[componentName]);
}

export default defineComponent({
  props: {
    conf: {
      type: Object,
      required: true,
    },
  },

  render() {
    const defaultSlot = this.$slots.default ? this.$slots.default() : [];
    const children = [...defaultSlot];
    const AsyncComponent = defineAsyncComponent(loadComponent(this.conf));
    return h(AsyncComponent, {}, () => children);
  },
});