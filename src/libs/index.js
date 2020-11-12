import VueHorizontalLine from './../components/vue-horizontal-line.vue'

const install = function (Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component('VueHorizontalLine', VueHorizontalLine)
}

const plugin = {
  install
}

let GlobalVue

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}

if (GlobalVue) {
  GlobalVue.use(plugin)
}

VueHorizontalLine.install = install

export default VueHorizontalLine

export { VueHorizontalLine }