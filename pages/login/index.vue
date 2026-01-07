<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-card>
          <v-card-title class="text-center">
            <h2>{{ $t('login.title') }}</h2>
          </v-card-title>
          
          <v-card-text>
            <v-form ref="loginForm" @submit.prevent="login">
              <v-text-field
                v-model="form.username"
                label="Email"
                :rules="usernameRules"
                required
                outlined
                prepend-inner-icon="mdi-email"
                type="email"
                placeholder="admin_it@nikkisuper.co.id"
              />
              
              <v-text-field
                v-model="form.password"
                :label="$t('login.password')"
                :rules="passwordRules"
                :type="showPassword ? 'text' : 'password'"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                required
                outlined
                prepend-inner-icon="mdi-lock"
                @click:append="showPassword = !showPassword"
              />
              
              <v-alert
                v-if="errorMessage"
                type="error"
                dense
                class="mb-4"
              >
                {{ errorMessage }}
              </v-alert>
              
              <v-btn
                type="submit"
                color="primary"
                block
                large
                :loading="loading"
                :disabled="!isFormValid"
              >
                {{ $t('login.submit') }}
              </v-btn>
            </v-form>
          </v-card-text>
          
          <v-divider />
          
          <v-card-text class="text-center">
            <p class="mb-2">{{ $t('login.debugCredentials') }}:</p>
            <v-chip 
              small 
              color="primary" 
              outlined 
              class="mr-2 mb-2"
              @click="fillDebugCredentials('debug')"
            >
              Debug: debug / debug123!
            </v-chip>
            <v-chip 
              small 
              color="success" 
              outlined 
              class="mr-2 mb-2"
              @click="fillDebugCredentials('admin')"
            >
              Admin: admin / admin123!
            </v-chip>
            <v-chip 
              small 
              color="info" 
              outlined 
              class="mb-2"
              @click="fillDebugCredentials('content')"
            >
              Content: content / content123!
            </v-chip>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'LoginPage',
  layout: 'auth',
  
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      showPassword: false,
      loading: false,
      errorMessage: '',
      usernameRules: [
        v => !!v || this.$t('validation.required'),
        v => (v && v.length >= 3) || this.$t('validation.minLength', { min: 3 })
      ],
      passwordRules: [
        v => !!v || this.$t('validation.required'),
        v => (v && v.length >= 6) || this.$t('validation.minLength', { min: 6 })
      ]
    }
  },
  
  head() {
    return {
      title: this.$t('login.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('login.description')
        }
      ]
    }
  },
  
  computed: {
    isFormValid() {
      return this.form.username && 
             this.form.password && 
             this.form.username.length >= 3 && 
             this.form.password.length >= 6;
    }
  },
  
  methods: {
    async login() {
      if (!this.$refs.loginForm.validate()) {
        return;
      }
      
      this.loading = true;
      this.errorMessage = '';
      
      try {
        // Use the logReg store for consistent authentication
        await this.$store.dispatch('logReg/login', {
          email: this.form.username,
          password: this.form.password
        });
        
        // Show success message (if toast plugin available)
        if (this.$toast) {
          this.$toast.success('Login successful!');
        }
        
        // Redirect to content management or dashboard
        const redirectTo = this.$route.query.redirect || '/content-management/products';
        this.$router.push(redirectTo).catch(() => {
          // If redirect fails, try default CMS page
          this.$router.push('/content-management');
        });
      } catch (error) {
        // Handle backend error response
        if (error.response) {
          if (error.response.status === 401) {
            this.errorMessage = 'Email/Password wrong!';
          } else if (error.response.data && error.response.data.message) {
            this.errorMessage = error.response.data.message;
          } else {
            this.errorMessage = 'Login failed. Please try again.';
          }
        } else if (error.request) {
          this.errorMessage = 'Network error. Please check your connection.';
        } else {
          this.errorMessage = 'An unexpected error occurred.';
        }
      } finally {
        this.loading = false;
      }
    },
    
    fillDebugCredentials(type) {
      const credentials = {
        debug: { username: 'debug', password: 'debug123!' },
        admin: { username: 'admin', password: 'admin123!' },
        content: { username: 'content', password: 'content123!' }
      };
      
      if (credentials[type]) {
        this.form.username = credentials[type].username;
        this.form.password = credentials[type].password;
      }
    }
  }
}
</script>

<style scoped>
.v-card {
  border-radius: 12px;
}

.v-chip {
  cursor: pointer;
  transition: all 0.3s ease;
}

.v-chip:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
</style>
