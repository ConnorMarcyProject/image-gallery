<template>
  <section v-if="album">
    <h2>{{album.title}}</h2>
    <h3>Images</h3>
    <p>
      <button @click="showModal = true"> Add a new Image </button>
    </p>
    <div v-if="showModal" class="modal">
        <div class="content">
        Please add an image
      <button @click="showModal = false"> Close </button>
        <AddImage/>
        </div>
    </div>
    <Thumbnails :images="album.images" />
  </section>
</template>

<script>
import albumsApi from '../services/albumsApi';
import Thumbnails from './Thumbnails';
import AddImage from './AddImage'; 

export default {
  data() {
    return {
      album: null,
      showModal: false 
    };
  },
  components: {
    Thumbnails,
    AddImage
  },
  created(){
    this.album = albumsApi.getAlbum(this.$route.params.id); 
  }
};
</script>

<style>

</style>
