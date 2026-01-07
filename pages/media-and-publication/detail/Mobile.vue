<template>
  <div class="detail-media-parent-wrapper-mobile">
    <div class="defaultGolden--text">
      <div class="news-date mt-3">
        <h3 v-if="getDetailMedia">
          {{ getDetailMedia.location || '' }},
          {{ findDate(getDetailMedia.createdAt) }}
        </h3>
      </div>

      <div class="news-title my-5">
        <h1>{{ getDetailMedia?.title || '' }}</h1>
      </div>
    </div>

    <div v-if="getDetailMedia" class="news-content">
      <div class="image-content">
        <img
          :src="$imageUrl(getDetailMedia?.imageName || '')"
          width="100%"
        />
      </div>

      <!-- eslint-disable vue/no-v-html -->
      <div
        class="text-content defaultGray--text"
        v-html="getDetailMedia?.description || ''"
      ></div>
      <!-- eslint-enable vue/no-v-html -->
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'DetailMediaMobile',
  components: {},
  data() {
    return {}
  },
  head() {
    return {
      title: 'news',
    }
  },
  computed: {
    ...mapGetters('home', ['getDetailMedia']),
  },
  mounted() {
    this.fetchMediaDetail(this.$route.params.id)
  },
  methods: {
    ...mapActions('home', ['fetchMediaDetail']),
  },
}
</script>

<style lang="scss" scoped>
.detail-media-parent-wrapper-mobile {
  padding: 1rem 1.5rem 0 1.5rem;
  font-family: 'Barlow', sans-serif;
  letter-spacing: 0.05em;
  .news-date {
    font-family: Barlow, sans-serif;
    font-size: 10px;
  }
  .news-title {
    font-family: Barlow, sans-serif;
    font-weight: 700;
    font-size: 14px;
  }
  .news-content {
    border-radius: 50px 50px 0 0;
    background-color: #f8f5ec;
    .image-content {
      img {
        border-radius: 50px 50px 0 0;
        object-fit: cover;
      }
    }
    .text-content {
      padding: 1rem 2rem;
    }
  }
}
</style>
