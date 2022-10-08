<template>
  <div class="media-and-publication-mobile">
    <card />
    <template></template>
    <div
      :class="
        getMediaList.pagesleft <= 3
          ? 'pagination justify-center'
          : 'pagination justify-start'
      "
    >
      <img
        src="~/assets/images/paginate-left.svg"
        alt="button previous pagination"
        class="cursor-pointer previous"
        @click="prev"
      />
      <div
        v-for="i in getMediaList.pagesleft"
        :key="i"
        :class="
          +$route.query.page + 1 === i
            ? 'number cursor-pointer num-active'
            : 'number cursor-pointer'
        "
        @click="changePage(i)"
      >
        {{ i }}
      </div>
      <img
        src="~/assets/images/paginate-right.svg"
        alt="button next pagination"
        class="cursor-pointer"
        @click="next"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import card from '@/components/home/mobile/MediaAndPublicationMobile.vue'

export default {
  name: 'MediaAndPublicationMobile',
  components: { card },
  data() {
    return {
      size: 6,
    }
  },
  head() {
    return {
      title: 'Media And Publication',
    }
  },
  watch: {
    '$route.query'() {
      this.getAllMedia({
        page: this.$route.query.page,
        size: this.size,
      })
    },
  },
  computed: {
    ...mapGetters(['getMediaList']),
  },
  mounted() {
    if (!this.$route.query.page) {
      this.$router.replace({
        path: this.$route.path,
        query: { page: +this.$route.query.page || 0 },
      })
    } else {
      this.getAllMedia({
        page: this.$route.query.page,
        size: this.size,
      })
    }
  },
  methods: {
    ...mapActions(['getAllMedia']),
    prev() {
      const page = +this.$route.query.page - 1
      if (page >= 0) {
        this.$router.replace({
          path: this.$route.path,
          query: { page },
        })
      }
    },
    next() {
      const page = +this.$route.query.page + 1
      if (page < this.getMediaList.pagesleft) {
        this.$router.replace({
          path: this.$route.path,
          query: { page },
        })
      }
    },
    changePage(page) {
      this.$router.replace({
        path: this.$route.path,
        query: { page: page - 1 },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.media-and-publication-mobile {
  font-family: 'Barlow', sans-serif;
  .pagination {
    overflow: auto;
    display: flex;
    align-items: center;
    flex: 1;
    flex-shrink: 0;
    margin-bottom: 1rem;
    .number {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2.04082px solid $color-secondary-root;
      border-radius: 6px;
      width: 55px;
      height: 55px;
      margin: 0 0.5rem;
      flex-shrink: 0;
      color: $color-secondary-root;
    }
    .num-active {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2.04082px solid $color-secondary-root;
      background: $color-secondary-dark-root;
      border-radius: 6px;
      width: 55px;
      height: 55px;
      margin: 0 0.5rem;
      color: $color-primary-root;
    }
    img {
      margin: 0 0.5rem;
      width: 55px;
    }
  }
}
</style>
