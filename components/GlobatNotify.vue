<template>
  <div>
    <div class="text-center">
      <v-dialog v-model="getGlobalNotify" width="500" persistent>
        <v-card class="d-flex justify-space-around align-center flex-column">
          <v-progress-circular size="100" indeterminate color="primary">
            <h3>Loading...</h3>
          </v-progress-circular>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'GlobalNotify',
  data() {
    return {
      dialog: false,
    }
  },
  computed: {
    ...mapGetters('cms', ['getGlobalNotify']),
  },
}
</script>
<style lang="scss" scoped>
.v-progress-circular {
  margin: 4rem;
}
</style>
