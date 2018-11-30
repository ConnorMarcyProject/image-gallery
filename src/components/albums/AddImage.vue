<template>
  <form @submit.prevent="handleSubmit"> 
    <label>
    <span>Image</span>
    <input v-model="album.image" required>
    </label>
    <button> Add </button>
  </form>
</template>

<script>