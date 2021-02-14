import axios from 'axios';

export default {
  state: {
    paintsList: [
      {
        id: 1,
        img: {
          src: require('@/assets/img/content/products/product-1@1x.jpg'),
          srcset: require('@/assets/img/content/products/product-1@2x.jpg'),
          width: '280',
          height: '360',
          alt: 'Рождение Венеры',
        },
        title: '\u00ABРождение Венеры\u00BB',
        author: 'Сандро Боттичелли',
        oldPrice: '2000000',
        newPrice: '1000000',
        sales: '',
        status: 'in_stock'
      },
      {
        id: 2,
        img: {
          src: require('@/assets/img/content/products/product-2@1x.jpg'),
          srcset: require('@/assets/img/content/products/product-2@2x.jpg'),
          width: '280',
          height: '360',
          alt: 'Тайная вечеря',
        },
        title: '\u00ABТайная вечеря\u00BB',
        author: 'Леонардо да Винчи',
        oldPrice: '',
        newPrice: '5000000',
        sales: '',
        status: 'in_stock'
      },
      {
        id: 3,
        img: {
          src: require('@/assets/img/content/products/product-3@1x.jpg'),
          srcset: require('@/assets/img/content/products/product-3@2x.jpg'),
          width: '280',
          height: '360',
          alt: 'Сотворение Адама',
        },
        title: '\u00ABСотворение Адама\u00BB',
        author: 'Микеланджело',
        oldPrice: '6000000',
        newPrice: '5000000',
        sales: '',
        status: 'in_stock'
      },
      {
        id: 4,
        img: {
          src: require('@/assets/img/content/products/product-4@1x.jpg'),
          srcset: require('@/assets/img/content/products/product-4@2x.jpg'),
          width: '280',
          height: '360',
          alt: 'Урок анатомии',
        },
        title: '\u00ABУрок анатомии\u00BB',
        author: 'Рембрандт',
        oldPrice: '',
        newPrice: '',
        sales: 'Продано на аукционе',
        status: 'sold'
      },
    ],
    picInBasket: [],
  },

  getters: {
    paintsList: s => s.paintsList,
  },

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
    },

    savePaintId(state, id) {
      const arr = state.picInBasket;
      for (let i = 0; i < arr.length; i+= 1) {
        if (!+arr[i]) {
          arr.splice(arr[i], 1);
        }
        if (+arr[i] === +id) {
          return;
        }
      }

      state.picInBasket.push(id);
      localStorage.setItem('picInBasketIdList', state.picInBasket);
    },

    loadPaintsInBasket(state) {
      let picInBasket = localStorage.getItem('picInBasketIdList');
      if (!picInBasket) { return; }

      state.picInBasket = picInBasket.split('') ?? [];

      for (let id of state.picInBasket) {
        id = parseInt(id, 10);

        if (id) {
          state.paintsList.find(item => {
            item.id === id ? item.status = 'in_basket' : false;
          });
        }
      }
    },
  },

  actions: {
    getPaint({ commit }) {
      commit('getPaint');
    },

    savePaintId({ commit }, id) {
      commit('savePaintId', id);
    },

    loadPaintsInBasket({ commit }) {
      commit('loadPaintsInBasket');
    }
  },
};
