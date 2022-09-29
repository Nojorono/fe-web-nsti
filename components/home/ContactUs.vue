<template>
  <v-col cols="12" class="ma-0 pa-0 d-flex justify-center">
    <div class="contact-container defaultGolden--text">
      <div class="connect-with-us">
        <h1 class="mb-10">{{ $t('home.contact.title') }}</h1>
        <div class="detail-container">
          <div class="detail-child-adress">
            <h3>{{ $t('home.contact.alamat') }}</h3>
            <p>
              {{ $t('home.contact.alamatLengkap') }}
            </p>
          </div>
          <div class="detail-child-phone">
            <h3>{{ $t('home.contact.no') }}</h3>
            <p>
              <a href="tel:+62291445035">{{ $t('home.contact.noDigit') }}</a>
            </p>
          </div>
          <div class="detail-child-email">
            <h3>{{ $t('home.contact.email') }}</h3>
            <p>
              <a href="mailto: info@nikkisuper.co.id">{{
                $t('home.contact.emailLengkap')
              }}</a>
            </p>
          </div>
        </div>
      </div>
      <div class="google-qr">
        <v-img
          :src="require('assets/images/google-qr.svg')"
          max-width="80%"
          max-height="100%"
          alt="google qr code"
        />
      </div>
    </div>
  </v-col>
</template>

<script>
export default {
  name: 'ContactUs',
  components: {},
}
</script>

<style lang="scss" scoped>
.contact-container {
  font-family: 'Barlow', sans-serif;
  background: $color-primary-root;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 5% 10%;
  .connect-with-us {
    h1 {
      font-weight: 800;
      font-size: 2.5em;
      letter-spacing: 0.05em;
    }

    .detail-container {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 3%;
    }
    [class*='detail-child'] {
      width: 30%;
      P {
        font-weight: 400;
        font-size: 1.1em;
      }
      a {
        text-decoration: none;
        color: $color-secondary-dark-root;
      }
    }
  }
}
</style>
