<template lang="pug">
section.section.childrens-section
    .site-wrapper
        h2.section__header
            |Для самых маленьких

        p.section__desc
            |Детские модели с противоскользящей подошвой Vibram® и массажными стельками 
            |Adiprene®. Тёплые, не скользкие и развитой супинацией стопы.


        ul.product-list
            li.product-list__item(v-for="productItem in Object.values(productList).slice(6, 10)")
                Product(:product="productItem")


    .section.section--colored-blue
        .site-wrapper.flex.js-start.flex-nowrap
            .video-content
                .video-content__preview

                iframe.video-content__video#video(width="700" height="470" src="//www.youtube.com/embed/brveQGvr7Ro?rel=0" frameborder="0" allowfullscreen)

            .section__inner
                h2.section__header
                    |Детские валенки
                    |против зимних ботинок

                p.section__desc
                    |Сюжет в передаче 
                    |«Ваш малыш», канал «Семейный»,
                    |апрель 2017 года

                span.text-hint
                    |Спойлер: валенки победили
</template>

<script>
import Product from '@/components/Product.vue';

export default {
    name: 'Childrens',
    components: {
        Product
    },
    data() {
        return {
            productList: this.$store.state.productList
        }
    },
    mounted() {
        // Запускаем проигрыватель
        document.querySelector('.video-content').addEventListener('click', function(evt) {
            this.classList.add('is-playing');

            document.getElementById('video').src += "&autoplay=1";
            evt.preventDefault();
        });
    }
}
</script>

<style scoped lang="scss">
    @import '~@/styles/components/product';
    @import '~@/styles/sections/childrens';
</style>