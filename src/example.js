/**
 * 组件库开发环境入口
 */
import Vue from 'vue'
import Card from './components/card'
import iButton from './components/button'

Vue.use(Button)
Vue.use(Select)
Vue.use(Dialog)
Vue.use(Checkbox)

const components = {
  Card,
  iButton
}

const install = function (Vue) {
  if (install.installed) return

  Object.keys(components).forEach(key => {
    Vue.component(key, components[key])
  })
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const API = {
  version: process.env.VERSION, // eslint-disable-line no-undef
  install,
  ...components
}

// module.exports.default = module.exports = API // eslint-disable-line no-undef
export default API
