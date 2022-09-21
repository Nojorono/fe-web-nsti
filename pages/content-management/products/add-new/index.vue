<template>
  <div class="d-flex justify-center align-center">
    <div class="max-cms-width my-10">
      <CmsHeading
        :close-page="'/content-management/products'"
        :heading="heading"
        class="mb-3"
      />
      <form-add @postBtn="postBtn" />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import CmsHeading from '@/components/cms/Heading'
import FormAdd from '@/components/cms/formAdd'
export default {
  name: 'AddNewProducts',

  components: {
    FormAdd,
    CmsHeading,
  },
  layout: 'cmsLayout',
  props: {},
  data() {
    return {
      heading: 'Products',
    }
  },
  head() {
    return {
      title: 'Add New Products',
    }
  },
  methods: {
    ...mapActions(['postCreateMedia']),
    postBtn() {
      this.postCreateMedia({
        sampleFile: this.img,
        title: this.title,
        description: this.bodyText,
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
