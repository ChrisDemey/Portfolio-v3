<template>
  <div class="home">
    <h1>CHRISTOPHE DEMEY</h1>
    <h3>Développeur Web Front-End</h3>
  </div>
</template>

<style lang="scss">
  .home {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    text-align: center;
    h1 {
      transform-style: preserve-3d;
      transform: perspective(1500px);
      margin-bottom: 15px;
      margin: auto;
      font-size: 50px;
      @media screen and (max-width: 375px) {
        font-size: 25px;
      }
    }
    svg {
      background: transparent;
      margin-left: 20px;
      margin-right: 20px;
      transition: 0.2s;
      @media screen and (max-width: 375px) {
        height: 55px;
      }
      .vue-icon, .tailwind-icon, .bootstrap-icon {
        transition: 0.2s;
      }
      &:hover {
        .vue-icon {
          transition: 0.2s;
          fill: #41B883;
        }
        .tailwind-icon {
          transition: 0.2s;
          fill: rgb(96, 213, 218);
        }
        .bootstrap-icon {
          transition: 0.2s;
          fill: rgb(127, 79, 146);
        }
      }
    }
  }
  // v-tooltip
  .tooltip {
    display: block !important;
    z-index: 10000;
    background: transparent;
    .tooltip-inner {
      background: white;
      color: black;
      font-weight: bolder;
      border-radius: 16px;
      padding: 5px 10px 4px;
    }
    .tooltip-arrow {
      width: 0;
      height: 0;
      border-style: solid;
      position: absolute;
      margin: 5px;
      border-color: rgb(255, 255, 255);
      background: transparent;
      z-index: 1;
    }
    &[x-placement^="top"] {
      margin-bottom: 5px;
      .tooltip-arrow {
        border-width: 5px 5px 0 5px;
        border-left-color: transparent !important;
        border-right-color: transparent !important;
        border-bottom-color: transparent !important;
        bottom: -5px;
        left: calc(50% - 5px);
        margin-top: 0;
        margin-bottom: 0;
      }
    }
    &[x-placement^="bottom"] {
      margin-top: 5px;
      .tooltip-arrow {
        border-width: 0 5px 5px 5px;
        border-left-color: transparent !important;
        border-right-color: transparent !important;
        border-top-color: transparent !important;
        top: -5px;
        left: calc(50% - 5px);
        margin-top: 0;
        margin-bottom: 0;
      }
    }
    &[x-placement^="right"] {
      margin-left: 5px;
      .tooltip-arrow {
        border-width: 5px 5px 5px 0;
        border-left-color: transparent !important;
        border-top-color: transparent !important;
        border-bottom-color: transparent !important;
        left: -5px;
        top: calc(50% - 5px);
        margin-left: 0;
        margin-right: 0;
      }
    }
    &[x-placement^="left"] {
      margin-right: 5px;
      .tooltip-arrow {
        border-width: 5px 0 5px 5px;
        border-top-color: transparent !important;
        border-right-color: transparent !important;
        border-bottom-color: transparent !important;
        right: -5px;
        top: calc(50% - 5px);
        margin-left: 0;
        margin-right: 0;
      }
    }
    &[aria-hidden='true'] {
      visibility: hidden;
      opacity: 0;
      transition: opacity .15s, visibility .15s;
    }
    &[aria-hidden='false'] {
      visibility: visible;
      opacity: 1;
      transition: opacity .15s;
    }
  }
</style>
