<template>
  <div class="badge">
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

<style lang="scss">
  .badge {
    position: relative;
    z-index: 3;
    bottom: 20px;
    margin: auto;
    margin-bottom: 10px;
    padding: 7px;
    border-radius: 20px;
    width: 120px;
    text-align: center;
    transition: 0.2s;
    background: transparent;
    box-shadow: 0px 0px 10px rgb(32, 32, 32);
    font-weight: 900;
  }
  #bootstrap {
    background-color: rgb(171, 89, 192);
    color: rgb(79, 18, 94);
  }
</style>
