<template>
  <div>
    <carousel-3d
      :width="230"
      :height="260"
      :perspective="0"
      :controls-visible="true"
      :controls-prev-html="''"
      :controls-next-html="''"
      :controls-width="20"
      :controls-height="30"
      :space="350"
      :display="1"
      :inverse-scaling="350"
    >
      <slide v-for="(slide, i) in slides" :key="slide.id" :index="i">
        <v-img
          :src="'https://back-api.nikkisuper.my.id/' + slide.imageName"
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
      width="100vw"
      content-class="elevation-0"
    >
      <div class="dialog-product">
        <div class="defaultGolden--text dialog-container d-flex align-center">
          <div class="dialog-img-container">
            <img
              :src="
                'https://back-api.nikkisuper.my.id/' +
                linkPopup?.images[0].imageName
              "
              height="auto"
              width="100%"
            />
            <div class="desc-container" v-html="linkPopup?.description"></div>
          </div>
        </div>
      </div>
    </v-dialog>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ProductsCarouselMobile',
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
    }
  },
  computed: {
    ...mapGetters(['getDetailProducts']),
  },
  methods: {
    ...mapActions(['fetchDetailProducts']),
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
      .desc-container {
        margin-top: -2%;
        background: #f8f5ec;
        color: #000;
        width: 100%;
        padding: 5px 16px;
        text-align: center;
        overflow-y: auto;
      }
    }
  }
}
</style>
