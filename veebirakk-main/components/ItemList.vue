<script setup>
defineProps(['items', 'title']);
</script>

<template>
    <div class="box my-3">
        <h2 class="title is-4">{{ title }}</h2>
        <ul>
            <li v-for="item in items" :key="item.id" class="is-flex is-align-items-center py-1">
                <span :class="{ 'has-text-grey-light': item.isDone }" class="mr-3">
                    {{ item.text }}
                </span>
                
                <!-- Olulisuse silt värvidega -->
                <span class="tag mr-3" :class="{
                    'is-danger': item.priority === 3,
                    'is-warning': item.priority === 2,
                    'is-success': item.priority === 1
                }">
                    {{ item.priority === 3 ? 'Kõrge' : item.priority === 2 ? 'Keskmine' : 'Madal' }}
                </span>

                <input type="checkbox" v-model="item.isDone">
            </li>
        </ul>
    </div>
</template>

<style scoped>
</style>