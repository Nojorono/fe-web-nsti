<template>
  <v-col col="12" class="ma-0 pa-0">
    <div class="background-fill-mobile">
      <div class="our-company-container">
        <div class="life-at-img">
          <img
            :src="require('assets/images/Historymobile.png')"
            width="100%"
            height="275px"
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
  name: 'CareerAtMobile',
  components: {},
}
</script>

<style lang="scss" scoped>
.background-fill-mobile {
  .our-company-container {
    .life-at-img {
      width: 100vw;

      img {
        object-fit: cover;
      }
    }
    .wrapper {
      background: $color-primary-root;
      width: 100%;
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
}
</style>
