import VueHorizontalLine from './src/components/vue-horizontal-line.vue'
import _Vue from 'vue'

VueHorizontalLine.install = (Vue) => {
  if (!Vue) {
    window.Vue = Vue = _Vue
  }
  Vue.component(VueHorizontalLine.name, VueHorizontalLine)
}
export default VueHorizontalLine