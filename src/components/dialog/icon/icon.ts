import { h, defineComponent, defineAsyncComponent } from 'vue';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

function iconComponent() {
  for (let i in ElementPlusIconsVue) {
    return i
  }
  
}

export default defineComponent({
  render() {
    const AsyncComponent = defineAsyncComponent(iconComponent());
    return h(AsyncComponent, {}, () => '');
  }
})