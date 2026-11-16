<script setup>
import { computed } from 'vue';

const props = defineProps({
    variant: {
        type: String,
        default: 'info',
        validator: (value) => ['info', 'success', 'warning', 'danger'].includes(value)
    },
    title: {
        type: String,
        default: ''
    },
    dismissible: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(['close']);

const variantClass = computed(() => `is-${props.variant}`);
</script>

<template>
    <article :class="['message', variantClass]">
        <div v-if="title || dismissible" class="message-header">
            <p>{{ title }}</p>
            <button
                v-if="dismissible"
                class="delete"
                aria-label="delete"
                @click="emit('close')"
            ></button>
        </div>
        <div class="message-body">
            <slot>Siia tuleb teate sisu...</slot>
        </div>
    </article>
</template>