<template>
  <v-snackbar
    :timeout="-1"
    v-model="snackbar"
    class="notification"
  >
    <div class="action">
      เว็บไซต์นี้ใช้คุกกี้เพื่อปรับปรุงประสบการณ์ของผู้ใช้ การใช้เว็บไซต์ของเราแสดงว่าคุณยินยอมให้ใช้คุกกี้ทั้งหมดตามนโยบายคุกกี้ของเรา
    </div>
    <v-btn
      color="secondary"
      class="button"
      @click="snackbar = false"
    >
      ยอมรับ
    </v-btn>
  </v-snackbar>
</template>

<style lang="scss" scoped>
@import './notification-style.scss';
</style>

<script>
export default {
  data() {
    return {
      snackbar: true
    }
  }
}
</script>
