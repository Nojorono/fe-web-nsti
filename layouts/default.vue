<template>
  <v-app v-if="!isCms" dark>
    <NavBarTop />
    <v-main>
      <v-container fluid class="max-width">
        <Nuxt class="non-cms-nuxt" />
      </v-container>
    </v-main>
    <v-footer class="ma-0 pa-0" absolute app>
      <FooterBottom />
    </v-footer>
  </v-app>
  <v-app v-else-if="isCms && isSingInUp">
    <v-main>
      <v-container fluid class="max-width ma-0 pa-0">
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
  <v-app v-else light>
    <NavBarCms />
    <div class="d-flex">
      <SideBar />
      <v-main>
        <v-container fluid class="max-width cms ma-0 pa-0">
          <Nuxt />
        </v-container>
      </v-main>
    </div>
  </v-app>
</template>

<script>
import FooterBottom from '@/components/layout/FooterBottom.vue'
import NavBarTop from '@/components/layout/NavbarTop'
import NavBarCms from '@/components/cms/NavBarCms.vue'
import SideBar from '@/components/cms/SideBar.vue'

export default {
  name: 'DefaultLayout',
  components: {
    FooterBottom,
    NavBarTop,
    NavBarCms,
    SideBar,
  },
  data() {
    return {
      isCms: false,
      isSingInUp: false,
    }
  },
  watch: {
    $route: {
      deep: true,
      immediate: true,
      handler() {
        // check if sign in/up cms
        this.isSingInUp = this.$route.name?.split('-').includes('sign')
      },
    },
  },
  mounted() {
    // check if in cms page
    this.isCms =
      this.$route.name.split('-').includes('content') &&
      this.$route.name.split('-').includes('management')
    // change to light theme if cms
    if (this.isCms) {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      this.$store.dispatch({
        type: 'checkToken',
      })
    }
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
