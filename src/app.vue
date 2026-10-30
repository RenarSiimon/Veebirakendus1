<script setup>
import { ref } from 'vue';

let isPrimary = ref(true);
</script>

<template>
    <button class="button" :class="{"is-primary"}"></button>
</template>

<style>

</style>