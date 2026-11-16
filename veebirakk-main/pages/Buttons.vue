<script setup>

import Btn from '../components/Btn.vue';





</script>



<template>

    <Btn class="is-primary">Cool button</Btn>

    <Btn class="is-primary is-rounded is-outlined is-inverted">Cool button</Btn>

    <Btn color="primary" rounded outlined inverted>Cool button</Btn>

    <Btn color="primary">Cool button</Btn>

    <Btn fullwidth >Cool button</Btn>

    <Btn state="loading" @click="console.log('yee')">Cool button</Btn>

    <Btn state="disabled">Cool button</Btn>

    <Btn class="is-primary" href="https://google.com">Cool button</Btn>

    <Btn class="is-primary" state="disabled" href="https://google.com">Cool button</Btn>



</template>