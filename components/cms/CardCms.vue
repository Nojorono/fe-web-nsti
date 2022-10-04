<template>
  <div class="card">
    <div class="img-container">
      <v-img :src="'https://back-api.nikkisuper.my.id/' + card.imageName" max-width="206" max-height="137" class="img" />
    </div>
    <div class="card-title my-2">
      <h3>
<!--        {{ titleParser(card.title) }}-->
        {{ card.title }}
      </h3>
    </div>
    <div class="card-text">

      <p v-if="$route.name == 'content-management-media-and-publication___en'" v-html="card.description"></p>
      <p v-else>
        <!--        {{ textParser(card.description) }}-->
        {{ card.description }}
      </p>
    </div>
    <div class="card-time-stamp">
      <b>
        {{ findDate(card.updatedAt) }}
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
export default {
  name: 'CareerCard',
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
    deletePost(id) {
      this.$emit('deletePost', id)
    },
    titleParser(title) {
      let result = ''
      for (let i = 0; i < title.length; i++) {
        if (i === 30) {
          result += '...'
          break
        } else {
          result += title[i]
        }
      }
      return result
    },
    textParser(text) {
      let result = ''
      for (let i = 0; i < text.length; i++) {
        if (i === 95) {
          result += '...'
          break
        } else {
          result += text[i]
        }
      }
      return result
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
  width: 238px;
  padding: 1rem;
  height: 349px;
  &:hover .card-overlay-action {
    opacity: 1;
  }
}
.img-container {
  width: 200px;
  height: 130px;
  .img {
    border-radius: 10px;
  }
}
.card-text {
  height: 110px;
  p{
    text-overflow:ellipsis;
    overflow:hidden;
    white-space:nowrap;
  }
}
.card-title {
  height: 2.5rem;
  line-height: 1;
  h3{
    text-overflow:ellipsis;
    overflow:hidden;
    white-space:nowrap;
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
