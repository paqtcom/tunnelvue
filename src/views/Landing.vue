<template>
    <div class="landing">
        <div class="main"></div>
        <div class="modal">
            <GameLogoComponent />
            <h1 class="modal_header">Thank you for playing!</h1>
            <div class="modal_body">
                <p>
                    Awesome! You are one step closer to winning a Vuejs t-shirt signed by
                    <a href="https://evanyou.me" target="_blank" rel="noopener noreferrer">Evan You</a>.<br />
                    <a href="https://www.way2web.nl/werken-bij-way2web/">Join us</a> at
                    <a href="https://vuejs.amsterdam" target="_blank" rel="noopener noreferrer">Vuejs Amsterdam</a> to
                    reach a high score and claim your prize.
                </p>
                <p>
                    Can’t beat the game?
                    <a href="https://github.com/Way2Web/tunnelvue" target="_blank" rel="noopener noreferrer">
                        Become a game changer!
                    </a>
                </p>
                <p>
                    Your score: <strong>{{ score }}</strong>
                </p>
                <social-sharing
                    url="https://tunnelvue.way2web.nl"
                    title="TunnelVue"
                    description="Check out @way2web's TunnelVue and play to win a shirt signed bij Evan You at https://vuejs.amsterdam!"
                    quote="Check out @way2web's TunnelVue and play to win a shirt signed bij Evan You at https://vuejs.amsterdam!"
                    hashtags="vuejs,way2web,amsterdam,tunnelvue"
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
