<template>
  <div
    id="app"
    class="bg-center bg-no-repeat bg-cover h-screen"
    style="background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('./assets/gif/synthwave_geek.gif');"
  >
    <div class="max-w-4xl pt-2 mx-auto h-screen flex flex-col overflow-hidden">
      <Navigation />
      <transition
        mode="out-in"
        enter-active-class="duration-200 transform"
        enter-class="scale-0"
        enter-to-class="scale-100"
        leave-active-class="duration-200 transform"
        leave-class="scale-100"
        leave-to-class="scale-0"
      >
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import Navigation from './components/navigation'

export default {
  components: {
    Navigation
  }
}
</script>
