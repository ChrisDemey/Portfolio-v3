<template>
  <div class="flex flex-col items-center justify-center h-full space-y-8">
    <div class="space-y-6 text-center">
      <ul
        v-for="item in titles"
        :key="item.id"
      >
        <li
          class="inline-block px-8 py-2 text-white bg-white bg-opacity-25 backdrop-blur-md backdrop-filter rounded-lg"
          :class="item.class"
        >
        <span>
          {{ item.text }}
        </span>
        </li>
      </ul>
    </div>
    <ul class="flex items-center space-x-12 md:h-24">
      <li v-for="(item, index) in frameworks" :key="index">
        <component :is="item.icon" v-if="item.icon" />
      </li>
    </ul>
  </div>
</template>

<script>
import { Laravel, Vue, Tailwind } from '@/components/icons'

export default {
  data () {
    return {
      titles: [
        {
          text: 'Christophe Demey',
          class: 'text-2xl font-bold md:font-normal md:text-7xl uppercase'
        },
        {
          text: 'Développeur Web Full Stack',
          class: 'font-semibold md:text-lg'
        }
      ],
      frameworks: [
        { icon: Laravel },
        { icon: Vue },
        { icon: Tailwind }
      ]
    }
  }
}
</script>
