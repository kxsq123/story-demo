/**
 * Created by daizengyu on 2019/3/27.
 */

import { storiesOf } from '@storybook/vue'
import Centered from '@storybook/addon-centered/vue'
import notes from './notes.md'

storiesOf('DEMO|Notes', module)
  .addDecorator(Centered)
  .add(
    '笔记',
    () => ({
      template: '<h2>假装自己是一个组件 - 点击上方notes面板查看</h2>'
    }),
    {
      notes: `
        这里是我的笔记

        组件说明：

          0x01: .....
          0x02: .....
          0x03: .....
      `
    }
  )
  .add(
    'Markdown 笔记',
    () => ({
      template: '<h2>假装自己是第二个组件 - 点击上方notes面板查看</h2>'
    }), { notes }
  )
