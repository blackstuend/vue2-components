import A from './components/A.vue';
import B from './components/B.vue';

export default {
  A,
  B,
  install(Vue) {
    Vue.component('AItem', A);
    Vue.component('BItem', B);
  },
};
