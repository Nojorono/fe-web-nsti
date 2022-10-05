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
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import EmptyCard from '@/components/cms/EmptyCard'
import CardListCms from '@/components/cms/CardCms'
export default {
  // middleware: 'authentication',
  name: 'CmsMediaAndPublication',

  components: { CardListCms, EmptyCard },
  layout: 'cmsLayout',
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
    ...mapGetters(['getMediaList']),
  },
  methods: {
    ...mapActions(['getAllMedia', 'destroyMedia']),
    deletePost(id) {
      this.destroyMedia(id).then(() => {
        this.getAllMedia({
          page: this.page,
          size: this.size,
        })
      })
    },
  },
  mounted() {
    this.getAllMedia({
      page: this.page,
      size: this.size,
    })
  },
}
</script>

<style lang="scss" scoped>
.card-container {
  padding: 2rem;
  width: calc(100vw - 302px);
}
</style>
