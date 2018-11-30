<template>
  <Modal :onClose="() => this.$router.back()">
      <section>
        <h3>Gallery View</h3>
        {{selectedIndex}}
        <p>
          <button @click="setIndex(-1)">&lt;</button>
          {{color}}
          <button @click="setIndex(1)">&gt;</button>
        </p>
      </section>
  </Modal>
</template>

<script>
import Modal from '../../shared/Modal';

export default {
  data() {
    return {
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
    albums() {
      return this.albums[this.selectedIndex];
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

</style>
