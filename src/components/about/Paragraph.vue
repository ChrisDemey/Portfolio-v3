<template>
  <div class="grid-cols-4 gap-4 space-y-2 md:space-y-0 md:grid">
    <ul
      v-for="item in $state.paragraphs"
      :key="item.id"
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
export default {
  name: 'Paragraph'
}
</script>
