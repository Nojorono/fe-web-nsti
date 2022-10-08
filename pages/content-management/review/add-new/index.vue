<template>
  <div class="d-flex justify-center align-center">
    <div class="max-cms-width my-10">
      <CmsHeading
        :close-page="'/content-management/about-us'"
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
    ...mapActions(['postTestimoni']),
    postBtn(payload) {
      this.postTestimoni(payload).then((_) => {
        this.$router.push('/content-management/review')
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.max-cms-width {
  width: 950px;
}
</style>
