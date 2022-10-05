<template>
  <div v-if="!isMobileCheck()" class="media-and-publication">
    <div class="mt-15"></div>
    <card />
    <div class="pagination">
      <img
        src="~/assets/images/paginate-left.svg"
        alt="button previous pagination"
      />
      <div @click="changePage(i)" v-for="i in getMediaList.pagesleft" :key="i" :class="$route.query.page + 1 === i ?'number cursor-pointer num-active':'number cursor-pointer'">
        {{ i }}
      </div>
      <img
        src="~/assets/images/paginate-right.svg"
        alt="button next pagination"
      />
    </div>
  </div>
  <media-and-publication-mobile v-else />
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import card from '@/components/home/MediaAndPublication.vue'
import MediaAndPublicationMobile from '@/pages/media-and-publication/MediaMobile'

export default {
  name: 'MediaAndPublication',
  components: { MediaAndPublicationMobile, card },
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
      // this.page = this.$route.query.page -1
      this.getAllMedia({
        page: this.$route.query.page,
        size: this.size,
      })
    }
  },
  computed: {
    ...mapGetters(['getMediaList']),
  },
  mounted() {
    // this.getAllMedia().then((_) => {})
    // this.getAllMedia({
    //   page: this.$route.query.page -1,
    //   size: this.size,
    // })
    this.$router.replace({path: this.$route.path, query: {page: 0}})
  },
  methods: {
    ...mapActions(['getAllMedia']),

    changePage(page) {
      this.$router.replace({path: this.$route.path, query: {page: page -1}})

    }
  },
}
</script>

<style lang="scss" scoped>
.media-and-publication {
  font-family: 'Barlow', sans-serif;
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 3rem;
    margin-top: 9rem;
    .number {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2.04082px solid $color-secondary-root;
      border-radius: 6px;
      width: 55px;
      height: 55px;
      margin: 0 0.5rem;
      color: $color-secondary-root;
    }
    .num-active{
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2.04082px solid $color-secondary-root;
      border-radius: 6px;
      width: 55px;
      height: 55px;
      margin: 0 0.5rem;
      color: $color-secondary-root;
    }
    img {
      margin: 0 0.5rem;
      width: 55px;
    }
  }
}
</style>
