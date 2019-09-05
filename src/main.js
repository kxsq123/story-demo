/**
 * 组件库打包入口
 */
import IyxCalendar from './components/calendar'
import PaperMark from './components/paperMark'

const components = {
  IyxCalendar,
  PaperMark
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

// const version = process.env.VERSION;
const API = {
  version: process.env.VERSION, // eslint-disable-line no-undef
  install,
  ...components
}

// module.exports.default = module.exports = API // eslint-disable-line no-undef
export default API
