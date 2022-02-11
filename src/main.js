import { createApp } from 'vue'
import App from './App.vue'
import store from './vuex/store'
import svgIcon from './components/svgIcon/index.vue'
import './assets/css/reset.css';
import './assets/css/border.css';

createApp(App)
  .use(store)
  .component('svg-icon', svgIcon)
  .mount('#app');
