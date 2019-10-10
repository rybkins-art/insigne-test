<template lang="pug">
  .wrapper
    Header
    Hero
    Models
    News
    Walk
    History
    Childrens
    Winter
    Combo
    Contacts
    Footer
</template>

<script>

//import Product from './components/Product.vue';

import Header from './Header.vue';
import Hero from './Hero.vue';
import Models from './Models.vue';
import News from './News.vue';
import Walk from './Walk.vue';
import History from './History.vue';
import Childrens from './Childrens.vue';
import Winter from './Winter.vue';
import Combo from './Combo.vue';
import Contacts from './Contacts.vue';
import Footer from './Footer.vue';


export default {
  name: 'Sections',
  components: {
    Header,
    Hero,
    Models,
    News,
    Walk,
    History,
    Childrens,
    Winter,
    Combo,
    Contacts,
    Footer
  }
}
</script>
