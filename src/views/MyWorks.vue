<template>
  <div class="myworks">
    <div class="tabs">
      <div class="up-line">
        <a v-on:click="activetab=1" v-bind:class="[ activetab === 1 ? 'active' : '' ]">Tout</a>
      </div>
      <div class="down-line">
        <a v-on:click="activetab=2" v-bind:class="[ activetab === 2 ? 'active active-bootstrap' : '' ]">Bootstrap</a>
        <a v-on:click="activetab=3" v-bind:class="[ activetab === 3 ? 'active active-vue' : '' ]">Vue</a>
        <a v-on:click="activetab=4" v-bind:class="[ activetab === 4 ? 'active active-tailwind' : '' ]">Tailwind</a>
        <a v-on:click="activetab=5" v-bind:class="[ activetab === 5 ? 'active active-alpine' : '' ]">Alpine</a>
        <a v-on:click="activetab=6" v-bind:class="[ activetab === 6 ? 'active active-react' : '' ]">React</a>
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
        <Item background='./assets/img/work-seven.jpg' alt='project-img' link='https://github.com/ChrisDemey/Portfolio-v3' />
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
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    max-width: 1080px;
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    @media screen and (max-width: 360px) and (max-height: 740px) {
      transform: translate(-50%, 0%);
      top: 100px;
    }
    // @media (max-width: 360px) and (orientation: landscape) {
    //   transform: translate(-50%, 0%);
    //   top: 80px;
    // }
    .tabs {
      display: flex;
      flex-direction: column;
      text-align: center;
      margin: auto;
      width: 100%;
      .up-line {
        display: flex;
        justify-content: center;
        font-size: 20px;
      }
      .down-line {
        display: flex;
        justify-content: space-evenly;
      }
      a {
        cursor: pointer;
        padding: 10px;
        background: transparent;
        color: rgb(129, 129, 129);
        &:hover{
          color: rgb(129, 129, 129);
          font-weight: bold;
        }
        @media screen and (max-width: 768px) {
          font-size: 12px;
        }
      }
      .active {
        color: rgb(255, 255, 255);
        font-weight: bold;
        &:hover{
          color: white;
        }
      }
      .active-bootstrap {
        color: rgb(171, 89, 192);
        &:hover {
          color: rgb(171, 89, 192);
        }
      }
      .active-vue {
        color: #41B883;
        &:hover {
          color: #41B883;
        }
      }
      .active-tailwind {
        background: linear-gradient(to right, rgb(0, 153, 255), rgb(0, 255, 221));
        background-clip: text;
        color: transparent;
        &:hover {
          background: linear-gradient(to right, rgb(0, 153, 255), rgb(0, 255, 221));
          background-clip: text;
          color: transparent;
        }
      }
      .active-alpine {
        color: rgb(99, 155, 163);
        &:hover {
          color: rgb(99, 155, 163);
        }
      }
      .active-react {
        color: rgb(0, 255, 255);
        &:hover {
          color: rgb(0, 255, 255);
        }
      }
    }
    .content {
      display: flex;
      overflow: auto;
      padding-top: 30px;
      width: 90%;
      margin: auto;
      // @media (max-height: 740px) and (orientation: landscape) {
      //   padding-top: 20px;
      // }
      .work {
        margin-right: 40px;
      }
    }
  }
</style>
