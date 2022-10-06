<template>
  <div class="d-flex justify-center align-center">
    <div class="max-cms-width my-10">
      <CmsHeading
        :close-page="'/content-management/about-us'"
        :heading="heading"
        class="mb-3"
      />
      <form-add @postBtn="postBtn" />
    </div>
  </div>
</template>

<script>
import CmsHeading from '@/components/cms/Heading'
import FormAdd from '@/components/cms/formAdd'
export default {
  name: 'EditAboutUs',

  components: {
    FormAdd,
    CmsHeading,
  },
  layout: 'cmsLayout',
  props: {},
  data() {
    return {
      heading: 'About Us',
    }
  },
  head() {
    return {
      title: 'Add New About Us',
    }
  },
  methods: {
    postBtn() {},
  },
}
</script>

<style lang="scss" scoped>
.max-cms-width {
  width: 950px;
}
</style>
