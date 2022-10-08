<template>
  <v-row
    v-if="!isMobileCheck()"
    justify="center"
    align="center"
    class="career-container"
  >
    <v-col id="career-life-at" cols="12" class="ma-0 pa-0 carousel-container">
      <v-carousel
        cycle
        :show-arrows="false"
        hide-delimiters
        interval="5000"
        height="650px"
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
          <h1>{{ $t('career.title') }}</h1>
        </div>
        <p class="overlay-subtext">
          {{ $t('career.subTitle') }}
        </p>
      </div>
    </v-col>

    <v-col id="career-opportunities" cols="12" class="job-opportunities px-10">
      <div
        class="d-flex justify-center defaultGolden--text my-5 job-opportunities-title"
      >
        <h1>{{ $t('career.opportunities') }}</h1>
      </div>
      <div class="joblist d-flex flex-wrap justify-center">
        <div
          v-for="(job, i) in getAllCareer?.data"
          :key="i"
          class="joblist-card my-5 px-10 py-5"
        >
          <div class="joblist-text">
            <h2>
              {{ job.title }}
            </h2>
            <div class="joblist-sub my-3">
              <h3>{{ $t('career.location') }} : {{ job.location }}</h3>
            </div>
          </div>
          <v-btn
            rounded
            x-large
            class="defaultGolden fontDark--text font-weight-bold d-flex"
            block
            @click="onClickApply(job.description)"
          >
            {{ $t('career.apply') }}
          </v-btn>
        </div>
      </div>
      <div class="pagination">
        <img
          src="~/assets/images/paginate-left.svg"
          alt="button previous pagination"
          class="cursor-pointer"
        />
        <div
          v-for="i in getAllCareer?.pagesLeft"
          :key="i"
          :class="
            +$route.query.page + 1 === i
              ? 'number cursor-pointer num-active'
              : 'number cursor-pointer'
          "
          @click="changePage(i)"
        >
          {{ i }}
        </div>
        <img
          class="cursor-pointer"
          src="~/assets/images/paginate-right.svg"
          alt="button next pagination"
        />
      </div>
    </v-col>
    <v-col id="career-learn-grow" cols="12" class="pa-10 review-container">
      <div class="learn-title defaultGolden--text d-flex justify-center mb-10">
        <h1>{{ $t('career.learnNgrow') }}</h1>
      </div>
      <vueper-slides
        v-if="getAllTestimoni.length"
        class="no-shadow"
        :visible-slides="3"
        :gap="3"
        :bullets="false"
        :arrows="false"
        :slide-ratio="1 / 3"
        :dragging-distance="70"
        :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }"
      >
        <vueper-slide v-for="(review, i) in getAllTestimoni" :key="i">
          <template #content>
            <div class="review-card px-10 py-10 text-center">
              <div
                class="review-card-innner d-flex flex-column align-center justify-space-between"
              >
                <p class="mb-5 review-text">{{ review.description }}</p>
                <div class="review-bottom-container">
                  <img
                    :src="
                      'https://back-api.nikkisuper.my.id/' + review.imageName
                    "
                    alt="review profile picture"
                    width="140px"
                    height="140px"
                  />
                  <p class="review-name">{{ review.name }}</p>
                  <p class="review-position">{{ review.title }}</p>
                </div>
              </div>
            </div>
          </template>
        </vueper-slide>
      </vueper-slides>
      <div></div>
    </v-col>
    <!--    dialog-->
    <v-row justify="center">
      <v-dialog v-model="dialog" width="800px" light>
        <div class="modal-card">
          <div class="d-flex justify-end">
            <v-icon dark @click="dialog = false"> mdi-window-close </v-icon>
          </div>
          <div class="content" v-html="content"></div>
          <div>
            <v-btn
              rounded
              class="defaultGray defaultGolden--text font-weight-bold d-flex"
              href="mailto: karir@nikkisuper.co.id"
            >
              {{ $t('career.apply') }}
            </v-btn>
          </div>
        </div>
      </v-dialog>
    </v-row>
  </v-row>
  <career-with-us-mobile v-else />
</template>

<script>
import { VueperSlide, VueperSlides } from 'vueperslides'
import { mapActions, mapGetters } from 'vuex'
import CareerWithUsMobile from '@/pages/career/CareerMobile'

export default {
  name: 'CareerWithUs',
  components: { CareerWithUsMobile, VueperSlides, VueperSlide },
  data() {
    return {
      content: '',
      dialog: false,
      pages: 1,
      page: 0,
      size: 6,
      reviewsList: [
        {
          review: this.$t('career.reviewer1.comment'),
          profileImg: require('assets/images/review-pp-2.png'),
          name: 'Sri Pujiatmi',
          position: this.$t('career.reviewer1.position'),
        },
        {
          review: this.$t('career.reviewer2.comment'),
          profileImg: require('assets/images/review-pp-1.png'),
          name: 'Hesti Triyanto',
          position: this.$t('career.reviewer2.position'),
        },
        {
          review: this.$t('career.reviewer3.comment'),
          profileImg: require('assets/images/review-pp-3.png'),
          name: 'Pungky Nugroho',
          position: this.$t('career.reviewer3.position'),
        },
      ],
      image: [
        {
          img: require('assets/images/man-in-factory.png'),
        },
        {
          img: require('assets/images/career-3.png'),
        },
        {
          img: require('assets/images/career-2.png'),
        },
      ],
    }
  },
  head() {
    return {
      title: 'Career With Us',
    }
  },
  watch: {
    '$route.query'() {
      this.fetchAllCareer({
        page: this.$route.query.page,
        size: this.size,
      })
    },
  },
  computed: {
    ...mapGetters(['getAllCareer', 'getAllTestimoni']),
  },
  mounted() {
    // this.fetchAllCareer({
    //   page: this.page,
    //   size: this.size,
    // })
    if (!this.$route.query.page) {
      this.$router.replace({
        path: this.$route.path,
        query: { page: +this.$route.query.page || 0 },
      })
    } else {
      this.fetchAllCareer({
        page: this.$route.query.page,
        size: this.size,
      })
    }
    this.fetchAllTestimoni()
  },
  methods: {
    ...mapActions(['fetchAllCareer', 'fetchAllTestimoni']),
    onClickApply(html) {
      this.dialog = true
      this.content = html
    },
    prev() {
      const page = +this.$route.query.page - 1
      if (page >= 0) {
        this.$router.replace({
          path: this.$route.path,
          query: { page },
        })
      }
    },
    next() {
      const page = +this.$route.query.page + 1
      if (page < this.fetchAllCareer.pagesleft) {
        this.$router.replace({
          path: this.$route.path,
          query: { page },
        })
      }
    },
    changePage(page) {
      this.$router.replace({
        path: this.$route.path,
        query: { page: page - 1 },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.career-container {
  font-family: 'Barlow', sans-serif;
  .carousel-container {
    position: relative;
  }
  .text-overlay {
    position: absolute;
    padding: 0 7rem;
    font-family: 'Barlow', sans-serif;
    letter-spacing: 0.1em;
    z-index: 1;
    bottom: 10%;
    left: 0;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);

    .overlay-title {
      h1 {
        font-weight: 800;
        font-size: 2.5em;
      }
    }
    .overlay-subtext {
      font-weight: 500;
      padding-right: 30rem;
      font-size: 1.1em;
    }
  }
  .job-opportunities {
    font-family: 'Barlow', sans-serif;
    .job-opportunities-title {
      font-weight: 800;
      font-size: 1.4em;
    }
    .joblist {
      gap: 3%;

      .joblist-card {
        width: 390px;
        background: rgba(41, 48, 110, 0.5);
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
    .pagination {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 3rem;

      .number {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2.04082px solid $color-secondary-root;
        border-radius: 6px;
        width: 55px;
        height: 55px;
        margin: 0 0.5rem;
        color: $color-secondary-root;
      }
      .num-active {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2.04082px solid $color-secondary-root;
        background: $color-secondary-dark-root;
        border-radius: 6px;
        width: 55px;
        height: 55px;
        margin: 0 0.5rem;
        color: $color-primary-root;
      }

      img {
        margin: 0 0.5rem;
        width: 55px;
      }
    }
  }
  .review-container {
    background: rgba(41, 48, 110, 0.5);
    .learn-title {
      h1 {
        font-size: 2.5em;
        font-family: 'Barlow', sans-serif;
        font-weight: 800;
      }
    }
    .review-card {
      background: rgba(41, 48, 110, 0.5);
      border-radius: 10px;
      font-family: 'Barlow', sans-serif;
      height: 31rem;
      .review-card-innner {
        height: 100%;
        .review-text {
          font-weight: 500;
          font-size: 1em;
          overflow-y: auto;
        }
        .review-bottom-container {
          padding-bottom: 1rem;
          .review-name {
            font-weight: 700;
            font-size: 20px;
          }
          .review-position {
            font-weight: 400;
            font-size: 14px;
          }
        }
        img {
          border-radius: 100%;
          object-fit: cover;
        }
      }
    }
  }
}
.modal-card {
  padding: 1rem;
  min-height: 90vh;
  background: $color-news-gray-root;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .content {
    min-width: 90%;
    padding: 3rem;
    color: $color-primary-root;
  }
}
</style>
