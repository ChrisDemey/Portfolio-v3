<template>
  <div class="grid grid-cols-4 gap-4">
    <ul
      v-for="item in paragraphs"
      :key="item"
      :class="item.class"
    >
      <li class="px-4 py-2 font-medium text-justify text-black bg-white rounded-lg">
        <span>
          {{ item.text }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import store from '@/store/store.js'

export default {
  name: 'Paragraph',

  data () {
    return {
      paragraphs: store.paragraphs
    }
  }
}
</script>
