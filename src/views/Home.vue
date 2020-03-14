<template>
  <kinesis-container class="home">
    <kinesis-element :strength="20" type="depth">
      <h1>CHRISTOPHE DEMEY</h1>
      <h3>Développeur Web Front-End</h3>
    </kinesis-element>
    <kinesis-element :strength="30" type="depth">
      <svg xmlns="http://www.w3.org/2000/svg" height="80px" viewBox="0 0 448 512" v-tooltip.bottom="'Vue.JS'">
        <path class="vue-icon" fill="white" d="M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z"/>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 0 256 154" v-tooltip.bottom="'TailwindCSS'">
        <path class="tailwind-icon" fill="white" d="M128,-1.0658141e-14 C93.8666667,-1.0658141e-14 72.5333333,17.0666667 64,51.2 C76.8,34.1333333 91.7333333,27.7333333 108.8,32 C118.537481,34.4343704 125.497363,41.4985481 133.201067,49.3184 C145.750756,62.0567704 160.275437,76.8 192,76.8 C226.133333,76.8 247.466667,59.7333333 256,25.6 C243.2,42.6666667 228.266667,49.0666667 211.2,44.8 C201.462519,42.3656296 194.502637,35.3014519 186.798933,27.4816 C174.249244,14.7432296 159.724563,-1.0658141e-14 128,-1.0658141e-14 Z M64,76.8 C29.8666667,76.8 8.53333333,93.8666667 0,128 C12.8,110.933333 27.7333333,104.533333 44.8,108.8 C54.5374815,111.23437 61.497363,118.298548 69.2010667,126.1184 C81.7507556,138.85677 96.275437,153.6 128,153.6 C162.133333,153.6 183.466667,136.533333 192,102.4 C179.2,119.466667 164.266667,125.866667 147.2,121.6 C137.462519,119.16563 130.502637,112.101452 122.798933,104.2816 C110.249244,91.5432296 95.724563,76.8 64,76.8 Z"/>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" height="75px" viewBox="0 0 448 512" v-tooltip.bottom="'Bootstrap'">
        <path class="bootstrap-icon" fill="white" d="M292.3 311.93c0 42.41-39.72 41.43-43.92 41.43h-80.89v-81.69h80.89c42.56 0 43.92 31.9 43.92 40.26zm-50.15-73.13c.67 0 38.44 1 38.44-36.31 0-15.52-3.51-35.87-38.44-35.87h-74.66v72.18h74.66zM448 106.67v298.66A74.89 74.89 0 0 1 373.33 480H74.67A74.89 74.89 0 0 1 0 405.33V106.67A74.89 74.89 0 0 1 74.67 32h298.66A74.89 74.89 0 0 1 448 106.67zM338.05 317.86c0-21.57-6.65-58.29-49.05-67.35v-.73c22.91-9.78 37.34-28.25 37.34-55.64 0-7 2-64.78-77.6-64.78h-127v261.33c128.23 0 139.87 1.68 163.6-5.71 14.21-4.42 52.71-17.98 52.71-67.12z"/>
      </svg>
    </kinesis-element>
  </kinesis-container>
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
