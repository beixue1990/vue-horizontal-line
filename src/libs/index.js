import VueHorizontalLine from './components/vue-horizontal-line.vue'
const HorizontalLine = {
  install(Vue, options) {
    Vue.component(VueHorizontalLine.name, VueHorizontalLine)
  }
}
if (typeof window !== 'undefined' && window.Vue) {
  window.HorizontalLine = HorizontalLine
  Vue.use(HorizontalLine)
}
export default HorizontalLine