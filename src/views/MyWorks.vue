<template>
  <div class="myworks">
    <div class="tabs">
      <div class="up-line">
        <a v-on:click="activetab=1" v-bind:class="[ activetab === 1 ? 'active' : '' ]">Tout</a>
      </div>
      <div class="down-line">
        <a v-on:click="activetab=2" v-bind:class="[ activetab === 2 ? 'active' : '' ]">Bootstrap</a>
        <a v-on:click="activetab=3" v-bind:class="[ activetab === 3 ? 'active' : '' ]">Vue</a>
        <a v-on:click="activetab=4" v-bind:class="[ activetab === 4 ? 'active' : '' ]">Tailwind</a>
        <a v-on:click="activetab=5" v-bind:class="[ activetab === 5 ? 'active' : '' ]">Alpine</a>
        <a v-on:click="activetab=6" v-bind:class="[ activetab === 6 ? 'active' : '' ]">React</a>
      </div>
    </div>
    <div class="content">
      <div class="work" v-show="activetab === 1 || activetab === 4 || activetab === 5">
        <Item background='./assets/img/work-five.jpg' alt='project-img' link='https://github.com/ChrisDemey/TD2-Tailwind-Alpine' />
        <Badge id="tailwind" badgename='Tailwind' />
        <Badge id="alpine" badgename='Alpine' />
      </div>
      <div class="work" v-show="activetab === 1 || activetab === 2">
        <Item background='./assets/img/work-first.jpg' alt='project-img' link='https://github.com/ChrisDemey/restaurant-css-framework' />
        <Badge id="bootstrap" badgename='Bootstrap' />
      </div>
      <div class="work" v-show="activetab === 1 || activetab === 2">
        <Item background='./assets/img/work-two.jpg' alt='project-img' link='https://github.com/ChrisDemey/allezcinev3' />
        <Badge id="bootstrap" badgename='Bootstrap' />
      </div>
      <div class="work" v-show="activetab === 1 || activetab === 2">
        <Item background='./assets/img/work-three.jpg' alt='project-img' link='https://github.com/ChrisDemey/Qu-AI-10-event-website' />
        <Badge id="bootstrap" badgename='Bootstrap' />
      </div>
      <div class="work" v-show="activetab === 1 || activetab === 2">
        <Item background='./assets/img/work-four.jpg' alt='project-img' link='https://github.com/ChrisDemey/Hitman2-website' />
        <Badge id="bootstrap" badgename='Bootstrap' />
      </div>
      <div class="work" v-show="activetab === 1 || activetab === 6">
        <Item background='./assets/img/work-six.jpg' alt='project-img' link='https://github.com/ChrisDemey/My-Portfolio-V2' />
        <Badge id="react" badgename='React' />
      </div>
      <div class="work" v-show="activetab === 1 || activetab === 3">
        <Item background='./assets/img/work-seven.jpg' alt='project-img' link='' />
        <Badge id="vue" badgename='Vue' />
      </div>
    </div>
  </div>
</template>

<script>
import Badge from '../components/works/Badge.vue'
import Item from '../components/works/Item.vue'

export default {
  components: {
    Item, Badge
  },
  data: () => {
    return {
      activetab: 1
    }
  }
}
</script>

<style lang="scss">
  .myworks {
    max-width: 1080px;
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .tabs {
      top: 130px;
      z-index: 4;
      display: flex;
      flex-direction: column;
      text-align: center;
      margin: auto;
      width: 100%;
      max-width: 1080px;
      position: fixed;
      border: 1px solid white;
      .up-line {
        background: transparent;
        display: flex;
        justify-content: center;
        font-size: 20px;
      }
      .down-line {
        background: transparent;
        display: flex;
        justify-content: space-around;
        border-top: 1px solid white;
      }
      a {
        cursor: pointer;
        padding: 10px;
        background: transparent;
        width: 100%;
        &:hover{
          background-color: white;
          color: rgb(46, 46, 46);
          font-weight: bold;
        }
      }
      .active {
        background-color: white;
        color: rgb(46, 46, 46);
        font-weight: bold;
      }
    }
    .content {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-top: 260px;
    }
  }
</style>
