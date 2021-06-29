<template>
  <div class="hero-content">
    <v-container :class="{ 'fixed-width': isDesktop }">
      <v-row class="banner-wrap">
        <v-col class="px-6" cols="12" lg="6" md="7">
          <div class="banner-text">
            <div class="title">
              <h3 class="use-text-title">
                โรงเรียนโพธาวัฒนาเสนี
              </h3>
            </div>
            <h5 class="subtitle">
              " นตฺถิ ปญฺญา สมา อาภา "<br>
              <font color="#999">แสงสว่างใดเสมอด้วยปัญญาไม่มี</font>
            </h5>
             <v-btn
              color="primary"
              width="200"
              href="#feature"
              class="button"
            >
            <div class="btn-white">
              เข้าสู่เว็บไซต์
            </div>
            </v-btn>
            <br><br><br>
          </div>
        </v-col>
        <v-col
          v-if="isTablet"
          lg="6"
          cols="12"     
          class="md-5 pa-6 deco-grid"
        >
          <div class="deco-banner">
            <div class="artwork-bg">
              <div class="oval"></div>
              
              <img src="/images/education/banner-artwork.png" alt="artwork" />
              <div class="parallax-scene front" v-if="loaded">
                <kinesis-container
                   :duration="1500"
                   easing="cubic-bezier(0.23, 1, 0.32, 1)"
                >
                  <kinesis-element
                    :strength="10"
                    type="translate"
                    tag="div"
                  >
                    <span class="icon-two" />
                  </kinesis-element>
                  <kinesis-element
                    :strength="15"
                    type="translate"
                    tag="div"
                  >
                    <span class="icon-one" />
                  </kinesis-element>
                </kinesis-container>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <div id="watched_counter" />
  </div>
</template>

<style lang="scss" scoped>
@import './banner-style.scss';
.btn-white {
  color: white;
}
</style>

<script>
import { KinesisContainer, KinesisElement } from 'vue-kinesis'
import Hidden from '../Hidden'

export default {
  components: {
    Hidden,
    KinesisContainer,
    KinesisElement
  },
  data() {
    return {
      loaded: false
    }
  },
  mounted() {
    this.loaded = true
  },
  methods: {
    handleScroll: function() {
      if (window.scrollY > 80) {
        return (this.fixed = true)
      }
      return (this.fixed = false)
    },
    setOffset: function(offset) {
      this.navOffset = offset
    },
    handleToggleOpen: function() {
      console.log(this.openDrawer)
      this.openDrawer = !this.openDrawer
    }
  },
  computed: {
    isDesktop() {
      return this.$mq === 'mdDown' || this.$mq === 'lgDown' || this.$mq === 'xl'
    },
    isTablet() {
      const smUp = this.$store.state.breakpoints.smUp
      return smUp.indexOf(this.$mq) > -1
    }
  }
}
</script>
