<template>
  <section>
    <h2>Albums</h2>
    <AlbumList v-bind:albums="albums"/>
  </section>
</template>

<script>
import albumsApi from '../services/albumsApi'; 
import AlbumList from './AlbumList'; 

export default {
  data() {
    return {
      albums: albumsApi.getAlbums()
    }; 
  },
  components: {
    AlbumList
  }
}; 
</script>
