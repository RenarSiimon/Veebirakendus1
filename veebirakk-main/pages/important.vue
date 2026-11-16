<script setup>
import { computed } from 'vue';
import ItemList from '../components/ItemList.vue';
import { items } from '../items.js';

const importantItems = computed(() =>
  items.value.filter(item => item.importance === 'high')
);
</script>

<template>
  <div class="container content mt-3">
    <ItemList :items="importantItems" title="Important Items"></ItemList>
  </div>
</template>