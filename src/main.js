import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index.js';
import StorageControl from './store/storageControl.js';
import './registerServiceWorker';
import './careerOpportunities';
import * as Sentry from '@sentry/browser';
import './styles/main.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);
library.add(fab);

Vue.component('font-awesome-icon', FontAwesomeIcon);

if (process.env.VUE_APP_SENTRY_DSN) {
    Sentry.init({
        dsn: process.env.VUE_APP_SENTRY_DSN,
        integrations: [
            new Sentry.Integrations.Vue({
                Vue
            })
        ],
        debug: process.env.VUE_APP_SENTRY_DEBUG,
        environment: process.env.VUE_APP_SENTRY_ENVIRONMENT
    });
}

Vue.config.productionTip = false;

window.game = new Vue({
    router,
    store,
    data: {
        version: 0.3
    },
    render: h => h(App)
}).$mount('#app');

StorageControl.check(window.game.version);
