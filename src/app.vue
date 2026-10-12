<script setup>
import { ref } from 'vue';
import Modal from './modal.vue';
import ImgModal from './components/imgModal.vue';

let modal1Open = ref(false);
let modal2Open = ref(false);

</script>

<template>
  <div class="container content mt-3">
    <button class="button is-primary" @click="modal1Open = true">Open Modal 1</button>
    <Modal
      :active="modal1Open"
      @close="modal1Open = false"
    >
      <div class="box">I'm in a box.</div>
    </Modal>

    <button class="button is-success" @click="modal2Open = true">Open Modal 2</button>
    <ImgModal :active="modal2Open" @close="modal2Open = false" url="https://picsum.photos/1280/960?r=2"></ImgModal>
  </div>
</template>

<style></style>