<template>
  <div class="d-flex justify-center align-center">
    <div class="max-cms-width my-10">
      <CmsHeading
        :close-page="'/content-management/media-and-publication'"
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
  name: 'AddNewMediaAndPublication',

  components: {
    FormAdd,
    CmsHeading,
  },
  layout: 'cmsLayout',
  props: {},
  data() {
    return {
      heading: 'Media and Publication',
      img: null,
      title: null,
      bodyText: null,
    }
  },
  head() {
    return {
      title: 'Add New Media and Publication',
    }
  },
  methods: {
    ...mapActions(['postCreateMedia']),
    imgPreview(img) {
      this.img = img
    },
    emitTitle(title) {
      this.title = title
    },
    emitBody(body) {
      this.bodyText = body
    },
    postBtn(payload) {
      this.postCreateMedia(payload).then((_) => {
        this.$router.push('/content-management/media-and-publication')
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
