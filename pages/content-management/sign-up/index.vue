<template>
  <div class="pa-0 ma-0 d-flex justify-center align-center">
    <div class="image-container pa-0 ma-0 d-flex">
      <div class="img-sub d-flex justify-center align-center">
        <v-img
          :src="require('assets/images/cms/login-img.png')"
          max-height="100vh"
        />
        <div class="text-overlay fontLight--text text-center">
          <h1>Welcome Abroad</h1>
          <h3>Just a couple of clicks and we start</h3>
        </div>
      </div>
    </div>
    <div class="create-account d-flex flex-column">
      <h1 class="fontDark--text">Create Account</h1>
      <div class="d-flex justify-end mt -5 mb-2">
        <div class="fName mr-2 half-input-width">
          <label class="ml-1 font-weight-medium fontDark--text" for="fName"
            >First Name</label
          >
          <input id="fName" v-model="fName" type="text" class="input-text" />
        </div>
        <div class="lName ml-2 half-input-width">
          <label class="ml-1 font-weight-medium fontDark--text" for="lname"
            >Last Name</label
          >
          <input id="lname" v-model="lName" type="text" class="input-text" />
        </div>
      </div>
      <div class="email my-2">
        <label class="ml-1 font-weight-medium fontDark--text" for="email"
          >Email</label
        >
        <input id="email" v-model="email" type="email" class="input-text" />
      </div>
      <div class="d-flex my-2">
        <div class="password mr-2 half-input-width">
          <label class="ml-1 font-weight-medium fontDark--text" for="password"
            >Password</label
          >
          <input
            id="password"
            v-model="password"
            type="password"
            class="input-text"
          />
        </div>
        <div class="confirm-password ml-2 half-input-width">
          <label
            class="ml-1 font-weight-medium fontDark--text"
            for="confirm-password"
          >
            Confirm Password
          </label>
          <input id="confirm-password" type="password" class="input-text" />
        </div>
      </div>
      <!--      <div class="password-validation fontLightBlue&#45;&#45;text my-3">-->
      <!--        <div class="">-->
      <!--          <img-->
      <!--            :src="require('assets/images/cms/blue-Ellipse.png')"-->
      <!--            width="12"-->
      <!--            height="13"-->
      <!--          />-->
      <!--          <span class="fontLightBlue&#45;&#45;text">-->
      <!--            Contains at least one uppercase letter-->
      <!--          </span>-->
      <!--        </div>-->
      <!--        <div class="">-->
      <!--          <img-->
      <!--            :src="require('assets/images/cms/dark-blue-ellipse.png')"-->
      <!--            width="12"-->
      <!--            height="13"-->
      <!--          />-->
      <!--          <span class="fontDark&#45;&#45;text"-->
      <!--            >Contains at least one special character-->
      <!--          </span>-->
      <!--        </div>-->
      <!--        <div class="">-->
      <!--          <img-->
      <!--            :src="require('assets/images/cms/dark-blue-ellipse.png')"-->
      <!--            width="12"-->
      <!--            height="13"-->
      <!--          />-->
      <!--          <span class="fontDark&#45;&#45;text"> Contains at least one number </span>-->
      <!--        </div>-->
      <!--        <div class="">-->
      <!--          <img-->
      <!--            :src="require('assets/images/cms/dark-blue-ellipse.png')"-->
      <!--            width="12"-->
      <!--            height="13"-->
      <!--          />-->
      <!--          <span class="fontDark&#45;&#45;text"> Passwords are matching </span>-->
      <!--        </div>-->
      <!--      </div>-->
      <v-btn class="btn-sign-up my-2" color="defaultGolden" @click="register">
        Sign Up
      </v-btn>
      <div class="my-3 d-flex justify-center align-center">
        <span class="fontDark--text">Already a member?</span>
        &nbsp;
        <span
          class="fontLightBlue--text"
          @click="$router.push('/content-management/sign-in')"
        >
          Sign In</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CmsSignUp',
  layout: 'cmsNotLoggedIn',

  data() {
    return {
      fName: null,
      lName: null,
      email: null,
      password: null,
      // regex
      uppercase: false,
      specialChar: false,
      number: false,
      matchPass: false,
    }
  },
  head() {
    return {
      title: 'Sign Up',
    }
  },
  methods: {
    register() {
      this.$store.dispatch('register', {
        email: this.email,
        password: this.password,
        username: this.fName + this.lName,
      }).then((_) => {
        this.$router.push('/content-management/sign-in')
      })
    },
  },
}
</script>

<style lang="scss" scoped>
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

.create-account {
  padding: 6rem 5rem;
  font-family: 'Roboto', sans-serif;
  h1 {
    font-weight: 700;
    font-size: 2.5em;
  }
}
</style>
