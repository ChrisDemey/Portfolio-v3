<template>
  <div class="flex items-end justify-center h-full -mt-28 md:items-center">
    <div class="flex space-x-6 md:space-x-32">
      <Motion v-for="(link, index) in contacts" :key="index" :hover="link.hover" class="bg-white rounded-lg">
        <a :href="link.href" target="_blank">
          <component :is="link.icon" v-if="link.icon" />
        </a>
      </Motion>
    </div>
  </div>
</template>

<script>
import { Github, Gmail, LinkedIn } from '@/components/icons'
import Motion from 'tinymotion'

export default {
  components: {
    Motion
  },
  data () {
    return {
      contacts: [
        {
          icon: Github,
          href: 'https://github.com/ChrisDemey',
          hover: [
            'rotate-0 rounded-lg',
            '-rotate-12 rounded-2xl bg-yellow-100',
            'rotate-12',
            '-rotate-12',
            'rotate-0'
          ]
        },
        {
          icon: Gmail,
          href: 'mailto:demey.christophe.dc@gmail.com',
          hover: [
            'rotate-0 rounded-lg',
            '-rotate-12 rounded-2xl bg-red-500 text-white',
            'rotate-12',
            '-rotate-12',
            'rotate-0'
          ]
        },
        {
          icon: LinkedIn,
          href: 'https://www.linkedin.com/in/christophe-demey/',
          hover: [
            'rotate-0 rounded-lg',
            '-rotate-12 rounded-2xl bg-blue-900 text-white',
            'rotate-12',
            '-rotate-12',
            'rotate-0'
          ]
        }
      ]
    }
  }
}
</script>
