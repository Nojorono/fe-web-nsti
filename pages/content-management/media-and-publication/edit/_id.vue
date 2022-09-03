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
import { mapActions, mapGetters } from 'vuex'

import CmsHeading from '@/components/cms/Heading'
import FormAdd from '@/components/cms/formAdd'
export default {
  name: 'AddNewMediaAndPublication',
  components: {
    FormAdd,
    CmsHeading,
  },
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
      title: 'Edit Media and Publication',
    }
  },
  computed: {
    ...mapGetters(['getDetailMedia']),
  },
  mounted() {
    this.fetchMediaDetail(this.$route.params.id).then((_) => {
      console.log(this.getDetailMedia)
      this.img = null
      this.title = null
      this.bodyText = null
    })
  },
  methods: {
    ...mapActions(['fetchMediaDetail', 'patchDetailMedia']),
    imgPreview(img) {
      this.img = img
    },
    emitTitle(title) {
      this.title = title
    },
    emitBody(body) {
      this.bodyText = body
    },
    postBtn() {
      const payload = {
        id: this.$route.params.id,
        sampleFile: this.img,
        title: this.title,
        description: this.bodyText,
      }
      this.patchDetailMedia(payload)
    },
  },
}
</script>

<style lang="scss" scoped>
.max-cms-width {
  width: 950px;
}
</style>
