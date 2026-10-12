<script setup>
import modal from './modal.vue';
defineprops(['active', 'url']);
</script>
<template>
<Modal :active="active">
  <p class="image is-4by3">
    <img :src="url" alt="">
  </p>
</Modal>
</template>