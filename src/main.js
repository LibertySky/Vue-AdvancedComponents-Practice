import { createApp } from 'vue';

import App from './App';
// global components
import BaseCard from './components/UI/BaseCard';
import BaseButton from './components/UI/BaseButton';
import BaseModal from './components/UI/BaseModal';

const app = createApp(App);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-modal', BaseModal);

app.mount('#app');
