<template>
  <v-col class="footer-bottom ma-0 pa-0 defaultGolden--text">
    <div class="footer-bottom-top">
      <p>Terms & Conditions</p>
      <v-img
        :src="require('assets/images/Ellipse.svg')"
        max-height="3px"
        max-width="3px"
        class="v-img"
      />
      <p>Privacy Policy</p>
    </div>
    <div class="footer-bottom-bottom">
      <p>&copy; Future. All rights reserved</p>
    </div>
  </v-col>
</template>

<script>
export default {
  name: 'FooterBootomMobile',
}
</script>

<style lang="scss" scoped>
.footer-bottom {
  background: $color-primary-root;
  border-top: 5px solid $color-secondary-dark-root;
  font-family: 'Barlow', sans-serif;
  font-size: 9px;
  .v-img {
    margin: 0 0.5rem;
  }
  &-top {
    display: flex;
    align-content: center;
    align-items: center;
    text-align: center;
    justify-content: center;
    font-size: inherit;
  }
  &-bottom{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: inherit;

  }
}
</style>
