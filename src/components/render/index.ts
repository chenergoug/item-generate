import { h, defineComponent, defineAsyncComponent } from 'vue';

function loadComponent(tag: string) {
  const componentName = tag.replace(/-(\w)/g, (_, c) => c.toUpperCase()).replace(/^\w/, c => c.toUpperCase());
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
    const AsyncComponent = defineAsyncComponent(loadComponent(this.conf.__config__.tag));
    return h(AsyncComponent, {modelValue: 'Initial value',disabled:true}, () => children);
  },
});