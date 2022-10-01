<template>
  <div class="left-nav-container d-flex flex-column justify-start">
    <v-menu>
      <template #activator="{ on, attrs }">
        <div
          class="left-btn add-new cursor-pointer mt-13 mb-4 ml-4"
          v-bind="attrs"
          v-on="on"
        ></div>
      </template>
      <div class="">
<!--        <div-->
<!--          class="left-btn full-width about-us my-4 cursor-pointer"-->
<!--          @click="$router.push('/content-management/about-us/add-new')"-->
<!--        ></div>-->
        <div
          class="left-btn full-width products cursor-pointer"
          @click="$router.push('/content-management/products/add-new')"
        ></div>
        <div
          class="left-btn full-width media-and-publication cursor-pointer"
          @click="
            $router.push('/content-management/media-and-publication/add-new')
          "
        ></div>
        <div
          class="left-btn full-width career cursor-pointer"
          @click="$router.push('/content-management/career/add-new')"
        ></div>
      </div>
    </v-menu>
<!--    <nuxt-link-->
<!--      class="left-btn full-width about-us mb-4"-->
<!--      to="/content-management/about-us"-->
<!--    ></nuxt-link>-->
    <nuxt-link
      class="left-btn full-width products "
      to="/content-management/products"
    ></nuxt-link>
    <nuxt-link
      class="left-btn full-width media-and-publication "
      to="/content-management/media-and-publication"
    ></nuxt-link>
    <nuxt-link
      class="left-btn full-width career"
      to="/content-management/career"
    ></nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.menuable__content__active {
  background-color: $btn-cms-gray;
  border-radius: 10px;
}

.left-nav-container {
  width: 250px;
  min-height: calc(100vh - 80px);
  background-color: $btn-cms-gray;
}

[class*='left-btn'] {
  background-size: contain;
  transition: all ease-in-out 0.3s;
  &.full-width {
    width: 250px;
    height: 40px;
  }
  &.add-new {
    background-image: url('assets/images/cms/add-new.svg');
    width: 130px;
    height: 50px;
    &:hover {
      background-image: url('assets/images/cms/add-new-hover.svg');
    }
  }
  &.about-us {
    background-image: url('assets/images/cms/about-us.svg');
    &:hover {
      background-image: url('assets/images/cms/about-us-hover.svg');
    }
  }
  &.products {
    background-image: url('assets/images/cms/products.svg');
    &:hover {
      background-image: url('assets/images/cms/products-hover.svg');
    }
  }
  &.media-and-publication {
    background-image: url('assets/images/cms/media-and-publication.svg');
    &:hover {
      background-image: url('assets/images/cms/media-and-publication-hover.svg');
    }
  }
  &.career {
    background-image: url('assets/images/cms/career.svg');
    &:hover {
      background-image: url('assets/images/cms/career-hover.svg');
    }
  }
}
</style>
