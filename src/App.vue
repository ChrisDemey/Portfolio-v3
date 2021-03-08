<template>
  <div
    id="app"
    class="bg-center bg-no-repeat bg-cover"
    style="background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('./assets/gifs/synthwave_geek.gif');"
  >
    <Container>
      <Navbar />
      <transition
        enter-active-class="duration-150 transform"
        enter-class="scale-0"
        enter-to-class="scale-100"
        leave-active-class="duration-150 transform"
        leave-class="scale-100"
        leave-to-class="scale-0"
      >
      <!-- <transition name="scale" mode="out-in"> -->
        <router-view />
      </transition>
    </Container>
  </div>
</template>
