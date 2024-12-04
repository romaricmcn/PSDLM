import { createApp } from 'vue';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import App from './App.vue'
import router from './router'
// Création de l'application Vue
const app = createApp(App);
// Ajout des plugins à l'application
app.use(router);
// Montage de l'application dans la balise #app de index.html
app.mount('#app');
