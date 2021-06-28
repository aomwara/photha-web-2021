<template>
  <div class="form-page">
    <div class="page-wrap">
      <hidden point="mdUp">
        <div class="logo logo-header">
          <a :href="routerLink.education.home">
            <img src="/images/education-logo.svg" alt="logo" />
          </a>
        </div>
      </hidden>
      <v-container class="max-lg inner-wrap">
        <v-card class="card form-box fragment-fadeUp">
          <v-btn
            :href="routerLink.education.home"
            icon
            class="backtohome"
          >
            <i class="ion-ios-home-outline" />
            <i class="ion-ios-arrow-thin-left" />
          </v-btn>
          <div class="auth-frame">
            <v-row>
              <v-col md="5" cols="12">
                <hidden point="smDown">
                  <div class="greeting">
                    <div class="deco">
                      <div class="primary-light"></div>
                      <div class="secondary-main"></div>
                      <div class="secondary-light"></div>
                    </div>
                    <div class="logo">
                      <img src="/images/education-logo.svg" alt="logo" />
                      <p class="use-text-subtitle2">
                        {{ brand.education.projectName }}
                      </p>
                    </div>
                    <h4 class="use-text-title2 pb-2">
                      {{ title }}
                    </h4>
                    <h6 class="use-text-paragraph">
                      {{ subtitle }}
                    </h6>
                  </div>
                </hidden>
              </v-col>
              <v-col md="7" cols="12">
                <div class="form-wrap">
                  <slot />
                </div>
              </v-col>
            </v-row>
          </div>
        </v-card>
      </v-container>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './form-style.scss';
</style>

<script>
import brand from '~/static/text/brand'
import routerLink from '~/static/text/link'
import Hidden from '../Hidden'

export default {
  components: {
    Hidden
  },
  data() {
    return {
      brand: brand,
      routerLink: routerLink
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      default: ''
    }
  }
}
</script>
