<template>
  <div class="cms-privacy-policy-container">
    <v-container fluid class="pa-0">
      <div class="page-header mb-6">
        <h1 class="page-title">Privacy Policy Management</h1>
        <p class="page-subtitle">Manage privacy policy content for your website</p>
      </div>
      
      <v-card class="privacy-policy-card" elevation="2">
        <v-card-title class="card-header">
          <v-icon left color="primary" size="28">mdi-shield-account</v-icon>
          <span class="card-title-text">Edit Privacy Policy Content</span>
        </v-card-title>
        
        <v-divider></v-divider>
        
        <v-card-text class="pa-6">
          <v-form ref="form" v-model="valid" lazy-validation>
            <!-- Status Section -->
            <div class="form-section mb-6">
              <h3 class="section-title mb-4">Status Settings</h3>
              <v-row>
                <v-col cols="12" md="6">
                  <v-select
                    v-model="form.status"
                    :items="statusOptions"
                    label="Publication Status"
                    outlined
                    dense
                    prepend-inner-icon="mdi-eye"
                    hint="Control privacy policy visibility"
                    persistent-hint
                  ></v-select>
                </v-col>
              </v-row>
            </div>

            <!-- Title Section -->
            <div class="form-section mb-6">
              <h3 class="section-title mb-4">Page Titles</h3>
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="form.title_id"
                    label="Title (Indonesian)"
                    outlined
                    dense
                    prepend-inner-icon="mdi-translate"
                    required
                    :rules="[v => !!v || 'Title Indonesian is required']"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="form.title_en"
                    label="Title (English)"
                    outlined
                    dense
                    prepend-inner-icon="mdi-web"
                    required
                    :rules="[v => !!v || 'Title English is required']"
                  ></v-text-field>
                </v-col>
              </v-row>
            </div>
            <!-- Content Section -->
            <div class="form-section mb-6">
              <h3 class="section-title mb-4">Privacy Policy Content</h3>
              <v-row>
                <v-col cols="12" md="6">
                  <v-textarea
                    v-model="form.content_id"
                    label="Content (Indonesian)"
                    outlined
                    rows="15"
                    auto-grow
                    required
                    :rules="[v => !!v || 'Content Indonesian is required']"
                    hint="You can use HTML tags for formatting"
                    persistent-hint
                    prepend-inner-icon="mdi-file-document-edit"
                  ></v-textarea>
                </v-col>
                <v-col cols="12" md="6">
                  <v-textarea
                    v-model="form.content_en"
                    label="Content (English)"
                    outlined
                    rows="15"
                    auto-grow
                    required
                    :rules="[v => !!v || 'Content English is required']"
                    hint="You can use HTML tags for formatting"
                    persistent-hint
                    prepend-inner-icon="mdi-file-document-edit"
                  ></v-textarea>
                </v-col>
              </v-row>
            </div>

            <!-- SEO Section -->
            <div class="form-section mb-6">
              <h3 class="section-title mb-4">SEO Settings</h3>
              
              <!-- Meta Description -->
              <v-row class="mb-4">
                <v-col cols="12" md="6">
                  <v-textarea
                    v-model="form.meta_description_id"
                    label="Meta Description (Indonesian)"
                    outlined
                    dense
                    rows="3"
                    counter="160"
                    prepend-inner-icon="mdi-tag-text"
                    hint="SEO meta description for Indonesian version (max 160 chars)"
                    persistent-hint
                  ></v-textarea>
                </v-col>
                <v-col cols="12" md="6">
                  <v-textarea
                    v-model="form.meta_description_en"
                    label="Meta Description (English)"
                    outlined
                    dense
                    rows="3"
                    counter="160"
                    prepend-inner-icon="mdi-tag-text"
                    hint="SEO meta description for English version (max 160 chars)"
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
                    dense
                    prepend-inner-icon="mdi-tag-multiple"
                    hint="Comma separated keywords for Indonesian version"
                    persistent-hint
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="form.meta_keywords_en"
                    label="Meta Keywords (English)"
                    outlined
                    dense
                    prepend-inner-icon="mdi-tag-multiple"
                    hint="Comma separated keywords for English version"
                    persistent-hint
                  ></v-text-field>
                </v-col>
              </v-row>
            </div>

            <!-- Action Buttons -->
            <div class="form-actions">
              <v-divider class="mb-6"></v-divider>
              <div class="d-flex justify-space-between align-center flex-wrap">
                <div class="action-buttons">
                  <v-btn
                    class="mr-3 mb-2"
                    color="primary"
                    large
                    depressed
                    :loading="loading"
                    :disabled="!valid"
                    @click="savePrivacyPolicy"
                  >
                    <v-icon left>mdi-content-save</v-icon>
                    Save Privacy Policy
                  </v-btn>
                  
                  <v-btn
                    class="mr-3 mb-2"
                    color="info"
                    large
                    outlined
                    @click="previewContent"
                  >
                    <v-icon left>mdi-eye</v-icon>
                    Preview
                  </v-btn>
                  
                  <v-btn
                    class="mb-2"
                    color="warning"
                    large
                    outlined
                    @click="resetForm"
                  >
                    <v-icon left>mdi-refresh</v-icon>
                    Reset
                  </v-btn>
                </div>
                
                <div v-if="lastSaved" class="last-saved">
                  <v-chip color="success" small>
                    <v-icon left small>mdi-check-circle</v-icon>
                    Last saved: {{ formatDate(lastSaved) }}
                  </v-chip>
                </div>
              </div>
            </div>
          </v-form>
        </v-card-text>
      </v-card>
    </v-container>

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
                      <div class="content-preview" v-html="form.content_id"></div>
                    </div>
                  </v-tab-item>
                  <v-tab-item>
                    <div class="mt-4">
                      <h1 class="mb-4">{{ form.title_en }}</h1>
                      <div class="content-preview" v-html="form.content_en"></div>
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
            <template #action="{ attrs }">
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
  name: 'CmsPrivacyPolicy',
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
      },
      
      lastSaved: null
    }
  },

  async mounted() {
    await this.fetchPrivacyPolicy();
  },

  methods: {
    async fetchPrivacyPolicy() {
      try {
        const token = localStorage.getItem('access_token');
        // Fetch privacy policy content using specific endpoint
        const response = await this.$axios.get('/content/privacy-policy', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (response.data.success && response.data.data) {
          const data = response.data.data;
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
        // Privacy policy not found, using default values
      }
    },

    async savePrivacyPolicy() {
      if (!this.$refs.form.validate()) {
        return;
      }

      try {
        this.loading = true;
        const token = localStorage.getItem('access_token');
        
        const response = await this.$axios.put('/content/privacy-policy', this.form, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.data.success) {
          this.lastSaved = new Date();
          this.showSnackbar('Privacy policy saved successfully!', 'success');
        } else {
          throw new Error(response.data.message || 'Failed to save privacy policy');
        }
      } catch (error) {
        this.showSnackbar(
          error.response?.data?.message || error.message || 'Failed to save privacy policy', 
          'error'
        );
      } finally {
        this.loading = false;
      }
    },

    formatDate(date) {
      if (!date) return '';
      return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }).format(new Date(date));
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
.cms-privacy-policy-container {
  padding: 24px;
  background: #f5f5f5;
  min-height: 100vh;
}

.page-header {
  .page-title {
    font-size: 2rem;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 8px;
  }
  
  .page-subtitle {
    color: #666;
    font-size: 1.1rem;
    margin: 0;
  }
}

.privacy-policy-card {
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  
  .card-header {
    padding: 24px 24px 16px 24px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    
    .card-title-text {
      font-size: 1.25rem;
      font-weight: 600;
    }
  }
}

.form-section {
  .section-title {
    font-size: 1.125rem;
    font-weight: 600;
    color: #333;
    border-left: 4px solid #667eea;
    padding-left: 12px;
  }
}

.form-actions {
  .action-buttons {
    .v-btn {
      font-weight: 500;
      text-transform: none;
      border-radius: 8px;
    }
  }
  
  .last-saved {
    .v-chip {
      border-radius: 16px;
    }
  }
}

.content-preview {
  line-height: 1.6;
  
  ::v-deep {
    h1, h2, h3, h4, h5, h6 {
      margin-top: 1.5rem;
      margin-bottom: 1rem;
      font-weight: 600;
      color: #333;
    }

    p {
      margin-bottom: 1rem;
      text-align: justify;
      color: #555;
    }

    ul, ol {
      margin-left: 1.5rem;
      margin-bottom: 1rem;

      li {
        margin-bottom: 0.5rem;
        color: #555;
      }
    }

    strong, b {
      font-weight: 600;
      color: #333;
    }

    em, i {
      font-style: italic;
    }
    
    blockquote {
      border-left: 4px solid #667eea;
      padding-left: 16px;
      margin: 16px 0;
      font-style: italic;
      color: #666;
    }
  }
}

// Responsive design
@media (max-width: 768px) {
  .cms-privacy-policy-container {
    padding: 16px;
  }
  
  .page-header {
    .page-title {
      font-size: 1.75rem;
    }
  }
  
  .privacy-policy-card {
    .card-header {
      padding: 20px 16px 12px 16px;
      
      .card-title-text {
        font-size: 1.125rem;
      }
    }
  }
  
  .form-actions {
    .action-buttons {
      .v-btn {
        width: 100%;
        margin: 0 0 8px 0 !important;
      }
    }
  }
}
</style>
