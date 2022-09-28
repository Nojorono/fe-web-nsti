<template>
  <v-row justify="center" align="center" class="ma-0 pa-0">
    <template v-if="!isMobileCheck()">
      <TopCarousel id="home" />
      <OurStory id="about-us" />
      <MyProducts id="products" />
      <MediaAndPublication id="media-and-publication" />
      <CareerAt id="career" />
      <ContactUs id="contact-us" />
    </template>
    <template v-else>
      <top-carousel-mobile />
      <our-story-mobile />
      <products-mobile />
      <media-and-publication-mobile />
      <CareerAtMobile />
      <contact-us-mobile />
    </template>
  </v-row>
</template>

<script>
import TopCarousel from '@/components/home/TopCarousel.vue'
import OurStory from '@/components/home/OurStory.vue'
import MyProducts from '@/components/home/MyProducts.vue'
import MediaAndPublication from '@/components/home/MediaAndPublication.vue'
import CareerAt from '@/components/home/CareerAt.vue'
import ContactUs from '@/components/home/ContactUs.vue'
import TopCarouselMobile from '@/components/home/mobile/TopCarouselMobile'
import OurStoryMobile from '@/components/home/mobile/OurStoryMobile'
import ProductsMobile from '@/pages/products/ProductsMobile'
import MediaAndPublicationMobile from '@/pages/media-and-publication/MediaMobile'
import CareerAtMobile from '@/components/home/mobile/CareerAtMobile'
import ContactUsMobile from '@/components/home/mobile/ContactUsMobile'

export default {
  name: 'Home',
  components: {
    ContactUsMobile,
    CareerAtMobile,
    MediaAndPublicationMobile,
    ProductsMobile,
    OurStoryMobile,
    TopCarouselMobile,
    TopCarousel,
    OurStory,
    MyProducts,
    MediaAndPublication,
    CareerAt,
    ContactUs,
  },
  head() {
    return {
      title: 'Home',
    }
  },
  mounted() {},
}
</script>

<style lang="scss"></style>
