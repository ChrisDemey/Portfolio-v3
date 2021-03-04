import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Multiselect from 'vue-multiselect'
import '@/assets/css/tailwind.css'

Vue.component('multiselect', Multiselect)

Vue.component('Container', () => import('./components/Container.vue'))

Vue.component('Navbar', () => import('./components/navbar/Navbar.vue'))

Vue.component('Title', () => import('./components/home/me/Title.vue'))
Vue.component('Frameworks', () => import('./components/home/frameworks/Frameworks.vue'))

Vue.component('Paragraph', () => import('./components/about/Paragraph.vue'))

Vue.component('SelectMenu', () => import('./components/projects/SelectMenu.vue'))
Vue.component('Project', () => import('./components/projects/Project.vue'))
Vue.component('Badge', () => import('./components/projects/Badge.vue'))

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
