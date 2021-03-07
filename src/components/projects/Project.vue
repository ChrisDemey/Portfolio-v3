<template>
  <div class="grid grid-cols-2 gap-4 space-y-0 md:grid-cols-3 md:gap-x-6 md:gap-y-12">
    <ul v-for="item in projects" :key="item.id">
      <li class="p-px bg-white rounded-lg shadow-lg">
        <a class="cursor-pointer aspect-w-3 aspect-h-2" :href="item.link" target="_blank">
          <img class="object-cover border-none rounded-t-lg shadow" :src="item.image">
        </a>
        <div class="px-2 pt-2 pb-2 space-y-2 bg-white rounded-b-lg md:px-4 md:pb-4">
          <h3 class="text-base font-medium leading-6 md:text-lg">
            {{ item.name }}
          </h3>
          <div class="space-x-2 text-right">
            <Badge
              v-for="(tech, index) in item.techs"
              :key="index"
              :badgename="tech"
              :class="{
                'bg-gray-500': tech == 'Alpine',
                'bg-gradient-to-r from-blue-400 to-green-300 text-gray-800': tech == 'Tailwind',
                'bg-purple-500': tech == 'Bootstrap',
                'bg-green-500 text-green-900': tech == 'Vue'
              }"
            />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import store from '@/store/store.js'

export default {
  name: 'Project',

  data () {
    return {
      projects: store.projects
    }
  }
}
</script>
