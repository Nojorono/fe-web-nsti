<template>
  <div class="card">
    <div class="card-title">
      <h3>
        <!--        {{ titleParser(card.title) }}-->
        {{ card.title }}
      </h3>
    </div>
    <!--    <div class="card-level">-->
    <!--&lt;!&ndash;      <p>Level: {{ textParser(card.level) }}</p>&ndash;&gt;-->
    <!--      <p>Level: {{ card.level }}</p>-->
    <!--    </div>-->
    <div class="card-text">
      <!--      <p>Location: {{ textParser(card.location) }}</p>-->
      <p>Location: {{ card.location }}</p>
    </div>
    <!--    <div class="card-level">-->
    <!--&lt;!&ndash;      <p>Link: {{ textParser(card.link) }}</p>&ndash;&gt;-->
    <!--      <p>Link: {{ card.link }}</p>-->
    <!--    </div>-->
    <div class="card-time-stamp">
      <b>
        {{ card.updatedAt.split('T')[0] }}
      </b>
    </div>
    <div
      class="card-overlay-action d-flex justify-center align-center flex-column"
    >
      <img
        :src="require('assets/images/cms/card-edit.svg')"
        alt="card edit button"
        width="auto"
        height="auto"
        class="cursor-pointer mb-2"
        @click="
          $router.push({
            name: editPage,
            params: { id: card.id },
          })
        "
      />
      <img
        :src="require('assets/images/cms/card-delete.svg')"
        alt="card edit button"
        width="auto"
        height="auto"
        class="cursor-pointer mt-2"
        @click="dialogDelete = true"
      />
    </div>
    <!--    modal delete-->
    <v-dialog v-model="dialogDelete" width="500">
      <div class="dialog-delete">
        <div>
          <h1 class="fontDark--text mb-2">Delete Post</h1>
          <p class="fontDark--text">Are you sure want to delete this post?</p>
        </div>

        <div class="dialog-action d-flex justify-end mt-4">
          <v-btn
            class="ma-2"
            outlined
            color="fontDark"
            @click="dialogDelete = false"
          >
            Cancel
          </v-btn>
          <v-btn
            class="ma-2"
            color="fontDark fontLight--text"
            @click="deletePost(card.id)"
          >
            Delete
          </v-btn>
        </div>
      </div>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'CardCms',
  props: {
    card: {
      type: Object,
      default: () => {
        return {}
      },
    },
    editPage: {
      type: String,
      default: '/',
    },
  },
  data() {
    return {
      dialogDelete: false,
    }
  },
  methods: {
    ...mapActions(['deleteCareer', 'fetchAllCareer']),
    deletePost(id) {
      this.deleteCareer(id).then((_) => {
        this.fetchAllCareer()
        this.dialogDelete = false
      })
      console.log(id)
    },
    titleParser(title) {
      let result = ''
      if (title.length) {
        for (let i = 0; i < title.length; i++) {
          if (i === 30) {
            result += '...'
            break
          } else {
            result += title[i]
          }
        }
        return result
      }
    },
    textParser(text) {
      let result = ''
      if (text) {
        for (let i = 0; i < text.length; i++) {
          if (i === 95) {
            result += '...'
            break
          } else {
            result += text[i]
          }
        }
        return result
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.dialog-delete {
  border-radius: 20px;
  background-color: $color-font-light-root;
  width: 500px;
  height: 210px;
  padding: 2rem;
}

.card {
  position: relative;
  margin-right: 1.9rem;
  margin-bottom: 2rem;
  border-radius: 10px;
  background-color: $card-bg-color;
  width: 300px;
  padding: 1rem;
  height: 210px;
  &:hover .card-overlay-action {
    opacity: 1;
  }
}
.card-title {
  height: 2.5rem;
  line-height: 1;
  h3 {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
}

.card-text {
  height: 110px;
  p {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
}

.card-overlay-action {
  transition: 0.3s ease;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  opacity: 0;
  position: absolute;
  background-color: $card-bg-color;
}
</style>
