<template>
  <ul class="grid grid-cols-2 -mt-24 space-y-0 gap-x-6 gap-y-12 lg:grid-cols-3 lg:gap-x-8">
    <li v-for="item in projects" :key="item.id">
      <div class="rounded-lg shadow-lg">
        <a class="cursor-pointer aspect-w-3 aspect-h-2" :href="item.link" target="_blank">
          <img class="object-cover rounded-t-lg shadow" :src="item.image">
        </a>
        <div class="px-4 pt-2 pb-4 space-y-2 bg-white rounded-b-lg">
          <div class="space-y-1 text-lg font-medium leading-6">
            <h3>{{ item.name }}</h3>
          </div>
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
      </div>
    </li>
  </ul>
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
