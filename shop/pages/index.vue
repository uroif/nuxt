<template>
  <section class="container">
    <div class="cart-counter">Shopping Cart : ({{ cartTotal }})</div>

    <div class="product-list">
      <ProductCard v-for="(item, index) in products" :key="index" :item="item" :index="index"/>
    </div>

  </section>
</template>

<script>
  import ProductCard from "@/components/ProductCard";

  export default {
    components: {ProductCard},
    data() {
      return {
        products: [
          {
            id: 1,
            name: "Quan nam",
            price: 100,
            img: "logo.png"
          },
          {
            id: 2,
            name: "Quan nu",
            price: 200,
            img: "logo.png"
          },
          {
            id: 3,
            name: "Quan ong",
            price: 300,
            img: "logo.png"
          }
        ]
      };
    },

    mounted() {
      if (localStorage.cartTotal) {
        this.$store.state.counter = localStorage.counter;
      }

      if (localStorage.getItem("cart")) {
        try {
          this.$store.state.cart = JSON.parse(localStorage.getItem("cart"));
        } catch (e) {
          localStorage.removeItem("cart");
        }
      }
    },

    computed: {
      cartTotal() {
        return this.$store.state.counter;
      },
      cart() {
        return this.$store.state.cart;
      }
    }
  };
</script>

<style>
  .container {
    width: 800px;
    height: 100%;
    margin: 0 auto;
    padding: 50px 0;
  }

  .cart-counter {
    width: 100%;
    float: left;
    padding: 20px 0;
    font-size: 20px;
  }

  .product-list {
    width: 100%;
    float: left;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
  }

</style>

