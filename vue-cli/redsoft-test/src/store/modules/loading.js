export default {
	state: {
		loading: false,
	},

	getters: {},

	mutations: {
		setLoading() {
			this.state.loading = !this.state.loading;
		}
	},

	actions: {
		setLoading({ commit }) {
			commit('setLoading');
		}
	},
};
