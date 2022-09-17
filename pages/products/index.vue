<template>
  <div class="products-container">
    <div class='title-container'>
      <h1 class='defaultGolden--text'>{{$t('media.title')}}</h1>
    </div>
    <carousel-3d  :width="507" :height="550" :perspective="0"  :controls-visible="true"
                  :controls-prev-html="''" :controls-next-html="''"
                 :controls-width="30" :controls-height="60" :space="370" :display="5" :inverse-scaling="450">
      <slide v-for="(slide, i) in slides"  :key='slide.id' :index="i">
        <v-img
          :src="slide.img"
          alt="nikki super product"
          class="cursor-pointer"
          height="auto"
          width="auto"
        />
      </slide>
    </carousel-3d>
  </div>

</template>
<script>
export default {
  name: 'Products',
  components: {
  },
  data() {
    return {
        slides: [
          {
            id: 1,
            img: require('assets/images/product-dummy.png')
          },
          {
            id: 2,
            img: require('assets/images/product-dummy.png')
          },
          {
            id: 3,
            img: require('assets/images/product-dummy.png')
          },
          {
            id: 4,
            img: require('assets/images/product-dummy.png')
          },
          {
            id: 5,
            img: require('assets/images/product-dummy.png')
          },
          {
            id: 6,
            img: require('assets/images/product-dummy.png')
          },
          {
            id: 7,
            img: require('assets/images/product-dummy.png')
          },

        ]
    }
  }
};
</script>
<style lang="scss" >
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
  padding: 1rem 4rem;
  .carousel-3d-container {
    .carousel-3d-slide {
      background-color: rgba(0,0,0,0.0);
      border: none !important;

      //padding: 20px;
      //.title { font-size: 22px; }
    }
    .carousel-3d-controls{
      .prev{
        background: url("assets/images/arrow-left-gold.svg") no-repeat;
        background-size: 90%;
      }
      .next{
        background: red;
        //assets/images/arrow-right-gold.svg
        background: url("assets/images/arrow-right-gold.svg") no-repeat;
        background-size: 90%;
      }
    }
  }
}
</style>
