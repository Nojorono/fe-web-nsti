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
import { mapActions, mapGetters } from 'vuex'
import CmsHeading from '@/components/cms/Heading'
import FormAdd from '@/components/cms/formAdd'
export default {
  name: 'EditProducts',
  layout: 'cmsLayout',

  components: {
    FormAdd,
    CmsHeading,
  },
  props: {},
  data() {
    return {
      heading: 'Products',
      img: null,
      title: null,
      bodyText: null,
    }
  },
  head() {
    return {
      title: 'Edit Products',
    }
  },
  computed: {
    ...mapGetters(['getDetailProducts']),
  },
  mounted() {
    this.fetchDetailProducts(this.$route.params.id).then((_) => {
      console.log(this.getDetailProducts)
      this.img = this.getDetailProducts.imagePath
      this.title = this.getDetailProducts.title
      this.bodyText = this.getDetailProducts.description
    })
  },
  methods: {
    ...mapActions(['fetchDetailProducts', 'patchDetailProducts']),
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
      this.patchDetailProducts(payload).then((_) => {
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
