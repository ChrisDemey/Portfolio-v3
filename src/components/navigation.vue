<template>
  <div class="flex items-center justify-around max-w-4xl md:justify-between">
    <router-link v-for="(link, index) in navigations" :key="index" :to="link.route">
      <Motion :click="[ 'scale-100', 'scale-50' ]">
        <component :is="link.icon" v-if="link.icon" />
      </Motion>
    </router-link>
  </div>
</template>

<script>
import { Home, About, Projects, Contact } from '@/components/icons'
import Motion from 'tinymotion'

export default {
  components: {
    Motion
  },
  data () {
    return {
      navigations: [
        { route: '/', icon: Home },
        { route: '/about', icon: About },
        { route: 'projects', icon: Projects },
        { route: '/contact', icon: Contact }
      ]
    }
  }
}
</script>
