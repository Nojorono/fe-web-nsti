<template>
  <div class="pa-0 ma-0 d-flex justify-center align-center">
    <div class="image-container pa-0 ma-0 d-flex">
      <div class="img-sub d-flex justify-center align-center">
        <v-img
          :src="require('assets/images/cms/sign-up-img.png')"
          max-height="100vh"
        />
        <div class="text-overlay fontLight--text text-center">
          <h1>Welcome Abroad</h1>
          <h3>Just a couple of clicks and we start</h3>
        </div>
      </div>
    </div>
    <div class="sign-in d-flex flex-column sign-in-width">
      <h1 class="fontDark--text">Sign In</h1>
      <div class="email my-2">
        <label class="ml-1 font-weight-medium fontDark--text" for="lname"
          >Email</label
        >
        <input
          id="email"
          v-model="email"
          type="email"
          class="input-text"
          required
        />
      </div>
      <div class="my-2">
        <div class="password">
          <label class="ml-1 font-weight-medium fontDark--text" for="password"
            >Password</label
          >
          <input
            id="password"
            v-model="password"
            type="password"
            class="input-text"
            required
          />
        </div>
      </div>
      <v-btn class="btn-sign-up my-7" color="defaultGolden" @click="clickLogin">
        Sign In
      </v-btn>
      <div class="my-3 d-flex justify-center align-center">
        <span class="fontDark--text">Don't have an account?</span>
        &nbsp;
        <span
          class="fontLightBlue--text"
          @click="$router.push('/content-management/sign-up')"
        >
          Sign Up</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'CmsSignIn',
  layout: 'cmsNotLoggedIn',

  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    ...mapActions(['login']),
    clickLogin() {
      this.$router.push({
        path: '/content-management/products',
      })
      // const payload = {
      //   email: this.email,
      //   password: this.password,
      // }
      // this.login(payload)
      //   .then((_) => {
      //     console.log('masuk then')
      //     this.$router.push({
      //       path: '/content-management/products',
      //     })
      //   })
      //   .catch((e) => {
      //     alert('gagal')
      //   })
    },
  },
  head() {
    return {
      title: 'Sign In',
    }
  },
}
</script>

<style lang="scss" scoped>
.sign-in-width {
  max-width: 600px;
}
.password-validation {
  font-weight: 400;
  font-size: 14px;
}
.half-input-width {
  width: 220px;
}
.input-text {
  background-color: $color-gray-input;
  padding: 6px 14px 7px 4px;
  width: 100%;
  border-radius: 6px;
}
.input-text:focus {
  outline: none;
}
.input-text::placeholder {
  color: #18345e;
  opacity: 0.5;
}
.img-sub {
  position: relative;
  .text-overlay {
    position: absolute;
    font-family: 'Roboto', sans-serif;
    top: 60%;
  }
}

.sign-in {
  padding: 6rem 5rem;
  font-family: 'Roboto', sans-serif;
  width: 100%;
  h1 {
    font-weight: 700;
    font-size: 3em;
  }
}
</style>
