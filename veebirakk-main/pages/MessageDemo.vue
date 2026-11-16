<script setup>
import { ref } from 'vue';
import Message from '../components/Message.vue';

const showDismissible = ref(true);

const handleClose = () => {
    showDismissible.value = false;
};
</script>

<template>
    <div class="container" style="padding: 20px;">
        <h1 class="title">Message Komponendi Demo</h1>
        <p class="subtitle">Näited erinevate propide ja valideerimisega teadetest.</p>

        <!-- Tavaline info teade -->
        <Message variant="info" title="Informatsioon">
            See on tavaline info-teade. Propide valideerimine tagab, et lubatud on vaid kindlad tüübid.
        </Message>

        <!-- Edu teade -->
        <Message variant="success" title="Õnnestus!">
            Sinu andmed on edukalt salvestatud.
        </Message>

        <!-- Hoiatus -->
        <Message variant="warning" title="Hoiatus">
            Palun kontrolli oma sisestatud välju enne jätkamist.
        </Message>

        <!-- Veateade -->
        <Message variant="danger" title="Viga!">
            Midagi läks valesti. Proovi uuesti hiljem.
        </Message>

        <!-- Sulgetav teade -->
        <Message v-if="showDismissible" variant="info" title="Sulgetav teade" :dismissible="true" @close="handleClose">
            Selle teate saad ristist sulgeda!
        </Message>
        <p v-else style="color: gray; font-style: italic;">Teade suleti.</p>
    </div>
</template>