<template>
  <v-col class="footer-bottom ma-0 pa-0 defaultGolden--text">
    <div class="footer-inner">
      <p>Terms & Conditions</p>
      <v-img
        :src="require('assets/images/Ellipse.svg')"
        max-height="10px"
        max-width="10px"
        class="v-img"
      />
      <p>Privacy Policy</p>
      <v-img
        :src="require('assets/images/Ellipse.svg')"
        max-height="10px"
        max-width="10px"
        class="v-img"
      />
      <p>&copy; Future. All rights reserved</p>
    </div>
  </v-col>
</template>

<script>
export default {
  name: 'FooterBootom',
  components: {},
}
</script>

<style lang="scss" scoped>
.footer-bottom {
  background: $color-primary-root;
  border-top: 5px solid $color-secondary-dark-root;
  font-family: 'Barlow', sans-serif;
  .footer-inner {
    padding: 2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 5rem;
    P {
      padding-top: 0.7rem;
      font-weight: 400;
      font-size: 1.3em;
      letter-spacing: 0.05em;
    }
    .v-img {
      margin: 0 2rem;
    }
  }
}
</style>
