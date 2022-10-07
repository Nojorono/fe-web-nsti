<template>
  <div class="d-flex justify-center align-center">
    <div class="max-cms-width my-10">
      <CmsHeading
        :close-page="'/content-management/career'"
        :heading="heading"
        class="mb-3"
      />
      <div class="add-new-container">
        <div class="input-box">
          <input v-model="title" type="text" placeholder="Add Posistion" />
        </div>
        <!--        <div class="input-box">-->
        <!--          <input v-model="level" type="text" placeholder="Add level" />-->
        <!--        </div>-->
        <div class="input-box">
          <input v-model="location" type="text" placeholder="Add location" />
        </div>
        <client-only>
          <vue-editor v-model="content"></vue-editor>
        </client-only>
      </div>
      <div class="action-btn d-flex justify-end">
        <v-btn class="ma-2" outlined color="fontDark"> Delete </v-btn>
        <v-btn class="ma-2" color="fontDark fontLight--text" @click="postBtn">
          Post
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
import { mapActions, mapGetters } from 'vuex'
import CmsHeading from '@/components/cms/Heading'
export default {
  name: 'EditCareer',

  components: {
    CmsHeading,
    VueEditor,
  },
  layout: 'cmsLayout',
  middleware: 'authentication',
  props: {},
  data() {
    return {
      heading: 'Career',
      title: null,
      level: null,
      location: null,
      link: null,
      content: '<h3>Description about the job...</h3>',
    }
  },
  head() {
    return {
      title: 'Edit Career',
    }
  },
  mounted() {
    this.fetchDetailCareer(this.$route.params.id).then((_) => {
      console.log(this.getDetailCareer)
      const data = this.getDetailCareer
      this.content = data.description
      this.title = data.title
      this.level = data.level
      this.location = data.location
      this.link = data.link
    })
  },
  computed: {
    ...mapGetters(['getDetailCareer']),
  },

  methods: {
    ...mapActions(['patchDetailCareer', 'fetchDetailCareer']),
    postBtn() {
      const payload = {
        title: this.title,
        location: this.location,
        description: this.content,
        id: this.$route.params.id,
      }
      this.patchDetailCareer(payload).then((_) => {
        this.$router.push({ path: '/content-management/career/' })
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.max-cms-width {
  width: 950px;
}

.input-box {
  margin: 1rem 0;
  width: 939px;
  height: 77px;
  border: 3px solid $color-font-dark-root;
  border-radius: 20px;
  padding: 0 1%;
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    width: 100%;
    color: $color-font-dark-root;
    &:focus {
      outline: none;
    }
    &::placeholder {
      font-weight: 500;
      color: $color-font-dark-root;
      font-size: 1em;
      text-align: center;
    }
  }
}

.input-text-area {
  textarea {
    padding: 2%;
    width: 939px;
    height: 375px;

    border: 3px solid $color-font-dark-root;
    border-radius: 20px;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: $color-font-dark-root;
      font-weight: bold;
      text-align: center;
      font-size: 1em;
      padding: 15% 0;
    }
  }
}
</style>
