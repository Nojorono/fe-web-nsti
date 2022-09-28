<template>
  <div :class="$route.fullPath === '/' ? 'products-container-mobile ' : 'products-container-mobile background-blue'">
    <div class="title-container">
      <h1 class="defaultGolden--text">{{ $t('media.title') }}</h1>
    </div>
    <div class="carousel-container">
      <products-carousel-mobile :slides="productList" />
    </div>
  </div>
</template>
<script>
import ProductsCarouselMobile from '@/components/ProductsCarouselMobile.vue'
export default {
  name: 'ProductsMobile',
  components: {
    ProductsCarouselMobile,
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
.background-blue{
  background: $color-primary-root;
}
.products-container-mobile {
  width: 100%;
  .carousel-container {
    height: 76vh;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
  }
  .title-container {
    padding: 1rem 3rem;
    h1 {
      font-family: 'Barlow', sans-serif;
      font-style: normal;
      font-weight: 800;
      font-size: 30px;
      letter-spacing: 0.1em;
    }
  }
}
</style>
