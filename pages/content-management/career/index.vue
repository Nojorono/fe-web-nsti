<template>
  <div class="cms-career-container">
    <template v-if="!getAllCareer?.data?.length">
      <empty-card />
    </template>
    <div
      v-else-if="getAllCareer?.data?.length"
      class="d-flex flex-wrap card-container justify-start align-center"
    >
      <career-card
        v-for="(card, i) in getAllCareer.data"
        :key="i"
        :card="card"
        class=""
        edit-page="content-management-career-edit-id___en"
      />
    </div>
    <div class="pagination">
      <div
        v-for="i in getAllCareer.pagesLeft"
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
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import EmptyCard from '@/components/cms/EmptyCard'
import CareerCard from '@/components/cms/CareerCard.vue'
export default {
  name: 'CmsCareer',
  components: { CareerCard, EmptyCard },
  layout: 'cmsLayout',
  middleware: 'authentication',
  data() {
    return {
      careerList: [
        {
          img: require('assets/images/media-long.png'),
          level: 'Fresh Graduate',
          title: 'lorem ipsum sir dolot amet',
          text: 'asdkfalkjsdjfkjdsf kljadshfdsklajfh adslkjfhds lfkjadh',
          time: '4 hours ago',
        },
        {
          img: require('assets/images/media-long.png'),
          level: 'Fresh Graduate',
          title: 'lorem ipsum sir dolot amet',
          text: 'asdkfalkjsdjfkjdsf kljadshfdsklajfh adslkjfhds lfkjadh',
          time: '4 hours ago',
        },
        {
          img: require('assets/images/media-long.png'),
          level: 'Fresh Graduate',

          title: 'lorem ipsum sir dolot amet',
          text: 'asdkfalkjsdjfkjdsf kljadshfdsklajfh adslkjfhds lfkjadh',
          time: '4 hours ago',
        },
        {
          img: require('assets/images/media-long.png'),
          level: 'Fresh Graduate',

          title: 'lorem ipsum sir dolot amet',
          text: 'asdkfalkjsdjfkjdsf kljadshfdsklajfh adslkjfhds lfkjadh',
          time: '4 hours ago',
        },
        {
          img: require('assets/images/media-long.png'),
          level: 'Fresh Graduate',
          title: 'lorem ipsum sir dolot amet',
          text: 'asdkfalkjsdjfkjdsf kljadshfdsklajfh adslkjfhds lfkjadh',
          time: '4 hours ago',
        },
        {
          img: require('assets/images/media-long.png'),
          level: 'Fresh Graduate',
          title: 'lorem ipsum sir dolot amet',
          text: 'asdkfalkjsdjfkjdsf kljadshfdsklajfh adslkjfhds lff ,madnf,adsn ,dasnflksadn lkdsanfdlsk nfdslkfj dslkjsl kkjadh',
          time: '4 hours ago',
        },
      ],
      page: 0,
      size: 6,
    }
  },
  head() {
    return {
      title: 'Manage About Us',
    }
  },
  computed: {
    ...mapGetters(['getAllCareer']),
  },
  watch: {
    '$route.query'() {
      this.fetchAllCareer({
        page: this.$route.query.page,
        size: this.size,
      })
    },
  },
  mounted() {
    // this.fetchAllCareer({
    //   page: this.page,
    //   size: this.size,
    // })
    if (!this.$route.query.page) {
      this.$router.replace({
        path: this.$route.path,
        query: { page: +this.$route.query.page || 0 },
      })
    } else {
      this.fetchAllCareer({
        page: this.$route.query.page,
        size: this.size,
      })
    }
  },
  methods: {
    ...mapActions(['fetchAllCareer']),
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
.card-container {
  padding: 2rem;
  width: calc(100vw - 302px);
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
    border: 2.04082px solid $color-primary-root;
    border-radius: 6px;
    width: 55px;
    height: 55px;
    margin: 0 0.5rem;
    color: $color-primary-root;
  }
  .num-active {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2.04082px solid $color-primary-root;
    background: $color-primary-root;
    border-radius: 6px;
    width: 55px;
    height: 55px;
    margin: 0 0.5rem;
    color: $color-font-light-root;
  }
  img {
    margin: 0 0.5rem;
    width: 55px;
  }
}
</style>
