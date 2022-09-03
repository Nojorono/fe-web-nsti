<template>
  <div class="empty-card d-flex justify-center align-center">
    <v-img
      :src="require('assets/images/cms/cms-empty.png')"
      max-width="684px"
      max-height="554px"
    />
  </div>
</template>

<script>
export default {
  name: 'EmptyCard',
  props: {
    // cardList: {
    //   default: () => {
    //     return []
    //   },
    //   type: Array,
    // },
  },
  data() {
    return {}
  },
  head() {
    return {}
  },
}
</script>

<style lang="scss" scoped></style>
