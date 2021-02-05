import axios from 'axios';

export default {
  state: {},

  getters: {},

  mutations: {
    getPaint() {
      const URL = 'https://reqres.in/api/products/3';

      axios
        .get(URL)
        .then(res => {
          console.log(res.data.data);
        })
        .catch(err => {
          console.log(err);
        })
    }
  },

  actions: {
    getPaint({commit}) {
      commit('getPaint');
    }
  },
};
