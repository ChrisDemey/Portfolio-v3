<template>
    <div class="myworks">
        <div class="line">
            <!-- work 1 -->
            <kinesis-container>
                <div class="work-1">
                    <kinesis-element :strength="20" type="depth">
                        <Item background='./assets/img/work-first.jpg' alt='Restaurant bootstrap' link='' />
                    </kinesis-element>
                    <kinesis-element class="k-element" :strength="30" type="depth">
                        <Badge id="bootstrap" badgename='Bootstrap' />
                    </kinesis-element>
                </div>
            </kinesis-container>
            <!-- work 2 -->
            <kinesis-container>
                <div class="work-2">
                    <kinesis-element :strength="20" type="depth">
                        <Item background='./assets/img/work-two.jpg' alt='Allez Cine!' link='' />
                    </kinesis-element>
                    <kinesis-element class="k-element" :strength="30" type="depth">
                        <Badge id="bootstrap" badgename='Bootstrap' />
                    </kinesis-element>
                </div>
            </kinesis-container>
            <!-- work 3 -->
            <kinesis-container>
                <div class="work-3">
                    <kinesis-element :strength="20" type="depth">
                        <Item background='./assets/img/work-three.jpg' alt='Qu-AI 10' link='' />
                    </kinesis-element>
                    <kinesis-element class="k-element" :strength="30" type="depth">
                        <Badge id="bootstrap" badgename='Bootstrap' />
                    </kinesis-element>
                </div>
            </kinesis-container>
            <!-- work 3 -->
            <kinesis-container>
                <div class="work-4">
                    <kinesis-element :strength="20" type="depth">
                        <Item background='./assets/img/work-four.jpg' alt='Hitman franchise' link='' />
                    </kinesis-element>
                    <kinesis-element class="k-element" :strength="30" type="depth">
                        <Badge id="bootstrap" badgename='Bootstrap' />
                    </kinesis-element>
                </div>
            </kinesis-container>
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
        width: 100%;
        .line {
            display: flex;
            justify-content: space-around;
        }
    }
</style>
