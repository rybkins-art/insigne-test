import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false;

Vue.filter('decl', function (number, titles) {
  let cases = [2, 0, 1, 1, 1, 2];  
  return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
});

Vue.filter('number', function (x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
})



new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
