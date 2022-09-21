<template>
  <v-app dark>
    <!--    <NavBarTop />-->
    <v-main>
      <v-container fluid class="max-width">
        <Nuxt class="non-cms-nuxt" />
      </v-container>
    </v-main>
    <v-footer class="ma-0 pa-0" absolute app>
      <!--      <FooterBottom />-->
    </v-footer>
  </v-app>
</template>

<script>
// import FooterBottom from '@/components/layout/FooterBottom.vue'
// import NavBarTop from '@/components/layout/NavbarTop'

export default {
  name: 'MobileLayout',
  components: {
    // FooterBottom,
    // NavBarTop,
  },
}
</script>

<style lang="scss" scoped>
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
