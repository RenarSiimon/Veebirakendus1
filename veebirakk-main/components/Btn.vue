<script setup>
import { computed } from 'vue';

const props = defineProps({
    class: {
        type: String,
        default: ''
    },
    color: {
        type: String,
        default: '',
        validator(value, props) {
            // The value must match one of these strings
            return [
                'success',
                'warning',
                'danger',
                'info',
                'light',
                'dark',
                'ghost',
                'white',
                'black',
                'text',
            ].includes(value)
        }
    },
    size: {
        type: String,
        validator(value, props) {
            // The value must match one of these strings
            return [
                'small',
                'medium',
                'large',
                'normal',
            ].includes(value)
        }
    },
    fullwidth: Boolean,
    outlined: Boolean,
    rounded: Boolean,
    inverted: Boolean,
    state: {
        type: String,
        validator(value, props) {
            // The value must match one of these strings
            return [
                'hover',
                'active',
                'focus',
                'loading',
                'static',
                'disabled'
            ].includes(value)
        }
    },
    href: String,
});

let computedClass = computed(() => {
    let combined = '';
    combined += props.class
    if(props.color) {
        combined += ' is-' + props.color;
    }
    if(props.size) {
        combined += ' is-' + props.size;
    }
    if(props.fullwidth) {
        combined += ' is-fullwidth';
    }
    if(props.outlined) {
        combined += ' is-outlined';
    }
    if(props.rounded) {
        combined += ' is-rounded';
    }
    if(props.inverted) {
        combined += ' is-inverted';
    }
    if(props.state && props.state !== 'disabled') {
        combined += ' is-' + props.state;
    }
    return combined;
});

</script>
<template>
    <a v-if="href" class="button" :class="computedClass" @click="$emit('click', $event)" :href="href">
        <slot></slot>
    </a>
    <button v-else class="button" :class="computedClass" :disabled="state === 'disabled'" @click="$emit('click', $event)">
        <slot></slot>
    </button>
</template>