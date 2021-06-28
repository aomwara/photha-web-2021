<template>
  <div class="root">
    <div class="parallax-wrap">
      <dot-parallax />
    </div>
    <v-container>
      <div class="floating-title">
        <title-main
          :head="$t('educationLanding.popular_title')"
          :desc="$t('educationLanding.popular_desc')"
          :align="isMobile ? 'center' : 'left'"
          dark
          color="primary"
        />
      </div>
    </v-container>
    <div class="slider-wrap">
      <div class="carousel" v-if="loaded">
        <slick ref="slick" :options="slickOptions">
          <div class="props item-props-first">
            <div />
          </div>
          <div
            v-for="(item, index) in courseData"
            :key="index"
            class="item"
          >
            <general-card
              :img="item.img"
              :title="item.title"
              :desc="item.desc"
              :rating="item.rating"
              :price="item.price"
            />
          </div>
          <div class="props item-props-last">
            <div />
          </div>
        </slick>
      </div>
      <v-btn
        icon
        fab
        class="nav prev"
        @click="prev()"
      >
        <i class="ion-ios-arrow-left" />
      </v-btn>
      <v-btn
        icon
        fab
        class="nav next"
        @click="next()"
      >
        <i class="ion-ios-arrow-right" />
      </v-btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './popular-course-style.scss';
</style>

<script>
import imgAPI from '~/static/images/imgAPI'
import GeneralCard from '../Cards/General'
import Title from '../Title'
import DotParallax from '../Parallax/Dot'

const courseData = [
  {
    img: imgAPI.education[9],
    title: 'Vivamus sit amet',
    rating: 5,
    price: 50,
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: imgAPI.education[5],
    title: 'Vivamus sit amet',
    rating: 4,
    price: 10,
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: imgAPI.education[3],
    title: 'Vivamus sit amet',
    rating: 5,
    price: 50,
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: imgAPI.education[4],
    title: 'Vivamus sit amet',
    rating: 3,
    price: 25,
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: imgAPI.education[8],
    title: 'Vivamus sit amet',
    rating: 5,
    price: 50,
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: imgAPI.education[7],
    title: 'Vivamus sit amet',
    rating: 5,
    price: 40,
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  }
]

export default {
  components: {
    'title-main': Title,
    DotParallax,
    GeneralCard,
    Slick: () => import('vue-slick')
  },
  data() {
    return {
      imgAPI: imgAPI,
      loaded: false,
      courseData: courseData,
      slickOptions: {
        dots: false,
        infinite: false,
        speed: 500,
        autoplay: false,
        slidesToShow: 4,
        arrows: false,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      }
    }
  },
  mounted() {
    this.loaded = true
    const props = window.innerWidth > 1400 ? 1 : 2 // div.carousel-props length for screen < 1400px and (-1) for screen > 1400px
    setTimeout(() => {
      if (this.$vuetify.rtl) {
        const lastSlide = Math.floor(this.courseData.length + props - this.slickOptions.slidesToShow)
        this.$refs.slick.goTo(lastSlide)
      }
    }, 200)
  },
  computed: {
    isMobile() {
      const xsDown = this.$store.state.breakpoints.xsDown
      return xsDown.indexOf(this.$mq) > -1
    }
  },
  methods: {
    next: function() {
      this.$refs.slick.next()
    },
    prev: function() {
      this.$refs.slick.prev()
    }
  }
}
</script>
