<template>
  <div class="root">
    <div class="parallax-wrap">
      <v-parallax
        :src="imgAPI.education[18]"
        :height="570"
      />
    </div>
    <v-container class="fixed-width">
      <v-card class="form">
        <h4 class="use-text-title2">
          {{ $t('educationLanding.subscribe_title') }}
        </h4>
        <p class="use-text-subtitle2">
          {{ $t('educationLanding.subscribe_subtitle') }}
        </p>
        <form>
          <v-text-field
            :label="$t('educationLanding.subscribe_input')"
            color="primary"
            class="input"
            filled
            required
          />
          <v-btn large color="primary" class="button">
            {{ $t('educationLanding.subscribe_subscribe') }}
          </v-btn>
        </form>
      </v-card>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './subscribe-style.scss';
</style>

<script>
import imgAPI from '~/static/images/imgAPI'

export default {
  data: () => ({
    imgAPI: imgAPI
  })
}
</script>
