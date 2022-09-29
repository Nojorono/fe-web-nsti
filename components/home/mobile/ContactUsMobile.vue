<template>
  <v-col cols="12" class="ma-0 pa-0 justify-center">
    <div class="contact-container-mobile defaultGolden--text">
      <div class="connect-with-us">
        <h1 class="mb-5">{{ $t('home.contact.title') }}</h1>
        <div class="d-flex justify-space-around">
          <div class="detail-container">
            <div class="detail-child-adress">
              <h2>{{ $t('home.contact.alamat') }}</h2>
              <p>
                {{ $t('home.contact.alamatLengkap') }}
              </p>
            </div>
            <div class="detail-child-phone">
              <h2>{{ $t('home.contact.no') }}</h2>
              <p>
                <a href="tel:+62291445035">{{ $t('home.contact.noDigit') }}</a>
              </p>
            </div>
            <div class="detail-child-email">
              <h2>{{ $t('home.contact.email') }}</h2>
              <p>
                <a href="mailto: info@nikkisuper.co.id">{{
                  $t('home.contact.emailLengkap')
                }}</a>
              </p>
            </div>
          </div>
          <div class="google-qr">
            <v-img
              :src="require('assets/images/google-qr.svg')"
              width="175"
              height="175"
              alt="google qr code"
            />
          </div>
        </div>
      </div>
    </div>
  </v-col>
</template>

<script>
export default {
  name: 'ContactUsMobile',
  components: {},
}
</script>

<style lang="scss" scoped>
.contact-container-mobile {
  font-family: 'Barlow', sans-serif;
  background: $color-primary-root;
  width: 100%;
  padding: 2rem;
  //display: flex;
  //justify-content: space-between;
  //padding: 5rem 10rem;
  .connect-with-us {
    //display: flex;

    h1 {
      font-weight: 800;
      font-size: 30px;
      letter-spacing: 0.05em;
    }

    .detail-container {
      //display: flex;
      //justify-content: space-between;
      //align-items: flex-start;
      //width: 55rem;
    }
    [class*='detail-child'] {
      //width: 15rem;
      h2 {
        font-size: 16px;
      }
      P {
        font-weight: 400;
        font-size: 12px;
      }
      a {
        text-decoration: none;
        color: $color-secondary-dark-root;
      }
    }
  }
}
</style>
