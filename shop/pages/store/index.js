import Vuex from "vuex";

const store = () => {
  return new Vuex.Store({
    state: {
      counter: 0,
      cart: {}
    },

    mutations: {
      addItem: (state, item) => {
        if (item.id in state.cart) {
          console.log("Existed!")
        } else {
          state.counter++;
          let stateItem = {...item};
          state.cart[item.id] = stateItem;
        }
      }
    }
  });
};

export default store;
