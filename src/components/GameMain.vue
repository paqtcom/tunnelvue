<template>
    <svg
        version="1.1"
        baseProfile="full"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:svg="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        style="position: fixed; width: 100%; height: 100%; margin: 0;"
    >
        >
        <TunnelComponent />
        <ExplosionComponent />
        <HudComponent />
        <FogComponent />
        <BannerComponent />
        <BarrierComponent />
    </svg>
</template>

<script>
import TunnelComponent from '@/components/TunnelComponent.vue';
import ExplosionComponent from '@/components/ExplosionComponent.vue';
import HudComponent from '@/components/HudComponent.vue';
import FogComponent from '@/components/FogComponent.vue';
import BannerComponent from '@/components/BannerComponent.vue';
import BarrierComponent from '@/components/BarrierComponent.vue';
import { mapActions } from 'vuex';
import MG from '../game/main.js';

export default {
    name: 'GameMain',

    components: {
        TunnelComponent,
        ExplosionComponent,
        HudComponent,
        FogComponent,
        BannerComponent,
        BarrierComponent
    },
    /**
     * Add all the properties found in the data object to Vue’s reactivity system.
     *
     * @return {object}
     */
    data() {
        return {
            lives: 0,
            level: 0,
            state: null,
            progress: 0.0,
            bestProgress: 0.0,
            speed: 0
        };
    },
    /**
     * Check status on mount.
     */
    mounted() {
        MG.pause = true;
        MG.init();
        setInterval(this.checkStatus.bind(this), 100);
    },

    methods: {
        ...mapActions({
            setScore: 'game/setScore'
        }),

        /**
         * Check the lives and level from the game.
         */
        checkStatus() {
            this.lives = MG.game.lives;
            this.level = MG.game.level;
            this.state = MG.game.state;
            this.progress = MG.game.progress;
            this.bestProgress = MG.game.bestProgress;
            this.speed = MG.hud.speed;
        }
    },
    watch: {
        /**
         * Watch for state changes in the game.
         *
         * @param {object} state
         */
        state(state) {
            this.setScore({
                lives: this.lives,
                level: this.level,
                state: this.state,
                progress: this.progress,
                bestProgress: this.bestProgress,
                speed: this.speed
            });

            if (state == 'crashed' && this.lives == 1) {
                setTimeout(() => {
                    this.$router.push({
                        name: 'landing'
                    });
                }, 2000);
            }
        }
    }
};
</script>
