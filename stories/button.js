/**
 * Created by daizengyu on 2019/3/26.
 */
import { storiesOf } from '@storybook/vue'
import { action, actions } from '@storybook/addon-actions'
import Centered from '@storybook/addon-centered/vue'

storiesOf('DEMO|Button (按钮组件)', module)
  .addDecorator(Centered)
  .add('基础按钮', () => ({
    template: `
      <div>
        <iButton>Default</iButton>
        <iButton type="primary">Primary</iButton>
        <iButton type="dashed">Dashed</iButton>
        <iButton type="text">Text</iButton>
        <br><br>
        <iButton type="info">Info</iButton>
        <iButton type="success">Success</iButton>
        <iButton type="warning">Warning</iButton>
        <iButton type="error">Error</iButton>
      </div>`
  }))
  .add('按钮事件 (Action only)', () => ({
    template: `
      <div>
        <iButton type="info" @handleClick="log">Primary - 点击Actions 面板查看</iButton>
      </div>`,
    methods: {
      log: action('log1')
    }
  }))
  .add('按钮事件 (Actions)', () => ({
    template: `
      <div>
        <iButton type="success" @handleClick="myClickEvent" @handleDbclick="doubleClickEvent">
          Primary - 点击Actions 面板查看
        </iButton>
      </div>`,
    methods: actions('myClickEvent', 'doubleClickEvent')
  }))
