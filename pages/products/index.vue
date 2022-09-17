<template>
  <div class="products-container">
    <div class='title-container'>
      <h1 class='defaultGolden--text'>{{$t('media.title')}}</h1>
    </div>
    <ProductsCarousel :slides='productList' ></ProductsCarousel>
  </div>

</template>
<script>
import ProductsCarousel from '@/components/ProductsCarousel.vue'
export default {
  name: 'Products',
  components: {
    ProductsCarousel
  },
  data() {
    return {
      productList: [
        {
          id: 1,
          img: require('assets/images/product-dummy.png'),
          popUp: require('assets/images/dummy-detail-products.png')
        },
        {
          id: 2,
          img: require('assets/images/product-dummy.png'),
          popUp: require('assets/images/dummy-detail-products.png')
        },
        {
          id: 3,
          img: require('assets/images/product-dummy.png'),
          popUp: require('assets/images/dummy-detail-products.png')
        },
        {
          id: 4,
          img: require('assets/images/product-dummy.png'),
          popUp: require('assets/images/dummy-detail-products.png')
        },
        {
          id: 5,
          img: require('assets/images/product-dummy.png'),
          popUp: require('assets/images/dummy-detail-products.png')
        },
        {
          id: 6,
          img: require('assets/images/product-dummy.png'),
          popUp: require('assets/images/dummy-detail-products.png')
        },
        {
          id: 7,
          img: require('assets/images/product-dummy.png'),
          popUp: require('assets/images/dummy-detail-products.png')
        },
      ],
    }
  },
};
</script>
<style lang="scss" scoped>
.products-container {
  .title-container {
    h1{
      font-family: 'Barlow',sans-serif;
      font-style: normal;
      font-weight: 800;
      font-size: 90px;
      letter-spacing: 0.1em;
    }
  }
  padding: 1rem 5rem;
}
</style>
