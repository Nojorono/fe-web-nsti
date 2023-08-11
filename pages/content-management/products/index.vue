<template>
  <div class="cms-about-us-container">
    <template v-if="!getAllProducts?.length">
      <empty-card />
    </template>
    <div
      v-else-if="getAllProducts.length"
      class="d-flex flex-wrap card-container justify-start align-center"
    >
      <card-list-cms
        v-for="(card, i) in getAllProducts"
        :key="i"
        :card="card"
        class=""
        edit-page="content-management-products-edit-id___en"
        @deletePost="deletePost"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import EmptyCard from '@/components/cms/EmptyCard'
import CardListCms from '@/components/cms/CardCms'
export default {
  name: 'CmsAboutUs',

  components: { CardListCms, EmptyCard },
  layout: 'cmsLayout',
  middleware: 'authentication',
  data() {
    return {
      ProductsList: [
        {
          img: require('assets/images/media-long.png'),
          title: 'lorem ipsum sir dolot amet',
          text: 'asdkfalkjsdjfkjdsf kljadshfdsklajfh adslkjfhds lfkjadh',
          time: '4 hours ago',
        },
        {
          img: require('assets/images/media-long.png'),
          title: 'lorem ipsum sir dolot amet',
          text: 'asdkfalkjsdjfkjdsf kljadshfdsklajfh adslkjfhds lfkjadh',
          time: '4 hours ago',
        },
        {
          img: require('assets/images/media-long.png'),
          title: 'lorem ipsum sir dolot amet',
          text: 'asdkfalkjsdjfkjdsf kljadshfdsklajfh adslkjfhds lfkjadh',
          time: '4 hours ago',
        },
        {
          img: require('assets/images/media-long.png'),
          title: 'lorem ipsum sir dolot amet',
          text: 'asdkfalkjsdjfkjdsf kljadshfdsklajfh adslkjfhds lfkjadh',
          time: '4 hours ago',
        },
        {
          img: require('assets/images/media-long.png'),
          title: 'lorem ipsum sir dolot amet',
          text: 'asdkfalkjsdjfkjdsf kljadshfdsklajfh adslkjfhds lfkjadh',
          time: '4 hours ago',
        },
        {
          img: require('assets/images/media-long.png'),
          title: 'lorem ipsum sir dolot amet',
          text: 'asdkfalkjsdjfkjdsf kljadshfdsklajfh adslkjfhds lfkjadh',
          time: '4 hours ago',
        },
        {
          img: require('assets/images/media-long.png'),
          title: 'lorem ipsum sir dolot amet',
          text: 'asdkfalkjsdjfkjdsf kljadshfdsklajfh adslkjfhds lfkjadh',
          time: '4 hours ago',
        },
      ],
    }
  },
  head() {
    return {
      title: 'Manage',
    }
  },
  computed: {
    ...mapGetters(['getAllProducts']),
  },
  mounted() {
    this.fetchAllProducts()
  },
  methods: {
    ...mapActions(['fetchAllProducts', 'deleteProducts']),
    deletePost(id) {
      this.deleteProducts(id).finally((_) => {
        this.fetchAllProducts()
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
</style>
