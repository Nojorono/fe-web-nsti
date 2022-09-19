<template>
  <div class="cms-about-us-container">
    <template v-if="!aboutUsList.length">
      <empty-card />
    </template>
    <div
      v-else-if="aboutUsList.length"
      class="d-flex flex-wrap card-container justify-start align-center"
    >
      <card-list-cms
        v-for="(card, i) in aboutUsList"
        :key="i"
        :card="card"
        class=""
        edit-page="/content-management/about-us/edit"
      />
    </div>
  </div>
</template>

<script>
import EmptyCard from '@/components/cms/EmptyCard'
import CardListCms from '@/components/cms/CardCms'
export default {
  // middleware: 'authentication',

  layout: 'cmsLayout',
  name: 'CmsAboutUs',
  components: { CardListCms, EmptyCard },
  data() {
    return {
      aboutUsList: [],
    }
  },
  head() {
    return {
      title: 'Manage About Us',
    }
  },
}
</script>

<style lang="scss" scoped>
.card-container {
  padding: 2rem;
  width: calc(100vw - 302px);
}
</style>
