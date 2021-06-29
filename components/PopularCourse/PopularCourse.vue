<template>
  <div class="root">
    <div class="parallax-wrap">
      <dot-parallax />
    </div>
    <v-container>
      <div class="floating-title">
        <title-main
          head="ข่าวสาร"
          desc="จดหมายข่าวประชาสัมพันธ์ "
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
          <div v-for="(item, index) in courseData" :key="index" class="item">
            <general-card
              :img="item.img"
              :title="item.title"
              :desc="item.desc"
              :link="item.link"
            />
          </div>
          <div class="props item-props-last">
            <div />
          </div>
        </slick>
      </div>
      <v-btn icon fab class="nav prev" @click="prev()">
        <i class="ion-ios-arrow-left" />
      </v-btn>
      <v-btn icon fab class="nav next" @click="next()">
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
    img: 'https://web.sesao8.go.th/news/uploads/22062021-213832_64.jpg',
    link: 'https://web.sesao8.go.th/news/story.php?id=8597',
    title: 'การเตรียมความพร้อม',
    desc: ' การเตรียมความพร้อมการเปิดเรียน และการจัดการเรียนการสอน'
  },
  {
    img: 'https://web.sesao8.go.th/news/uploads/31052021-170354_64.jpg',
    link: 'https://web.sesao8.go.th/news/story.php?id=8550',
    title: 'จัดชุดหนังสือเรียน',
    desc:
      'จัดชุดหนังสือเรียนทุกระดับชั้น (ม.1-ม.6) ปีการศึกษา 2564 เพื่อแจกให้กับนักเรียนทุกคน'
  },
  {
    img: 'https://web.sesao8.go.th/news/uploads/30052021-214759_64.jpg',
    link: 'https://web.sesao8.go.th/news/story.php?id=8546',
    title: 'รับรายงานตัว/มอบตัว',
    desc: ' ชั้นมัธยมศึกษาปีที่ 1 และระดับชั้นมัธยมศึกษาปีที่ 4'
  },
  {
    img: 'https://web.sesao8.go.th/news/uploads/22062021-213832_64.jpg',
    link: 'https://web.sesao8.go.th/news/story.php?id=8597',
    title: 'การเตรียมความพร้อม',
    desc: ' การเตรียมความพร้อมการเปิดเรียน และการจัดการเรียนการสอน'
  },
  {
    img: 'https://web.sesao8.go.th/news/uploads/31052021-170354_64.jpg',
    link: 'https://web.sesao8.go.th/news/story.php?id=8550',
    title: 'จัดชุดหนังสือเรียน',
    desc:
      'จัดชุดหนังสือเรียนทุกระดับชั้น (ม.1-ม.6) ปีการศึกษา 2564 เพื่อแจกให้กับนักเรียนทุกคน'
  },
  {
    img: 'https://web.sesao8.go.th/news/uploads/30052021-214759_64.jpg',
    link: 'https://web.sesao8.go.th/news/story.php?id=8546',
    title: 'รับรายงานตัว/มอบตัว',
    desc: ' ชั้นมัธยมศึกษาปีที่ 1 และระดับชั้นมัธยมศึกษาปีที่ 4'
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
        const lastSlide = Math.floor(
          this.courseData.length + props - this.slickOptions.slidesToShow
        )
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
