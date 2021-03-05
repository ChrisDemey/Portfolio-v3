<template>
  <div
    class="inline-block px-3 py-px text-sm text-white rounded-full md:text-base"
  >
    {{ badgename }}
  </div>
</template>

<script>
export default {
  name: 'Badge',
  props: {
    badgename: String
  }
}
</script>
