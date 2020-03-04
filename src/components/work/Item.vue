<template>
    <div class="item">
        <a :href="link">
            <img :src="background" :alt="alt">
        </a>
    </div>
</template>

<script>
export default {
  name: 'Item',
  props: {
    link: String,
    background: String,
    alt: String
  }
}
</script>

<style lang="scss">
    .item {
        width: 250px;
        height: 170px;
        margin-bottom: 15px;
        img {
            object-fit: cover;
            border-radius: 10px;
            width: 100%;
            height: 100%;
            transition: (0.3s);
            filter: grayscale(1);
            &:hover{
                filter: none;
            }
        }
    }
</style>
