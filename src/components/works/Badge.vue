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
    bottom: 15px;
    margin: auto;
    margin-bottom: 10px;
    padding: 7px;
    border-radius: 20px;
    width: 120px;
    text-align: center;
    transition: 0.2s;
    font-weight: 900;
    @media screen and (max-width: 500px) {
      width: 80px;
      padding: 3px 7px;
    }
    // @media (max-height: 740px) and (orientation: landscape) {
    //   width: 80px;
    //   padding: 3px;
    //   font-size: 12px;
    //   margin-bottom: 5px;
    // }
  }
  #bootstrap {
    background-color: rgb(171, 89, 192);
    color: rgb(79, 18, 94);
  }
  #react {
    background-color: rgb(0, 255, 255);
    color: rgb(34, 82, 90);
  }
  #vue {
    background-color: #41B883;
    color: rgb(32, 85, 61);
  }
  #tailwind {
    background: linear-gradient(to right, rgb(0, 153, 255), rgb(0, 255, 221));
    color: rgb(32, 61, 73);
  }
  #alpine {
    background-color: rgb(66, 108, 114);
    color: rgb(231, 231, 231);
  }
</style>
