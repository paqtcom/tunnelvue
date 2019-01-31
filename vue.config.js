// vue.config.js
module.exports = {
    pwa: {
        workboxOptions: {
            skipWaiting: true,
            // https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle#skip_the_waiting_phase
            clientsClaim: true
            // https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle#clientsclaim
        }
    }
};
