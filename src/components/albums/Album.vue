<template>
  <li>
    <RouterLink :to="`/albums/${album.id}`">{{album.title}}</RouterLink>
    <h2>asdf</h2>
    <p>asdf</p>
    <h2>fdsa</h2>
    <p>fdsafa</p>
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