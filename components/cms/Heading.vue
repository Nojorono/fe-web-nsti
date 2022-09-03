<template>
  <div class="heading-container d-flex justify-space-between align-center">
    <h1>
      {{ heading }}
    </h1>
    <img
      :src="require('assets/images/cms/close-btn.svg')"
      width="21px"
      height="21px"
      class="cursor-pointer"
      @click="$router.push(closePage)"
    />
  </div>
</template>

<script>
export default {
  name: 'CmsHeading',
  components: {},
  props: {
    heading: {
      type: String,
      default: 'About-us',
    },
    closePage: {
      type: String,
      default: '/',
    },
  },
  data() {
    return {
      // heading: '',
    }
  },
  head() {
    return {
      title: 'Add New About Us',
    }
  },
}
</script>

<style lang="scss" scoped>
.heading-container {
}
</style>
