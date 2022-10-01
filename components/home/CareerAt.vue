<template>
  <v-col
    col="12"
    class="ma-0 pa-0 cursor-pointer"
    @click="$router.push(`/${$i18n.locale === 'id' ? 'id/' : ''}career`)"
  >
    <div class="background-fill">
      <div class="our-company-container">
        <div class="life-at-img">
          <img
            :src="require('assets/images/History-nikki.png')"
            width="1920"
            height="500"
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
  width: 1916px;
  .our-company-container {
    width: 100vw;
    .life-at-img {
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
      .text-container {
        position: absolute;
        left: 50%;
        top: 7rem;
        font-family: 'Barlow', sans-serif;
        width: 20%;

        h1 {
          font-weight: 800;
          font-size: 2.5em;
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
  }
}
</style>
