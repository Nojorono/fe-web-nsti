<template>
  <v-col col="12" class="my-15 mx-0 pa-0">
    <div class="background-fill">
      <div class="our-company-container">
        <v-img
          :src="require('assets/images/History-nikki.png')"
          max-width="100%"
          max-height="100%"
          alt="nikki history"
          class="smelling-coffee"
        />
        <div class="wrapper">
          <div class="text-container">
            <h1>LIFE AT OUR COMPANY</h1>
            <br />
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
              ducimus eius est et impedit ipsum officiis quas voluptatibus.
              Aspernatur autem eos facere id itaque officiis,
            </h3>
          </div>
        </div>
      </div>
    </div>
  </v-col>
</template>

<script>
export default {
  name: 'CareerAt',
  components: {},
}
</script>

<style lang="scss" scoped>
.background-fill {
  position: relative;
  height: 100%;
  width: 100%;
  .our-company-container {
    .wrapper {
      position: absolute;
      top: 0;
      right: -20rem;
      width: 100%;
      height: 100%;
      background: url('assets/images/our-story-transparent.svg') no-repeat
        no-repeat right top;
      padding-bottom: 5rem;

      .text-container {
        position: absolute;
        right: 30rem;
        top: 10rem;
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
  }
}
</style>
