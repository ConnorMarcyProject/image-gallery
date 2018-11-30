<template>
  <li>
    <RouterLink :to="`/albums/${album.id}`">{{album.title}}</RouterLink>
  </li>
</template>

<script>
export default {
  props: {
    album: Object
  }
}; 
</script>

<style scoped>
li {
  border: 2px solid maroon;
  border-radius: 5px;
}
</style>