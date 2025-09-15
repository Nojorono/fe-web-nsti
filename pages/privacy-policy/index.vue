<template>
  <div class="privacy-policy-page">
    <v-container class="py-8">
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">
          <div v-if="loading" class="text-center py-8">
            <v-progress-circular 
              indeterminate 
              color="primary"
              size="64"
            ></v-progress-circular>
            <p class="mt-4">{{ $t('loading') }}</p>
          </div>
          
          <div v-else-if="error" class="text-center py-8">
            <v-icon color="error" size="64">mdi-alert-circle</v-icon>
            <p class="mt-4 error--text">{{ error }}</p>
            <v-btn
              color="primary"
              @click="fetchPrivacyPolicy"
              class="mt-4"
            >
              {{ $t('tryAgain') }}
            </v-btn>
          </div>

          <div v-else-if="privacyPolicy" class="privacy-content">
            <!-- Title -->
            <h1 class="display-1 font-weight-bold mb-6 text-center">
              {{ currentTitle }}
            </h1>
            
            <!-- Content -->
            <div 
              class="privacy-text"
              v-html="currentContent"
            ></div>
            
            <!-- Last updated -->
            <div class="mt-8 pt-4 border-t">
              <p class="caption grey--text">
                {{ $t('lastUpdated') }}: {{ formatDate(privacyPolicy.updatedAt) }}
              </p>
            </div>
          </div>

          <div v-else class="text-center py-8">
            <v-icon color="grey" size="64">mdi-file-document-outline</v-icon>
            <p class="mt-4 grey--text">{{ $t('noContentAvailable') }}</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'PrivacyPolicyPage',
  
  head() {
    const title = this.currentTitle || this.$t('privacyPolicy');
    const description = this.currentMetaDescription || this.$t('privacyPolicyDescription');
    
    return {
      title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: description
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.currentMetaKeywords || this.$t('privacyPolicyKeywords')
        },
        // Open Graph
        {
          hid: 'og:title',
          property: 'og:title',
          content: title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article'
        }
      ]
    }
  },

  data() {
    return {
      privacyPolicy: null,
      loading: true,
      error: null
    }
  },

  computed: {
    currentTitle() {
      if (!this.privacyPolicy) return '';
      const locale = this.$i18n.locale;
      return locale === 'en' ? this.privacyPolicy.title_en : this.privacyPolicy.title_id;
    },

    currentContent() {
      if (!this.privacyPolicy) return '';
      const locale = this.$i18n.locale;
      return locale === 'en' ? this.privacyPolicy.content_en : this.privacyPolicy.content_id;
    },

    currentMetaDescription() {
      if (!this.privacyPolicy) return '';
      const locale = this.$i18n.locale;
      return locale === 'en' ? this.privacyPolicy.meta_description_en : this.privacyPolicy.meta_description_id;
    },

    currentMetaKeywords() {
      if (!this.privacyPolicy) return '';
      const locale = this.$i18n.locale;
      return locale === 'en' ? this.privacyPolicy.meta_keywords_en : this.privacyPolicy.meta_keywords_id;
    }
  },

  watch: {
    '$i18n.locale'() {
      this.fetchPrivacyPolicy();
    }
  },

  async mounted() {
    await this.fetchPrivacyPolicy();
  },

  methods: {
    async fetchPrivacyPolicy() {
      try {
        this.loading = true;
        this.error = null;
        
        const response = await this.$axios.get('/content/privacy-policy');
        
        if (response.data.success) {
          this.privacyPolicy = response.data.data;
        } else {
          throw new Error(response.data.message || 'Failed to fetch privacy policy');
        }
      } catch (error) {
        console.error('Error fetching privacy policy:', error);
        this.error = error.response?.data?.message || error.message || this.$t('errorLoadingContent');
      } finally {
        this.loading = false;
      }
    },

    formatDate(dateString) {
      if (!dateString) return '';
      const date = new Date(dateString);
      return date.toLocaleDateString(this.$i18n.locale === 'id' ? 'id-ID' : 'en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.privacy-policy-page {
  min-height: 70vh;
  background-color: #fafafa;
}

.privacy-content {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.privacy-text {
  line-height: 1.8;
  font-size: 1rem;
  color: #333;

  ::v-deep {
    h1, h2, h3, h4, h5, h6 {
      margin-top: 2rem;
      margin-bottom: 1rem;
      font-weight: 600;
      color: #1a1a1a;
    }

    h1 {
      font-size: 1.8rem;
      border-bottom: 2px solid #e0e0e0;
      padding-bottom: 0.5rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1.3rem;
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
      color: #1a1a1a;
    }

    em, i {
      font-style: italic;
    }

    a {
      color: #1976d2;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    blockquote {
      border-left: 4px solid #e0e0e0;
      margin: 1rem 0;
      padding: 1rem;
      background-color: #f5f5f5;
      font-style: italic;
    }

    pre {
      background-color: #f5f5f5;
      padding: 1rem;
      border-radius: 4px;
      overflow-x: auto;
      margin: 1rem 0;
    }

    code {
      background-color: #f5f5f5;
      padding: 0.2rem 0.4rem;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin: 1rem 0;

      th, td {
        border: 1px solid #e0e0e0;
        padding: 0.75rem;
        text-align: left;
      }

      th {
        background-color: #f5f5f5;
        font-weight: 600;
      }
    }
  }
}

@media (max-width: 768px) {
  .privacy-content {
    padding: 1rem;
    margin: 0 1rem;
  }

  .privacy-text {
    font-size: 0.9rem;

    ::v-deep {
      h1 {
        font-size: 1.5rem;
      }

      h2 {
        font-size: 1.3rem;
      }

      h3 {
        font-size: 1.1rem;
      }
    }
  }
}
</style>
