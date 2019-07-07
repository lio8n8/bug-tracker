import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import i18n from './locale';
import router from './router';
import store from './store';
import urls from './urls';
import './registerServiceWorker';

Vue.config.productionTip = false;

const axiosBase = axios.create({
    baseURL: urls.base
});

// Vue.prototype.$http = axiosBase;
Vue.prototype.axios = axiosBase;

new Vue({
    i18n,
    router,
    store,
    render: h => h(App)
}).$mount('#app')
