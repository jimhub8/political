import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui';
Vue.use(ElementUI, { locale });


import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css';

// window.eventBus = new Vue()
const eventBus = new Vue();

export default eventBus;

Vue.config.productionTip = false


import router from './router'




new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
