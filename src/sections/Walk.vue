<template lang="pug">
section.section
    .site-wrapper
        h2.section__header
            |Для долгих прогулок

        p.section__desc
            |В этих валенках можно гулять 5—6 часов подряд. C массажной стелькой ноги 
            |не устанут. Резиновая подошва не скользит и не промерзает.

        .product-grid
            .product-grid__col
                Product(:product="productList[4]")

                .product-advice
                    span.product-advice__title
                        |Совет

                    span.product-advice__icon.product-advice__icon--heat

                    .product-advice__text
                        |Не берите слишком тёплые 
                        |валенки для мягкой зимы. 
                        |Ногам будет жарко, а в обуви 
                        |будет скапливаться влага. 
                        |Валенки испортятся.


            
            .product-grid__col.product-grid__col--wide
                Product(:product="productList[15]").product--wide

            .product-grid__col
                Product(:product="productList[5]")
                Product(:product="productList[6]")

</template>

<script>
import Product from '@/components/Product.vue';

export default {
  name: 'Walk',
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
</style>