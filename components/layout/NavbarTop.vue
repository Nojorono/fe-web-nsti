<template>
  <div class="nav-bar-top">
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
        About Us
        <div class="dropdown-menu-hover-content">
          <ul class="nobull about-us-ul">
            <nuxt-link to="#">Company Overview</nuxt-link>
            <nuxt-link to="#">Timeline</nuxt-link>
            <nuxt-link to="#">Visi & Misi</nuxt-link>
            <nuxt-link to="#">Core values</nuxt-link>
            <nuxt-link to="#">Our Management</nuxt-link>
          </ul>
        </div>
      </nuxt-link>
      <nuxt-link
        class="dropdown-menu nav-child text-decoration-none"
        :to="'/export'"
      >
        Export
        <div class="dropdown-menu-hover-content">
          <ul class="nobull about-us-ul">
            <nuxt-link to="#">Tembakau Ekspor</nuxt-link>
            <nuxt-link to="#">Keunggulan Tembakau Ekspor</nuxt-link>
            <nuxt-link to="#">Kontak</nuxt-link>
          </ul>
        </div>
      </nuxt-link>
      <nuxt-link class="nav-child text-decoration-none" :to="'/products'">
        products
      </nuxt-link>
      <nuxt-link
        class="nav-child text-decoration-none"
        :to="'/media-and-publication'"
      >
        Media & Publication
      </nuxt-link>
      <nuxt-link
        class="dropdown-menu nav-child text-decoration-none"
        :to="'/career'"
      >
        Career
        <div class="dropdown-menu-hover-content">
          <ul class="nobull about-us-ul">
            <nuxt-link to="#">Life at Nikki Super</nuxt-link>
            <nuxt-link to="#">Job opportunities</nuxt-link>
            <nuxt-link to="#">learn & grow with us</nuxt-link>
          </ul>
        </div>
      </nuxt-link>
      <nuxt-link class="nav-child text-decoration-none" :to="'/contact-us'">
        Contact
      </nuxt-link>
    </div>
    <div class="search-bar">
      <img src="~/assets/images/search-icon.svg" />
      <input
        v-model="searchInput"
        type="text"
        placeholder="Search"
        class="input-search"
      />
    </div>
    <div class="lang-swichter defaultGolden--text">
      <template v-if="language === 'ID'">
        <span class="cursor-pointer fontLight--text">ID</span> |
        <span class="cursor-pointer" @click="language = 'EN'"> EN </span>
      </template>
      <template v-else-if="language === 'EN'">
        <span class="cursor-pointer" @click="language = 'ID'"> ID </span> |<span
          class="fontLight--text cursor-pointer"
          @click="language === 'ID'"
        >
          EN
        </span>
      </template>
    </div>
    <div class="mobile-burger">
      <img src="~/assets/images/burgerbtn.svg" alt="burger btn" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBarTop',
  data() {
    return {
      language: 'EN',
      searchInput: '',
      navList: [
        {
          title: 'About Us',
          href: '/about-us',
        },
        {
          title: 'Export',
          href: '/export',
        },
        {
          title: 'products',
          href: '#products',
        },
        {
          title: 'Media & Publication',
          href: '#media-and-publication',
        },
        {
          title: 'Career',
          href: '/career',
        },
        {
          title: 'Contact',
          href: '/contact-us',
        },
      ],
    }
  },
  methods: {
    funcScrollTo(href) {
      if (this.$route.path !== '/') {
        this.$router.push('/')
        setTimeout(() => {
          document.querySelector(href).scrollIntoView({
            behavior: 'smooth',
          })
        }, 500)
      } else {
        document.querySelector(href).scrollIntoView({
          behavior: 'smooth',
        })
      }
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
