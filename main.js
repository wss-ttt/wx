import Vue from 'vue'
import App from './App'
import store from './store/index'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
    store // 注入store
})
app.$mount()
Vue.prototype.$BASE_URL = 'https://m.myxiaodi.com/yrg/'