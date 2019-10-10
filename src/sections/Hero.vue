<template lang="pug">
.site-wrapper
    ul.hero-slider
        li.hero-slider__item(:style="{ backgroundImage: 'url(' + require('@/assets/images/hero.jpg') + ')' }")
            h1.hero-slider__header
                |Модные валенки
                |из чистой шерсти.
                |Валяем с 1897 года.

            p.hero-slider__desc
                span.text-through Женские валенки
                br
                span.text-through Лосина
                br
                b 1 790 ₽
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style scoped lang="scss">
    @import '~@/styles/sections/header';
</style>