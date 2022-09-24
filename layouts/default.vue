<template>
  <v-app dark v-if="!isMobileCheck()">
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
  <v-app dark  v-else-if="isMobileCheck()">
    <nav-bar-mobile ></nav-bar-mobile>
    <v-main>
      <v-container fliud>
        <Nuxt />
      </v-container>
    </v-main>
<!--    <v-footer class="ma-0 pa-0" absolute app>-->
<!--        <FooterBootomMobile />-->
<!--    </v-footer>-->
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
    FooterBootomMobile
  },
}
</script>

<style lang="scss" scoped>
.max-width {
  max-width: 1920px;
  padding: 0;
}
.mobile {

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
