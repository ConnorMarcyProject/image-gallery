<template>
  <Modal :onClose="() => this.$router.back()">
      <section>
        <h3>Gallery View</h3>
        <!-- {{selectedIndex}} -->
        <p>
          <button @click="setIndex(-1)">&lt;</button>
          <img v-bind:src="image.url">
          <button @click="setIndex(1)">&gt;</button>
        </p>
      </section>
  </Modal>
</template>

<script>
import Modal from '../../../shared/Modal';

export default {
  data() {
    return {
      // images: Array,
      selectedIndex: 0
    };
  },
  props: {
    images: Array
  },
  components: {
    Modal
  },
  computed: {
    image() {
      return this.images[this.selectedIndex];
    }
  },
  methods: {
    setIndex(amt) {
      this.selectedIndex += amt;
      if(this.selectedIndex === this.albums.length) {
        this.selectedIndex = 0;
      }
      else if(this.selectedIndex < 0) {
        this.selectedIndex = this.albums.length - 1;
      }
    }
  }
};
</script>

<style>
img {
  width: 200px; 
  height: 200px; 
}
</style>
