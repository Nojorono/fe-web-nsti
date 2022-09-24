<template>
  <v-row  justify="center" align="center" class="about-us-container-mobile ma-0 pa-0" >
    <v-col cols="12" class="ma-0 pa-0">
      <v-carousel
        cycle
        :show-arrows="false"
        hide-delimiters
        interval="5000"
        height="210"
        class="ma-0 pa-0"
      >
        <v-carousel-item v-for="(img, i) in cover" :key="i">
          <v-sheet color="defaultGray" height="100%" tile>
            <v-row class="fill-height" align="center" justify="center">
              <v-img
                :src="img.img"
                max-height="100%"
                max-width="100%"
                class="ma-0 pa-0"
              />
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-col>
    <v-col
      id="about-us-overview"
      cols="12"
      class="d-flex justify-start flex-column ma-0  overview-container"
    >
      <h1 class="defaultGolden--text overview-title text-center">
        {{ $t('aboutUs.title') }}
      </h1>
      <div class="d-flex justify-center ">
        <div class="overview-text">
          <p>
            {{ $t('aboutUs.subText1') }}
          </p>
          <br />
          <p>
            {{ $t('aboutUs.subText2') }}
          </p>
        </div>
      </div>
    </v-col>
    <v-row
      id="about-us-visi-misi"
      class="ma-16 pa-0 defaultGolden--text text-center visi-misi"
    >
      <v-col cols="12" class=" ma-0 pa-0 visi">
        <h1>{{ $t('aboutUs.vissionTitle') }}</h1>
        <h3 class="fontLight--text">
          {{ $t('aboutUs.vissionSub') }}
        </h3>
      </v-col>
      <v-col cols="12" class=" ma-0 pa-0 misi">
        <h1>{{ $t('aboutUs.missionTitle') }}</h1>
        <h3 class="fontLight--text">
          {{ $t('aboutUs.missionSub') }}
        </h3>
      </v-col>
    </v-row>
    <div id="about-us-values" class="about-us-our-values">
      <div class="defaultGolden--text core-values ">
        <h1>{{ $t('aboutUs.coreValues') }}</h1>
      </div>
      <vueper-slides
        infinite
        pause-on-hover
        autoplay
        class="no-shadow"
        :bullets="false"
        :arrows="false"
      >
        <vueper-slide
          v-for="(slide, i) in $i18n.locale === 'en' ? values : nilaiNilai"
          :key="i"
          :image="slide.img"
        >
        </vueper-slide>
      </vueper-slides>
    </div>
  </v-row >
</template>

<script>
// import { VueperSlides, VueperSlide } from 'vueperslides'
export default {
  name: 'AboutUsMobile',
  // components: { VueperSlides, VueperSlide },
  data() {
    return {
      content: [],
      profilePendiri: [
        { img: require('assets/images/pendiri-SOFFAN HARYANTO.png') },
        { img: require('assets/images/pendiri-JOHANES ANDRIAN.png') },
        { img: require('assets/images/pendiri-EKO NOVIANTO.png') },
      ],
      profilePendiriID: [
        { img: require('assets/images/soffan-id.png') },
        { img: require('assets/images/johanes-id.png') },
        { img: require('assets/images/eko-id.png') },
      ],
      cover: [
        { img: require('assets/images/about-us-1.png') },
        { img: require('assets/images/about-us-2.png') },
        { img: require('assets/images/about-us-3.png') },
      ],
      values: [
        { img: require('assets/images/morality.png') },
        { img: require('assets/images/humble.png') },
        { img: require('assets/images/trust.png') },
        { img: require('assets/images/cooperation.png') },
        { img: require('assets/images/consistent.png') },
        { img: require('assets/images/loyalty.png') },
        { img: require('assets/images/hardwork.png') },
      ],
      nilaiNilai: [
        { img: require('assets/images/moralitas.png') },
        { img: require('assets/images/rendahhati.png') },
        { img: require('assets/images/kepercayaan.png') },
        { img: require('assets/images/kerjasama.png') },
        { img: require('assets/images/konsisten.png') },
        { img: require('assets/images/kesetiaan.png') },
        { img: require('assets/images/kerjakeras.png') },
      ],
    }
  },
  head() {
    return {
      title: 'About Us',
    }
  },
}
</script>

<style lang="scss" scoped>
.about-us-container-mobile {
  font-family: 'Barlow', sans-serif;


  .overview-container {
    .overview-title {
      font-weight: 700;
      font-size: 2.1em;
      line-height: 96px;
      letter-spacing: 0.05em;
    }
    .overview-text {
      width: 70rem;
      text-align: center;
      padding: 0 2rem;
      P {
        font-weight: 500;
        font-size: 1em;
      }
    }
  }

  .visi-misi {
    h1 {
      font-weight: 800;
      font-size: 2em;
      margin-bottom: 2rem;
    }
    h3 {
      font-weight: 500;
      font-size: 1em;
    }
  }

  .about-us-our-values {
    //min-height: 759px;
    height: 300px;
    width: 100%;
    .core-values {
      font-weight: 700;
      font-size: 1em;
      line-height: 96px;
      letter-spacing: 0.05em;
    }
  }
  .head-of-nikki {
    width: 92%;
    margin: 4rem 2.5rem;
    h1 {
      font-weight: 700;
      font-size: 5em;
      line-height: 96px;
      letter-spacing: 0.05em;
      margin-left: 3rem;
    }
    .profile-card-container {
      display: flex;
      overflow-x: auto;
      touch-action: pan-x;
      cursor: grab;
    }
  }
}

</style>
