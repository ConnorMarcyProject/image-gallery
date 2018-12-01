<template>
  <section>
    <h3>List View</h3>
    <p>There are {{images.length}} image(s)</p>
    <p id="asdf" v-for="image in images"
      :image="image"
      :key="image.title"> 
      <img id="dog-img" v-bind:src="image.url"/>
      <span id="dog-title">{{image.title}}</span>
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
#asdf {
  display: flex;
  align-items: center;
  justify-content: center;
}

#dog-img {
  border: 3px solid maroon;
  border-radius: 5px;
}

#dog-title {
  margin-left: 30px;
  padding: 20px;
  background: rgba(128, 0, 0, 1);
  color: white;
  font-weight: bold;
  border-radius: 5px;
}
</style>
