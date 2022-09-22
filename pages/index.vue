<template>
  <v-row justify="center" align="center">
    <TopCarousel id="home" />
    <OurStory id="about-us" />
    <MyProducts id="products" />
    <MediaAndPublication id="media-and-publication" />
    <CareerAt id="career" />
    <ContactUs id="contact-us" />
  </v-row>
</template>

<script>
import TopCarousel from '@/components/home/TopCarousel.vue'
import OurStory from '@/components/home/OurStory.vue'
import MyProducts from '@/components/home/MyProducts.vue'
import MediaAndPublication from '@/components/home/MediaAndPublication.vue'
import CareerAt from '@/components/home/CareerAt.vue'
import ContactUs from '@/components/home/ContactUs.vue'

export default {
  name: 'Home',
  components: {
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
  mounted() {
    console.log(this.isMobile())
  }
}
</script>

<style lang="scss"></style>
