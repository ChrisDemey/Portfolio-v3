<template>
  <div class="grid grid-cols-2 gap-4 space-y-0 md:grid-cols-3 md:gap-x-6 md:gap-y-12">
    <div v-for="(item, index) in projects" :key="index" class="p-1 duration-200 ease-in-out transform bg-white shadow-lg cursor-pointer hover:scale-90 rounded-xl">
      <a :href="item.link" target="_blank">
        <img class="object-cover h-48 rounded-t-lg" :src="item.image" alt="image">
        <div class="px-2 pt-2 space-y-2 rounded-b-lg md:px-4 md:pb-2">
          <h3 class="text-base font-medium leading-6 md:text-lg">
            {{ item.name }}
          </h3>
          <div class="space-x-2 text-right">
            <Badge
              v-for="(tech, index) in item.techs"
              :key="index"
              :badgename="tech"
              :class="{
                'bg-gray-500': tech === 'Alpine',
                'bg-tailwind-icon': tech === 'Tailwind',
                'bg-purple-500': tech === 'Bootstrap',
                'bg-vue-icon': tech === 'Vue',
                'bg-green-300 text-gray-800': tech === 'Nuxt 2'
              }"
            />
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import Badge from '../components/badge'

export default {
  components: {
    Badge
  },
  data () {
    return {
      projects: [
        {
          name: 'Portfolio',
          link: 'https://github.com/ChrisDemey/Portfolio-v3',
          image: '../../assets/img/portfolio.jpg',
          techs: ['Vue', 'Tailwind']
        },
        {
          name: 'My Bat Comics',
          link: 'https://github.com/ChrisDemey/my-bat-comics',
          image: '../../assets/img/batcomics.png',
          techs: ['Nuxt 2', 'Tailwind']
        },
        {
          name: 'The Division 2',
          link: 'https://github.com/ChrisDemey/TD2-Tailwind-Alpine',
          image: '../../assets/img/division.jpg',
          techs: ['Alpine', 'Tailwind']
        },
        {
          name: 'Le Sanglier Faisandé',
          link: 'https://github.com/ChrisDemey/restaurant-css-framework',
          image: '../../assets/img/sanglier.jpg',
          techs: ['Bootstrap']
        },
        {
          name: 'Allez Ciné',
          link: 'https://github.com/ChrisDemey/allezcinev3',
          image: '../../assets/img/allezcine.jpg',
          techs: ['Bootstrap']
        },
        {
          name: 'Qu-AI 10',
          link: 'https://github.com/ChrisDemey/ProjetClientQuai10',
          image: '../../assets/img/quai.jpg',
          techs: ['Bootstrap']
        },
        {
          name: 'Hitman',
          link: 'https://github.com/ChrisDemey/Hitman2-website',
          image: '../../assets/img/hitman.jpg',
          techs: ['Bootstrap']
        }
      ]
    }
  }
}
</script>
