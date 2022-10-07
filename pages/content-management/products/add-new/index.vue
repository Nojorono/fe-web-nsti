<template>
  <div class="d-flex justify-center align-center">
    <div class="max-cms-width my-10">
      <CmsHeading
        :close-page="'/content-management/products'"
        :heading="heading"
        class="mb-3"
      />
      <form-add-produts @postBtn="postBtn" />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import CmsHeading from '@/components/cms/Heading'
import FormAddProduts from '@/components/cms/formAddProducts'
export default {
  name: 'AddNewProducts',

  components: {
    FormAddProduts,
    CmsHeading,
  },
  layout: 'cmsLayout',
  middleware: 'authentication',
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
    ...mapActions(['postCreateProduct']),
    postBtn(payload) {
      this.postCreateProduct({
        sampleFile1: payload.imgPreview2,
        sampleFile2: payload.imgPreview,
        description: payload.description,
        title: '',
      }).then((_) => {
        this.$router.push('/content-management/products')
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
