<template>
  <div v-if="!isMobileCheck()" class="products-container">
    <div class="title-container ml-5">
      <h1 class="defaultGolden--text">{{ $t('media.title') }}</h1>
    </div>
    <ProductsCarousel
      :slides="$store.state.home.allProducts"
    ></ProductsCarousel>
  </div>
  <products-mobile v-else />
</template>
<script>
import ProductsCarousel from '@/components/ProductsCarousel.vue'
import ProductsMobile from '@/pages/products/ProductsMobile'
export default {
  name: 'Products',
  components: {
    ProductsMobile,
    ProductsCarousel,
  },
  head() {
    return {
      title: 'Products',
    }
  },
  data() {
    return {
    }
  },
}
</script>
<style lang="scss" scoped>
.products-container {
  .title-container {
    h1 {
      font-family: 'Barlow', sans-serif;
      font-style: normal;
      font-weight: 800;
      font-size: 2.8em;
      letter-spacing: 0.1em;
    }
  }
  padding: 1rem 3rem;
}
</style>
