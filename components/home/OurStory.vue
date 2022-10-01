<template>
  <v-col
    cols="12"
    class="pa-0 ma-0 cursor-pointer"
    @click="$router.push(`/${$i18n.locale === 'id' ? 'id/' : ''}about-us`)"
  >
    <div class="our-story-container">
      <div class="smelling-coffee">
        <img
          lazy
          :src="require('assets/images/smelling-coffee.png')"
          width="110%"
          height="500"
          alt="coffee beans smelling"
          class=""
        />
      </div>

      <div class="wrapper">
        <div class="text-container">
          <h1>{{ $t('home.ourStory.title') }}</h1>
          <br />
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
  name: 'OurStory',
  components: {},
}
</script>

<style lang="scss" scoped>
.our-story-container {
  position: relative;
  margin-top: -12px;
  width: 100%;
  height: 100%;

  .smelling-coffee {
    //height: 900px;
    width: 100%;
    img {
      object-fit: cover;
    }
  }
  .wrapper {
    position: absolute;
    top: 0;
    width: 100%;
    height: 500px;
    background: url('assets/images/our-story-transparent.svg') no-repeat
      no-repeat right top;
    padding-bottom: 5rem;
    right: -15rem;
    //left: 10%;

    .text-container {
      position: absolute;
      right: 26rem;
      top: 6rem;
      font-family: 'Barlow', sans-serif;
      width: 25rem;

      h1 {
        font-weight: 800;
        font-size: 2.2em;
        letter-spacing: 0.05em;
        color: $color-secondary-root;
      }
      h3 {
        font-weight: 500;
        font-size: 1.1em;
        color: $color-font-light-root;
      }
    }
  }

  @include mobile {
    .text-container {
      font-family: 'Barlow', sans-serif;
      color: $color-secondary-root;
      width: 15rem;

      h1 {
        font-weight: 800;
        font-size: 2em;
      }
      h3 {
        font-weight: 500;
        font-size: 1em;
      }
    }
  }
}
</style>
