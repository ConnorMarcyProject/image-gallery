<template>
  <section v-if="album">
    <h2>{{album.title}}</h2>
    <h3>Images</h3>
    <p>
      <button @click="showModal = true"> Add a new Image </button>
    </p>
    <div v-if="showModal" class="modal">
        <div class="content">
        <form @submit.prevent="handleAdd(image)"> 
      <label>
      <span>Image</span>
      <input v-model="image.url" required>
      </label>
      <button> Add </button>
      </form>
      <button @click="showModal = false"> Close </button>
    </div>
    </div>
    <Thumbnails :images="album.images" />
  </section>
</template>

<script>
import albumsApi from '../services/albumsApi';
import Thumbnails from './Thumbnails';


export default {
  data() {
    return {
      album: null,
      showModal: false,
      image: {
        url: '',
      }
    };
  },
  components: {
    Thumbnails,
  },
  created(){
    this.album = albumsApi.getAlbum(this.$route.params.id); 
  },
  methods: {
    handleAdd() {
      this.album.images.push(this.image);
      this.showModal = false;
    }
  }
};
</script>

<style>

</style>
