<template>
  <fragment>
    <v-navigation-drawer
      v-if="isMobile"
      v-model="openDrawer"
      fixed
      temporary
      class="mobile-nav"
    >
      <mobile-menu :open="openDrawer" />
    </v-navigation-drawer>
    <v-app-bar
      v-scroll="handleScroll"
      id="header"
      :class="{ fixed: fixed, 'open-drawer': openDrawer }"
      class="header"
      fixed
      app
    >
      <v-container :class="{ 'fixed-width': mdUp }">
        <div class="header-content">
          <nav
            :class="{ invert: invert }"
            class="nav-logo"
          >
            <v-btn
              v-if="isMobile"
              :class="{ 'is-active': openDrawer }"
              class="hamburger hamburger--spin mobile-menu"
              text
              icon
              @click.stop="handleToggleOpen"
            >
              <span class="hamburger-box">
                <span class="bar hamburger-inner" />
              </span>
            </v-btn>
            <div class="logo">
              <nuxt-link
                v-if="invert"
                :to="link.education.home"
              >
                <img
                  :src="logo"
                  alt="logo"
                >
                <span>

                </span>
              </nuxt-link>
              <scrollactive
                v-if="!invert && loaded"
                tag="span"
              >
                <a
                  href="#home"
                  class="anchor-link scrollactive-item"
                >
                  <img
                    :src="logo"
                    alt="logo"
                  >
                  <span>

                  </span>
                </a>
              </scrollactive>
            </div>
          </nav>
          <nav
            :class="{ invert: invert }"
            class="nav-menu"
          >
            <div v-if="isDesktop">
              <scrollactive
                v-if="loaded"
                :offset="navOffset"
                active-class="active"
                tag="ul"
              >
                <li
                  v-for="(item, index) in menuList"
                  :key="index"
                >
                  <v-btn
                    v-if="invert"
                    :href="'/' + item.url"
                    text
                  >
                    <span class="text">
                      {{ item.name }}
                    </span>
                  </v-btn>
                  <v-btn
                    v-else
                    :href="item.url"
                    class="anchor-link scrollactive-item"
                    text
                    @click="setOffset(item.offset)"
                  >
                    <span class="text">
                      {{ item.name }}
                    </span>
                  </v-btn>
                </li>
                <li>
                  <v-btn
                    href='/departments'
                    text
                  >
                    <span class="text">
                      บุคลากร
                    </span>
                  </v-btn>
                </li>
                <li>
                  <v-btn
                    href="/history"
                    text
                  >
                    <span class="text">
                      ประวัติโรงเรียน
                    </span>
                  </v-btn>
                </li>
              </scrollactive>
            </div>
          </nav>
          <nav class="nav-menu nav-auth">
            <hidden point="xsDown">
              <div class="deco" />
              <v-btn href="mailto:info@photha.ac.th" class="text-btn" text>
                <!-- ติดต่อเรา -->
              </v-btn>
              <v-btn :href="link.education.register" class="button white">
                สมัครเรียน
              </v-btn>
            </hidden>
            <setting-menu :invert="invert" />
          </nav>
        </div>
      </v-container>
    </v-app-bar>
  </fragment>
</template>

<style lang="scss" scoped>
@import './header-style.scss';
</style>

<script>
import logo from '~/static/images/education-logo-tree.png'
import link from '~/static/text/link'
import brand from '~/static/text/brand'
import navMenu from './menu'
import Settings from './Settings'
import MobileMenu from './MobileMenu'
import Hidden from '../Hidden'

let counter = 0
function createData(name, url, offset) {
  counter += 1
  return {
    id: counter,
    name,
    url,
    offset
  }
}

export default {
  components: {
    'setting-menu': Settings,
    MobileMenu,
    Hidden
  },
  props: {
    invert: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      logo: logo,
      link: link,
      loaded: false,
      brand: brand,
      section: 0,
      fixed: false,
      openDrawer: null,
      navOffset: 20,
      menuList: [
        createData('หน้าหลัก', '#' + navMenu[0]),
        createData('เกี่ยวกับโรงเรียน', '#' + navMenu[3], -40),
        createData('ข่าวประชาสัมพันธ์', '#' + navMenu[2])
      ]
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
    isMobile() {
      const mdDown = this.$store.state.breakpoints.mdDown
      return mdDown.indexOf(this.$mq) > -1
    },
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.indexOf(this.$mq) > -1
    },
    mdUp() {
      return this.$mq === 'md' || this.$mq === 'lg' || this.$mq === 'xl'
    }
  }
}
</script>
