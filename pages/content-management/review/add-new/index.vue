<template>
  <div class="d-flex justify-center align-center">
    <div class="max-cms-width my-10">
      <CmsHeading
        :close-page="'/content-management/review'"
        :heading="heading"
        class="mb-3"
      />
      <form-add-testimoni @postBtn="postBtn" />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import CmsHeading from '@/components/cms/Heading'
import FormAddTestimoni from '@/components/cms/formAddTestimoni'
export default {
  name: 'AddNewReview',

  components: {
    FormAddTestimoni,
    CmsHeading,
  },
  layout: 'cmsLayout',
  middleware: 'authentication',
  props: {},
  data() {
    return {
      heading: 'Testimoni',
    }
  },
  head() {
    return {
      title: 'Add New Testimoni',
    }
  },
  methods: {
    ...mapActions('cms', ['postTestimoni']),
    async postBtn(payload) {
      try {
        await this.postTestimoni(payload)
        this.$router.push('/content-management/review')
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error creating testimoni:', error)
        alert('Failed to create testimoni. Please try again.')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.max-cms-width {
  width: 950px;
}
</style>
