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
    margin: auto;
    margin-bottom: 10px;
    padding: 5px;
    border: 2px solid white;
    border-radius: 20px;
    width: 120px;
    text-align: center;
    transition: 0.2s;
  }
  #bootstrap:hover {
    border: 2px solid purple;
    color: purple;
  }
  #api:hover{
    border: 2px solid gray;
    color: gray;
  }
</style>
