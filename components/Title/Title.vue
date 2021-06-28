<template>
  <div
    :class="['align-' + align, { dark: dark }]"
    class="title-main"
  >
    <h4
      :class="color+'-color'"
      class="use-text-title"
    >
      <span>
        {{ head }}
      </span>
    </h4>
    <p class="desc use-text-subtitle2">
      {{ desc }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
@import './title-style';
</style>

<script>
export default {
  props: {
    align: {
      type: String,
      default: 'left'
    },
    head: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: 'primary'
    },
    dark: {
      type: Boolean,
      default: false
    }
  }
}
</script>
