<template>
  <div class="cms-about-us-container">
    <template v-if="!getMediaList?.data?.length">
      <empty-card />
    </template>
    <div
      v-else-if="getMediaList?.data?.length"
      class="d-flex flex-wrap card-container justify-start align-center"
    >
      <card-list-cms
        v-for="(card, i) in getMediaList.data"
        :key="i"
        :card="card"
        class=""
        edit-page="content-management-media-and-publication-edit-id___en"
        @deletePost="deletePost"
      />
    </div>
    <div v-if="getMediaList?.pagesleft" class="pagination">
      <!--      <img-->
      <!--        src="~/assets/images/paginate-left.svg"-->
      <!--        alt="button previous pagination"-->
      <!--        class="cursor-pointer"-->
      <!--        @click="prev"-->
      <!--      />-->
      <!--              @click="changePage($route.query.page -= +$route.query.page -1 )"
      -->
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
      <!--      <img-->
      <!--        src="~/assets/images/paginate-right.svg"-->
      <!--        alt="button next pagination"-->
      <!--        class="cursor-pointer"-->
      <!--        @click="next"-->
      <!--      />-->
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import EmptyCard from '@/components/cms/EmptyCard'
import CardListCms from '@/components/cms/CardCms'
export default {
  name: 'CmsMediaAndPublication',

  components: { CardListCms, EmptyCard },
  layout: 'cmsLayout',
  middleware: 'authentication',
  data() {
    return {
      mediaPub: [
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
      size: 6,
    }
  },
  head() {
    return {
      title: 'Manage',
    }
  },
  computed: {
    ...mapGetters('home', ['getMediaList']),
  },
  watch: {
    '$route.query'() {
      const page = Number(this.$route.query.page) || 0
      this.getAllMedia({
        page,
        size: this.size,
      })
    },
  },
  mounted() {
    const page = Number(this.$route.query.page) || 0
    if (!this.$route.query.page || isNaN(page)) {
      this.$router.replace({
        path: this.$route.path,
        query: { page: 0 },
      }).catch(err => {
        // Ignore navigation duplicated errors
        if (err.name !== 'NavigationDuplicated') {
          // eslint-disable-next-line no-console
          console.error('Router error:', err)
        }
      })
    } else {
      this.getAllMedia({
        page,
        size: this.size,
      })
    }
  },
  methods: {
    ...mapActions('home', ['getAllMedia']),
    ...mapActions('cms', ['destroyMedia']),
    deletePost(id) {
      this.destroyMedia(id).then(() => {
        this.getAllMedia({
          page: this.$route.query.page,
          size: this.size,
        })
      })
    },
    changePage(page) {
      const targetPage = page - 1
      const currentPage = Number(this.$route.query.page) || 0
      
      // Avoid redundant navigation
      if (targetPage === currentPage) {
        return
      }
      
      this.$router.replace({
        path: this.$route.path,
        query: { page: targetPage },
      }).catch(err => {
        // Ignore navigation duplicated errors
        if (err.name !== 'NavigationDuplicated') {
          // eslint-disable-next-line no-console
          console.error('Router error:', err)
        }
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
