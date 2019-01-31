/* eslint-disable no-console */

import { register } from 'register-service-worker';

if (process.env.NODE_ENV === 'production') {
    register(`${process.env.BASE_URL}service-worker.js`, {
        /**
         * Service worker is ready.
         */
        ready() {
            console.log(
                'App is being served from cache by a service worker.\n' +
                    'For more details, visit https://goo.gl/AFskqB'
            );
        },
        /**
         * Service worker is cached.
         */
        cached() {
            console.log('Content has been cached for offline use.');
        },
        /**
         * Service worker is updated.
         */
        updated() {
            console.log('New content is available; please refresh.');
        },
        /**
         * Service worker is offline.
         */
        offline() {
            console.log('No internet connection found. App is running in offline mode.');
        },
        /**
         * Service worker has an error.
         *
         * @param {object} error
         */
        error(error) {
            console.error('Error during service worker registration:', error);
        }
    });
}
