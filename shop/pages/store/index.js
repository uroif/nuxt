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

          // Save counter to localStorage
          localStorage.counter = state.counter;

          // Save item to cart
          let stateItem = {...item};
          state.cart[item.id] = stateItem;

          // Save object to localStorage
          let parsed = JSON.stringify(state.cart);
          localStorage.setItem("cart", parsed);
        }
      }
    }
  });
};

export default store;
