<template>
  <v-col col="11" class="my-15 d-flex justify-center">
    <div class="media-wrapper">
      <div class="media-header d-flex justify-space-between align-center">
        <h1 class="defaultGolden--text">{{ $t('home.media.title') }}</h1>
        <template v-if="$route.fullPath === '/' || $route.fullPath === '/id'">
          <v-btn
            rounded
            x-large
            class="defaultGolden fontDark--text font-weight-bold d-flex mr-15"
            :to="$i18n.locale === 'id' ? '/id/media-and-publication' : '/en/media-and-publication'"
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

          :to="$i18n.locale === 'id' ? '/id/media-and-publication/detail/' + card.id : '/media-and-publication/detail/' + card.id"

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
          img: `${require(`assets/images/media.png`)}`,
          title: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit.',
          id: 1,
        },
        {
          img: `${require(`assets/images/media.png`)}`,
          title: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit.',
          id: 2,
        },
        {
          img: `${require(`assets/images/media.png`)}`,
          title: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit.',
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
  height: 540px;
  max-width: 100rem;
  .media-header {
    h1 {
      font-family: 'Barlow', sans-serif;
      font-size: 4.5em;
    }
  }
}
.media-card {
  transition: width 300ms, height 300ms;
  font-family: 'Barlow', sans-serif;
  font-weight: 500;
  aspect-ratio: 1 / 1;
  width: 24rem;
  height: 24rem;
  position: relative;
  .zoom-transition {
    transition: width 300ms, height 300ms;
    width: 23.75rem;
    height: 23.75rem;
    .media-text-wrapper {
      transition: ease-out 300ms;
      font-size: 100%;
      position: absolute;
      top: 13rem;
      right: 0;
      padding: 1rem;
    }
  }
}

.media-card:hover .zoom-transition {
  width: 25.5rem;
  height: 25.5rem;
  .media-text-wrapper {
    background-repeat: repeat;
    top: 14.5rem;
    font-size: 111%;
  }
}
</style>
