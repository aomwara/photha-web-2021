<template>
  <div class="testimonial">
    <div class="icon">
      <v-icon>mdi-format-quote-close</v-icon>
    </div>
    <p class="caption-title">
      {{ title }} <small>{{ date }}</small>
    </p>
    <p class="text">
      {{ text }}
    </p>
    <v-btn :href="title" class="button" outlined color="primary">
        อ่านต่อ
    </v-btn>
    <v-btn :href="title" class="button" outlined color="primary">
        แชร์
    </v-btn>
    
  </div>
</template>

<style lang="scss" scoped>
@import './card-style.scss';
</style>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    }
  }
}
</script>
