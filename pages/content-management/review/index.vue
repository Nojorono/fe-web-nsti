<template>
  <div class="cms-about-us-container">
    <template v-if="!getAllTestimoni.length">
      <empty-card />
    </template>
    <div
      v-else-if="getAllTestimoni.length"
      class="d-flex flex-wrap card-container justify-start align-center"
    >
      <card-list-cms
        v-for="(card, i) in getAllTestimoni"
        :key="i"
        :card="card"
        class=""
        edit-page="content-management-review-edit-id___en"
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
  name: 'CmsReview',
  components: { CardListCms, EmptyCard },
  layout: 'cmsLayout',
  middleware: 'authentication',
  data() {
    return {
      aboutUsList: [],
    }
  },
  head() {
    return {
      title: 'Manage',
    }
  },
  computed: {
    ...mapGetters(['getAllTestimoni']),
  },
  mounted() {
    this.fetchAllTestimoni()
  },
  methods: {
    ...mapActions(['fetchAllTestimoni', 'destroyTestimoni']),
    deletePost(id) {
      this.destroyTestimoni(id).then((_) => {
        this.fetchAllTestimoni()
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
