import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import paints from '@/store/modules/paints';

export default new Vuex.Store({
  modules: [
    paints,
  ],
});
