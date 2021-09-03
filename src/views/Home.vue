<template>
  <div class="flex flex-col items-center justify-center h-full space-y-8">
    <Title />
    <ul class="flex items-center space-x-12 md:h-24">
      <li v-for="(item, index) in frameworks" :key="index">
        <component :is="item.icon" v-if="item.icon" />
      </li>
    </ul>
  </div>
</template>

<script>
import Title from '../components/title'
import { Vue, Tailwind } from '@/components/icons'

export default {
  components: {
    Title
  },
  data () {
    return {
      frameworks: [
        { icon: Vue },
        { icon: Tailwind }
      ]
    }
  }
}
</script>
