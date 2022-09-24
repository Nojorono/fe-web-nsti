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
<!--    <div class='burder-btn'>-->
<!--      <img @click="isShow = !isShow" src="~/assets/images/burgerbtn.svg" alt="burger btn" width="16" height="12" />-->
<!--    </div>-->
<!--    <div :class="isShow ? 'menu active' : 'menu' ">-->
<!--      <ul>-->
<!--        <li v-for="(item, i) in $i18n.locale === 'id' ? listId : listEn" :key="i" >-->
<!--          <nuxt-link :to="item.to"> {{item.title}} </nuxt-link>-->
<!--        </li>-->
<!--      </ul>-->
<!--      <div class="triagle-separator">-->
<!--        <img src="~/assets/images/Vector-3.png" alt="separator" width="299px"-->
<!--             height="92px">-->
<!--      </div>-->
<!--    </div>-->
    <div class="burder-btn">
      <img @click.stop="drawer = !drawer" src="~/assets/images/burgerbtn.svg" alt="burger btn" width="16" height="12" />
    </div>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      right
      temporary
      class="menu"
      width="100vw"
    >
    <ul>
      <div class="close-btn cursor-pointer d-flex justify-end">
        <img
          :src="require('assets/images/Icon-close.svg')"
          @click="drawer = false"
        />
      </div>
      <li v-for="(item, i) in $i18n.locale === 'id' ? listId : listEn" :key="i" >
        <nuxt-link :to="item.to"> {{item.title}} </nuxt-link>
      </li>
    </ul>
      <div class="triagle-separator">
        <img src="~/assets/images/Vector-3.png" alt="separator" width="299px"
             height="92px">
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'NavBarMobile',
  data() {
    return {
      drawer: false,
      group: null,
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
  watch: {
    group () {
      this.drawer = false
    },
  },
  methods: {
    onChangeLang(event) {
      this.$router.replace(this.switchLocalePath(event))
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
  .menu {
    background-color: $color-primary-root;
    background-image: url('assets/images/grain.png');
    background-repeat: repeat, repeat;
    z-index: 5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
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
    .triagle-separator{
      float: left;
    }
  }
}
</style>
