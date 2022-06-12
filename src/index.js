import Checkbox from './components/checkbox/Checkbox.vue';

Checkbox.install = function (Vue) {
  Vue.component('checkboxItem', Checkbox);
};

export default Checkbox;
