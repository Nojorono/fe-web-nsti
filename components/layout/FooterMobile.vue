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
      <nuxt-link 
        to="/privacy-policy" 
        class="footer-link"
        @click.native="$nuxt.$loading.start()"
      >
        <p>Privacy Policy</p>
      </nuxt-link>
    </div>
    <div class="footer-bottom-bottom">
      <p>&copy; 2022 PT Nikki Super. All rights reserved.</p>
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
  font-size: 12px;
  .v-img {
    margin: 0 0.5rem;
  }
  &-top {
    margin-top: 0.5rem;
    display: flex;
    align-content: center;
    align-items: center;
    text-align: center;
    justify-content: center;
    font-size: inherit;
    p {
      //margin-top: 1rem;
      margin-bottom: 0;
    }
    .footer-link {
      text-decoration: none;
      color: inherit;
      transition: opacity 0.3s ease;
      
      &:hover {
        opacity: 0.8;
      }
      
      p {
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  &-bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: inherit;
  }
}
</style>
