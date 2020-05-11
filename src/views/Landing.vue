<template>
    <div class="landing">
        <div class="main"></div>
        <div class="modal">
            <GameLogoComponent />
            <h1 class="modal_header">Thank you for playing!</h1>
            <div class="modal_body">
                <p>
                    Awesome! At Way2Web we are always looking for Laravel/Vue.js specialists to work on our high impact
                    projects. So we're curious to hear if you, or someone you know might like to work with us. You can
                    find out more
                    <a href="https://www.way2web.nl/werken-bij-way2web/" target="_blank" rel="noopener noreferrer">
                        about us
                    </a>
                    or contact us at <a href="mailto: leeronskennen@way2web.nl">leeronskennen@way2web.nl</a>.
                </p>
                <p>
                    By the way, if can’t beat the game, you can always
                    <a href="https://github.com/Way2Web/tunnelvue" target="_blank" rel="noopener noreferrer">
                        become a game changer </a
                    >!
                </p>
                <p>
                    Your score: <strong>{{ score }}</strong>
                </p>
                <social-sharing
                    url="https://tunnelvue.way2web.nl"
                    title="TunnelVue"
                    description="Check out @way2web's TunnelVue!"
                    quote="Check out @way2web's TunnelVue!"
                    hashtags="laravel,vuejs,way2web,tunnelvue"
                    inline-template
                >
                    <div>
                        <network network="email">
                            <font-awesome-icon :icon="['fas', 'envelope']" size="lg" fixed-width />
                        </network>
                        <network network="facebook">
                            <font-awesome-icon :icon="['fab', 'facebook']" size="lg" fixed-width />
                        </network>
                        <network network="reddit">
                            <font-awesome-icon :icon="['fab', 'reddit']" size="lg" fixed-width />
                        </network>
                        <network network="twitter">
                            <font-awesome-icon :icon="['fab', 'twitter']" size="lg" fixed-width />
                        </network>
                        <network network="whatsapp">
                            <font-awesome-icon :icon="['fab', 'whatsapp']" size="lg" fixed-width />
                        </network>
                    </div>
                </social-sharing>
            </div>
            <div class="modal_footer"><button class="btn btn-primary" @click="retry">Keep on practicing</button></div>
            <a href="https://www.way2web.nl" target="_blank" rel="noopener noreferrer"> <W2WLogoComponent /> </a>
        </div>
    </div>
</template>
<script>
import W2WLogoComponent from '@/components/W2WLogoComponent.vue';
import GameLogoComponent from '@/components/GameLogoComponent.vue';
import { mapGetters } from 'vuex';
import SocialSharing from 'vue-social-sharing';

export default {
    components: {
        W2WLogoComponent,
        GameLogoComponent,
        SocialSharing
    },
    computed: {
        ...mapGetters({
            score: 'game/score'
        })
    },
    methods: {
        /**
         * Return to the game.
         */
        retry() {
            location.href = '/';
        }
    }
};
</script>
