<template>
  <div>
    <section id="home" />
    <div class="main-wrap">
      <main-header invert />
      <div class="container-wrap">
        <section class="space-top">
          <div class="box">
            <h1 class="header">ข่าวประชาสัมพันธ์ที่ {{this.$route.query.id}}</h1>
            <hr />
            <div class="box-content">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;โรงเรียนโพธาวัฒนาเสนีเป็นโรงเรียนมัธยมศึกษาประจำอำเภอโพธารามแห่งแรก
              และเป็นโรงเรียนประจำอำเภอแห่งแรกของไทย[2]
              เดิมเล่าเรียนกันโดยอาศัยศาลาวัดโพธาราม
              ต่อมานักเรียนได้เพิ่มจำนวนคนมากขึ้นจึงได้ขยายที่เรียน ครั้งนั้นมี
              เจ้าพระคุณธรรมเสนานี (พระแดง)เจ้าอธิการ และพระครูโพธาภิรมย์(ชื่น)
              รองเจ้าอธิการวัดโพธาราม และหลวงราษฎร์โพธาภิบาล นายอำเภอ
              ได้ประกาศเรี่ยรายบุญก่อสร้างอาคารเรียนที่วัดโพธารามหนึ่งหลัง
              รวมเป็นเงิน 1532 บาท ในปี พ.ศ. 2449 โดยใช้ชื่อว่า
              "โรงเรียนวัดโพธาราม"
            </div>
            <div class="box-content">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ก่อตั้งขึ้นเมื่อวันที่
              21 มิถุนายน 2451 (ร.ศ. 127) ตามประกาศในราชกิจจานุเบกษา เล่มที่ 25
              หน้าที่ 380 ซึ่งคัดลอกโดยนายสังเวียน รัตนมุง
              อดีตผู้พิพากษาศาลจังหวัดสมุทรสาคร มีใจความดังนี้
              <br /><br />
              <i style="color: #999">
                " ด้วยใบรับบอกมณฑลราชบุรีที่ 3/1590 ลงวันที่ 19 พฤษภาคม ร.ศ.127
                (พ.ศ. 2451) กล่าวว่าโรงเรียนวัด โพธาราม เมืองราชบุรี
                เดิมได้อาศัยวัดเป็นที่เล่าเรียน แต่เป็นที่คับแคบมาก
                ด้วยมีนักเรียนทวีมากขึ้น ครั้งเมื่อ ร.ศ. 125 (พ.ศ. 2449)
                เจ้าพระคุณธรรมเสนานี(พระแดง)
                เจ้าอธิการและพระครูโพธาภิรมย์(พระชื่น) รองเจ้าอธิการวัดโพธาราม
                พร้อมด้วยหลวงราษฎร์โพธาภิบาล นายอำเภอโพธาราม
                ได้บอกบุญเรี่ยไรเงินแก่ข้าราชการ และราษฎรรวมเป็นเงิน 1,532 บาท
                และได้ทำการจัดสร้างโรงเรียนขึ้นที่วัดโพธาราม โดยใช้ชื่อว่า "
                โรงเรียนวัดโพธาราม " โดยมีความกว้าง 4 วา 2 ศอก ยาว 6 วา 2 ศอก
                และสูง 1 วา 3 ศอกคืบ ใช้เสาไม้เต็งรัง พื้นไม้สิงคโปร์
                เครื่องบนไม้สัก หลังคามุงสังกะสี ฝาไม้กระยาเลยทาสีขาว
                กับทำม้านั่งสำหรับนักเรียนนั่งได้ 2 คน
                โดยใช้ไม้กระยาเลยและไม้สักรวม 37 ม้านั่งและนั่งได้คนเดียวอีก 20
                ม้านั่ง และได้ทำโต๊ะสำหรับวางหนังสือเรียน 22 โต๊ะ
                ใช้ไม้กระยาเลยและไม้สัก เมื่อแล้วเสร็จในเดือนมีนาคม ร.ศ.126
                (พ.ศ. 2450) ได้จัดการฉลองและนิมนต์พระสงฆ์สวดพระพุทธมนต์ 50 รูป
                และถวายอาหารบิณฑบาตกับได้มีการมโหรสพด้วย 3 วัน
                เมื่อเสร็จการฉลองแล้ว
                ได้เปิดโรงเรียนให้นักเรียนศึกษาเล่าเรียนต่อไป "
              </i>
            </div>
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

export default {
  components: {
    'main-header': Header,
    'main-footer': Footer
  },
  head() {
    return {
      title: brand.education.name + ' - ประวัติโรงเรียน'
    }
  }
}
</script>
