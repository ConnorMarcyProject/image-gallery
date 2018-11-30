<template>
  <form @submit.prevent="onAdd(image)">
    <FormControl label="Title">
      <input v-model="image.title">
    </FormControl>
    <FormControl label="Url">
      <input v-model="image.url">
    </FormControl>
    <FormControl>
      <button>Add</button>
    </FormControl>
  </form>
</template>

<script>
import FormControl from '../../../shared/FormControl'; 

export default {
  data() {
    return {
      image: {
        title: '', 
        url: ''
      }
    };
  }, 
  props: {
    onAdd: Function
  }, 
  components: {
    FormControl
  }

};
</script>

<style>

</style>
