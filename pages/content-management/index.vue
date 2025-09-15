<template>
  <div class="content-management-index">
    <!-- Redirect to sign-in page -->
  </div>
</template>

<script>
export default {
  name: 'ContentManagement',
  mounted() {
    this.$router.replace('/content-management/sign-in')
  },
}
</script>
