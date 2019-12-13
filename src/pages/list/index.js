import Vue from 'vue';
import Tpl from './index.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from '../../store';
Vue.use(ElementUI);

new Vue({
  store,
  render: h => h(Tpl),
}).$mount('#app');
