<template>
  <v-col col="12" class=" ma-0 pa-0">
    <div class="background-fill">
      <div class="our-company-container">
        <div class="life-at-img">
          <img
            :src="require('assets/images/History-nikki.png')"
            width="1920"
            height="550"
            alt="nikki history"
            class=""
          />
        </div>

        <div class="wrapper">
          <div class="text-container">
            <h1>{{ $t('home.lifeAt.title') }}</h1>
            <br />
            <h3>
              {{ $t('home.lifeAt.subTitle') }}
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
  //height: 804px;
  width: 1916px;
  .our-company-container {
    width: 100vw;
    .life-at-img {
      //height: 800px;
      width: 100%;
      img {
        object-fit: cover;
      }
    }
    .wrapper {
      position: absolute;
      top: 0;
      width: 100%;
      height: 550px;
      background: url('assets/images/our-story-transparent.svg') no-repeat
        no-repeat right top;
      //padding-bottom: 5rem;

      .text-container {
        position: absolute;
        left: 50%;
        top: 7rem;
        font-family: 'Barlow', sans-serif;
        width: 24rem;

        h1 {
          font-weight: 800;
          font-size: 3em;
          letter-spacing: 0.05em;
          color: $color-secondary-root;
        }
        h3 {
          font-weight: 500;
          font-size: 1.2em;
          color: $color-font-light-root;
        }
      }
    }
  }
}
</style>
