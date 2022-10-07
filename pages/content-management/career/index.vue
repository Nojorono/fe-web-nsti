<template>
  <div class="cms-about-us-container">
    <template v-if="!getAllCareer.length">
      <empty-card />
    </template>
    <div
      v-else-if="getAllCareer.length"
      class="d-flex flex-wrap card-container justify-start align-center"
    >
      <career-card
        v-for="(card, i) in getAllCareer"
        :key="i"
        :card="card"
        class=""
        edit-page="content-management-career-edit-id___en"
      />
    </div>
    <!-- <div class="pagination">
      <div @click="changePage(i)" v-for="i in getAllCareer.pagesleft" :key="i" :class="+$route.query.page + 1 === i ?'number cursor-pointer num-active':'number cursor-pointer'">
        {{ i }}
      </div>
    </div>
    -->
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
  mounted() {
    this.fetchAllCareer({
      page: this.page,
      size: this.size,
    })
  },
  methods: {
    ...mapActions(['fetchAllCareer']),
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
