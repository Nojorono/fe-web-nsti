<template>
  <v-col class="footer-bottom ma-0 pa-0 defaultGolden--text">
    <div class="footer-inner">
      <p>Terms & Conditions</p>
      <v-img
        :src="require('assets/images/Ellipse.svg')"
        max-height="7px"
        max-width="7px"
        class="v-img"
      />
      <nuxt-link 
        to="/privacy-policy" 
        class="footer-link"
        @click.native="$nuxt.$loading.start()"
      >
        <p>Privacy Policy</p>
      </nuxt-link>
      <v-img
        :src="require('assets/images/Ellipse.svg')"
        max-height="7px"
        max-width="7px"
        class="v-img"
      />
      <p>&copy; 2022 PT Nikki Super. All rights reserved.</p>
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
    padding: 0.5rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 5rem;
    P {
      padding-top: 0.7rem;
      font-weight: 400;
      font-size: 1em;
      letter-spacing: 0.05em;
    }
    .v-img {
      margin: 0 2rem;
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
}
</style>
