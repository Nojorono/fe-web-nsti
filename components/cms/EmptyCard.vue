<template>
  <div class="empty-card d-flex justify-center align-center">
    <v-img
      :src="require('assets/images/cms/cms-empty.png')"
      max-width="570px"
    />
  </div>
</template>

<script>
export default {
  name: 'EmptyCard',
  props: {},
  data() {
    return {}
  },
  head() {
    return {}
  },
}
</script>

<style lang="scss" scoped></style>
