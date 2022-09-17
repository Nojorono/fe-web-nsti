<template>
  <v-col class="product-parent-wrapper ma-0 pa-0 mt-15 mb-15" cols="12">
    <h1>{{$t('home.products.title')}}</h1>
<!--    <div class="produts-navigation">-->
<!--      <div class="vue-slider ma-auto pt-10">-->
<!--        <div class="slider-nav d-lg-flex justify-end mb-5">-->
<!--          <button class="mr-5" @click="$refs.myVueperSlides.previous()">-->
<!--            <img-->
<!--              :src="require('assets/images/arrow-left.svg')"-->
<!--              alt="left arrow"-->
<!--            />-->
<!--          </button>-->
<!--          <button class="ml-5" @click="$refs.myVueperSlides.next()">-->
<!--            <img-->
<!--              :src="require('assets/images/arrow-right.svg')"-->
<!--              alt="right arrow"-->
<!--            />-->
<!--          </button>-->
<!--        </div>-->
<!--        <div>-->
<!--          <vueper-slides-->
<!--            ref="myVueperSlides"-->
<!--            class="no-shadow"-->
<!--            :bullets="false"-->
<!--            :visible-slides="5"-->
<!--            :gap="3"-->
<!--            slide-multiple-->
<!--            :arrows="false"-->
<!--            :slide-ratio="1 / 3.3"-->
<!--            :dragging-distance="50"-->
<!--            :breakpoints="{ 800: { visibleSlides: 1, slideMultiple: 1 } }"-->
<!--          >-->
<!--            <vueper-slide-->
<!--              v-for="(rokok, i) in productList"-->
<!--              :key="i"-->
<!--              class="produts-wrapper"-->
<!--              @click.native="showProduct(rokok.id)"-->
<!--            >-->
<!--              <template #content>-->
<!--                <div class="zoom">-->
<!--                  &lt;!&ndash;                  ../../../backend/image/1658843177518.jpg&ndash;&gt;-->
<!--                  <v-img-->
<!--                    :src="require(`~/assets/images/JAZY_BOLD.png`)"-->
<!--                    alt="ngerokok dulu bang"-->
<!--                    max-width="100%"-->
<!--                    max-height="auto"-->
<!--                  />-->
<!--                </div>-->
<!--              </template>-->
<!--            </vueper-slide>-->
<!--          </vueper-slides>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
    <div class='carousel-container'>
      <ProductsCarousel :slides="productList" />
    </div>

    <!--    dialog -->
    <v-dialog
      v-model="dialogProduct"
      transition="fade-transition"
      width="85vw "
    >
      <v-card height="40rem" class="dialog-product">
        <div
          class="defaultGolden--text dialog-container d-flex align-start justify-center"
        >
          <div class="dialog-img-container">
            <img src="~/assets/images/JAZY_BOLD.png" width="240" />
          </div>
          <div class="d-flex flex-column pa-10 dialog-text ml-10">
            <h1 class="product-title mb-5">
              LOREM IPSUM
            </h1>
            <div class="description-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda autem beatae consequuntur dolores dolorum et excepturi
              id magni minus neque, odit quaerat sunt voluptatum. Nesciunt
              provident unde voluptatem? A dolorem dolorum fugiat mollitia
              nesciunt pariatur! Eius explicabo id, ipsa ipsam magni minima modi
              nobis praesentium quos repudiandae sequi unde voluptas.
            </div>
          </div>
          <div class="close-btn cursor-pointer d-flex justify-start">
            <img
              :src="require('assets/images/Icon-close.svg')"
              @click="dialogProduct = false"
            />
          </div>
        </div>
      </v-card>
    </v-dialog>
  </v-col>
</template>

<script>
// import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import { mapActions, mapGetters } from 'vuex'
import ProductsCarousel from '@/components/ProductsCarousel.vue'

export default {
  name: 'MyProducts',
  components: {ProductsCarousel },
  data() {
    return {
      dialogProduct: false,
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
  computed: {
    ...mapGetters(['getAllProducts', 'getDetailProducts']),
  },
  mounted() {
    this.fetchAllProducts()
  },
  methods: {
    ...mapActions(['fetchAllProducts', 'fetchDetailProducts']),
    showProduct(id) {
      // this.fetchDetailProducts(id).then((_) => {
      this.dialogProduct = !this.dialogProduct
      // })
    },
    parseImgPath(url) {
      return url.split('\\\\')[1]
    },
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
  .dialog-text {
    h1 {
      font-size: 3.5em;
      letter-spacing: 0.05em;
      font-weight: 600;
    }
    .description-text {
      font-size: 1.2em;
    }
  }
}
.product-parent-wrapper {
  width: 100vw;

  h1 {
    color: $color-secondary-root;
    font-size: 3.5em;
    font-family: 'Barlow', sans-serif;
    margin-left: 4rem;
  }
}
.carousel-container {
  padding: 1rem 6rem;
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
