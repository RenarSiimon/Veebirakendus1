<script setup>
defineProps({
  active: {
    type: Boolean,
    default: false
  }
})

defineEmits(['close'])
</script>

<template>
  <div class="modal" :class="{ 'is-active': active }">
    <div class="modal-background" @click="$emit('close')"></div>
    <div class="modal-content">
      <!-- Siia kuvatakse sisu, mis jääb <Modal> tagide vahele -->
      <slot></slot>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
  </div>
</template>