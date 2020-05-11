<template>
    <div class="home">
        <GameMain />
    </div>
</template>

<script>
// @ is an alias to /src
import GameMain from '@/components/GameMain.vue';

export default {
    name: 'home',
    components: {
        GameMain
    }
};
</script>
