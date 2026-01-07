<template>
  <div>
    <carousel-3d
      :width="325"
      :height="375"
      :perspective="0"
      :controls-visible="true"
      :controls-prev-html="''"
      :controls-next-html="''"
      :controls-width="25"
      :controls-height="45"
      :space="300"
      :display="5"
      :inverse-scaling="350"
    >
      <slide v-for="(slide, i) in slides" :key="slide.id" :index="i">
        <img
          :src="$imageUrl(slide.imageName)"
          alt="nikki super product"
          class="cursor-pointer"
          height="auto"
          width="auto"
          @click="clickProduct(slide)"
        />
      </slide>
    </carousel-3d>

    <!--    dialog -->
    <v-dialog
      v-model="dialogProduct"
      transition="fade-transition"
      width="63vw"
      content-class="elevation-0"
    >
      <div class="dialog-product">
        <div
          class="defaultGolden--text dialog-container d-flex align-start ma-0 pa-0"
        >
          <div class="dialog-img-container">
            <img
              :src="$imageUrl(linkPopup?.images[0]?.imageName || '')"
              width="100%"
            />
            <!-- eslint-disable-next-line vue/no-v-html -->
            <div class="desc-container" v-html="linkPopup?.description"></div>
          </div>
          <div class="close-btn cursor-pointer d-flex justify-start">
            <img
              :src="require('assets/images/Icon-close.svg')"
              @click="dialogProduct = false"
            />
          </div>
        </div>
      </div>
    </v-dialog>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ProductsCarousel',
  props: {
    slides: {
      default: () => [],
      type: Array,
    },
  },
  data() {
    return {
      dialogProduct: false,
      linkPopup: null,
      slides1: [
        {
          id: 1,
          img: require('assets/images/product-dummy.png'),
          popUp: require('assets/images/dummy-detail-products.png'),
        },
      ],
    }
  },
  computed: {
    ...mapGetters('home', ['getDetailProducts']),
  },
  methods: {
    ...mapActions('home', ['fetchDetailProducts']),
    clickProduct(popUp) {
      this.dialogProduct = true
      this.fetchDetailProducts(popUp.id).then((_) => {
        this.linkPopup = this.getDetailProducts[0]
      })
    },
  },
}
</script>

<style lang="scss">
.carousel-3d-container {
  .carousel-3d-slide {
    background-color: rgba(0, 0, 0, 0);
    border: none !important;
  }
  .carousel-3d-controls {
    .prev {
      background: url('assets/images/arrow-left-gold.svg') no-repeat;
      background-size: 80%;
    }
    .next {
      background: url('assets/images/arrow-right-gold.svg') no-repeat;
      background-size: 80%;
    }
  }
}
</style>

<style lang="scss" scoped>
.dialog-product {
  .dialog-container {
    .dialog-img-container {
      //margin: auto;
      //padding: 0;
      .desc-container {
        margin-top: -1%;
        border-radius: 0 0 7px 7px;
        background: #f8f5ec;
        color: #000;

        p {
        }
        width: 100%;
        padding: 5px 16px;
        text-align: center;
        overflow-y: auto;
      }
    }
  }
}
</style>
