<template>
  <v-app v-if="!isMobileCheck()" dark>
    <NavBarTop />
    <v-main>
      <v-container fluid class="max-width">
        <Nuxt class="non-cms-nuxt" />
      </v-container>
    </v-main>
    <v-footer class="ma-0 pa-0" absolute app>
      <template v-if="!isMobileCheck()">
        <FooterBottom />
      </template>
      <template v-else-if="isMobileCheck()">
        <FooterBootomMobile />
      </template>
    </v-footer>
  </v-app>
  <v-app v-else-if="isMobileCheck()" dark>
    <nav-bar-mobile></nav-bar-mobile>
    <v-main>
      <v-container fluid class="ml-0 mb-0 mr-0 mt-15 pa-0">
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer class="ma-0 pa-0" absolute app>
      <FooterBootomMobile />
    </v-footer>
  </v-app>
</template>

<script>
import vue from 'vue'
import FooterBottom from '@/components/layout/FooterBottom.vue'
import NavBarTop from '@/components/layout/NavbarTop'
import mixinDetictingMobile from '@/mixins/mixinDetictingMobile'
import FooterBootomMobile from '@/components/layout/FooterMobile'
import NavBarMobile from '@/components/layout/NavBarMobile'

vue.mixin(mixinDetictingMobile)

export default {
  name: 'DefaultLayout',
  components: {
    NavBarMobile,
    FooterBottom,
    NavBarTop,
    FooterBootomMobile,
  },
}
</script>

<style lang="scss" scoped>
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.max-width {
  max-width: 1920px;
  padding: 0;
}
.theme--dark.v-application {
  background-color: $color-primary-root;
  background-image: url('assets/images/grain.png');
  background-repeat: repeat, repeat;
}
.non-cms-nuxt {
  margin-top: 6rem;
}
</style>
