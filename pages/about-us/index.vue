<template>
  <v-row
    v-if="!isMobileCheck()"
    justify="center"
    align="center"
    class="about-us-container"
  >
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
      <h1 class="defaultGolden--text overview-title text-center">
        {{ $t('aboutUs.title') }}
      </h1>
      <div class="d-flex justify-center mt-10">
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
    <v-row id="about-us-milestone" justify="center" align="center">
      <template v-if="$i18n.locale === 'en'">
        <img
          :src="require('assets/images/timeline.png')"
          height="100%"
          width="100%"
        />
      </template>
      <template v-if="$i18n.locale === 'id'">
        <img
          :src="require('assets/images/liniwaktu.png')"
          height="100%"
          width="100%"
        />
      </template>
    </v-row>
    <v-row
      id="about-us-visi-misi"
      justify="center"
      align="center"
      class="ma-16 pa-0 defaultGolden--text text-center visi-misi"
    >
      <v-col cols="6" class="padding-inner visi">
        <h1>{{ $t('aboutUs.vissionTitle') }}</h1>
        <h3 class="fontLight--text">
          {{ $t('aboutUs.vissionSub') }}
        </h3>
      </v-col>
      <v-col cols="6" class="padding-inner misi">
        <h1>{{ $t('aboutUs.missionTitle') }}</h1>
        <h3 class="fontLight--text">
          {{ $t('aboutUs.missionSub') }}
        </h3>
      </v-col>
    </v-row>
    <div id="about-us-values" class="about-us-our-values">
      <div class="defaultGolden--text core-values">
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
    <div id="about-us-management" class="head-of-nikki">
      <h1 class="defaultGolden--text">{{ $t('aboutUs.management') }}</h1>
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
          v-for="(slide, i) in $i18n.locale === 'en'
            ? profilePendiri
            : profilePendiriID"
          :key="i"
          :image="slide.img"
        >
        </vueper-slide>
      </vueper-slides>
    </div>
  </v-row>
  <about-us-mobile v-else />
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import AboutUsMobile from '@/pages/about-us/AboutUsMobile'
export default {
  name: 'AboutUs',
  components: { AboutUsMobile, VueperSlides, VueperSlide },
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
  mounted() {
  },
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
    width: 60rem;
    text-align: center;
    P {
      font-weight: 500;
      font-size: 1.3em;
    }
  }
}

.visi-misi {
  .padding-inner {
    padding: 3rem 7rem;
  }
  h1 {
    font-weight: 800;
    font-size: 2.7em;
    margin-bottom: 2rem;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2em;
  }
  .visi {
    border-right: 1.5px solid $color-secondary-root;
  }
}

.about-us-our-values {
  min-height: 759px;
  width: 100%;
}
.head-of-nikki {
  width: 92%;
  margin: 4rem 2.5rem;
  h1 {
    font-weight: 700;
    font-size: 3.5em;
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
