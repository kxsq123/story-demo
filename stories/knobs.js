/**
 * Created by daizengyu on 2019/3/27.
 */

import { storiesOf } from '@storybook/vue'
import Centered from '@storybook/addon-centered/vue'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import notes from './knobs.md'

storiesOf('DEMO|Knobs', module)
  .addDecorator(Centered)
  .addDecorator(withKnobs)
  .add(
    'Knobs 介绍',
    () => ({
      template: `
        <h3>
          Storybook Addon Knobs allow you to edit React props dynamically using the Storybook UI.
          You can also use Knobs as a dynamic variable inside stories in Storybook.
        </h3>`
    })
  )
  .add(
    'Knobs 使用',
    () => ({
      props: {
        btnType: {
          default: select('选择类型', ['default', 'success', 'info', 'error'], 'default')
        },
        isDisabled: {
          default: boolean('是否禁用', false)
        },
        text: {
          default: text('请输入内容', '测试 Knobs 按钮 - 点击下方 Knobs 面板查看')
        }
      },
      template: `
        <iButton :type="btnType" :disabled="isDisabled">{{ text }}</iButton>
      `
    }),
    {
      notes
    }
  )
