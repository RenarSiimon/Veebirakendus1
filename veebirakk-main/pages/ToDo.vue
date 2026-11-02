<script setup>
import { computed, ref } from 'vue';
import ItemList from '../components/ItemList.vue';

let message = ref('');
let newItemPriority = ref('2'); // Vaikeväärtus: Keskmine
let i = 1;

let items = ref([
    {id: i++, text: 'Piim', isDone: false, priority: 2},
    {id: i++, text: 'Viin', isDone: true, priority: 3},
    {id: i++, text: 'Õlu', isDone: false, priority: 1},
    {id: i++, text: 'Sai', isDone: true, priority: 2},
]);

function add(){
  if(message.value.trim() !== '') {
    items.value.push({
      id: i++, 
      text: message.value.trim(), 
      isDone: false, 
      priority: Number(newItemPriority.value)
    });
  }
  message.value = '';
  newItemPriority.value = '2';
}

// Sorteerimisfunktsioon: kõige olulisem (suurem number) ees
const sortByPriority = (a, b) => b.priority - a.priority;

// Sorteerime massiivi koopiat computed omaduste sees
let allItems = computed(() => [...items.value].sort(sortByPriority));
let doneItems = computed(() => [...items.value].filter(item => item.isDone).sort(sortByPriority));
let toDoItems = computed(() => [...items.value].filter(item => !item.isDone).sort(sortByPriority));
</script>

<template>
    <div class="container content mt-2">
        <!-- Sisestusväli ja olulisuse valik -->
        <div class="field has-addons">
            <div class="control is-expanded">
                <input @keydown.enter="add" v-model="message" class="input" type="text" placeholder="Add item">
            </div>
            <div class="control">
                <div class="select">
                    <select v-model="newItemPriority">
                        <option value="3">Kõrge</option>
                        <option value="2">Keskmine</option>
                        <option value="1">Madal</option>
                    </select>
                </div>
            </div>
            <div class="control">
                <button @click="add" class="button is-info">
                    Add
                </button>
            </div>
        </div>
        
        <!-- Nimekirjad -->
        <ItemList :items="allItems" title="All items"></ItemList>
        <ItemList :items="doneItems" title="Done items"></ItemList>
        <ItemList :items="toDoItems" title="ToDo items"></ItemList>
    </div>
</template>

<style></style>