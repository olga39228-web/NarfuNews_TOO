import { createApp } from 'vue';
import App from './App.vue';
import '@mdi/font/css/materialdesignicons.css';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';

import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import { ru } from 'vuetify/locale';

const vuetify = createVuetify({
  components,
  directives,
  locale: {
    locale: 'ru',
    messages: { ru },
  },
  theme: {
    defaultTheme: "light",
  
  },
})

const app = createApp(App);

app.use(vuetify)
app.mount('#app')
