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
      cols="12"
      class="d-flex justify-center flex-column ma-0 py-10 px-16 overview-container"
    >
      <h1 class="defaultGolden--text overview-title">OVERVIEW</h1>
      <div class="d-flex justify-center mt-10">
        <div class="overview-text">
          <p>
            PT Nikki Super Tobacco Indonesia was established on November 11,
            1990 and is a cigarette manufacturer from Kudus, known as the city
            of kretek. PT Nikki Super Tobacco Indonesia is one of the leading
            cigarette manufacturers in Central Java with a national market
            reach.
          </p>
          <br />
          <p>
            The quality and taste of cigarettes are the main focus of PT Nikki
            Super Tobacco Indonesia's products. This is manifested in the form
            of a variety of product innovations that always adapt to the
            dynamics of market trends. Using the latest technology support,
            machine-made kretek cigarettes were created with regular, bold, and
            mild categories, namely Jazy Mild, Jazy Bold, Nikki Super, Nikki
            Filter Black, and Top Mild. PT Nikki Super Tobacco Indonesia is also
            included in the labor-intensive sector that produces several
            hand-rolled kretek cigarettes, namely Marathon and Wali.
          </p>
        </div>
      </div>
    </v-col>
    <v-row>
      <v-img
        :src="require('assets/images/timeline.png')"
        max-height="auto"
        max-width="auto"
      />
    </v-row>
    <v-row
      justify="center"
      align="center"
      class="ma-16 pa-0 defaultGolden--text text-center visi-misi"
    >
      <v-col cols="6" class="padding-inner visi">
        <h1>VISI</h1>
        <h3 class="fontLight--text">
          Achieving success that benefits Owners, Management, Employees,
          Consumers and Business Partners.
        </h3>
      </v-col>
      <v-col cols="6" class="padding-inner misi">
        <h1>MISI</h1>
        <h3 class="fontLight--text">
          Producing prime product quality in the exclusive cigarette market
          competition, as well as producing continuous innovation.
        </h3>
      </v-col>
    </v-row>
    <v-row>
      <div class="defaultGolden--text core-values">
        <h1>CORE VALUES</h1>
      </div>
      <v-img
        :src="require('assets/images/morality.png')"
        max-height="auto"
        max-width="auto"
      />
    </v-row>
    <div class="head-of-nikki">
      <h1 class="defaultGolden--text">OUR MANAGEMENT</h1>
      <div class="profile-card-container">
        <v-img
          :src="require('assets/images/profile pendiri.svg')"
          max-height="70%"
          max-width="70%"
        />
        <v-img
          :src="require('assets/images/profile pendiri.svg')"
          max-height="70%"
          max-width="70%"
        />
      </div>
    </div>
  </v-row>
</template>

<script>
export default {
  name: 'AboutUs',
  components: {},
  data() {
    return {
      content: [],
      cover: [
        { img: require('assets/images/nikki-outside-factory.png') },
        { img: require('assets/images/nikki-workers.png') },
        { img: require('assets/images/nikki-tools.png') },
      ],
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

.head-of-nikki {
  width: 100%;
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
</style>
