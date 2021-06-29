<template>
  <div>
    <section id="home" />
    <div class="main-wrap">
      <main-header invert />
      <div class="container-wrap">
        <section class="space-top">
          <div class="box">
            <h1 class="header">{{this.api.app_name}} <small>v{{this.api.app_version}}</small></h1>
            <hr />
          <v-container>
            <v-row>
              <v-col cols="5">
            <form>
              <v-text-field
                label="Name"
                required
              ></v-text-field>
              <v-text-field
                label="E-mail"
                required
              ></v-text-field>

              <v-btn color="info" class="mr-4"> เข้าสู่ระบบ </v-btn>
            </form>
              </v-col>
            </v-row>
            </v-container>
          </div>
        </section>
      </div>
      <section class="spaceTop">
        <main-footer />
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '~/assets/styles';

@function section-margin($margin) {
  @return $margin * 20;
}

.header {
  color: #3399cc;
}
.box {
  padding-left: 15%;
  padding-right: 8%;
  margin-top: 50px;
}

.box-content {
  padding: 20px 30px;
}

hr {
  opacity: 0.5;

  margin-top: 5px;
  margin-bottom: 10px;
  box-shadow: 1px #999;
  width: 100%;
}

@media only screen and (max-width: 600px) {
  .box {
    padding-left: 0px;
    margin-top: 0px;
  }
  .space-top {
    margin-top: 0px;
  }
  hr {
    opacity: 0.5;
    margin-top: 5px;
    box-shadow: #999;
    width: 100%;
  }
}

main-wrap {
  font-family: 'IBM Plex Thai', sans-serif;
  position: relative;
  width: 100%;
  overflow: hidden;
  @include palette-text-primary;
  .theme--dark & {
    background-color: $dark-background-default;
  }
  .theme--light & {
    background-color: $light-background-paper;
  }
}
.space-bottom {
  margin-bottom: section-margin($spacing1);
}
.space-top {
  margin-top: 50px;
}
.container-wrap {
  font-family: 'IBM Plex Thai', sans-serif;
  margin-top: $spacing10;
  padding: $spacing4;
  > section {
    font-family: 'IBM Plex Thai', sans-serif;
    position: relative;
  }
}
</style>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import brand from '~/static/text/brand'
import axios from 'axios'

export default {
  components: {
    'main-header': Header,
    'main-footer': Footer
  },
  head() {
    return {
      title: brand.education.name + ' - ประวัติโรงเรียน'
    }
  },
  data() {
    return {
      api: ''
    }
  },
  mounted() {
    axios.get('/api/settings').then(res => {
      console.log(`:: APIs Connected => `, res.status)
      this.api = res.data
    })
  }
}
</script>
