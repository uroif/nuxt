<template>
    <div class="product-card">
      <img :src="item.img" class="product-card__img" alt="">
      <h3 class="product-card__name">{{ item.name }}</h3>
      <span>${{ item.price }}</span>
      <button class="product-card__btn" @click="addItem">Add To Cart</button>
    </div>
</template>

<script>
    export default {
      props: {
        item: {
          type: Object,
          required: true
        },
        index: {
          type: Number,
          required: true
        }
      },
      methods: {
        addItem() {
          this.$store.commit("addItem", this.item);
        }
      }
    };
</script>

<style>

  .product-card {
    width: 30%;
    height: 200px;
  }

  .product-card__img {
    width: 100%;
    float: left;
  }

  .product-card__name {
    font-size: 20px;
    padding: 10px 0;
  }

  .product-card__btn {
    padding: 5px 20px;
  }
</style>
