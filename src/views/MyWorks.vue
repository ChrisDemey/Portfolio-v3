<template>
    <div class="myworks">
        <div class="line">
            <div class="work-1">
                <Item background='./assets/img/work-first.jpg' alt='Restaurant bootstrap' link='' />
                <Badge id="bootstrap" badgename='Bootstrap' />
            </div>
            <div class="work-2">
                <Item background='./assets/img/work-two.jpg' alt='Allez Cine!' link='' />
                <Badge id="bootstrap" badgename='Bootstrap' />
                <Badge id="api" badgename='API' />
            </div>
            <div class="work-3">
                <Item background='./assets/img/work-three.jpg' alt='Qu-AI 10' link='' />
                <Badge id="bootstrap" badgename='Bootstrap' />
            </div>
            <div class="work-4">
                <Item background='./assets/img/work-four.jpg' alt='Hitman franchise' link='' />
                <Badge id="bootstrap" badgename='Bootstrap' />
            </div>
        </div>
    </div>
</template>

<script>
import Item from '../components/work/Item.vue'
import Badge from '../components/work/Badge.vue'

export default {
  components: {
    Item, Badge
  }
}
</script>

<style lang="scss">
    .myworks {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
        max-width: 1080px;
        .line {
            display: flex;
            .work-1, .work-2, .work-3, .work-4 {
                margin-left: 10px;
                margin-right: 10px;
            }
        }
    }
</style>
