<template>
  <v-row
    v-if="!isMobileCheck()"
    justify="space-around"
    align="center"
    class="defaultGray--text"
  >
    <div class="container-contact">
      <div class="img-content">
        <v-img
          :src="require('assets/images/nikki-factory.png')"
          max-width="100%"
          height="600"
          alt="nikki super office"
        />
        <div class="right-content">
          <v-img
            :src="require('assets/images/right-triagle.svg')"
            max-width="100%"
            height="600"
          />
        </div>
        <div class="text-content">
          <div class="connect-title">
            <h1>{{ $t('contact.title1') }}</h1>
            <h1>{{ $t('contact.title2') }}</h1>
          </div>
          <br />
          <div
            class="sub-wrapper d-flex flex-column justify-space-between pa-0"
          >
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
  <connect-with-us-mobile v-else />
</template>

<script>
import ConnectWithUsMobile from '@/pages/contact-us/ConnectMobile'
export default {
  name: 'ConnectWithUs',
  components: { ConnectWithUsMobile },
  head() {
    return {
      title: 'Contact Us',
    }
  },
  mounted() {},
}
</script>

<style lang="scss">
.container-contact {
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
  .img-content {
    position: relative;
    top: 0;
    width: 100%;
  }
  .right-content {
    position: absolute;
    top: 0;
    right: -35rem;
    width: 100%;
  }

  .text-content {
    position: absolute;
    top: 3.5rem;
    right: 15rem;
    .sub-wrapper {
      height: 100%;
      width: 50%;
    }
    .connect-title {
      letter-spacing: 0.1em;
      font-weight: 800;
      font-family: 'Barlow', sans-serif;
      font-size: 1.7em;
      h1 {
        margin-bottom: -5%;
      }
    }
  }
  [class*='connect-sub'] {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    h3 {
      //margin-bottom: 1rem;
      font-weight: 600;
      font-size: 1.2em;
    }
    h4,
    a {
      font-weight: 500;
      font-size: 1em;
      text-decoration: none;
      color: $color-primary-root !important;
    }
  }
}
</style>
