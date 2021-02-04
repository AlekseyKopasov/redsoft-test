import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import paints from '@/store/modules/paints';
import loading from '@/store/modules/loading';

export default new Vuex.Store({
	modules: [
		paints,
		loading
	],
});
