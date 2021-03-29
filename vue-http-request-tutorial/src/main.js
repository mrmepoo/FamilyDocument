import { createApp } from 'vue';

import App from './App.vue';
import BaseButton from "./components/UI/BaseButton";
import BaseCard from "./components/UI/BaseCard";

const app = createApp(App);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);

app.mount('#app');
