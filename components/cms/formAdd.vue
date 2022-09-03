<template>
  <div>
    <div class="mb-3 d-flex justify-center align-center">
      <div class="add-new-btn">
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
    </div>
    <div class="mb-3 add-new-container">
      <div class="input-title">
        <input v-model="title" type="text" placeholder="Add Title" required />
      </div>
    </div>
    <div class="mb-3 input-text-area">
      <textarea v-model="bodyText" placeholder="Add Body Text" />
    </div>
    <div class="action-btn d-flex justify-end">
      <v-btn class="ma-2" outlined color="fontDark"> Delete </v-btn>
      <v-btn class="ma-2" color="fontDark fontLight--text" @click="postBtn">
        Post
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormAdd',
  components: {},
  props: {},
  data() {
    return {
      img: null,
      title: null,
      bodyText: null,
      imgPreview: null,
    }
  },
  head() {
    return {}
  },
  methods: {
    postBtn() {
      this.$emit('postBtn')
    },
    upload(event) {
      if (event.target.files.length) {
        this.imgPreview = URL.createObjectURL(event.target.files[0])
        this.$emit('imgPreview', this.imgPreview)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
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
.add-new-btn > input {
  display: none;
}
.input-title {
  width: 939px;
  height: 77px;
  border: 3px solid $color-font-dark-root;
  border-radius: 20px;
  padding: 0 1%;
  input {
    width: 100%;
    font-size: 3em;
    color: $color-font-dark-root;
    &:focus {
      outline: none;
    }
    &::placeholder {
      font-weight: 500;
      color: $color-font-dark-root;
      font-size: 0.7em;
      text-align: center;
    }
  }
}
.text-field {
  color: #90c143 !important; /* this will override the existing property applied */
  /* add whatever properties you want */
}
.input-title {
  width: 939px;
  height: 77px;
  border: 3px solid $color-font-dark-root;
  border-radius: 20px;
  padding: 0 1%;
  input {
    width: 100%;
    font-size: 3em;
    color: $color-font-dark-root;
    &:focus {
      outline: none;
    }
    &::placeholder {
      font-weight: 500;
      color: $color-font-dark-root;
      font-size: 0.7em;
      text-align: center;
    }
  }
}
</style>
