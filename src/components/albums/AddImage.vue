// <template>
//   <form @submit.prevent="handleSubmit"> 
//     <label>
//     <span>Image</span>
//     <input v-model="album.image" required>
//     </label>
//     <button> Add </button>
//   </form>
// </template>

// <script>
// import albumsApi from '../services/albumsApi'; 

// export default {
//   data() {
//     return {
//       album: Object
//     }; 
//   },
//   methods: {
//     handleSubmit() {
//       const saved = albumsApi.add(this.image); 
//       this.$router.push(`/albums/${saved.id}`);
//     }
//   }  
// };
// </script>