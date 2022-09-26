<template>
  <v-row
    justify="space-around"
    align="center"
    class="defaultGray--text ma-0 pa-0"
  >
    <div class="container-contact-mobile">
      <div class="title d-flex defaultGolden--text py-5 justify-center">
        <h2>{{ $t('contact.title1') }} &nbsp;</h2>
        <h2>{{ $t('contact.title2') }}</h2>
      </div>

      <div class="img-content">
        <v-img
          :src="require('assets/images/nikki-factory.png')"
          width="100vw"
          alt="nikki super office"
        />
        <div class="text-content">
          <div class="sub-wrapper d-flex flex-column">
            <div class="connect-sub-office">
              <h3>{{ $t('contact.address') }}</h3>
              <h4>
                {{ $t('contact.addressFull') }}
              </h4>
            </div>
            <div class="connect-sub-factory">
              <h2>{{ $t('contact.phone') }}</h2>
              <a href="tel:+62291445035">{{ $t('contact.phoneFull') }}</a>
            </div>
            <div class="connect-sub-email">
              <h3>{{ $t('contact.email') }}</h3>
              <a href="mailto: info@nikkisuper.co.id">{{
                $t('contact.emailFull')
              }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-row>
</template>

<script>
export default {
  name: 'ConnectWithUsMobile',
  components: {},
  head() {
    return {
      title: 'Contact Us',
    }
  },
  mounted() {},
}
</script>

<style lang="scss">
.container-contact-mobile {
  .title {
    background: $color-primary-root;
    width: 100%;
    height: 100%;
    h1 {
      font-weight: 800;
      font-size: 30px;
    }
  }

  .text-content {
    background: $color-primary-root;
    height: 130%;
    width: 100%;
    padding: 2rem 0;
    .sub-wrapper {
      background: #ae983d;

      //height: 100%;
      //width: 100%;
      padding: 2rem;
    }
  }
  [class*='connect-sub'] {
    margin-top: 1rem;
    margin-bottom: 1rem;
    h3 {
      margin-bottom: 0.5rem;
      font-weight: 700;
      font-size: 23.3839px;
    }
    h4,
    a {
      font-weight: 500;
      font-size: 17.1892px;
      text-decoration: none;
      color: $color-primary-root !important;
    }
  }
}
</style>
