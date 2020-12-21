import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

const i18n = new VueI18n({
    locale: process.env.VUE_APP_I18N_LOCALE || 'en',
    fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
    messages: require('../i18n.data')
})

new Vue({
    i18n,
    render: h => h(App)
}).$mount('#app');