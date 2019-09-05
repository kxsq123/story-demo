var nodeExternals = require('webpack-node-externals')
var Components = require('../components.json')

var externals = {}

Object.keys(Components).forEach((key) => {
  externals[`story-ui/src/components/${key}`] = `story-ui/lib/${key}`
})

externals = [Object.assign({
  vue: 'vue'
}, externals), nodeExternals()]

exports.externals = externals

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
}
