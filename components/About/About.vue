<template>
  <div class="root">
    <v-container class="fixed-width">
      <u-animate-container>
        <v-row>
          <v-col md="6" cols="12" class="illu-wrap">
            <hidden point="smDown">
              <div class="illustration one" />
              <figure class="illustration two">
                <img :src="imgAPI.education[11]" alt="about" />
              </figure>
              <figure class="illustration three">
                <img :src="imgAPI.education[12]" alt="about"/>
              </figure>
              <figure class="illustration four">
                <img :src="imgAPI.education[13]" alt="about">
              </figure>
              <div class="illustration five" />
            </hidden>
          </v-col>
          <v-col md="6" cols="12">
            <u-animate
              :offset="-100"
              delay="0.2s"
              name="fadeInRight"
              duration="0.6s"
            >
              <div>
                <div class="title-about">
                  <h3 class="use-text-title">
                    <span>{{ $t('educationLanding.about_title') }}</span>
                  </h3>
                </div>
                <p class="use-text.paragraph">
                  {{ $t('educationLanding.about_desc') }}
                </p>
                <v-btn :href="link.education.login" class="white">
                  {{ $t('educationLanding.about_join') }}
                </v-btn>
              </div>
              
            </u-animate>
          </v-col>
        </v-row>
       </u-animate-container>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './about-style.scss';
</style>

<script>
import imgAPI from '~/static/images/imgAPI'
import link from '~/static/text/link'
import Hidden from '../Hidden'
import Title from '../Title'

export default {
  components: {
    Hidden,
    'title-main': Title
  },
  data: () => ({
    imgAPI: imgAPI,
    link: link
  })
}
</script>
