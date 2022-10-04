<template>
  <div>
    <div class="mb-3 d-flex justify-center flex-column align-center">
      <div class="add-new">
        <div>
          <h3>Thumbnail Image</h3>
        </div>
        <label for="file-input">
          <v-img
            v-if="!imgPreview"
            :src="require('assets/images/cms/add-media-btn.svg')"
            alt="add new content"
            max-width="256.77"
            max-height="130.55"
            class="cursor-pointer"
          />
        </label>
        <img
          v-if="imgPreview"
          :src="imgPreview"
          alt="image preview"
          width="256.77"
          height="130.55"
          style="object-fit: cover"
        />
        <input
          id="file-input"
          type="file"
          accept="image/*"
          required
          @change="upload"
        />
      </div>
      <div class="add-new">
        <div>
          <h3>Detail Image</h3>
        </div>
        <label for="file-input2">
          <v-img
            v-if="!imgPreview2"
            :src="require('assets/images/cms/add-media-btn.svg')"
            alt="add new content"
            max-width="256.77"
            max-height="130.55"
            class="cursor-pointer"
          />
        </label>
        <img
          v-if="imgPreview2"
          :src="imgPreview2"
          alt="image preview"
          width="256.77"
          height="130.55"
          style="object-fit: cover"
        />
        <input
          id="file-input2"
          type="file"
          accept="image/*"
          required
          @change="uploadDetail"
        />
      </div>
    </div>
    <div class="input-title mb-3">
      <textarea v-model="description" type="text" placeholder="Add Description" required />
    </div>
    <div class="action-btn d-flex justify-end">
<!--      <v-btn class="ma-2" outlined color="fontDark" @click="deleleteImg"> Delete </v-btn>-->
      <v-btn class="ma-2" color="fontDark fontLight--text" @click="postBtn">
        Post
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormAddProduts',
  components: {},
  props: {},
  data() {
    return {
      imgPreview: null,
      imgPreview2: null,
      description: ''
    }
  },
  head() {
    return {}
  },
  methods: {
    postBtn() {
      this.$emit('postBtn', {
        imgPreview: this.imgPreview,
        imgPreview2: this.imgPreview2,
        description: this.description,
      })
    },
    deleleteImg() {
      this.imgPreview = null
      this.imgPreview2 = null
    },
    upload(event) {
      console.log('masuk 1')
      if (event.target.files.length) {
        this.imgPreview = URL.createObjectURL(event.target.files[0])
      }
    },
    uploadDetail(event) {
      console.log('masuk')
      if (event.target.files.length) {
        this.imgPreview2 = URL.createObjectURL(event.target.files[0])
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.add-new > input {
  display: none;
}
.input-title {
  width: 100%;
  height: 100%;
  border: 2.5px solid $color-font-dark-root;
  border-radius: 20px;
  padding: 0 1%;
  textarea {
    width: 100%;
    font-size: 16px;
    color: $color-font-dark-root;
    &:focus {
      outline: none;
    }
    &::placeholder {
      font-weight: 500;
      color: $color-font-dark-root;
      font-size: 1.2em;
      text-align: center;
    }
  }
}
</style>
