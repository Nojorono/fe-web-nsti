<template>
  <v-col class="product-parent-wrapper ma-0 pa-0 mt-15 mb-15" cols="12">
    <h1>{{ $t('home.products.title') }}</h1>
    <div class="carousel-container">
      <ProductsCarousel :slides="getAllProducts" />
    </div>
  </v-col>
</template>

<script>
import 'vueperslides/dist/vueperslides.css'
import { mapActions, mapGetters } from 'vuex'
import ProductsCarousel from '@/components/ProductsCarousel.vue'

export default {
  name: 'MyProducts',
  components: { ProductsCarousel },
  data() {
    return {
      dialogProduct: false,
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
      ],
    }
  },
  computed: {
    ...mapGetters(['getAllProducts', 'getDetailProducts']),
  },
  mounted() {
    this.fetchAllProducts()
  },
  methods: {
    ...mapActions(['fetchAllProducts', 'fetchDetailProducts']),
  },
}
</script>

<style lang="scss" scoped>
.dialog-product {
  background-color: $color-primary-root;
}
.dialog-container {
  font-family: 'Barlow', sans-serif;
  padding: 8.5% 20%;
  height: 100%;
}
.product-parent-wrapper {
  width: 100vw;

  h1 {
    color: $color-secondary-root;
    font-size: 2.5em;
    font-family: 'Barlow', sans-serif;
    margin-left: 4rem;
  }
}
.carousel-container {
  padding: 1rem 3rem;
}
//not used, bust still cool code
.produts-navigation {
  background-color: $color-primary-root;
  height: 40rem;
  max-width: 100%;
  .vue-slider {
    width: 90%;
  }
}
.produts-wrapper {
  cursor: pointer;
  //transition: width 0.3s, height 0.3s;
  width: 100%;

  .zoom {
    width: 100%;
    transition: width 0.3s, height 0.3s;
  }
}

.produts-wrapper:hover .zoom {
  width: 110%;
  height: auto;
}
</style>
