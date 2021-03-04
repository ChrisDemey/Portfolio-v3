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
export default {
  name: 'Project',

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
