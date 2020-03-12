<template>
    <div class="item">
        <a :href="link" target="_blank">
            <img :src="background" :alt="alt">
        </a>
    </div>
</template>

<script>
export default {
  name: 'Item',
  props: {
    background: String,
    alt: String,
    link: String
  }
}
</script>

<style lang="scss">
    .item {
        width: 250px;
        height: 180px;
        background: transparent;
        img {
            border: 3px solid white;
            object-fit: cover;
            border-radius: 10px;
            width: 100%;
            height: 100%;
            transition: (0.3s);
        }
    }
</style>
