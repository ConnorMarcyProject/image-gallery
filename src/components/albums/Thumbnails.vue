<template>
  <ul>
    <li
      v-for="(image, index) in images"
      :key="index">
      <h4>{{image.title}}</h4>
      <p>
        <img :src="image.url">
      </p>
      </li>
  </ul>
</template>

<script>
export default {
  props: {
    images: Array
  }
};
</script>

<style>
li {
  list-style: none;
}
ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
}
img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
</style>