<template>
  <footer class="footer">
    <v-container class="max-lg">
      <v-row class="spacing4">
        <v-col
          class="py-0 px-4"
          md="3"
          cols="12"
        >
          <div class="logo">
            <img
              :src="logo"
              alt="logo"
            >
            <h6 class="title">
              {{ brand.education.projectName }}
            </h6>
          </div>
          <p class="footer-desc pb-2">
            เลขที่ 80 หมู่ 8 ตำบลคลองตาคต <br>อำเภอโพธาราม จังหวัดราชบุรี <br> โทร 032-231011
          </p>
          <p class="body-2" v-if="isDesktop">
            &copy;&nbsp;
            Design By Waranat.S
          </p>
        </v-col>
        <v-col
          class="py-0 px-6"
          md="6"
          cols="12"
        >
          <v-expansion-panels v-if="isMobile" class="accordion-root">
            <v-expansion-panel
              v-for="(footer, index) in footers"
              :key="index"
              class="accordion-content"
            >
              <v-expansion-panel-header>
                <h6 class="title-main mb-4">
                  {{ footer.title }}
                </h6>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <ul>
                  <li
                    v-for="(item, index) in footer.description"
                    :key="index"
                  >
                    <nuxt-link :to="footer.link[index]">
                      {{ item }}
                    </nuxt-link>
                  </li>
                </ul>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
          <v-row justify="space-around" v-if="isDesktop">
            <v-col
              v-for="(footer, index) in footers"
              :key="index"
              sm="3"
              cols="12"     
              class="pa-4 px-md-0 site-map-item"
            >
              <h6 class="title-nav">
                {{ footer.title }}
              </h6>
              <ul>
                <li
                  v-for="(item, index) in footer.description"
                  :key="index"
                >
                  <a :href="footer.link[index]">
                    {{ item }}
                  </a>
                </li>
              </ul>
            </v-col>
          </v-row>
        </v-col>
        <v-col
          md="3"
          cols="12"
          class="py-0 px-4"
        >
          <div class="socmed">
            <a href="https://www.facebook.com/ilovephotha" target="_blank">
            <v-btn
              text
              icon
              class="button"
            >
              <span class="ion-social-facebook icon" />
            </v-btn>
            </a>
            <v-btn
              text
              icon
              class="button"
            >
              <span class="ion-social-instagram icon" />
            </v-btn>
           
          </div>
          <!-- <v-select
            :items="langList"
            :value="lang"
            v-model="lang"
            label=""
            outlined
            class="select-lang"
            prepend-inner-icon="mdi-web"
            @change="switchLang(lang)"
          /> -->
        </v-col>
      </v-row>
      <p class="body-2 text-center" v-if="isMobile">
        &copy;&nbsp;
        {{ brand.education.footerText }}
      </p>
    </v-container>
  </footer>
</template>

<style scoped lang="scss">
@import './footer-style';
</style>

<script>
import logo from '~/static/images/education-logo-tree.png'
import brand from '~/static/text/brand'

export default {
  data: () => ({
    logo: logo,
    brand: brand,
    lang: 'en',
    footers: [
      {
        title: 'ลิงก์ภายใน',
        description: ['E-Learning', 'Photha Blog', 'งานทะเบียนวัดผล', 'ตรวจสอบผลการเรียน'],
        link: ['http://www.photha.com/lsm', 'http://www.photha.com/blog', '', '']
      },
      {
        title: 'ลิงก์อื่น ๆ',
        description: [
          'สพฐ.',
          'สพม.8',
          'กระทรวงศึกษาธิการ',
          'MyOffice Photha'
        ],
        link: [
          '#resource',
          '#resource-name',
          '#another-resource'
        ]
      },
      {
        title: 'ผู้ดูแลระบบ',
        description: ['วราณัฐ สุทธิการณ์', 'นายธีระพล พฤฑฒิกุล '],
        link: ['https://www.facebook.com/aomwaraaa', '']
      }
    ]
  }),
  computed: {
    isDesktop() {
      const mdUp = this.$store.state.breakpoints.mdUp
      return mdUp.indexOf(this.$mq) > -1
    },
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    },
    langList: function() {
      const list = []
      this.$i18n.locales.map(item => {
        list.push({ text: this.$t('common.' + item.code), value: item.code })
      })
      return list
    }
  },
  mounted() {
    this.lang = this.$i18n.locale
  },
  methods: {
    switchLang: function(val) {
      this.$i18n.setLocale(val)
    }
  }
}
</script>
