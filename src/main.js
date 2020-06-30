import Vue from 'vue';
import { Plugin } from 'vue-fragment';
import App from './App.vue';

Vue.use(Plugin);
Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount('#app');
