<template>
  <v-col cols="12" class="ma-0 pa-0 carousel-parent-mobile">
    <v-carousel
      v-model="currentIndex"
      cycle
      :show-arrows="false"
      hide-delimiters
      interval="5000"
      height="250"
      class="ma-0 pa-0"
    >
      <v-carousel-item v-for="(img, i) in image" :key="i">
        <v-sheet color="defaultGray" height="100%" tile>
          <v-row class="fill-height ma-0 pa-0" align="center" justify="center">
            <img :src="img.img" height="100%" />
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <v-col cols="12" class="about-us defaultGolden--text">
      <div class="about-us-container text-center px-3 py-2">
        <h3>{{ image[currentIndex].text }}</h3>
        <br />
        <v-btn
          class="defaultGolden fontDark--text font-weight-bold"
          :to="image[currentIndex].to"
        >
          {{ image[currentIndex].btnText }}
        </v-btn>
      </div>
    </v-col>
  </v-col>
</template>

<script>
export default {
  name: 'TopCarouselMobile',
  data() {
    return {
      currentIndex: 0,
      image: [
        {
          img: require('assets/images/carousel-home-1.png'),
          text: this.$t('home.topCarousel.one.text'),
          btnText: this.$t('home.topCarousel.one.btn'),
          to: this.$i18n.locale === 'id' ? '/id/about-us' : '/about-us',
        },
        {
          img: require('assets/images/carousel-home-2.png'),
          text: this.$t('home.topCarousel.two.text'),
          btnText: this.$t('home.topCarousel.two.btn'),
          to: this.$i18n.locale === 'id' ? '/id/products' : '/products',
        },
        {
          img: require('assets/images/carousel-home-3.png'),
          text: this.$t('home.topCarousel.three.text'),
          btnText: this.$t('home.topCarousel.three.btn'),
          to: this.$i18n.locale === 'id' ? '/id/career' : '/career',
        },
      ],
    }
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.carousel-parent-mobile {
  width: 100vw;
  .text-overlay {
    height: 100%;
    width: 100%;
    .about-us {
      .about-us-container {
        //padding: 20%;
        h3 {
          font-family: 'Barlow', sans-serif;
          font-weight: 500;
        }
      }
    }
  }
}
</style>
