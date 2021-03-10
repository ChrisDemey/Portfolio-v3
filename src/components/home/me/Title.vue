<template>
  <div class="space-y-6 text-center">
    <ul
      v-for="item in $state.titles"
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
  name: 'Title'
}
</script>
