<template lang="pug">
article.product(:class="{ 'product--added': inbox, ['product--'+ product.status]: product.status }")
  .image-block(@click.prevent="addProductToBasket")
    .product__overlay
      a(href="#").product__add-box
        span.product__add-box-icon
        span.product__add-box-text 
    .image-block__inner
      img(:src="require(`@/assets/${product.src}`)" :alt="product.title").product__img

  .product__footer
    a(href="#").product__title
      span.product__gender {{gender}}
      span.product__label {{product.title}}

    span.product__price
      |{{product.price | number}} ₽
</template>

<script>
import backendData from '../data';

export default {
  name: "Product",
  props: {
    product: Object,
  },
  data() {
    return {
      gender: backendData.genderMap[this.product.gender],
    }
  },
  computed: {
    inbox() {
      return this.$store.state.basketList[this.product.id]
    }
  },
  methods: {
    addProductToBasket() {
      if (this.$store.state.basketList[this.product.id]) {
        this.$store.commit('removeProductFromBasket', this.product);
      } else {
        this.$store.commit('addProductToBasket', this.product);
      }
    }
  }
};
</script>

<style scoped lang="scss">
  @import "~@/styles/components/product";
</style>
