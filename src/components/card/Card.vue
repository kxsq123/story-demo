<template>
  <div :class="classes">
    <div :class="headClasses" v-if="showHead">
      <slot name="title">
        <p v-if="title">
          <span>{{title}}</span>
        </p>
      </slot>
    </div>
    <div :class="extraClasses" v-if="showExtra">
      <slot name="extra"></slot>
    </div>
    <div :class="bodyClasses" :style="bodyStyles">
      <slot></slot>
    </div>
  </div>
</template>
<script>
const prefixCls = 'iyx-card'
const defaultPadding = 16

export default {
  name: 'Card',
  props: {
    bordered: {
      type: Boolean,
      default: true
    },
    disHover: {
      type: Boolean,
      default: false
    },
    shadow: {
      type: Boolean,
      default: false
    },
    padding: {
      type: Number,
      default: defaultPadding
    },
    title: {
      type: String
    },
    icon: {
      type: String
    }
  },
  data () {
    return {
      showHead: true,
      showExtra: true
    }
  },
  computed: {
    classes () {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-bordered`]: this.bordered && !this.shadow,
          [`${prefixCls}-dis-hover`]: this.disHover || this.shadow,
          [`${prefixCls}-shadow`]: this.shadow
        }
      ]
    },
    headClasses () {
      return `${prefixCls}-head`
    },
    extraClasses () {
      return `${prefixCls}-extra`
    },
    bodyClasses () {
      return `${prefixCls}-body`
    },
    bodyStyles () {
      if (this.padding !== defaultPadding) {
        return {
          padding: `${this.padding}px`
        }
      } else {
        return ''
      }
    }
  },
  mounted () {
    this.showHead = this.title || this.$slots.title !== undefined
    this.showExtra = this.$slots.extra !== undefined
  }
}
</script>
