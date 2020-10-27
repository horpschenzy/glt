require('./bootstrap')
import { InertiaApp } from '@inertiajs/inertia-vue'
import Vue from 'vue'
import VueSweetalert2 from 'vue-sweetalert2';

Vue.use(InertiaApp)
Vue.use(VueSweetalert2);
const app = document.getElementById('app')

new Vue({
  render: h => h(InertiaApp, {
    props: {
      initialPage: JSON.parse(app.dataset.page),
      resolveComponent: name => import(`./Pages/${name}`).then(module => module.default),
    },
  }),
}).$mount(app)
