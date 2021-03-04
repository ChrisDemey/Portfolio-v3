<template>
  <div class="space-y-6 text-center">
    <ul
      v-for="item in titles"
      :key="item"
    >
      <li class="inline-block px-8 py-2 text-black bg-white rounded-lg" :class="item.class">
        <span>
          {{ item.text }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Job',

  data () {
    return {
      titles: [
        {
          text: 'Christophe Demey',
          class: 'text-7xl uppercase'
        },
        {
          text: 'Développeur Web Front-End',
          class: 'font-bold text-lg'
        }
      ]
    }
  }
}
</script>
