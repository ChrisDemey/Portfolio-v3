import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { KinesisContainer, KinesisElement } from 'vue-kinesis'
import { VTooltip, VPopover, VClosePopover } from 'v-tooltip'

Vue.config.productionTip = false
Vue.component('kinesis-container', KinesisContainer)
Vue.component('kinesis-element', KinesisElement)
Vue.directive('tooltip', VTooltip)
Vue.directive('close-popover', VClosePopover)
Vue.component('v-popover', VPopover)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
