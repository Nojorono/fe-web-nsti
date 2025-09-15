<template>
  <div class="privacy-policy-cms">
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <h1 class="mb-4">Privacy Policy Management</h1>
          
          <v-card>
            <v-card-title>
              <h2>Edit Privacy Policy Content</h2>
            </v-card-title>
            
            <v-card-text>
              <v-form ref="form" v-model="valid" lazy-validation>
                <!-- Status -->
                <v-row>
                  <v-col cols="12" md="6">
                    <v-select
                      v-model="form.status"
                      :items="statusOptions"
                      label="Status"
                      required
                      outlined
                    ></v-select>
                  </v-col>
                </v-row>

                <!-- Titles -->
                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="form.title_id"
                      label="Title (Indonesian)"
                      outlined
                      required
                      :rules="[v => !!v || 'Title Indonesian is required']"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="form.title_en"
                      label="Title (English)"
                      outlined
                      required
                      :rules="[v => !!v || 'Title English is required']"
                    ></v-text-field>
                  </v-col>
                </v-row>

                <!-- Content -->
                <v-row>
                  <v-col cols="12" md="6">
                    <v-textarea
                      v-model="form.content_id"
                      label="Content (Indonesian)"
                      outlined
                      rows="15"
                      required
                      :rules="[v => !!v || 'Content Indonesian is required']"
                      hint="You can use HTML tags for formatting"
                      persistent-hint
                    ></v-textarea>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-textarea
                      v-model="form.content_en"
                      label="Content (English)"
                      outlined
                      rows="15"
                      required
                      :rules="[v => !!v || 'Content English is required']"
                      hint="You can use HTML tags for formatting"
                      persistent-hint
                    ></v-textarea>
                  </v-col>
                </v-row>

                <!-- Meta Description -->
                <v-row>
                  <v-col cols="12" md="6">
                    <v-textarea
                      v-model="form.meta_description_id"
                      label="Meta Description (Indonesian)"
                      outlined
                      rows="3"
                      hint="SEO meta description for Indonesian version"
                      persistent-hint
                    ></v-textarea>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-textarea
                      v-model="form.meta_description_en"
                      label="Meta Description (English)"
                      outlined
                      rows="3"
                      hint="SEO meta description for English version"
                      persistent-hint
                    ></v-textarea>
                  </v-col>
                </v-row>

                <!-- Meta Keywords -->
                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="form.meta_keywords_id"
                      label="Meta Keywords (Indonesian)"
                      outlined
                      hint="Comma separated keywords for Indonesian version"
                      persistent-hint
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="form.meta_keywords_en"
                      label="Meta Keywords (English)"
                      outlined
                      hint="Comma separated keywords for English version"
                      persistent-hint
                    ></v-text-field>
                  </v-col>
                </v-row>

                <!-- Actions -->
                <v-row class="mt-4">
                  <v-col cols="12">
                    <v-btn
                      color="primary"
                      large
                      :loading="loading"
                      :disabled="!valid"
                      @click="savePrivacyPolicy"
                    >
                      Save Privacy Policy
                    </v-btn>
                    
                    <v-btn
                      color="secondary"
                      large
                      outlined
                      class="ml-3"
                      @click="previewContent"
                    >
                      Preview
                    </v-btn>
                    
                    <v-btn
                      color="warning"
                      large
                      outlined
                      class="ml-3"
                      @click="resetForm"
                    >
                      Reset
                    </v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-card-text>
          </v-card>

          <!-- Preview Dialog -->
          <v-dialog v-model="previewDialog" max-width="1000px" scrollable>
            <v-card>
              <v-card-title>
                <span class="headline">Preview Privacy Policy</span>
                <v-spacer></v-spacer>
                <v-btn icon @click="previewDialog = false">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-card-title>
              
              <v-card-text style="height: 600px;">
                <v-tabs v-model="previewTab">
                  <v-tab>Indonesian</v-tab>
                  <v-tab>English</v-tab>
                </v-tabs>
                
                <v-tabs-items v-model="previewTab">
                  <v-tab-item>
                    <div class="mt-4">
                      <h1 class="mb-4">{{ form.title_id }}</h1>
                      <div v-html="form.content_id" class="content-preview"></div>
                    </div>
                  </v-tab-item>
                  <v-tab-item>
                    <div class="mt-4">
                      <h1 class="mb-4">{{ form.title_en }}</h1>
                      <div v-html="form.content_en" class="content-preview"></div>
                    </div>
                  </v-tab-item>
                </v-tabs-items>
              </v-card-text>
              
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn 
                  color="primary" 
                  text 
                  @click="previewDialog = false"
                >
                  Close
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <!-- Success Snackbar -->
          <v-snackbar
            v-model="snackbar.show"
            :color="snackbar.color"
            :timeout="snackbar.timeout"
          >
            {{ snackbar.text }}
            <template v-slot:action="{ attrs }">
              <v-btn
                text
                v-bind="attrs"
                @click="snackbar.show = false"
              >
                Close
              </v-btn>
            </template>
          </v-snackbar>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'PrivacyPolicyCMS',
  layout: 'cmsLayout',
  
  middleware: 'authentication',

  data() {
    return {
      valid: false,
      loading: false,
      previewDialog: false,
      previewTab: 0,
      
      form: {
        title_id: 'KEBIJAKAN PRIVASI',
        title_en: 'PRIVACY POLICY',
        content_id: '',
        content_en: '',
        status: 'active',
        meta_description_id: '',
        meta_description_en: '',
        meta_keywords_id: '',
        meta_keywords_en: ''
      },
      
      statusOptions: [
        { text: 'Active', value: 'active' },
        { text: 'Inactive', value: 'inactive' }
      ],
      
      snackbar: {
        show: false,
        text: '',
        color: 'success',
        timeout: 5000
      }
    }
  },

  async mounted() {
    await this.fetchPrivacyPolicy();
  },

  methods: {
    async fetchPrivacyPolicy() {
      try {
        // Fetch with no language filter to get all fields for CMS editing
        const response = await this.$axios.get('/content', {
          headers: {
            'Authorization': `Bearer ${this.$store.state.logReg.token}`
          },
          params: {
            type: 'privacy-policy'
          }
        });
        
        if (response.data.success && response.data.data.length > 0) {
          const data = response.data.data[0];
          this.form = {
            title_id: data.title_id || 'KEBIJAKAN PRIVASI',
            title_en: data.title_en || 'PRIVACY POLICY',
            content_id: data.content_id || '',
            content_en: data.content_en || '',
            status: data.status || 'active',
            meta_description_id: data.meta_description_id || '',
            meta_description_en: data.meta_description_en || '',
            meta_keywords_id: data.meta_keywords_id || '',
            meta_keywords_en: data.meta_keywords_en || ''
          };
        }
      } catch (error) {
        console.log('Privacy policy not found, using default values');
        // This is expected if privacy policy doesn't exist yet
      }
    },

    async savePrivacyPolicy() {
      if (!this.$refs.form.validate()) {
        return;
      }

      try {
        this.loading = true;
        
        const response = await this.$axios.put('/content/privacy-policy', this.form, {
          headers: {
            'Authorization': `Bearer ${this.$store.state.logReg.token}`
          }
        });

        if (response.data.success) {
          this.showSnackbar('Privacy policy saved successfully!', 'success');
        } else {
          throw new Error(response.data.message || 'Failed to save privacy policy');
        }
      } catch (error) {
        console.error('Error saving privacy policy:', error);
        this.showSnackbar(
          error.response?.data?.message || error.message || 'Failed to save privacy policy', 
          'error'
        );
      } finally {
        this.loading = false;
      }
    },

    previewContent() {
      this.previewDialog = true;
    },

    resetForm() {
      this.$refs.form.reset();
      this.fetchPrivacyPolicy();
    },

    showSnackbar(text, color = 'success') {
      this.snackbar = {
        show: true,
        text,
        color,
        timeout: 5000
      };
    }
  }
}
</script>

<style lang="scss" scoped>
.privacy-policy-cms {
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 2rem 0;
}

.content-preview {
  line-height: 1.8;
  
  ::v-deep {
    h1, h2, h3, h4, h5, h6 {
      margin-top: 1.5rem;
      margin-bottom: 1rem;
      font-weight: 600;
    }

    p {
      margin-bottom: 1rem;
      text-align: justify;
    }

    ul, ol {
      margin-left: 1.5rem;
      margin-bottom: 1rem;

      li {
        margin-bottom: 0.5rem;
      }
    }

    strong, b {
      font-weight: 600;
    }

    em, i {
      font-style: italic;
    }
  }
}

.v-card {
  margin-bottom: 2rem;
}
</style>
