<template>
  <div>
    <template v-if="!isMobile()">
      <div v-if="$i18n.locale === 'id'" class="nav-bar-top">
        <div class="nav-img-container">
          <v-img
            :src="require('assets/images/logo-light.svg')"
            alt="logo niki super"
            class="cursor-pointer"
            height="50"
            width="310"
            @click="$router.push('/id')"
          />
        </div>
        <div class="nav-list">
          <nuxt-link
            class="dropdown-menu nav-child text-decoration-none"
            :to="'/id/about-us'"
          >
            {{ $t('navbar.about.title') }}
            <div class="dropdown-menu-hover-content">
              <ul class="nobull about-us-ul">
            <span @click="funcScrollTo('#about-us-overview', '/id/about-us')">{{
                $t('navbar.about.overview')
              }}</span>
                <span
                  @click="funcScrollTo('#about-us-milestone', '/id/about-us')"
                >{{ $t('navbar.about.milestone') }}</span
                >
                <span
                  @click="funcScrollTo('#about-us-visi-misi', '/id/about-us')"
                >{{ $t('navbar.about.vision') }}</span
                >
                <span @click="funcScrollTo('#about-us-values', '/id/about-us')">{{
                    $t('navbar.about.core')
                  }}</span>
                <span
                  @click="funcScrollTo('#about-us-management', '/id/about-us')"
                >{{ $t('navbar.about.management') }}</span
                >
              </ul>
            </div>
          </nuxt-link>
          <nuxt-link
            class="dropdown-menu nav-child text-decoration-none"
            :to="'/id/export'"
          >
            {{ $t('navbar.export.title') }}
            <div class="dropdown-menu-hover-content">
              <ul class="nobull about-us-ul">
            <span @click="funcScrollTo('#export-heritage', '/id/export')">
              {{ $t('navbar.export.heritage') }}</span
            >
                <span
                  @click="funcScrollTo('#export-quality-tobacco', '/id/export')"
                >
              {{ $t('navbar.export.global') }}</span
                >
                <span @click="funcScrollTo('#export-contact', '/id/export')">
              {{ $t('navbar.export.contact') }}</span
                >
              </ul>
            </div>
          </nuxt-link>
          <nuxt-link class="nav-child text-decoration-none" :to="'/id/products'">
            {{ $t('navbar.products') }}
          </nuxt-link>
          <nuxt-link
            class="nav-child text-decoration-none"
            :to="'/id/media-and-publication'"
          >
            {{ $t('navbar.media') }}
          </nuxt-link>
          <nuxt-link
            class="dropdown-menu nav-child text-decoration-none"
            :to="'/id/career'"
          >
            {{ $t('navbar.career.title') }}
            <div class="dropdown-menu-hover-content">
              <ul class="nobull about-us-ul">
            <span @click="funcScrollTo('#career-life-at', '/id/career')">
              {{ $t('navbar.career.life') }}
            </span>
                <span @click="funcScrollTo('#career-opportunities', '/id/career')">
              {{ $t('navbar.career.job') }}
            </span>
                <span @click="funcScrollTo('#career-learn-grow', '/id/career')">
              {{ $t('navbar.career.learn') }}
            </span>
              </ul>
            </div>
          </nuxt-link>
          <nuxt-link class="nav-child text-decoration-none" :to="'/id/contact-us'">
            {{ $t('navbar.contact') }}
          </nuxt-link>
        </div>
        <div class="search-bar">
          <img src="~/assets/images/search-icon.svg" />
          <input
            v-model="searchInput"
            type="text"
            :placeholder="$t('navbar.search')"
            class="input-search"
          />
        </div>
        <div class="lang-swichter defaultGolden--text">
          <template v-if="$i18n.locale === 'id'">
            <span class="cursor-pointer fontLight--text">ID</span> |
            <span class="cursor-pointer" @click="onChangeLang('en')"> EN </span>
          </template>
          <template v-else-if="$i18n.locale === 'en'">
            <span class="cursor-pointer" @click="onChangeLang('id')"> ID </span>
            |<span class="cursor-pointer fontLight--text"> EN </span>
          </template>
        </div>
        <div class="mobile-burger">
          <img src="~/assets/images/burgerbtn.svg" alt="burger btn" />
        </div>
      </div>
      <div v-else-if="$i18n.locale === 'en'" class="nav-bar-top">
        <div class="nav-img-container">
          <v-img
            :src="require('assets/images/logo-light.svg')"
            alt="logo niki super"
            class="cursor-pointer"
            height="50"
            width="310"
            @click="$router.push('/')"
          />
        </div>
        <div class="nav-list">
          <nuxt-link
            class="dropdown-menu nav-child text-decoration-none"
            :to="'/about-us'"
          >
            {{ $t('navbar.about.title') }}
            <div class="dropdown-menu-hover-content">
              <ul class="nobull about-us-ul">
            <span @click="funcScrollTo('#about-us-overview', 'about-us')">{{
                $t('navbar.about.overview')
              }}</span>
                <span @click="funcScrollTo('#about-us-milestone', 'about-us')">{{
                    $t('navbar.about.milestone')
                  }}</span>
                <span @click="funcScrollTo('#about-us-visi-misi', 'about-us')">{{
                    $t('navbar.about.vision')
                  }}</span>
                <span @click="funcScrollTo('#about-us-values', 'about-us')">{{
                    $t('navbar.about.core')
                  }}</span>
                <span @click="funcScrollTo('#about-us-management', 'about-us')">{{
                    $t('navbar.about.management')
                  }}</span>
              </ul>
            </div>
          </nuxt-link>
          <nuxt-link
            class="dropdown-menu nav-child text-decoration-none"
            :to="'/export'"
          >
            {{ $t('navbar.export.title') }}
            <div class="dropdown-menu-hover-content">
              <ul class="nobull about-us-ul">
            <span @click="funcScrollTo('#export-heritage', 'export')">
              {{ $t('navbar.export.heritage') }}</span
            >
                <span @click="funcScrollTo('#export-quality-tobacco', 'export')">
              {{ $t('navbar.export.global') }}</span
                >
                <span @click="funcScrollTo('#export-contact', 'export')">
              {{ $t('navbar.export.contact') }}</span
                >
              </ul>
            </div>
          </nuxt-link>
          <nuxt-link class="nav-child text-decoration-none" :to="'/products'">
            {{ $t('navbar.products') }}
          </nuxt-link>
          <nuxt-link
            class="nav-child text-decoration-none"
            :to="'/media-and-publication'"
          >
            {{ $t('navbar.media') }}
          </nuxt-link>
          <nuxt-link
            class="dropdown-menu nav-child text-decoration-none"
            :to="'/career'"
          >
            {{ $t('navbar.career.title') }}
            <div class="dropdown-menu-hover-content">
              <ul class="nobull about-us-ul">
            <span @click="funcScrollTo('#career-life-at', 'career')">
              {{ $t('navbar.career.life') }}
            </span>
                <span @click="funcScrollTo('#career-opportunities', 'career')">
              {{ $t('navbar.career.job') }}
            </span>
                <span @click="funcScrollTo('#career-learn-grow', 'career')">
              {{ $t('navbar.career.learn') }}
            </span>
              </ul>
            </div>
          </nuxt-link>
          <nuxt-link class="nav-child text-decoration-none" :to="'/contact-us'">
            {{ $t('navbar.contact') }}
          </nuxt-link>
        </div>
        <div class="search-bar">
          <img src="~/assets/images/search-icon.svg" />
          <input
            v-model="searchInput"
            type="text"
            :placeholder="$t('navbar.search')"
            class="input-search"
          />
        </div>
        <div class="lang-swichter defaultGolden--text">
          <template v-if="$i18n.locale === 'id'">
            <span class="cursor-pointer fontLight--text">ID</span> |
            <span class="cursor-pointer" @click="onChangeLang('en')"> EN </span>
          </template>
          <template v-else-if="$i18n.locale === 'en'">
            <span class="cursor-pointer" @click="onChangeLang('id')"> ID </span>
            |<span class="cursor-pointer fontLight--text"> EN </span>
          </template>
        </div>
        <div class="mobile-burger">
          <img src="~/assets/images/burgerbtn.svg" alt="burger btn" />
        </div>
      </div>
    </template>
    <template  v-else-if="isMobile()">
      <nav-bar-mobile />
    </template>
  </div>
</template>

<script>
import NavBarMobile from '@/components/layout/NavBarMobile'
export default {
  name: 'NavBarTop',
  components: { NavBarMobile },
  data() {
    return {
      searchInput: '',
    }
  },
  methods: {
    onChangeLang(event) {
      this.$router.replace(this.switchLocalePath(event))
    },
    funcScrollTo(href, page) {
      this.$router.push(page)
      setTimeout(() => {
        // const element = document.querySelector(href)
        // const headerOffset = 1000
        // const elementPosition = element.getBoundingClientRect().top
        // const offsetPosition =
        //   elementPosition + window.pageYOffset - headerOffset
        document.querySelector(href).scrollIntoView({
          // top: offsetPosition,
          behavior: 'smooth',
          block: 'center',
        })
      }, 500)
    },
  },
}
</script>

<style lang="scss" scoped>
.nav-bar-top {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;

  .mobile-burger {
    display: none;
  }
  font-family: Barlow, sans-serif;
  font-size: 1.1em;
  font-weight: 600;
  line-height: 29px;
  letter-spacing: 0.05em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $color-primary-root;
  height: 100px;
  .search-bar {
    width: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 1em 0 1em;
    outline: 2px solid $color-secondary-root;
    border-radius: 8px;
    @include mobile {
      display: none;
    }

    img {
      padding-left: 1rem;
    }
    .input-search {
      color: $color-secondary-root;
      padding: 6px 14px 7px 4px;
      width: 100%;
    }
    .input-search:focus {
      outline: none;
    }
    .input-search::placeholder {
      color: $color-secondary-root;
      opacity: 1; /* Firefox */
    }
  }
  .nav-list {
    width: 54%;
    display: flex;
    justify-content: space-evenly;

    .nav-child {
      text-transform: uppercase;
      @include mobile {
        font-size: 0.5rem;
        display: none;
      }
    }
  }
  .nav-img-container {
    responsive {
      width: 100%;
      max-width: 318px;
      height: auto;
    }
  }
  .nav-list a {
    color: $color-secondary-root;
  }
  .lang-swichter {
    @include mobile {
      display: none;
    }
  }

  @include mobile {
    .mobile-burger {
      display: block;
    }
  }
}
.dropdown-menu {
  position: relative;

  .dropdown-menu-hover-content {
    background: $color-primary-root;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
    border-radius: 0px 0px 10px 10px;
    position: absolute;
    display: none;
    left: 0;
    width: 14rem;

    ul {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      padding: 30px 16px;
      gap: 25px;
      a {
        text-decoration: none;
      }
    }
  }
  &:hover .dropdown-menu-hover-content {
    display: block;
  }
}
.nobull {
  list-style-type: none;
}
</style>
