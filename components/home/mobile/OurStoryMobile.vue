<template>
  <v-col cols="12" class="pa-0 ma-0">
    <div class="our-story-container-mobile">
      <div class="smelling-coffee">
        <img
          lazy
          :src="require('assets/images/smelling-coffee.png')"
          width="100%"
          height="275px"
          alt="coffee beans smelling"
          class=""
        />
      </div>

      <div class="wrapper">
        <div class="text-container">
          <h1>{{ $t('home.ourStory.title') }}</h1>
          <h3>
            {{ $t('home.ourStory.text') }}
          </h3>
        </div>
      </div>
    </div>
  </v-col>
</template>

<script>
export default {
  name: 'OurStoryMobile',
  components: {},
}
</script>

<style lang="scss" scoped>
.our-story-container-mobile {
  width: 100%;
  height: 100%;

  .smelling-coffee {
    width: 100vw;
    img {
      object-fit: cover;
    }
  }
  .wrapper {
    width: 100%;
    background: rgba(36, 39, 90, 0.85);
    padding: 2rem;

    .text-container {
      font-family: 'Barlow', sans-serif;

      h1 {
        font-weight: 800;
        font-size: 30px;
        letter-spacing: 0.05em;
        color: $color-secondary-root;
      }
      h3 {
        font-weight: 500;
        font-size: 16px;
        color: $color-font-light-root;
      }
    }
  }
}
</style>
