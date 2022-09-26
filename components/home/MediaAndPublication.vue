<template>
  <v-col col="11" class="my-15 d-flex justify-center">
    <div class="media-wrapper">
      <div class="media-header d-flex justify-space-between align-center">
        <h1 class="defaultGolden--text ml-8">{{ $t('home.media.title') }}</h1>
        <template v-if="$route.fullPath === '/' || $route.fullPath === '/id'">
          <v-btn
            rounded
            x-large
            class="defaultGolden fontDark--text font-weight-bold d-flex mr-15"
            :to="
              $i18n.locale === 'id'
                ? '/id/media-and-publication'
                : '/media-and-publication'
            "
          >
            {{ $t('home.media.btn') }}
          </v-btn>
        </template>
      </div>
      <div class="card-container d-flex flex-wrap justify-center align-center">
        <nuxt-link
          v-for="(card, i) in $route.fullPath === '/'
            ? mediaCardList.slice(0, 3)
            : mediaCardList.slice(0, 3)"
          :key="i"
          class="media-card ma-10"
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
              <h2 class="mb-3">{{ card.title }}</h2>
              <h3 class="">Read More ></h3>
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
.media-wrapper {
  width: 100rem;
  min-height: 540px;
  max-width: 100rem;
  .media-header {
    h1 {
      font-family: 'Barlow', sans-serif;
      font-size: 2.7em;
    }
  }
  .card-container{
    height: 100%;
  }
}
.media-card {
  transition: width 300ms, height 300ms;
  font-family: 'Barlow', sans-serif;
  font-weight: 500;
  aspect-ratio: 1 / 1;
  width: 22rem;
  height: 22rem;
  position: relative;
  .zoom-transition {
    transition: width 300ms, height 300ms;
    width: 23.25rem;
    height: 23.25rem;
    .media-text-wrapper {
      transition: ease-out 300ms;
      font-size: 90%;
      position: absolute;
      top: 13rem;
      right: 0;
      padding: 1rem;
    }
  }
}

.media-card:hover .zoom-transition {
  width: 24rem;
  height: 24rem;
  .media-text-wrapper {
    background-repeat: repeat;
    top: 13.5rem;
    font-size: 95%;
  }
}
</style>
