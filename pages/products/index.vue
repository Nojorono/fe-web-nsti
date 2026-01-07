<template>
  <div v-if="!isMobileCheck()" class="products-container">
    <div class="title-container ml-5">
      <h1 class="defaultGolden--text">{{ $t('media.title') }}</h1>
    </div>
    <ProductsCarousel
      v-if="getAllProducts && getAllProducts.length"
      :slides="getAllProducts"
    ></ProductsCarousel>
  </div>
  <products-mobile v-else />
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import ProductsCarousel from '@/components/ProductsCarousel.vue'
import ProductsMobile from '@/pages/products/ProductsMobile'
export default {
  name: 'Products',
  components: {
    ProductsMobile,
    ProductsCarousel,
  },
  data() {
    return {}
  },
  head() {
    return {
      title: 'Products',
    }
  },
  computed: {
    ...mapGetters('home', ['getAllProducts', 'getDetailProducts']),
  },
  mounted() {
    this.fetchAllProducts()
  },
  methods: {
    ...mapActions('home', ['fetchAllProducts', 'fetchDetailProducts']),
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
