let button = document.getElementById('button');
onsole.log({ button });
button.addEventListener('click', () => {
    if (button.classList.contains('is-primary')) {
        button.classList.replace('is-primary', 'is-warning');
    } else {
        button.classList.replace('is-warning', 'is-primary');
    }
});

let input = document.querySelector('#input');
let reverseText = document.querySelector('#reverse-text');

input.addEventListener('change', () => {
    reverseText.innerHTML = input.value.split('').reverse().join('');
});


import { createApp } from "vue";
import app from './app.vue'

const app = createApp(app)