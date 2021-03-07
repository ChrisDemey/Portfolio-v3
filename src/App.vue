<template>
  <div
    id="app"
    class="bg-center bg-no-repeat bg-cover"
    style="background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('./assets/gifs/synthwave_geek.gif');"
  >
    <Container>
      <Navbar />
      <transition
        enter-active-class="transition duration-300 ease-out"
        enter-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <router-view />
      </transition>
    </Container>
  </div>
</template>
