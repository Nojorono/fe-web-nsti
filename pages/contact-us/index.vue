<template>
  <v-row
    justify="space-around"
    align="center"
    class="connext-with-us-container defaultGray--text"
  >
    <div class="container-contact">
      <div class="img-content">
        <v-img
          :src="require('assets/images/nikki-factory.png')"
          max-width="100%"
          height="1000px"
          alt="nikki super office"
        />
        <div class="right-content">
          <v-img
            :src="require('assets/images/right-triagle.svg')"
            max-width="100%"
            height="1000px"
          />
        </div>
        <div class="text-content">
          <div class="connect-title">
            <h1> </h1>
            <h1>{{$t('contact.title2')}}</h1>
          </div>
          <div
            class="sub-wrapper d-flex flex-column justify-space-between pa-0"
          >
            <div class="connect-sub-office">
              <h3>{{$t('contact.address')}}</h3>
              <h4>
                {{$t('contact.addressFull')}}
              </h4>
            </div>
            <div class="connect-sub-factory">
              <h2>{{$t('contact.phone')}}</h2>
              <a href="tel:+62291445035">{{$t('contact.phoneFull')}}</a>
            </div>
            <div class="connect-sub-email">
              <h3>{{$t('contact.email')}}</h3>
              <a href="mailto: info@nikkisuper.co.id">{{$t('contact.emailFull')}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-row>
</template>

<script>
export default {
  name: 'DefaultLayout',
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
.container-contact {
  .img-content {
    position: relative;
    top: 0;
    width: 100%;
  }
  .right-content {
    position: absolute;
    top: 0;
    right: -45rem;
    width: 100%;
  }

  .text-content {
    position: absolute;
    top: 12rem;
    right: 0;
  }
}

.sub-wrapper {
  height: 100%;
  width: 50%;
}

.connect-title {
  letter-spacing: 0.1em;
  font-weight: 800;
  font-family: 'Barlow', sans-serif;
  font-size: 2.5em;
}

[class*='connect-sub'] {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  h3 {
    margin-bottom: 1rem;
    font-weight: 600;
    font-size: 1.7em;
  }
  h4,
  a {
    font-weight: 500;
    font-size: 1.3em;
    text-decoration: none;
    color: $color-primary-root !important;
  }
}
</style>
