<template>
  <div class="d-flex justify-center align-center">
    <div class="max-cms-width my-10">
      <CmsHeading
        :close-page="'/content-management/review'"
        :heading="heading"
        class="mb-3"
      />
      <form-add-testimoni  @postBtn="postBtn"/>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import CmsHeading from '@/components/cms/Heading'
import FormAddTestimoni from '@/components/cms/formAddTestimoni'
export default {
  name: 'EditReview',

  components: {
    FormAddTestimoni,
    CmsHeading,
  },
  layout: 'cmsLayout',
  middleware: 'authentication',
  props: {},
  data() {
    return {
      heading: 'Edit Testimoni',
    }
  },
  head() {
    return {
      title: 'Add New About Us',
    }
  },
  mounted() {
    this.fetchDetailTestimoni(this.$route.params.id)
  },
  methods: {
    ...mapActions(['fetchDetailTestimoni', 'patchDetailTestimoni']),
    postBtn(payload) {
      this.patchDetailTestimoni({
        ...payload,
        id: this.$route.params.id
      }).then((_) => {
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
