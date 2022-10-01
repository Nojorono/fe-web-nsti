<template>
  <div class="nav-cms d-flex justify-space-between align-center">
    <v-img
      :src="require('assets/images/logo-light.svg')"
      max-width="320px"
      alt="nikki super logo light"
      class="ml-5"
      @click="goToHome"
    />
    <div class="pp-container mr-15">
      <v-img
        :src="require('assets/images/cms/dummy-pp.png')"
        :lazy-src="require('assets/images/cms/dummy-pp.png')"
        alt="admin profile picture"
        height="50px"
        width="50px"
        class="rounded-circle"
      >
        <template #placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CmsNavBar',

  data() {
    return {}
  },
  methods: {
    goToHome() {
      // window.location.href = '/'
    },
  },
}
</script>

<style lang="scss" scoped>
.nav-cms {
  width: 100vw;
  height: 68px;
  left: 0;
  top: 0;

  background: $color-font-dark-root;
}
</style>
