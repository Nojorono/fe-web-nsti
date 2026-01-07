<template>
  <div class="d-flex justify-center align-center">
    <div class="max-cms-width my-10">
      <CmsHeading
        :close-page="'/content-management/media-and-publication'"
        :heading="heading"
        class="mb-3"
      />
      <form-add :loading-btn="loadingBtn" @postBtn="postBtn" />
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
  middleware: 'authentication',
  props: {},
  data() {
    return {
      heading: 'Media and Publication',
      img: null,
      title: null,
      bodyText: null,
      loadingBtn: false,
    }
  },
  head() {
    return {
      title: 'Add New Media and Publication',
    }
  },
  methods: {
    ...mapActions('cms', ['postCreateMedia']),
    imgPreview(img) {
      this.img = img
    },
    emitTitle(title) {
      this.title = title
    },
    emitBody(body) {
      this.bodyText = body
    },
    async postBtn(payload) {
      this.loadingBtn = true
      try {
        await this.postCreateMedia(payload)
        this.$router.push('/content-management/media-and-publication')
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error creating media:', error)
        alert('Failed to create media. Please try again.')
      } finally {
        this.loadingBtn = false
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
