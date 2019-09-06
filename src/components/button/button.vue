<template>
  <component
    :is="tagName" :class="classes" :disabled="disabled"
    @click="handleClick"
    @dbclick="handleDoubleClick"
    v-bind="tagProps">
    <span v-if="showSlot" ref="slot">
      <slot></slot>
    </span>
  </component>
</template>
<script>
// import mixinsLink from '../../mixins/link'

const prefixCls = 'iyx-btn'

export default {
  name: 'iButton',
  // mixins: [mixinsLink],
  props: {
    type: {
      validator (value) {
        return ['default', 'primary', 'dashed', 'text', 'info', 'success', 'warning', 'error'].includes(value)
      },
      default: 'default'
    },
    shape: {
      validator (value) {
        return ['circle', 'circle-outline'].includes(value)
      }
    },
    size: {
      validator (value) {
        return ['small', 'large', 'default'].includes(value)
      },
      default () {
        return !this.$IVIEW || this.$IVIEW.size === '' ? 'default' : this.$IVIEW.size
      }
    },
    loading: Boolean,
    disabled: Boolean,
    htmlType: {
      default: 'button',
      validator (value) {
        return ['button', 'submit', 'reset'].includes(value)
      }
    },
    icon: {
      type: String,
      default: ''
    },
    customIcon: {
      type: String,
      default: ''
    },
    long: {
      type: Boolean,
      default: false
    },
    ghost: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      showSlot: true
    }
  },
  computed: {
    classes () {
      return [
        `${prefixCls}`,
        `${prefixCls}-${this.type}`,
        {
          [`${prefixCls}-long`]: this.long,
          [`${prefixCls}-${this.shape}`]: !!this.shape,
          [`${prefixCls}-${this.size}`]: this.size !== 'default',
          [`${prefixCls}-loading`]: this.loading != null && this.loading,
          [`${prefixCls}-icon-only`]: !this.showSlot && (!!this.icon || !!this.customIcon || this.loading),
          [`${prefixCls}-ghost`]: this.ghost
        }
      ]
    },
    // Point out if it should render as <a> tag
    isHrefPattern () {
      const { to } = this
      return !!to
    },
    tagName () {
      const { isHrefPattern } = this
      return isHrefPattern ? 'a' : 'button'
    },
    tagProps () {
      const { isHrefPattern } = this
      if (isHrefPattern) {
        const { linkUrl, target } = this
        return { href: linkUrl, target }
      } else {
        const { htmlType } = this
        return { type: htmlType }
      }
    }
  },
  methods: {
    // Ctrl or CMD and click, open in new window when use `to`
    handleClick (event) {
      this.$emit('handleClick', event)
    },
    handleDoubleClick (event) {
      this.$emit('handleDoubleClick', event)
    }
  },
  mounted () {
    this.showSlot = this.$slots.default !== undefined
  }
}
</script>
