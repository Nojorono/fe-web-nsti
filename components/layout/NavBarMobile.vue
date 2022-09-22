<template>
  <div class="nav-mobile">
    <div class="nav-img-container">
      <v-img
        :src="require('assets/images/logo-light.svg')"
        alt="logo niki super"
        class="cursor-pointer"
        height="36"
        width="211"
        @click="$router.push('/')"
      />
    </div>
    <div class='burder-btn'>
      <img @click="isShow = !isShow" src="~/assets/images/burgerbtn.svg" alt="burger btn" width="16" height="12" />
    </div>
    <div :class="isShow ? 'menu active' : 'menu' ">
      <ul>
        <li v-for="(item, i) in $i18n.locale === 'id' ? listId : listEn" :key="i" >
          <nuxt-link :to="item.to"> {{item.title}} </nuxt-link>
        </li>
      </ul>
      <div class="triagle-separator">
        <img src="~/assets/images/Vector-3.png" alt="separator" width="299px"
             height="92px">
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'NavBarMobile',
  data() {
    return {
      searchInput: '',
      isShow: false,
      listId: [
        {
          title: 'HOME',
          to: '/id'
        },
        {
          title: 'ABOUT US',
          to: '/id/about-us'
        },
        {
          title: 'EXPORT',
          to: '/id/export'
        },
        {
          title: 'PRODUCTS',
          to: '/id/products'
        },
        {
          title: 'MEDIA & PUBLICATION',
          to: '/id/media-and-publication'
        },
        {
          title: 'CAREER',
          to: '/id/career'
        },
        {
          title: 'CONTACT',
          to: '/id/contact-us'
        },
      ],
      listEn: [
        {
          title: 'HOME',
          to: '/'
        },
        {
          title: 'ABOUT US',
          to: '/about-us'
        },
        {
          title: 'EXPORT',
          to: '/export'
        },
        {
          title: 'PRODUCTS',
          to: '/products'
        },
        {
          title: 'MEDIA & PUBLICATION',
          to: '/media-and-publication'
        },
        {
          title: 'CAREER',
          to: '/career'
        },
        {
          title: 'CONTACT',
          to: '/contact-us'
        },
      ]
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
.nav-mobile {
  background-color: $color-primary-root;
  height: 65px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .nav-img-container {

  }
  .menu {
    background-color: $color-primary-root;
    background-image: url('assets/images/grain.png');
    background-repeat: repeat, repeat;
    width:100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 10px;
    z-index: 5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    transition: all 0.7s ease-in-out;
    ul{
      padding: 3rem 2rem 1rem 2rem;

      li{
        list-style: none;
        margin-bottom: 3rem;
        a {
          color: $color-secondary-root ;
          font-family: 'Barlow',sans-serif;
          font-weight: 800;
          font-size: 2em;
          line-height: 29px;
          letter-spacing: 0.1em;
          text-decoration: none;
        }
      }
    }
    &.active {
      right: 0;
    }
    .triagle-separator{
      float: left;
    }
  }
}
</style>
