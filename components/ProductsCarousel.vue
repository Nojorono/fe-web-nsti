<template>
  <div>
    <carousel-3d
      :width="507"
      :height="550"
      :perspective="0"
      :controls-visible="true"
      :controls-prev-html="''"
      :controls-next-html="''"
      :controls-width="40"
      :controls-height="60"
      :space="400"
      :display="5"
      :inverse-scaling="350"
    >
      <slide v-for="(slide, i) in slides" :key="slide.id" :index="i">
        <v-img
          :src="slide.img"
          alt="nikki super product"
          class="cursor-pointer"
          height="auto"
          width="auto"
          @click="clickProduct(slide.popUp)"
        />
      </slide>
    </carousel-3d>

    <!--    dialog -->
    <v-dialog
      v-model="dialogProduct"
      transition="fade-transition"
      width="75vw"
      content-class="elevation-0"
    >
      <div class="dialog-product">
        <div class="defaultGolden--text dialog-container d-flex align-start">
          <div class="dialog-img-container">
            <img :src="linkPopup" height="616.57px" idth="1233.93px" />
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
  methods: {
    clickProduct(popUp) {
      this.dialogProduct = true
      this.linkPopup = popUp
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
      background-size: 90%;
    }
    .next {
      background: url('assets/images/arrow-right-gold.svg') no-repeat;
      background-size: 90%;
    }
  }
}
</style>

<style lang="scss" scoped>
.dialog-product {
  .dialog-container {
    .dialog-img-container {
      margin: auto;
    }
    .close-btn {
      //margin-left: 13%;
    }
  }
}
</style>
