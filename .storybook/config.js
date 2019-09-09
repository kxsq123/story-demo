/**
 * Created by daizengyu on 2019/3/26.
 */
import { configure } from '@storybook/vue';

function loadStories() {
  require('../stories/index.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);
