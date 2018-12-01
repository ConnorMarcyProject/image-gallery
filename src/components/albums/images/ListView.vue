<template>
  <section>
    <h3>List View</h3>
    <p>There are {{images.length}} image(s)</p>
    <p v-for="image in images"
      :image="image"
      :key="image.title"> 
      <img v-bind:src="image.url"/>
      {{image.title}}
    </p>
  </section>
</template>

<script>
export default {
  props: {
    images: Array,
  }
};
</script>

<style scoped lang="postcss">

</style>
