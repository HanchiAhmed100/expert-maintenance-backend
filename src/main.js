import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import 'uikit/dist/js/uikit-icons.min.js';
import 'uikit/dist/css/uikit.min.css';
import 'uikit/dist/js/uikit.min.js';

Vue.use(require('vue-moment'));


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
