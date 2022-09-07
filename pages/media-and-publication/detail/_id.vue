<template>
  <div class="detail-media-parent-wrapper px-lg-15 px-sm-10">
    <div class="defaultGolden--text">
      <div class="news-date my-10">
        {{ new Date() }}
      </div>

      <div class="news-title my-10">
        <h1>Nikki Super Releases their brand new website</h1>
      </div>
    </div>

    <div class="news-content">
      <div class="image-content">
        <v-img
          :src="require('assets/images/news-content-dummy.png')"
          max-height="auto"
          max-width="auto"
        />
      </div>

      <div class="text-content darkGray--text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          pharetra orci vel gravida ultricies. Cras vel sollicitudin nisl.
          Quisque mattis arcu nec libero rutrum, in hendrerit lectus tempus.
          Vivamus elementum, mi ut porta tempor, lectus neque blandit lectus,
          sit amet aliquet purus risus vitae lectus. Sed dictum consequat
          sagittis. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae; Nulla sed ornare risus. Morbi lobortis
          efficitur enim ut consequat. Curabitur lobortis tellus et turpis
          fermentum, vitae volutpat est accumsan. Duis blandit dolor sit amet mi
          ultricies, scelerisque egestas lectus porta. Phasellus vitae nisl eget
          velit iaculis vestibulum nec sit amet justo. Nam maximus ligula vitae
          semper placerat. Vestibulum non rutrum neque. Fusce bibendum tincidunt
          massa, eu luctus sapien ullamcorper eget. Morbi egestas nunc vitae
          ligula convallis placerat. Nam euismod auctor tempor. Morbi
          pellentesque augue metus. Praesent cursus leo lorem, vel aliquet dolor
          laoreet sed. Suspendisse ac velit nec mauris tincidunt luctus nec
          bibendum lectus. Vivamus vestibulum ante id tempus mattis. Nunc at
          lacus nibh. In nec augue pretium, bibendum ante quis, consectetur
          ipsum. Ut porttitor ligula ac magna volutpat, eget faucibus metus
          ultricies. Aliquam commodo, libero id fermentum fringilla, leo massa
          aliquam ligula, porta congue enim est id justo. Morbi fringilla urna
          vel dictum dapibus. Curabitur placerat, nisi at euismod maximus, justo
          ligula varius risus, eu efficitur lorem dui interdum quam. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Ut porta odio vel felis elementum interdum. Cras
          ultricies imperdiet lectus, at imperdiet dui elementum eget. Donec
          efficitur ac quam sit amet elementum. Donec vulputate magna sit amet
          enim blandit, sit amet malesuada enim mollis. Phasellus mollis a dui
          ac sollicitudin. Nam vel ante blandit, malesuada massa eu, lacinia
          magna. Vivamus tincidunt diam eget pharetra consectetur. Morbi
          sollicitudin congue tortor, quis fringilla mauris maximus dignissim.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porta mi
          a ante consequat, nec dignissim arcu vulputate. Nunc non tincidunt
          augue. Etiam lacinia sem ligula. Cras ut scelerisque nisi, eget
          vulputate leo. Cras viverra auctor porttitor. Proin vel ipsum euismod,
          ultrices justo eget, dapibus est. Praesent commodo bibendum risus,
          eget mattis nisl mattis nec. Curabitur est diam, laoreet ut aliquet a,
          bibendum et massa. Morbi nisl eros, sagittis eget elit at, volutpat
          varius elit. Ut ligula enim, auctor vel orci semper, tempus gravida
          justo. Quisque fringilla lacinia iaculis. Nulla semper risus eget
          aliquet placerat. Integer augue leo, finibus non tellus egestas,
          sodales eleifend dolor. In a massa auctor, tempus velit in, dapibus
          ex. Quisque facilisis tellus lectus, ut cursus mi malesuada sit amet.
          Aliquam ut purus et purus posuere lobortis. Sed euismod euismod leo,
          vitae ultricies turpis commodo nec. Nullam quis nisl condimentum,
          blandit lectus at, venenatis augue. Fusce rutrum magna vitae fringilla
          volutpat.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'DetailMedia',
  components: {},
  head() {
    return {
      title: 'news',
    }
  },
  computed: {
    ...mapGetters(['getDetailMedia']),
  },
  mounted() {
    this.fetchMediaDetail(this.$route.params.id)
    console.log(this.$route, '========')

  },
  methods: {
    ...mapActions(['fetchMediaDetail']),
  },
}
</script>

<style lang="scss" scoped>
.detail-media-parent-wrapper {
  font-family: 'Barlow', sans-serif;
  letter-spacing: 0.05em;

  .news-content {
    border-radius: 50px 50px 0 0;
    background-color: $color-news-gray-root;

    .text-content {
      padding: 3.5rem 7.5rem;
    }
    @include mobile {
      .text-content {
        padding: 1rem 2rem;
      }
    }
  }
}
</style>
