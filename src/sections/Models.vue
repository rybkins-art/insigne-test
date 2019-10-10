<template lang="pug">
section.section
    .site-wrapper
        h2.section__header
            |Новые модели

        p.section__desc
            |Обновляем модели каждые три месяца. В новой коллекции теперь больше цветных 
            |и ярких моделей для всей семьи.

        ul.product-list
            li.product-list__item(v-for="productItem in Object.values(productList).slice(0, 3)")
                Product(:product="productItem")

            li.product-list__item
                .product-advice
                    span.product-advice__title
                        |Совет

                    span.product-advice__icon.product-advice__icon--size

                    .product-advice__text
                        |Возьмите валенки на пару 
                        |размеров больше. За первый 
                        |сезон валенки сядут — это 
                        |естественное свойство 
                        |шерсти.

</template>

<script>
import Product from '@/components/Product.vue';

export default {
  name: 'Models',
  components: {
      Product
  },
  data() {
      return {
          productList: this.$store.state.productList
      }
  }
}
</script>

<style scoped lang="scss">
    @import '~@/styles/components/product';
    //@import '~@/styles/sections/models';
</style>