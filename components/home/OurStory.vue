<template>
  <v-col cols="12" class="pa-0">
    <div class="our-story-container">
      <v-img
        :src="require('assets/images/smelling-coffee.png')"
        max-width="100%"
        max-height="900"
        alt="coffee beans smelling"
        class="smelling-coffee"
      />
      <div class="wrapper">
        <div class="text-container">
          <h1>OUR STORY</h1>
          <br />
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
            ducimus eius est et impedit ipsum officiis quas voluptatibus.
            Aspernatur autem eos facere id itaque officiis,
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
  width: 100%;
  height: 100%;

  .smelling-coffee {
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
      right: 25rem;
      top: 20rem;
      font-family: 'Barlow', sans-serif;
      width: 23.5rem;

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
