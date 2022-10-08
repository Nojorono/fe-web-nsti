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
        <input v-model="name" type="text" placeholder="Add Name" required />
      </div>
      <div class="input-title">
        <input v-model="title" type="text" placeholder="Add Title" required />
      </div>
    </div>
    <div class="mb-3 input-text-area">
      <!--      <textarea v-model="bodyText" placeholder="Add Body Text" />-->
      <textarea
        v-model="content"
        type="text"
        placeholder="Add Text"
        required
      />
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
import { mapGetters } from 'vuex'
export default {
  name: 'FormAddTestimoni',
  components: {  },
  props: {
    loadingBtn: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      tempImage: null,
      imgPreview: null,
      name: '',
      title: null,
      content: '',
    }
  },
  head() {
    return {}
  },
  computed: {
    ...mapGetters(['getDetailTetimoni']),
  },
  watch: {
    $route: {
      deep: true,
      handler() {
        this.resetForm()
      },
    },
    getDetailTetimoni: {
      deep: true,
      immediate: true,
      handler() {
        if (Object.keys(this.getDetailTetimoni).length) {
          const data = this.getDetailTetimoni
          this.content = data.description
          this.imgPreview =
            'https://back-api.nikkisuper.my.id/' + data.imageName
          this.title = data.title
          this.name = data.name
        }
      },
    },
  },
  mounted() {
    this.resetForm()
  },
  methods: {
    resetForm() {
      this.tempImage = null
      this.title = null
      this.imgPreview = null
      this.name = ''
      this.content = ''
    },
    postBtn() {
      this.$emit('postBtn', {
        name: this.name,
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
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.input-text-area {
  textarea {
    padding: 2%;
    width: 100%;
    height: 250px;

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
      padding: 5% 0;
    }
  }
}
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
