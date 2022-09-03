<template>
  <v-carousel
    v-model="model"
    cycle
    :show-arrows="false"
    hide-delimiters
    interval="5000"
    height="766"
    class="carousel-parent mt-0 mb-0 pa-0"
  >
    <v-carousel-item v-for="(img, i) in image" :key="i">
      <v-sheet color="defaultGray" height="100%" tile>
        <v-row class="fill-height" align="center" justify="center">
          <v-img :src="img.img" max-height="100%" />
          <!--                      content-class="home-carousel-gradient"
-->
        </v-row>
      </v-sheet>
    </v-carousel-item>
    <v-row class="text-overlay mt-10">
      <v-col cols="6" sm="1" md="1" lg="6" class="about-us defaultGolden--text">
        <div class="about-us-container">
          <h1>LOREM IPSUM</h1>
          <br />
          <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
          <br />
          <v-btn
            rounded
            x-large
            class="defaultGolden fontDark--text font-weight-bold"
            to="/about-us"
          >
            More About Us
          </v-btn>
        </div>
      </v-col>
      <v-col cols="6" sm="1" md="1" lg="6" class="our-motto">
        <div class="motto-container">
          <h1>BERANI BUKA JALAN</h1>
          <!--          <br />-->
          <!--          <h3>MAKIN NYALI MAKIN JADI</h3>-->
        </div>
      </v-col>
    </v-row>
  </v-carousel>
</template>

<script>
export default {
  name: 'TopCarousel',
  data() {
    return {
      model: 0,
      image: [
        {
          img: require('assets/images/motorcyle-nikki.png'),
        },
        {
          img: require('assets/images/jared-rice.jpg'),
        },
        {
          img: require('assets/images/bmx.jpg'),
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.carousel-parent {
  position: relative;
  .text-overlay {
    position: absolute;
  }
}

.text-overlay {
  height: 100%;
  width: 100%;

  //left text
  .about-us {
    .about-us-container {
      font-family: 'Barlow', sans-serif;

      h1 {
        font-weight: 800;
        font-size: 3.5em;
        letter-spacing: 0.05em;
        @include mobile {
          font-size: 1em;
        }
      }
      h2 {
        font-weight: 500;
        font-size: 1.7em;
        @include mobile {
          font-size: 0.5em;
        }
      }
      width: 37rem;
    }
    //text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  //right text
  .our-motto {
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    align-items: center;
    padding-bottom: 1rem;
    padding-left: 10%;
    .motto-container {
      text-align: left;
      width: 30rem;
      h1 {
        font-size: 8em;
        letter-spacing: -0.05em;
        font-family: 'Barlow', sans-serif;
        font-weight: 700;
        line-height: 0.9;
        @include mobile {
          font-size: 3em;
        }
      }
      //h3 {
      //  font-family: 'Barlow', sans-serif;
      //  font-weight: 600;
      //  font-size: 2.3em;
      //}
    }
  }
}
</style>
