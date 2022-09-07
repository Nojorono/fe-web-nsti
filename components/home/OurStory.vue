<template>
  <v-col cols="12" class="pa-0 ma-0">
    <div class="our-story-container">
      <div class='smelling-coffee'>
        <img
          lazy
          :src="require('assets/images/smelling-coffee.png')"
          width="120%"
          height="100%"
          alt="coffee beans smelling"
          class=""
        />
      </div>

      <div class="wrapper">
        <div class="text-container">
          <h1>OUR STORY</h1>
          <br />
          <h3>
            PT Nikki Super Tobacco Indonesia was established on November 11,
            1990 and is a cigarette manufacturer from Kudus, known as the city
            of kretek. PT Nikki Super Tobacco Indonesia is one of the leading
            cigarette manufacturers in Central Java with a national market
            reach.
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
    height: 900px;
    width: 100%;
    img{
      object-fit: cover;
    }
  }
  .wrapper {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: url('assets/images/our-story-transparent.svg') no-repeat
      no-repeat right top;
    padding-bottom: 5rem;

    .text-container {
      position: absolute;
      right: 21rem;
      top: 18rem;
      font-family: 'Barlow', sans-serif;
      width: 30rem;

      h1 {
        font-weight: 800;
        font-size: 3.8em;
        letter-spacing: 0.05em;
        color: $color-secondary-root;
      }
      h3 {
        font-weight: 500;
        font-size: 1.7em;
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
