<script setup>
import { ref, computed } from 'vue';
import ItemList from './itemlist.vue';

let i = 0;
let newItem = ref('');
let items = ref([
  { id: i++, text: 'Piim', isDone: false },
  { id: i++, text: 'Viin', isDone: true },
  { id: i++, text: 'Sai', isDone: false },
  { id: i++, text: 'Mac', isDone: true },
]);

function add() {
  if (newItem.value.trim() !== '') {
    items.value.push({ id: i++, text: newItem.value.trim(), isDone: false });
  }
  newItem.value = '';
}

let doneItems = computed(() => items.value.filter(item => item.isDone));
let toDoItems = computed(() => items.value.filter(item => !item.isDone));
</script>

<template>
  <div class="container content mt-3">
    <!-- Input Field and Add Button -->
    <div class="field has-addons">
      <div class="control is-expanded">
        <input 
          v-model="newItem" 
          @keydown.enter="add" 
          class="input" 
          type="text" 
          placeholder="Add new item..."
        >
      </div>
      <div class="control">
        <button @click="add" class="button is-info">Add</button>
      </div>
    </div>

    <!-- Component instances for each category -->
    <ItemList :items="items" title="All Items" />
    <ItemList :items="doneItems" title="Done Items" />
    <ItemList :items="toDoItems" title="ToDo Items" />
  </div>
</template>