<template>
  <div>
    <div class="mb-3 d-flex justify-center align-center">
      <div class="add-new-btn">
        <!--        kalo ga ada foto-->
        <label for="file-input">
          <v-img
            v-if="!imgPreview"
            :src="require('assets/images/cms/add-media-btn.svg')"
            alt="add new content"
            width="355"
            height="180"
            class="cursor-pointer"
          />
        </label>
        <input
          id="file-input"
          type="file"
          accept="image/*"
          required
          @change="upload"
        />
        <!--        kalo ada foto -->

        <label for="file-input">
          <img
            v-if="imgPreview"
            id="file-input"
            :src="tempImage || imgPreview"
            alt="image preview"
            width="355"
            height="180"
            style="object-fit: cover"
            class="cursor-pointer"
          />
        </label>
      </div>
    </div>
    <div class="mb-3 add-new-container">
      <div class="input-title mb-3">
        <input v-model="title" type="text" placeholder="Add Title" required />
      </div>
      <div class="input-title">
        <input
          v-model="location"
          type="text"
          placeholder="Add Location"
          required
        />
      </div>
    </div>
    <div class="mb-3 input-text-area">
      <!--      <textarea v-model="bodyText" placeholder="Add Body Text" />-->
      <client-only>
        <vue-editor v-model="content"></vue-editor>
      </client-only>
    </div>
    <div class="action-btn d-flex justify-end">
<!--      <v-btn class="ma-2" outlined color="fontDark"> Delete </v-btn>-->
      <v-btn
        class="ma-2"
        color="fontDark fontLight--text"
        :loading="loadingBtn"
        @click="postBtn"
      >
        Post
      </v-btn>
    </div>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
import { mapGetters } from 'vuex'
export default {
  name: 'FormAdd',
  components: { VueEditor },
  props: {
    loadingBtn: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      tempImage: null,
      title: null,
      imgPreview: null,
      location: '',
      content: '<p>Add Body Text</p>',
    }
  },
  head() {
    return {}
  },
  computed: {
    ...mapGetters(['getDetailMedia']),
  },
  watch: {
    $route: {
      deep: true,
      handler() {
        this.resetForm()
      }
    },
    getDetailMedia: {
      deep: true,
      immediate: true,
      handler() {
        if (Object.keys(this.getDetailMedia).length) {
          const data = this.getDetailMedia
          this.content = data.description
          this.imgPreview =
            'https://back-api.nikkisuper.my.id/' + data.imageName
          this.title = data.title
          this.location = data.location
        }
      },
    },
  },
  mounted() {
    this.tempImage= null
      this.title= null
      this.imgPreview = null
      this.location= ''
      this.content= '<p>Add Body Text</p>'
  },
  methods: {
    resetForm() {
      this.tempImage= null
      this.title= null
      this.imgPreview = null
      this.location= ''
      this.content= '<p>Add Body Text</p>'
    },
    postBtn() {
      this.$emit('postBtn', {
        location: this.location,
        description: this.content,
        title: this.title,
        sampleFile: this.imgPreview,
      })
    },
    upload(event) {
      if (event.target.files.length) {
        this.tempImage = URL.createObjectURL(event.target.files[0])
        this.imgPreview = event.target.files[0]
        const formData = new FormData()
        formData.append('file', this.imgPreview)

        // const image = event.target.files[0];
        // const reader = new FileReader();
        // reader.readAsDataURL(image);
        // reader.onload = event =>{
        //   this.imgPreview = event.target.result;
        //   console.log(this.imgPreview);
        // };
      }
    },
  },
}
</script>

<style lang="scss" scoped>
//.input-text-area {
//  textarea {
//    padding: 2%;
//    width: 939px;
//    height: 375px;
//
//    border: 3px solid $color-font-dark-root;
//    border-radius: 20px;
//    &:focus {
//      outline: none;
//    }
//    &::placeholder {
//      color: $color-font-dark-root;
//      font-weight: bold;
//      text-align: center;
//      font-size: 1em;
//      padding: 15% 0;
//    }
//  }
//}
.add-new-btn > input {
  display: none;
}
.text-field {
  color: #90c143 !important; /* this will override the existing property applied */
  /* add whatever properties you want */
}
.input-title {
  width: 100%;
  height: 55px;
  border: 2.5px solid $color-font-dark-root;
  border-radius: 20px;
  padding: 0 1%;
  input {
    width: 100%;
    font-size: 2em;
    color: $color-font-dark-root;
    &:focus {
      outline: none;
    }
    &::placeholder {
      font-weight: 500;
      color: $color-font-dark-root;
      font-size: 0.6em;
      text-align: center;
    }
  }
}
</style>
