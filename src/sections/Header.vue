<template lang="pug">
header.site-header
    .site-wrapper.flex.jc-start.ai-end
        span.site-burger.js-site-burger(:class="{active: burgerActive}" @click="toggleBurgerMenu")
            span

        a(href="#").site-logo
            |Битцевская Фабрика

        nav.site-nav.js-site-nav(:class="{active: burgerActive}" @click="toggleBurgerMenu")
            ul.site-nav__list
                li.site-nav__item
                    a(href="#").site-nav__link
                        |Валенки

                li.site-nav__item
                    a(href="#").site-nav__link
                        |Галоши

                li.site-nav__item
                    a(href="#").site-nav__link
                        |Одежда

                li.site-nav__item
                    a(href="#").site-nav__link
                        |Аксессуары

                li.site-nav__item
                    a(href="#").site-nav__link
                        |О фабрике

        .header-box.js-header-box(:class="{'active': headerBoxOpened}")
            a(href="#").header-box__btn(@click.prevent="toggleBox")
                i.header-box__icon
                span.header-box__text
                    |{{productsAmount | number}} {{ productsAmount | decl(['товар', 'товара', 'товаров'])}} / {{productsPriceSummary | number}}₽

            ul.header-box__list
                li.header-box__item(v-for="product in productList")
                    BoxItem(:product="product")

</template>

<script>
import backendData from '../data';
import BoxItem from '@/components/BoxItem.vue';

export default {
  name: 'Header',
  components: {
      BoxItem
  },
  data() {
      return {
          headerBoxOpened: false,
          burgerActive: false
      }
  },
  computed: {
      productsAmount() {
          let amount = 0;

          for (let key in this.$store.state.basketList) {
              amount += this.$store.state.basketList[key].amount;
          }

          return amount;
      },
      productsPriceSummary() {
          let summary = 0;

          for (let id in this.$store.state.basketList) {
              summary += backendData.productList[id].price * this.$store.state.basketList[id].amount;
          }

          return summary;
      },
      productList() {
          let productList = [];

          for (let id in this.$store.state.basketList) {
              productList.push(backendData.productList[parseInt(id)]);
          }

          return productList;
      },
  },
  methods: {
    toggleBox() {
        if (!Object.keys(this.$store.state.basketList).length) return;
        this.headerBoxOpened = !this.headerBoxOpened;
        this.targetHandler('.header-box', () => {
            this.headerBoxOpened = false;
        });
    },
    targetHandler(target, cb) {
        var handlerFunc = (evt) => {
            // Вешаем класс - флаг на элемент
            document.querySelector(target).classList.add('targetHandler');

            // Целевой элемент события
            var $target = evt.target.closest(target);

            // Если это не target, выболняем callback
            if (!$target) {
                cb.apply(this);
                document.querySelector(target).classList.remove('targetHandler');
                document.removeEventListener('click', handlerFunc);
            }
        }

        // Если еще не повесили событие, то вешаем
        if (!document.querySelector(target).classList.contains('targetHandler') ) {
            document.addEventListener('click', handlerFunc);
        }
    },
    toggleBurgerMenu() {
        this.burgerActive = !this.burgerActive;
      }
  },
  mounted() {
    window.addEventListener('scroll', function() {
        document.querySelector('.site-header').classList.toggle('site-header--shaded', pageYOffset > 0);
    });
  }
}
</script>

<style scoped lang="scss">
    @import "~@/styles/components/product";
    @import '~@/styles/sections/header';
</style>
