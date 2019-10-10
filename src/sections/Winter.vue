<template lang="pug">
section.section
    .site-wrapper
        h2.section__header
            |Для городской зимы

        p.section__desc
            |Легкие и удобные валенки для повседневной носки. Им нипочем мокрый снег, 
            |грязь и лужи. Расчитаны на температуру от −15˚ до +7˚.

        .product-grid
            .product-grid__col
                Product(:product="productList[11]")
                Product(:product="productList[12]")

            .product-grid__col
                Product(:product="productList[13]")

                .product-advice
                    span.product-advice__title
                        |Совет

                    span.product-advice__icon.product-advice__icon--combo

                    .product-advice__text
                        |Для каждой пары валенок 
                        |доступны 3 вида стелек — 
                        |спортивная, утеплённая 
                        |и массажная. Попробуйте 
                        |все и выберите свою.



            .product-grid__col.product-grid__col--wide
                Product(:product="productList[14]").product--wide

</template>

<script>
import Product from '@/components/Product.vue';

export default {
    name: 'Winter',
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
    //@import '~@/styles/sections/winter';
</style>