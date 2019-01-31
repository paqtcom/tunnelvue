const state = {
    lives: null,
    level: null,
    state: null,
    progress: null,
    bestProgress: null,
    speed: null
};

const getters = {
    score: state => {
        const totalScore = Math.round((state.level - 1) * 100 + state.bestProgress * 100);

        if (totalScore < 0) {
            return 0;
        }

        return totalScore;
    }
};

const actions = {
    /**
     * Store the score.
     *
     * @param {object} commit
     * @param {string} token
     */
    setScore({ commit }, score) {
        commit('setScore', score);
    }
};

const mutations = {
    /**
     * Store the score.
     *
     * @param {object} state
     * @param {string} token
     */
    setScore(state, score) {
        state.lives = score.lives;
        state.level = score.level;
        state.state = score.state;
        state.progress = score.progress;
        state.bestProgress = score.bestProgress;
        state.speed = score.speed;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
