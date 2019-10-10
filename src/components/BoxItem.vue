<template lang="pug">
.header-box__product
    img(:src="require(`@/assets/${product.src}`)", :alt="product.title").header-box__product-img
    span.header-box__product-label {{product.title}}

    input(type="text" v-model="amount" @change="changeAmount").header-box__product-amount
    span.header-box__product-remove(@click="removeProduct")
</template>

<script>
import backendData from '../data';

export default {
  name: 'Header',
  props: {
    product: Object,
  },
  data() {
      return {
        amount: this.$store.state.basketList[this.product.id].amount
      }
  },
  methods: {
    removeProduct() {
      this.$store.commit('removeProductFromBasket', this.product);
    },
    changeAmount (evt) {
      this.amount = parseInt(this.amount);
      if (this.amount <= 0 || !this.amount) this.amount = 1;

      this.$store.commit('changeAmount', {
        product: this.product, 
        amount: this.amount
      });
    }
  }
}
</script>

<style scoped lang="scss">
    @import "~@/styles/components/product";
    @import '~@/styles/sections/header';
</style>
