<template>
  <div class="media-and-publication">
    <div class="mt-15"></div>
    <card />
    <div class="pagination">
      <img
        src="~/assets/images/paginate-left.svg"
        alt="button previous pagination"
      />
      <div v-for="i in pages" :key="i" class="number cursor-pointer">
        {{ i }}
      </div>
      <img
        src="~/assets/images/paginate-right.svg"
        alt="button next pagination"
      />
    </div>
  </div>
</template>

<script>
import card from '@/components/home/MediaAndPublication.vue'

export default {
  name: 'MediaAndPublication',
  components: { card },
  data() {
    return {
      pages: 5,
    }
  },
  head() {
    return {
      title: 'Media And Publication',
    }
  },
  mounted() {},
}
</script>

<style lang="scss" scoped>
.media-and-publication {
  font-family: 'Barlow', sans-serif;
}
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
  .number {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2.04082px solid $color-secondary-root;
    border-radius: 6px;
    width: 65.31px;
    height: 65.31px;
    margin: 0 0.5rem;
    color: $color-secondary-root;
  }
  img {
    margin: 0 0.5rem;
  }
}
</style>
