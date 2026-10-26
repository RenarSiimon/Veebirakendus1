<script setup>
defineProps(['active']);
import Modal from './components/modal.vue';
import ImgModal from './components/imgModal.vue';
</script>
<template>
    <div class="modal" :class="{ 'is-active': active }">
        <div class="modal-background" @click="$emit('close')"></div>
        <div class="modal-content">
            <slot></slot>
        </div>
        <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
    </div>
</template>