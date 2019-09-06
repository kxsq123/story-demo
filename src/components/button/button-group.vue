<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>
<script>
const prefixCls = 'ivu-btn-group'

export default {
  name: 'ButtonGroup',
  props: {
    size: {
      validator (value) {
        return ['small', 'large', 'default'].includes(value)
      },
      default () {
        return !this.$IVIEW || this.$IVIEW.size === '' ? 'default' : this.$IVIEW.size
      }
    },
    shape: {
      validator (value) {
        return ['circle', 'circle-outline'].includes(value)
      }
    },
    vertical: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-${this.size}`]: !!this.size,
          [`${prefixCls}-${this.shape}`]: !!this.shape,
          [`${prefixCls}-vertical`]: this.vertical
        }
      ]
    }
  }
}
</script>
