<script setup>
import { computed, ref } from 'vue';
import ItemList from './itemlist.vue';
let i = 0;
let items = ref([
  {id:i++, text:'Piim', isDone: false},
  {id:i++, text:'Viin', isDone: true},
  {id:i++, text:'Sai', isDone: false},
  {id:i++, text:'Mac', isDone: true},
]);
let newItem = ref('');

function add(){
  if(newItem.value.trim() !== '') {
    items.value.push({id:i++, text: newItem.value.trim(), isDone: false});
  }
  newItem.value = '';
}

let doneItems = computed(() => items.value.filter(item => item.isDone));
let toDoItems = computed(() => items.value.filter(item => !item.isDone));
</script>

<template>
  <div class="container content mt-3">
    <div class="field has-addons">
        <div class="control is-expanded">
            <input @keydown.enter="add" v-model="newItem" class="input" type="text" placeholder="Find a repository">
        </div>
        <div class="control">
            <button @click="add" class="button is-info">
                Add
            </button>
        </div>
    </div>
    <ItemList :items="items" title="All Items"></ItemList>
    <ItemList :items="doneItems" title="Done Items"></ItemList>
    <ItemList :items="toDoItems" title="ToDo Items"></ItemList>
  </div>
</template>

<style></style>