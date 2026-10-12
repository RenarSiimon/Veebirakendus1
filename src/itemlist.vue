<script setup>
defineProps(['items', 'title']);
</script>

<template>
  <h3>{{ title }}</h3>
  <ul>
    <li v-for="item in items" :key="item.id">
      {{ item.text }}
      <input type="checkbox" v-model="item.isDone" class="ml-2">
    </li>
  </ul>
</template>