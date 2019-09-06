/**
 * Created by daizengyu on 2019/3/26.
 */
import Vue from 'vue'
import BaseUI from '../src/example.js'
import { configure } from '@storybook/vue'
import '../src/styles/index.less'

Vue.use(BaseUI)

const req = require.context('./', true, /.js$/)

function loadStories () {
  req.keys().forEach(filename => {
    if (filename === './index.js') return // exclude index.js
    req(filename)
  })
}

configure(loadStories, module)
