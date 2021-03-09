<template>
  <div class="grid grid-cols-2 gap-4 space-y-0 md:grid-cols-3 md:gap-x-6 md:gap-y-12">
    <ul v-for="item in projects" :key="item.id">
      <a :href="item.link" target="_blank">
        <li class="p-1 duration-200 ease-in-out transform bg-white shadow-lg cursor-pointer hover:scale-90 rounded-xl">
          <img class="object-cover border-none rounded-t-lg" :src="item.image">
          <div class="px-2 pt-2 pb-2 space-y-2 rounded-b-lg md:px-4 md:pb-4">
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
                  'bg-tailwind-icon text-gray-900': tech == 'Tailwind',
                  'bg-purple-500': tech == 'Bootstrap',
                  'bg-vue-icon text-gray-900': tech == 'Vue'
                }"
              />
            </div>
          </div>
        </li>
      </a>
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
