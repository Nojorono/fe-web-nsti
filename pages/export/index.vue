<template>
  <v-row justify="center" align="center" class="ma-0 pa-0">
    <h1 id="export-heritage" class="defaultGolden--text export-heading mt-10">
      {{ $t('home.export.title') }}
    </h1>
    <v-col cols="12" class="export-container ma-0 pa-0">
      <div class="card-content">
        <h1 class="defaultGray--text">{{ $t('home.export.heritage') }}</h1>
        <p class="defaultGray--text">
          {{ $t('home.export.subHeritage') }}
        </p>
      </div>
      <div class="triangle">
        <img
          :src="require('assets/images/left-trapesium.svg')"
          width="100%"
          height="100%"
        />
      </div>
      <div class="image-container ma-0 pa-0">
        <v-img
          :src="require('assets/images/export-tobacco.png')"
          max-height="100%"
          max-width="100%"
        />
      </div>
    </v-col>
    <v-col
      id="export-quality-tobacco"
      cols="12"
      class="export-container-2 ma-0 pa-0"
    >
      <div class="image-container-2 ma-0 pa-0">
        <v-img
          :src="require('assets/images/forklift.png')"
          max-height="100%"
          max-width="100%"
        />
      </div>
      <div class="triangle-2">
        <img
          :src="require('assets/images/right-trapesium.svg')"
          width="100%"
          height="100%"
          alt="divider"
        />
      </div>
      <div class="card-content-2">
        <h1 class="white--text"> {{ $t('home.export.global') }}</h1>
        <p class="white--text">
          {{ $t('home.export.subGlobal') }}
        </p>
      </div>
    </v-col>
    <v-col cols="12" class="mt-15 ma-0 pa-0">
      <div id="export-contact" class="contact-us-export defaultGolden--text">
        <div class="contact-us-title">
          <h1 class=""> {{ $t('home.export.contact.title') }}</h1>
          <p>{{ $t('home.export.contact.sub') }}</p>
        </div>
        <div class="contact-details">
          <div class="detail-child-phone">
            <h2>{{ $t('home.export.contact.phone') }}</h2>
            <p><a href="tel:+62291445035">{{ $t('home.export.contact.number') }}</a></p>
          </div>
          <div class="detail-child-email">
            <h2>{{ $t('home.export.contact.email') }}</h2>
            <p>
              <a href="mailto: info@nikkisuper.co.id">{{ $t('home.export.contact.emailLink') }}</a>
            </p>
          </div>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Export',
  head() {
    return {
      title: 'Export',
    }
  },
}
</script>

<style lang="scss" scoped>
.export-heading {
  font-weight: 800;
  font-size: 5.5em;
  line-height: 119px;
  letter-spacing: 0.1em;
  background-color: $color-primary-root;
  width: 100%;
  height: 100%;
  padding: 3rem 5rem;
  font-family: 'Barlow', sans-serif;
}
.export-container {
  font-family: 'Barlow', sans-serif;
  position: relative;
  display: flex;
  width: 100%;
  height: 826px;
  .card-content {
    position: absolute;
    left: 0;
    z-index: 3;
    width: 40%;
    height: 100%;
    padding: 9rem 5rem;
    h1 {
      font-weight: 800;
      font-size: 3.2em;
      line-height: 78px;
      letter-spacing: 0.05em;
    }
    p {
      font-weight: 500;
      font-size: 1.5em;
      line-height: 150%;
    }
  }
  .triangle {
    position: absolute;
    left: -5rem;
    z-index: 2;
  }
  .image-container {
    position: absolute;
    right: 0;
    z-index: 1;
  }
}

.export-container-2 {
  font-family: 'Barlow', sans-serif;
  position: relative;
  display: flex;
  width: 100%;
  height: 760px;
  .card-content-2 {
    position: absolute;
    right: 0;
    z-index: 3;
    width: 40%;
    height: 100%;
    padding: 10rem 8rem;
    h1 {
      font-weight: 800;
      font-size: 3.5em;
      line-height: 78px;
      letter-spacing: 0.05em;
    }
    p {
      font-weight: 500;
      font-size: 1.3em;
      line-height: 150%;
      letter-spacing: 0.05em;
    }
  }
  .triangle-2 {
    position: absolute;
    right: -5rem;
    z-index: 2;
  }
  .image-container-2 {
    position: absolute;
    left: 0rem;
    z-index: 1;
  }
}

.contact-us-export {
  width: 100%;
  background-color: $color-primary-root;
  padding: 6rem 13rem;
  display: flex;
  justify-content: space-between;
  font-family: 'Barlow', sans-serif;
  .contact-us-title {
    h1 {
      font-weight: 800;
      font-size: 4em;
      line-height: 96px;
      letter-spacing: 0.05em;
    }
    p {
      font-weight: 500;
      font-size: 1.5em;
      line-height: 39px;
    }
  }
  .contact-details {
    padding-right: 5rem;
    h2 {
      font-weight: 700;
      font-size: 1.8em;
      line-height: 39px;
    }
    a {
      font-weight: 500;
      font-size: 1.3em;
      line-height: 29px;
      text-decoration: none;
      color: $color-secondary-dark-root;
    }
  }
}
</style>
