import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { VTooltip, VPopover, VClosePopover } from 'v-tooltip'
import { KinesisContainer, KinesisElement } from 'vue-kinesis'

Vue.config.productionTip = false
Vue.directive('tooltip', VTooltip)
Vue.directive('close-popover', VClosePopover)
Vue.component('v-popover', VPopover)
Vue.component('kinesis-container', KinesisContainer)
Vue.component('kinesis-element', KinesisElement)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
