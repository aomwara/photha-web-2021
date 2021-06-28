<template>
  <div class="root">
    <title-main
      :head="$t('educationLanding.testimonials_title')"
      :desc="$t('educationLanding.testimonials_desc')"
      align="center"
      color="primary"
    />
    <div class="slider-wrap">
      <div class="carousel" v-if="loaded">
        <slick
          ref="slider"
          :options="slickOptions"
        >
          <div
            v-for="(item, index) in testiContent"
            :key="index"
            class="item"
          >
            <testi-card
              :text="item.text"
              :name="item.name"
              :title="item.title"
            />
          </div>
        </slick>
        <v-btn
          icon
          fab
          class="nav prev"
          @click="slickPrev()"
        >
          <i class="ion-ios-arrow-left" />
        </v-btn>
        <v-btn
          icon
          fab
          class="nav next"
          @click="slickNext()"
        >
          <i class="ion-ios-arrow-right" />
        </v-btn>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './testi-style.scss';
</style>

<script>
import Title from '../Title'
import TestiCard from '../Cards/Testimonial'

const testiData = [
  {
    text:
      'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non.',
    name: 'John Doe',
    title: 'Chief Digital Officer'
  },
  {
    text:
      'Vestibulum sit amet tortor sit amet libero lobortis semper at et odio. In eu tellus tellus. Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Nam vitae scelerisque lorem, quis tempus libero.',
    name: 'Jean Doe',
    title: 'Chief Digital Officer'
  },
  {
    text:
      'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    name: 'Jena Doe',
    title: 'Graphic Designer'
  },
  {
    text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
    name: 'Jovelin Doe',
    title: 'Senior Graphic Designer'
  },
  {
    text:
      'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    name: 'Jihan Doe',
    title: 'CEO Software House'
  },
  {
    text:
      'Vestibulum sit amet tortor sit amet libero lobortis semper at et odio. In eu tellus tellus. Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Nam vitae scelerisque lorem, quis tempus libero.',
    name: 'Jovelin Doe',
    title: 'Senior Graphic Designer'
  }
]

export default {
  components: {
    'title-main': Title,
    TestiCard,
    Slick: () => import('vue-slick')
  },
  data() {
    return {
      loaded: false,
      currentSlide: 0,
      testiContent: testiData,
      slickOptions: {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 7000,
        slidesToShow: 2,
        arrows: false,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 960,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
    }
  },
  mounted() {
    this.loaded = true
  },
  methods: {
    slickNext() {
      this.$refs.slider.next()
    },
    slickPrev() {
      this.$refs.slider.prev()
    }
  },
  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.indexOf(this.$mq) > -1
    }
  }
}
</script>
