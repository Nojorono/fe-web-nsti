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
  layout: 'cmsLayout',
  middleware: 'authentication',
  props: {},
  data() {
    return {
      heading: 'Media and Publication',
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
    this.fetchMediaDetail(this.$route.params.id)
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
    postBtn(payload) {
      this.patchDetailMedia({
        ...payload,
        id: this.$route.params.id,
      }).then(() => {
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
