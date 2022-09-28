<template>
  <v-col col="11" class="my-15 d-flex justify-center">
    <div class="media-wrapper-mobile">
      <div class="media-header d-flex justify-space-between align-center">
        <h1 class="defaultGolden--text">{{ $t('home.media.title') }}</h1>
        <!--        <template v-if="$route.fullPath === '/' || $route.fullPath === '/id'">-->
        <!--          <v-btn-->
        <!--            rounded-->
        <!--            x-large-->
        <!--            class="defaultGolden fontDark&#45;&#45;text font-weight-bold d-flex mr-15"-->
        <!--            :to="-->
        <!--              $i18n.locale === 'id'-->
        <!--                ? '/id/media-and-publication'-->
        <!--                : '/media-and-publication'-->
        <!--            "-->
        <!--          >-->
        <!--            {{ $t('home.media.btn') }}-->
        <!--          </v-btn>-->
        <!--        </template>-->
      </div>

      <div class="card-container d-flex flex-wrap justify-center align-center">
        <nuxt-link
          v-for="(card, i) in $route.fullPath === '/'
            ? mediaCardList.slice(0, 3)
            : mediaCardList.slice(0, 3)"
          :key="i"
          class="media-card ma-5"
          :to="
            $i18n.locale === 'id'
              ? '/id/media-and-publication/detail/' + card.id
              : '/media-and-publication/detail/' + card.id
          "
        >
          <div class="zoom-transition defaultGolden--text cursor-pointer">
            <v-img
              :src="card.img"
              width="100%"
              height="100%"
              content-class="media-card-linear-gradient"
            />
            <div class="media-text-wrapper">
              <h5 class="mb-3">{{ card.title }}</h5>
              <h6 class="">Read More ></h6>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </v-col>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'MediaAndPublication',
  components: {},
  data() {
    return {
      mediaCardList: [
        {
          img: `${require(`assets/images/media-dummy-1.png`)}`,
          title:
            'J-Live Hadirkan Podcast Live Perdana, Gandeng GJLS Entertainment.',
          id: 1,
        },
        {
          img: `${require(`assets/images/media-dummy-2.png`)}`,
          title:
            'Satu Rasa, Satu Tujuan dalam Menyambut Festival Pacu Jalur 2022.',
          id: 2,
        },
        {
          img: `${require(`assets/images/media-dummy-3.png`)}`,
          title: 'J-LIVE Sukses Meriahkan D13 Hard Festival 2022 di Bandung.',
          id: 3,
        },
        {
          img: `${require(`assets/images/media.png`)}`,
          title: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit.',
          id: 4,
        },
        {
          img: `${require(`assets/images/media.png`)}`,
          title: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit.',
          id: 5,
        },
        {
          img: `${require(`assets/images/media.png`)}`,
          title: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit.',
          id: 6,
        },
        {
          img: `${require(`assets/images/media.png`)}`,
          title: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit.',
          id: 6,
        },
        {
          img: `${require(`assets/images/media.png`)}`,
          title: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit.',
          id: 6,
        },
        {
          img: `${require(`assets/images/media.png`)}`,
          title: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit.',
          id: 6,
        },
        {
          img: `${require(`assets/images/media.png`)}`,
          title: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit.',
          id: 6,
        },
      ],
    }
  },
  computed: {
    ...mapGetters(['getMediaList']),
  },
  mounted() {
    this.getAllMedia().then((_) => {})
  },
  methods: {
    ...mapActions(['getAllMedia']),
  },
}
</script>

<style lang="scss" scoped>
.media-wrapper-mobile {
  width: 100%;
  .media-header {
    h1 {
      font-family: 'Barlow', sans-serif;
      font-size: 30px;
      padding: 1rem 4rem 2rem 2rem;
    }
  }
}
.media-card {
  transition: width 300ms, height 300ms;
  font-family: 'Barlow', sans-serif;
  font-weight: 500;
  aspect-ratio: 1 / 1;
  width: 250px;
  //height: 210px;
  position: relative;
  .zoom-transition {
    //transition: width 300ms, height 300ms;
    width: 250px;
    //height: 210px;
    .media-text-wrapper {
      //transition: ease-out 300ms;
      font-size: 100%;
      position: absolute;
      top: 6rem;
      right: 0;
      padding: 1rem;
    }
  }
}

//.media-card:hover .zoom-transition {
//  width: 25.5rem;
//  height: 25.5rem;
//  .media-text-wrapper {
//    background-repeat: repeat;
//    top: 14.5rem;
//    font-size: 111%;
//  }
//}
</style>
