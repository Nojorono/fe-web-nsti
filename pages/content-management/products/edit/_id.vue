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
import { mapActions, mapGetters } from 'vuex'
import CmsHeading from '@/components/cms/Heading'
import FormAddProduts from '@/components/cms/formAddProducts'
export default {
  name: 'EditProducts',

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
      title: 'Edit Products',
    }
  },
  computed: {
    ...mapGetters('home', ['getDetailProducts']),
  },
  mounted() {
    this.fetchDetailProducts(this.$route.params.id)
  },
  methods: {
    ...mapActions('home', ['fetchDetailProducts']),
    ...mapActions('cms', ['patchDetailProducts']),
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
      if (payload.tempImage) {
        this.patchDetailProducts({
          sampleFile1: payload.imgPreview,
          description: payload.description,
          title: '',
          id: this.$route.params.id,
        }).then((_) => {
          this.$router.push('/content-management/products')
        })
      } else if (payload.tempImage2) {
        this.patchDetailProducts({
          sampleFile2: payload.imgPreview2,
          description: payload.description,
          title: '',
          id: this.$route.params.id,
        }).then((_) => {
          this.$router.push('/content-management/products')
        })
      } else {
        this.patchDetailProducts({
          sampleFile1: payload.imgPreview,
          sampleFile2: payload.imgPreview2,
          description: payload.description,
          title: '',
          id: this.$route.params.id,
        }).then((_) => {
          this.$router.push('/content-management/products')
        })
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
