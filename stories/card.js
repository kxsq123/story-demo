/**
 * Created by daizengyu on 2019/3/26.
 */
import { storiesOf } from '@storybook/vue'
import Centered from '@storybook/addon-centered/vue'

storiesOf('DEMO|Card (卡片组件)', module)
  .addDecorator(Centered)
  .add('默认的卡片', () => ({
    template: `
        <Card style="width: 400px">
          <p>默认的卡片</p>
        </Card>`
  }))
  .add('带标题的卡片', () => ({
    template: `
        <Card style="width: 400px; height: 300px">
          <p slot="title">
            这是标题
          </p>
          <div>
            <p>Demo</p>
            <p>测试插槽</p>
            <p>Card 123</p>
          </div>
        </Card>`
  }))
  .add('内容为emoji的卡片', () => ({
    template: `
        <Card style="width: 400px">
          🐶
          🐶
          👍
          👍
        </Card>`
  }))
