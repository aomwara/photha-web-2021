<template>
  <div class="root">
    <v-container class="max-md">
      <title-main
        :head="$t('educationLanding.feature_title')"
        :desc="$t('educationLanding.feature_desc')"
        align="center"
        color="primary"
      />
      <v-row class="spacing8 grid">
        <v-col sm="6" class="px-8">
          <div class="counter-item">
            <figure>
              <img src="/images/education/hd-video.svg" alt="hd-video" />
            </figure>
            <div class="text" v-if="loaded">
              <h4 class="use-text-title">
                +<span
                  v-countUp:onWindowScroll.once="{
                    watchedElId: 'watched_counter',
                    startValue: 0,
                    endValue: 100,
                    options: { duration: 1 }
                  }"
                />K
              </h4>
              <h6 class="use-text-subtitle2">
                {{ $t('educationLanding.counter_videos') }}
              </h6>
            </div>
          </div>
        </v-col>
        <v-col sm="6" class="px-8">
          <div class="counter-item">
            <figure>
              <img src="/images/education/presenter.svg" alt="presenter" />
            </figure>
            <div class="text" v-if="loaded">
              <h4 class="use-text-title">
                +<span
                  v-countUp:onWindowScroll.once="{
                    watchedElId: 'watched_counter',
                    startValue: 0,
                    endValue: 200,
                    options: { duration: 1 }
                  }"
                />
              </h4>
              <h6 class="use-text-subtitle2">
                {{ $t('educationLanding.counter_mentors') }}
              </h6>
            </div>
          </div>
        </v-col>
        <v-col sm="6" class="px-8">
          <div class="counter-item">
            <figure>
              <img src="/images/education/money.svg" alt="money" />
            </figure>
            <div class="text" v-if="loaded">
              <h4 class="use-text-title">
                $<span
                  v-countUp:onWindowScroll.once="{
                    watchedElId: 'watched_counter',
                    startValue: 0,
                    endValue: 500,
                    options: { duration: 2 }
                  }"
                />
              </h4>
              <h6 class="use-text-subtitle2">
                {{ $t('educationLanding.counter_save') }}
              </h6>
            </div>
          </div>
        </v-col>
        <v-col sm="6" class="px-8">
          <div class="counter-item">
            <figure>
              <img src="/images/education/unlimited.svg" alt="unlimited" />
            </figure>
            <div class="text" v-if="loaded">
              <h4 class="use-text-title">Free</h4>
              <h6 class="use-text-subtitle2">
                {{ $t('educationLanding.counter_free') }}
              </h6>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import 'feature-style.scss';
</style>

<script>
import Title from '../Title'

export default {
  components: {
    'title-main': Title
  },
  data() {
    return {
      loaded: false
    }
  },
  mounted() {
    this.loaded = true
  }
}
</script>
