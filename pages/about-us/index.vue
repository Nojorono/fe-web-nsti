<template>
  <v-row justify="center" align="center" class="about-us-container">
    <v-col cols="12" class="ma-0 pa-0">
      <v-carousel
        cycle
        :show-arrows="false"
        hide-delimiters
        interval="5000"
        height="760px"
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
      class="d-flex justify-center flex-column ma-0 py-10 px-16 overview-container"
    >
      <h1 class="defaultGolden--text overview-title">{{$t('aboutUs.heading')}}</h1>
      <div class="d-flex justify-center mt-10">
        <div class="overview-text">
          <p>
            {{$t('aboutUs.subText1')}}
          </p>
          <br />
          <p>
            {{$t('aboutUs.subText2')}}
          </p>
        </div>
      </div>
    </v-col>
    <v-row id="about-us-milestone" justify="center" align="center">
      <img
        :src="require('assets/images/timeline.png')"
        height="100%"
        width="100%"
      />
    </v-row>
    <v-row
      id="about-us-visi-misi"
      justify="center"
      align="center"
      class="ma-16 pa-0 defaultGolden--text text-center visi-misi"
    >
      <v-col cols="6" class="padding-inner visi">
        <h1>VISION</h1>
        <h3 class="fontLight--text">
          Achieving success that benefits Owners, Management, Employees,
          Consumers and Business Partners.
        </h3>
      </v-col>
      <v-col cols="6" class="padding-inner misi">
        <h1>MISSION</h1>
        <h3 class="fontLight--text">
          Producing prime product quality in the exclusive cigarette market
          competition, as well as producing continuous innovation.
        </h3>
      </v-col>
    </v-row>

    <div id="about-us-values" class='about-us-our-values'>
      <div class="defaultGolden--text core-values">
        <h1>CORE VALUES</h1>
      </div>
      <vueper-slides
        infinite
        pauseOnHover
        autoplay
        class="no-shadow"
        :bullets="false"
        :arrows="false"
      >
        <vueper-slide
          v-for="(slide, i) in values"
          :key="i"
          :image="slide.img"
        >
        </vueper-slide>
      </vueper-slides>
    </div>
    <div id="about-us-management" class="head-of-nikki">
      <h1 class="defaultGolden--text">OUR MANAGEMENT</h1>
      <vueper-slides
        class="no-shadow"
        :visible-slides="2"
        slide-multiple
        :gap="3"
        :slide-ratio="1 / 3.5"
        :dragging-distance="200"
        :bullets="false"
      >
        <vueper-slide
          v-for="(slide, i) in profilePendiri"
          :key="i"
          :image="slide.img"
        >
        </vueper-slide>
      </vueper-slides>
    </div>
  </v-row>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
export default {
  nuxtI18n: {
    paths: {
      id: '/about-us',
      en: '/about-us'
    }
  },
  name: 'AboutUs',
  components: { VueperSlides, VueperSlide },
  data() {
    return {
      content: [],
      profilePendiri: [
        { img: require('assets/images/pendiri-SOFFAN HARYANTO.png') },
        { img: require('assets/images/pendiri-JOHANES ANDRIAN.png') },
        { img: require('assets/images/pendiri-EKO NOVIANTO.png') },
      ],
      cover: [
        { img: require('assets/images/nikki-outside-factory.png') },
        { img: require('assets/images/nikki-workers.png') },
        { img: require('assets/images/nikki-tools.png') },
      ],
      values: [
        { img: require('assets/images/morality.png') },
        { img: require('assets/images/humble.png') },
        { img: require('assets/images/trust.png') },
        { img: require('assets/images/cooperation.png') },
        { img: require('assets/images/consistent.png') },
        { img: require('assets/images/loyalty.png') },
        { img: require('assets/images/hardwork.png') },
      ]
    }
  },
  head() {
    return {
      title: 'About Us',
    }
  },
  mounted() {},
}
</script>

<style lang="scss" scoped>
.about-us-container {
  font-family: 'Barlow', sans-serif;
}
.core-values {
  margin-left: 10rem;
  margin-bottom: 3rem;
  font-weight: 700;
  font-size: 2em;
  line-height: 96px;
  letter-spacing: 0.05em;
}

.overview-container {
  .overview-title {
    font-weight: 700;
    font-size: 4em;
    line-height: 96px;
    letter-spacing: 0.05em;
  }
  .overview-text {
    width: 70rem;
    text-align: center;
    P {
      font-weight: 500;
      font-size: 1.7em;
    }
  }
}

.visi-misi {
  .padding-inner {
    padding: 3rem 7rem;
  }
  h1 {
    font-weight: 800;
    font-size: 3em;
    margin-bottom: 2rem;
  }
  h3 {
    font-weight: 500;
    font-size: 1.5em;
  }
  .visi {
    border-right: 1.5px solid $color-secondary-root;
  }
}

.about-us-our-values{
  min-height: 759px;
  width: 100%;
}
.head-of-nikki {
  width: 92%;
  margin: 4rem 2.5rem;
  //height: 600px;
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
</style>
