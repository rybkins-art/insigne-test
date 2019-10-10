import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//Data
import backendData from './data';

export default new Vuex.Store({
  state: {
    productList: backendData.productList,
    basketList: backendData.basketList
  },
  mutations: {
    addProductToBasket (state, product) {
      if (state.basketList[product.id]) {
        state.basketList[product.id].amount++;
      } else {
        Vue.set(state.basketList, product.id, {
          amount: 1
        })
      }
    },

    removeProductFromBasket (state, product) {
      delete state.basketList[product.id];

      state.basketList = {
        ...state.basketList
      }
    },

    changeAmount (state, payload) {
      Vue.set(state.basketList, payload.product.id, {
        amount: payload.amount
      });
    }
  },

  
  actions: {
    
  }
})
