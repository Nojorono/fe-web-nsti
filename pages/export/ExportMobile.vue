<template>
  <v-row class="ma-0 pa-0">
    <h1 id="export-heritage" class="defaultGolden--text export-heading">
      {{ $t('export.title') }}
    </h1>
    <div class="image-container ma-0 pa-0">
      <img
        :src="require('assets/images/export-tobacco.png')"
        height="242"
        width="100%"
      />
    </div>
    <div class="text-container-one">
      <h1 class="defaultGray--text">{{ $t('export.heritage') }}</h1>
      <p class="defaultGray--text">
        {{ $t('export.subHeritage') }}
      </p>
    </div>
    <div class="image-container ma-0 pa-0">
      <img
        :src="require('assets/images/forklift.png')"
        height="242"
        width="100%"
      />
    </div>
    <div class="text-container-two">
      <h1 class="white--text">{{ $t('export.global') }}</h1>
      <p class="white--text">
        {{ $t('export.subGlobal') }}
      </p>
    </div>
    <div class="contact-us-export defaultGolden--text">
      <div class="contact-us-title">
        <h1 class="">{{ $t('export.contact.title') }}</h1>
        <p>{{ $t('export.contact.sub') }}</p>
      </div>
      <div class="contact-details">
        <div class="detail-child-phone">
          <h2>{{ $t('export.contact.phone') }}</h2>
          <p>
            <a href="tel:+62291445035">{{ $t('export.contact.number') }}</a>
          </p>
        </div>
        <div class="detail-child-email">
          <h2>{{ $t('export.contact.email') }}</h2>
          <p>
            <a href="mailto: info@nikkisuper.co.id">{{
              $t('export.contact.emailLink')
            }}</a>
          </p>
        </div>
      </div>
    </div>
  </v-row>
</template>

<script>
export default {
  name: 'ExportMobile',
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
  font-size: 2em;
  letter-spacing: 0.1em;
  background-color: $color-primary-root;
  width: 100vw;
  padding: 1rem 2rem;
  font-family: 'Barlow', sans-serif;
}
.image-container {
  img {
    object-fit: cover;
  }
}
[class*='text-container'] {
  font-family: 'Barlow', sans-serif;
  padding: 1rem 2rem;
  margin-top: -2%;

  h1 {
    font-weight: 800;
    letter-spacing: 0.05em;
  }
  p {
    font-weight: 500;
  }
}
.text-container-one {
  background: #ae983d;
}
.text-container-two {
  background: #29306e;
}

.contact-us-export {
  background: $color-primary-root;
  width: 100vw;
  padding: 1rem 2rem;
  a {
    text-decoration: none;
    color: $color-secondary-dark-root;
  }
}
</style>
