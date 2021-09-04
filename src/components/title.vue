<template>
  <div class="space-y-6 text-center">
    <ul
      v-for="item in titles"
      :key="item.id"
    >
      <li
        class="inline-block px-8 py-2 text-black bg-white rounded-lg"
        :class="item.class"
      >
        <span>
          {{ item.text }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
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
          class: 'font-bold md:text-lg'
        }
      ]
    }
  }
}
</script>
