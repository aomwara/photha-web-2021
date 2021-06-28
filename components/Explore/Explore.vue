<template>
  <div :class="[isRtl ? 'rtl' : 'ltr']" class="root">
    <div class="parallax-wrap">
      <dot-parallax />
    </div>
    <v-container :class="{ 'fixed-width': isDesktop }">
      <div class="px-6">
        <title-main
          :head="$t('educationLanding.explore_title')"
          :desc="$t('educationLanding.explore_desc')"
          :align="isMobile ? 'center' : 'left'"
          color="primary"
        />
      </div>
      <div class="massonry" v-if="loaded">
        <u-animate-container>
          <v-row>
            <v-col
              v-for="(item, index) in categoriesData"
              :key="index"
              cols="6"
              lg="4"
              sm="6"
              class="pa-sm-6 pa-2"
            >
              <u-animate
                :delay="(index * 0.2) + 's'"
                name="fadeInUpShort"
                duration="0.4s"
              >
                <div>
                  <category-card
                    :img="item.img"
                    :title="item.title"
                    :desc="item.desc"
                  />
                </div>
              </u-animate>
            </v-col>
            <v-col
              cols="6"
              lg="4"
              sm="6"
              class="pa-sm-6 pa-2"
            >
              <u-animate
                :delay="(categoriesData.length * 0.2) + 's'"
                name="fadeInUpShort"
                duration="0.4s"
              >
                <div class="card-wrap">
                  <span class="fold"></span>
                  <v-btn class="all-category-card" href="#">
                    <span class="figure">
                      <img :src="imgAPI.education[10]" alt="img"/>
                    </span>
                    <span class="property">
                      <span class="title-category">ALL COURSE</span>
                      <v-icon>mdi-arrow-right</v-icon>
                    </span>
                  </v-btn>
                </div>
              </u-animate>
            </v-col>
          </v-row>
        </u-animate-container>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './explore-style.scss';
</style>

<script>
import imgAPI from '~/static/images/imgAPI'
import Title from '../Title'
import DotParallax from '../Parallax/Dot'
import CategoryCard from '../Cards/Category'

export default {
  components: {
    'title-main': Title,
    CategoryCard,
    DotParallax
  },
  data() {
    return {
      loaded: false,
      imgAPI: imgAPI,
      isRtl: false,
      categoriesData: [
        {
          img: imgAPI.education[0],
          title: 'Photography',
          desc: 'Nulla lobortis nunc vitae nisi semper semper.'
        },
        {
          img: imgAPI.education[4],
          title: 'Artificial Intelligence',
          desc: 'Nulla lobortis nunc vitae nisi semper semper.'
        },
        {
          img: imgAPI.education[7],
          title: 'Architect',
          desc: 'Nulla lobortis nunc vitae nisi semper semper.'
        },
        {
          img: imgAPI.education[2],
          title: 'Geography',
          desc: 'Nulla lobortis nunc vitae nisi semper semper.'
        },
        {
          img: imgAPI.education[6],
          title: 'Art',
          desc: 'Nulla lobortis nunc vitae nisi semper semper.'
        }
      ]
    }
  },
  mounted() {
    this.loaded = true
    setTimeout(() => {
      if (this.$vuetify.rtl) {
        this.isRtl = true
      }
    }, 200)
  },
  computed: {
    isDesktop() {
      return this.$mq === 'mdDown' || this.$mq === 'lgDown' || this.$mq === 'xl'
    },
    isMobile() {
      const xsDown = this.$store.state.breakpoints.xsDown
      return xsDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
