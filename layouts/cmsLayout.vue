<template>
  <!--  v-if="isCms && isSingInUp" -->
  <!--  <v-app >-->
  <!--    <v-main>-->
  <!--      <v-container fluid class="max-width ma-0 pa-0">-->
  <!--        <Nuxt />-->
  <!--      </v-container>-->
  <!--    </v-main>-->
  <!--  </v-app>-->
  <!--  v-else -->
  <v-app light>
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
import vue from 'vue'
import NavBarCms from '@/components/cms/NavBarCms.vue'
import SideBar from '@/components/cms/SideBar.vue'
import mixinDetictingMobile from '@/mixins/mixinDetictingMobile'

vue.mixin(mixinDetictingMobile)

export default {
  name: 'CmsLayout',
  components: {
    NavBarCms,
    SideBar,
  },
  data() {
    return {
      isCms: false,
      isSingInUp: false,
    }
  },
  mounted() {
    // eslint-disable-next-line no-unused-expressions
    this.$vuetify.theme.dark = false
  },
}
</script>

<style lang="scss" scoped>
.max-width {
  max-width: 1920px;
  padding: 0;
}
.theme--dark.v-application {
  background-color: $color-font-light-root;
  //background-image: url('assets/images/grain.png');
  //background-repeat: repeat, repeat;
}
.non-cms-nuxt {
  margin-top: 6rem;
}
</style>
