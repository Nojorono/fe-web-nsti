<template>
  <div v-if="!isMobileCheck()" class="products-container">
    <div class="title-container ml-5">
      <h1 class="defaultGolden--text">{{ $t('media.title') }}</h1>
    </div>
    <ProductsCarousel :slides="productList"></ProductsCarousel>
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
  data() {
    return {
      productList: [
        {
          id: 1,
          img: require('assets/images/product-dummy.png'),
          popUp: require('assets/images/dummy-detail-products.png'),
        },
        {
          id: 2,
          img: require('assets/images/produk2.png'),
          popUp: require('assets/images/produk2-pop.png'),
        },
        {
          id: 3,
          img: require('assets/images/produk3.png'),
          popUp: require('assets/images/produk3-pop.png'),
        },
        {
          id: 4,
          img: require('assets/images/produk4.png'),
          popUp: require('assets/images/produk4-pop.png'),
        },
        {
          id: 5,
          img: require('assets/images/produk5.png'),
          popUp: require('assets/images/produk5-pop.png'),
        },
        {
          id: 6,
          img: require('assets/images/produk6.png'),
          popUp: require('assets/images/produk6-pop.png'),
        },
      ],
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
      font-size: 3.5em;
      letter-spacing: 0.1em;
    }
  }
  padding: 1rem 3rem;
}
</style>
