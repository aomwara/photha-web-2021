<template>
  <div class="root">
    <v-container class="max-md">
      <title-main
        head='บุคลากร'
        desc='บุคลากรภายในโรงเรียน'
        align="center"
        color="primary"
      />
      <v-container fill-height>
      <v-row class="spacing8 grid" justify="center" align="center">
        <v-col sm="12">
          <div class="counter-item">
            <figure>
              <img src="/images/education/presenter.svg" alt="manager" />
            </figure>
            <div class="text" v-if="loaded">
              <h1 class="dept-head">
                ผู้บริหาร
              </h1>
              <v-btn color="primary" small>ดูข้อมูล</v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
      </v-container>
      <v-row class="spacing8 grid">
        <v-col sm="6" class="px-8">
          <div class="counter-item">
            <figure>
              <img src="/images/education/presenter.svg" alt="manager" />
            </figure>
            <div class="text" v-if="loaded">
              <h1 class="dept-head">
                คณิตศาสตร์
              </h1>
              <v-btn color="primary" small>ดูข้อมูล</v-btn>
            </div>
          </div>
        </v-col>
        <v-col sm="6" class="px-8">
          <div class="counter-item">
            <figure>
              <img src="/images/education/presenter.svg" alt="manager" />
            </figure>
            <div class="text" v-if="loaded">
              <h1 class="dept-head">
                วิทยาศาสตร์
              </h1>
              <v-btn color="primary" small>ดูข้อมูล</v-btn>
            </div>
          </div>
        </v-col>
        <v-col sm="6" class="px-8">
          <div class="counter-item">
            <figure>
              <img src="/images/education/presenter.svg" alt="manager" />
            </figure>
            <div class="text" v-if="loaded">
              <h1 class="dept-head">
                ภาษาไทย
              </h1>
              <v-btn color="primary" small>ดูข้อมูล</v-btn>
            </div>
          </div>
        </v-col>
        <v-col sm="6" class="px-8">
          <div class="counter-item">
            <figure>
              <img src="/images/education/presenter.svg" alt="manager" />
            </figure>
            <div class="text" v-if="loaded">
              <h1 class="dept-head">
                ภาษาต่างประเทศ
              </h1>
              <v-btn color="primary" small>ดูข้อมูล</v-btn>
            </div>
          </div>
        </v-col>
        <v-col sm="6" class="px-8">
          <div class="counter-item">
            <figure>
              <img src="/images/education/presenter.svg" alt="manager" />
            </figure>
            <div class="text" v-if="loaded">
              <h1 class="dept-head">
                การงานอาชีพและเทคโนโลยี
              </h1>
              <v-btn color="primary" small>ดูข้อมูล</v-btn>
            </div>
          </div>
        </v-col>
        <v-col sm="6" class="px-8">
          <div class="counter-item">
            <figure>
              <img src="/images/education/presenter.svg" alt="manager" />
            </figure>
            <div class="text" v-if="loaded">
              <h1 class="dept-head">
                สังคมศึกษาศาสนาและวัฒนธรรม
              </h1>
              <v-btn color="primary" small>ดูข้อมูล</v-btn>
            </div>
          </div>
        </v-col>
        <v-col sm="6" class="px-8">
          <div class="counter-item">
            <figure>
              <img src="/images/education/presenter.svg" alt="manager" />
            </figure>
            <div class="text" v-if="loaded">
              <h1 class="dept-head">
                ศิลปะ
              </h1>
              <v-btn color="primary" small>ดูข้อมูล</v-btn>
            </div>
          </div>
        </v-col>
        <v-col sm="6" class="px-8">
          <div class="counter-item">
            <figure>
              <img src="/images/education/presenter.svg" alt="manager" />
            </figure>
            <div class="text" v-if="loaded">
              <h1 class="dept-head">
                พลศึกษา/สุขศึกษา
              </h1>
              <v-btn color="primary" small>ดูข้อมูล</v-btn>
            </div>
          </div>
        </v-col>
        <v-col sm="6" class="px-8">
          <div class="counter-item">
            <figure>
              <img src="/images/education/presenter.svg" alt="manager" />
            </figure>
            <div class="text" v-if="loaded">
              <h1 class="dept-head">
               คอมพิวเตอร์
              </h1>
              <v-btn color="primary" small>ดูข้อมูล</v-btn>
            </div>
          </div>
        </v-col>
        <v-col sm="6" class="px-8">
          <div class="counter-item">
            <figure>
              <img src="/images/education/presenter.svg" alt="manager" />
            </figure>
            <div class="text" v-if="loaded">
              <h1 class="dept-head">
                งานแนะแนว
              </h1>
              <v-btn color="primary" small>ดูข้อมูล</v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import 'feature-style.scss';
.dept-head {
  padding-bottom: 10px;
}
</style>

<script>
import Title from '../Title'

export default {
  components: {
    'title-main': Title
  },
  data() {
    return {
      loaded: false
    }
  },
  mounted() {
    this.loaded = true
  }
}
</script>
