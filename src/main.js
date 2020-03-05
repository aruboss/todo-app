import Vue from 'vue'
import App from './App.vue'
import SortedTablePlugin from "vue-sorted-table"

Vue.use(SortedTablePlugin);

new Vue({
  el: '#app',
  render: h => h(App)
})
