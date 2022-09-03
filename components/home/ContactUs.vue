<template>
  <v-col cols="12" class="ma-0 pa-0 d-flex justify-center">
    <div class="contact-container defaultGolden--text">
      <div class="connect-with-us">
        <h1 class="mb-10">CONNECT WITH US</h1>
        <div class="detail-container">
          <div class="detail-child-adress">
            <h2>ADDRESS</h2>
            <p>
              Jl. Lingkar Utara KM 4 Bacin, Kec. Bae, Kudus Jawa Tengah 59325
            </p>
          </div>
          <div class="detail-child-phone">
            <h2>PHONE NUMBER</h2>
            <p><a href="tel:+62291445035">+62 291 445035</a></p>
          </div>
          <div class="detail-child-email">
            <h2>EMAIL</h2>
            <p>
              <a href="mailto: info@nikkisuper.co.id">info@nikkisuper.co.id</a>
            </p>
          </div>
        </div>
      </div>
      <div class="google-qr">
        <v-img
          :src="require('assets/images/google-qr.svg')"
          max-width="100%"
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
  padding: 5rem 10rem;
  .connect-with-us {
    h1 {
      font-weight: 800;
      font-size: 3.5em;
      letter-spacing: 0.05em;
    }

    .detail-container {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      width: 55rem;
    }
    [class*='detail-child'] {
      width: 15rem;
      P {
        font-weight: 400;
        font-size: 1.2em;
      }
      a {
        text-decoration: none;
        color: $color-secondary-dark-root;
      }
    }
  }
}
</style>
