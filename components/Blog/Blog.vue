<template>
  <div class="root">
    <v-dialog
      v-model="dialog"
      max-width="690"
    >
      <v-card class="video-popup">
        <v-card-title class="headline">
          <h2 class="title-main">
            {{ $t('educationLanding.blog_video') }}
            <v-btn icon @click="handleVideoClose()">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </h2>
        </v-card-title>
        <div class="text-center" v-if="yt">
          <youtube
            :video-id="videoId"
            :player-vars="playerVars"
            :width= "640"
            :height="360"
            ref="youtube"
          />
        </div>
      </v-card>
    </v-dialog>
    <hidden point="smDown">
      <div class="deco" />
    </hidden>
    <v-container class="fixed-width">
      <div class="pa-md-8 pa-2">
        <title-main
          :head="$t('educationLanding.blog_title')"
          :desc="$t('educationLanding.blog_desc')"
          :align="isMobile ? 'center' : 'left'"
          color="secondary"
        />
      </div>
      <v-row :class="[isDesktop ? 'row-reverse' : '']">
        <v-col class="pa-md-8" md="6" cols="12">
          <div class="video-wrap">
            <div class="video-carousel" v-if="loaded">
              <slick ref="slick" :options="slickOptions">
                <v-card class="item">
                  <img :src="imgAPI.education[14]" alt="cover" />
                  <v-btn
                    icon
                    class="play-btn"
                    @click="handleVideoOpen('HBeJA3q19mk')"
                  >
                    <v-icon>mdi-play</v-icon>
                  </v-btn>
                </v-card>
                <v-card class="item">
                  <img :src="imgAPI.education[15]" alt="cover" />
                  <v-btn
                    icon
                    class="play-btn"
                    @click="handleVideoOpen('6p0VM-yUpGk')"
                  >
                    <v-icon>mdi-play</v-icon>
                  </v-btn>
                </v-card>
                <v-card class="item">
                  <img :src="imgAPI.education[16]" alt="cover" />
                  <v-btn
                    icon
                    class="play-btn"
                    @click="handleVideoOpen('HBeJA3q19mk')"
                  >
                    <v-icon>mdi-play</v-icon>
                  </v-btn>
                </v-card>
                <v-card class="item">
                  <img :src="imgAPI.education[17]" alt="cover" />
                  <v-btn
                    icon
                    class="play-btn"
                    @click="handleVideoOpen('6p0VM-yUpGk')"
                  >
                    <v-icon>mdi-play</v-icon>
                  </v-btn>
                </v-card>
              </slick>
            </div>
          </div>
        </v-col>
        <v-col class="pa-md-10 pa-4" md="6" cols="12">
          <div class="blog-list" v-if="loaded">
            <u-animate-container>
              <div v-for="(item, index) in blogData" :key="index">
                <u-animate
                  :offset="-200"
                  :delay="(index *0.2) + 's'"
                  name="fadeInLeftShort"
                  duration="0.6s"
                >
                  <blog-card
                    :category="item.category"
                    :title="item.title"
                    :date="item.date"
                  />
                </u-animate>
              </div>
              <v-btn class="more" text color="secondary">more</v-btn>
            </u-animate-container>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './blog-style.scss';
</style>

<script>
import imgAPI from '~/static/images/imgAPI'
import youtube from '~/youtube'
import Title from '../Title'
import BlogCard from '../Cards/Blog'
import Hidden from '../Hidden'

const blogData = [
  {
    title: 'Vestibulum vitae tristique urna. Mauris non cursus quam',
    category: 'Science - Math',
    date: 'Feb 08 2021'
  },
  {
    title: 'Vestibulum vitae tristique urna. Mauris non cursus quam',
    category: 'Science - Math',
    date: 'Feb 08 2021'
  },
  {
    title: 'Vestibulum vitae tristique urna. Mauris non cursus quam',
    category: 'Science - Math',
    date: 'Feb 08 2021'
  }
]

export default {
  components: {
    'title-main': Title,
    Hidden,
    BlogCard,
    Slick: () => import('vue-slick')
  },
  data() {
    return {
      dialog: false,
      imgAPI: imgAPI,
      yt: youtube,
      loaded: false,
      videoId: '6p0VM-yUpGk',
      blogData: blogData,
      slickOptions: {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 750,
        fade: true,
        arrows: false
      },
      playerVars: {
        autoplay: 0,
        controls: 1,
        rel: 0,
        showinfo: 1,
        mute: 0,
        origin: 'http://localhost:8011'
      }
    }
  },
  mounted() {
    this.loaded = true
  },
  methods: {
    handleVideoOpen(id) {
      this.videoId = id
      this.dialog = true
      if (this.yt.use) {
        setTimeout(() => {
          this.player = this.$refs.youtube.player
          this.player.playVideo()
        }, 100)
      }
    },
    handleVideoClose() {
      this.dialog = false
      this.player.pauseVideo()
    }
  },
  computed: {
    player() {
      return this.$refs.youtube.player
    },
    isDesktop() {
      const smUp = this.$store.state.breakpoints.smUp
      return smUp.indexOf(this.$mq) > -1
    },
    isMobile() {
      const xsDown = this.$store.state.breakpoints.xsDown
      return xsDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
