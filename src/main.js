import Vue from 'vue';
import Checkbox from '../dist/index';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(Checkbox);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
