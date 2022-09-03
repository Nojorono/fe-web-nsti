<template>
  <v-row justify="center" align="center" class="career-container">
    <v-col cols="12" class="ma-0 pa-0 carousel-container">
      <v-carousel
        cycle
        :show-arrows="false"
        hide-delimiters
        interval="5000"
        height="760px"
        class="carousel-responsive"
      >
        <v-carousel-item v-for="(img, i) in image" :key="i">
          <v-sheet color="defaultGray" height="100%" tile>
            <v-row class="fill-height" align="center" justify="center">
              <v-img :src="img.img" max-height="100%" max-width="100%" />
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
      <div class="text-overlay defaultGolden--text">
        <div class="overlay-title">
          <h1>LIFE AT NIKKI SUPER</h1>
        </div>
        <p class="overlay-subtext">
          We value every candidate who proactively demonstrates their ability
          and confidence to enroll in our company. The contribution of each
          employee is calculated as an asset that contributes to the development
          and progress of the company. It's time to start the journey to achieve
          a successful life and career.
        </p>
      </div>
    </v-col>

    <v-col cols="12" class="job-opportunities px-10">
      <div
        class="d-flex justify-center defaultGolden--text my-5 job-opportunities-title"
      >
        <h1>JOB OPPORTUNITIES</h1>
      </div>
      <div class="joblist d-flex flex-wrap">
        <div
          v-for="(job, i) in jobList"
          :key="i"
          class="joblist-card ma-5 px-10 py-5"
        >
          <div class="joblist-text">
            <h2>
              {{ job.title }}
            </h2>
            <div class="joblist-sub my-3">
              <h3>location : {{ job.location }}</h3>
            </div>
          </div>
          <v-btn
            rounded
            x-large
            class="defaultGolden fontDark--text font-weight-bold d-flex"
            :href="job.link"
            target="_blank"
          >
            APPLY
          </v-btn>
        </div>
      </div>
    </v-col>
    <v-col cols="12" class="pa-10 review-container">
      <div class="learn-title defaultGolden--text d-flex justify-center mb-10">
        <h1>LEARN AND GROW WITH US</h1>
      </div>
      <vueper-slides
        class="no-shadow"
        :visible-slides="3.5"
        slide-multiple
        :gap="3"
        :bullets="false"
        :arrows="false"
        :slide-ratio="1 / 3"
        :dragging-distance="200"
        :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }"
      >
        <vueper-slide v-for="(review, i) in reviewsList" :key="i">
          <template #content>
            <div class="review-card px-10 py-15 text-center overflow-auto">
              <div
                class="d-flex flex-column align-center justify-space-between"
              >
                <p class="mb-5">{{ review.review }}</p>
                <img
                  :src="review.profileImg"
                  alt="review profile picture"
                  width="20%"
                  height="auto"
                />
                <p class="mt-10">{{ review.position }}</p>
              </div>
            </div>
          </template>
        </vueper-slide>
      </vueper-slides>
    </v-col>
  </v-row>
</template>

<script>
import { VueperSlide, VueperSlides } from 'vueperslides'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'CareerWithUs',
  components: { VueperSlides, VueperSlide },
  data() {
    return {
      reviewsList: [
        {
          review:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque commodi deleniti earum eius illum in ipsam quasi, ratione veritatis?',
          profileImg: require('assets/images/reviewImg.png'),
          position: 'Analyst Risk & Controls',
        },
        {
          review:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque commodi deleniti earum eius illum in ipsam quasi, ratione veritatis?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque commodi deleniti earum eius illum in ipsam quasi, ratione veritatis?',
          profileImg: require('assets/images/reviewImg.png'),
          position: 'Analyst Risk & Controls',
        },
        {
          review:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque commodi deleniti earum eius illum in ipsam quasi, ratione veritatis?',
          profileImg: require('assets/images/reviewImg.png'),
          position: 'Analyst Risk & Controls',
        },
        {
          review:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque commodi deleniti earum eius illum in ipsam quasi, ratione veritatis?',
          profileImg: require('assets/images/reviewImg.png'),
          position: 'Analyst Risk & Controls',
        },
        {
          review:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque commodi deleniti earum eius illum in ipsam quasi, ratione veritatis?',
          profileImg: require('assets/images/reviewImg.png'),
          position: 'Analyst Risk & Controls',
        },
        {
          review:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque commodi deleniti earum eius illum in ipsam quasi, ratione veritatis?',
          profileImg: require('assets/images/reviewImg.png'),
          position: 'Analyst Risk & Controls',
        },
        {
          review:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque commodi deleniti earum eius illum in ipsam quasi, ratione veritatis?',
          profileImg: require('assets/images/reviewImg.png'),
          position: 'Analyst Risk & Controls',
        },
      ],
      image: [
        {
          img: require('assets/images/man-in-factory.png'),
        },
        {
          img: require('assets/images/career-factory.png'),
        },
        {
          img: require('assets/images/career-making-cigar.png'),
        },
      ],
      jobList: [
        {
          title: 'Manager IT Solution Architect',
          level: 'Fresh Graduate',
          location: 'Jakarta, Indonesia',
          link: 'https://www.linkedin.com',
        },
        {
          title: 'Manager IT Solution Architect',
          level: 'Fresh Graduate',
          location: 'Jakarta, Indonesia',
          link: 'https://www.linkedin.com',
        },
        {
          title: 'Manager IT Solution Architect',
          level: 'Fresh Graduate',
          location: 'Jakarta, Indonesia',
          link: 'https://www.linkedin.com',
        },
        {
          title: 'Manager IT Solution Architect',
          level: 'Fresh Graduate',
          location: 'Jakarta, Indonesia',
          link: 'https://www.linkedin.com',
        },
        {
          title: 'Manager IT Solution Architect',
          level: 'Fresh Graduate',
          location: 'Jakarta, Indonesia',
          link: 'https://www.linkedin.com',
        },
        {
          title: 'Manager IT Solution Architect',
          level: 'Fresh Graduate',
          location: ' Jakarta, Indonesia',
          link: 'https://www.linkedin.com',
        },
      ],
    }
  },
  head() {
    return {
      title: 'Career With Us',
    }
  },

  computed: {
    ...mapGetters(['getAllCareer']),
  },
  mounted() {
    this.fetchAllCareer()
  },
  methods: {
    ...mapActions(['fetchAllCareer']),
  },
}
</script>

<style lang="scss" scoped>
.career-container {
  font-family: 'Barlow', sans-serif;
}
.carousel-responsive {
  //height: 45rem !important;
}

.carousel-container {
  position: relative;
}
.text-overlay {
  position: absolute;
  padding: 1rem 10rem;
  font-family: 'Barlow', sans-serif;
  letter-spacing: 0.1em;
  z-index: 1;
  bottom: 10%;
  left: 0;

  .overlay-title {
    h1 {
      font-weight: 800;
      font-size: 4.5em;
    }
  }
  .overlay-subtext {
    font-weight: 500;
    line-height: 39px;
    padding-right: 30rem;
    font-size: 2em;
  }
}

.job-opportunities {
  font-family: 'Barlow', sans-serif;
  .job-opportunities-title {
    font-weight: 800;
    font-size: 2.5em;
  }
  .joblist {
    .joblist-card {
      width: 505px;
      background: $color-primary-root;
      border-radius: 10px;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      .joblist-text {
        h2 {
          font-weight: 500;
        }
        .joblist-sub {
          h3 {
            font-weight: 400;
          }
        }
      }
    }
  }
}
.review-container {
  background: $color-primary-root;
  .learn-title {
    h1 {
      font-size: 4em;
      font-family: 'Barlow', sans-serif;
      font-weight: 800;
    }
  }
  .review-card {
    background: #29306e;
    border-radius: 10px;
    height: 100%;
  }
}
</style>
