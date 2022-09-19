<template>
    <v-app light>
      <v-main>
        <v-container fluid class="max-width ma-0 pa-0">
          <Nuxt />
        </v-container>
      </v-main>
    </v-app>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
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
  background-color: $color-font-light-root;
}
</style>
