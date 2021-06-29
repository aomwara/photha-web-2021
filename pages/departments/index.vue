<template>
  <div>
    <div class="main-wrap">
      <header-main invert/>
      <div class="container-wrap">
        <!-- <section id="home">
          <banner />
        </section> -->
        <section id="feature" class="space-top">
          <feature />
        </section>
        <!-- <section id="feature" class="space-top-short">
          <popular-course />
        </section>
        <section id="explore">
          <explore />
        </section> 
        <div id="about">
          <about />
        </div> 
        <section id="testimonials" class="space-top">
          <testimonials />
        </section>
        <section id="blog" class="space-top-short">
          <blog />
        </section> 
        <section id="subscribe" class="space-top-short">
          <subscribe-form />
        </section>  -->
        <footer-main />
      </div>
      <hidden point="mdDown">
        <page-nav />
      </hidden>
      <!-- <hidden point="mdDown">
        <notification />
      </hidden> -->
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '~/assets/styles';
@function section-margin($margin) {
  @return $margin * 20;
}

.main-wrap {
  font-family: 'IBM Plex Thai', sans-serif;
  position: relative;
  width: 100%;
  overflow: hidden;
  .theme--dark & {
    background-color: $dark-background-default;
    font-family: 'IBM Plex Thai', sans-serif;
  }
  .theme--light & {
    background-color: $light-background-paper;
    font-family: 'IBM Plex Thai', sans-serif;
  }
}
.space-bottom {
  padding-bottom: section-margin($spacing1);
  @include breakpoints-down(md) {
    padding-bottom: section-margin(6px);
  }
}
.space-bottom-short {
  padding-bottom: section-margin($spacing1 / 2);
}
.space-top {
  padding-top: section-margin($spacing1);
  @include breakpoints-down(md) {
    padding-top: section-margin(6px);
  }
  @include breakpoints-down(xs) {
    padding-top: section-margin(3px);
  }
}
.space-top-short {
  padding-top: section-margin($spacing1 / 2);
}
.container-wrap {
  > section {
    position: relative;
  }
}
</style>

<script>
import Header from '~/components/Header'
import Banner from '~/components/Banner'
import Feature from '~/components/Feature'
import PopularCourse from '~/components/PopularCourse'
import Explore from '~/components/Explore'
import About from '~/components/About'
import Testimonials from '~/components/Testimonials'
import Blog from '~/components/Blog'
import SubscribeForm from '~/components/SubscribeForm'
import Footer from '~/components/Footer'
import Hidden from '~/components/Hidden'
import PageNav from '~/components/PageNav'
import Notification from '~/components/Notification'
import brand from '~/static/text/brand'

export default {
  components: {
    'header-main': Header,
    Banner,
    Feature,
    PopularCourse,
    Explore,
    About,
    Testimonials,
    Blog,
    SubscribeForm,
    'footer-main': Footer,
    PageNav,
    Hidden,
    Notification
  },
  head() {
    return {
      title: brand.education.name + ' - หน้าหลัก'
    }
  },
  computed: {
    isTablet() {
      const mdDown = this.$store.state.breakpoints.mdDown
      return mdDown.indexOf(this.$mq) > -1
    },
    isMobile() {
      const xsDown = this.$store.state.breakpoints.xsDown
      return xsDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
