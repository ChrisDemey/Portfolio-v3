<template>
  <div
    class="text-white inline-block px-3 py-px rounded-full"
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
