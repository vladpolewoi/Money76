import VueDevtools from 'nativescript-vue-devtools';
import Vue from 'nativescript-vue';
import MainLayout from './layouts/Main.vue';
import store from './store';

if (TNS_ENV !== 'production') {
  Vue.use(VueDevtools, { host: '192.168.100.5' });
}

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production');

new Vue({
  store,
  render: (h) => h('frame', [h(MainLayout)]),
}).$start();
