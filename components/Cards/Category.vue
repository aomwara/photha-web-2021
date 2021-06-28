<template>
  <div class="card-wrap">
    <span class="fold" />
    <v-btn class="category-card" href="#">
      <span class="figure">
        <img
          :src="img"
          alt="img"
        >
      </span>
      <span class="property">
        <span class="title-category">
          {{ title }}
        </span>
        <span class="desc-category">
          {{ desc }}
        </span>
      </span>
    </v-btn>
  </div>
</template>

<style lang="scss" scoped>
@import './card-style';
</style>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    }
  }
}
</script>
