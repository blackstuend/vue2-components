import Vue from 'vue';
import App from './App.vue';

import component from './index';

Vue.use(component);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
