<template>
    <div class="flex items-center justify-around max-w-4xl md:justify-between">
        <router-link to="/">
            <Motion :click="[ 'scale-100', 'scale-50' ]">
                <svg xmlns="http://www.w3.org/2000/svg" :class="$state.navbarSvgClass" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <polyline points="5 12 3 12 12 3 21 12 19 12" />
                    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                    <rect x="10" y="12" width="4" height="4" />
                </svg>
            </Motion>
        </router-link>
        <router-link to="/about">
            <Motion :click="[ 'scale-100', 'scale-50' ]">
                <svg xmlns="http://www.w3.org/2000/svg" :class="$state.navbarSvgClass" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <rect x="3" y="4" width="18" height="16" rx="3" />
                    <circle cx="9" cy="10" r="2" />
                    <line x1="15" y1="8" x2="17" y2="8" />
                    <line x1="15" y1="12" x2="17" y2="12" />
                    <line x1="7" y1="16" x2="17" y2="16" />
                </svg>
            </Motion>
        </router-link>
        <router-link to="/projects">
            <Motion :click="[ 'scale-100', 'scale-50' ]">
                <svg xmlns="http://www.w3.org/2000/svg" :class="$state.navbarSvgClass" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <polyline points="7 8 3 12 7 16" />
                    <polyline points="17 8 21 12 17 16" />
                    <line x1="14" y1="4" x2="10" y2="20" />
                </svg>
            </Motion>
        </router-link>
        <router-link to="/contact">
            <Motion :click="[ 'scale-100', 'scale-50' ]">
                <svg xmlns="http://www.w3.org/2000/svg" :class="$state.navbarSvgClass" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
                    <line x1="12" y1="11" x2="12" y2="11.01" />
                    <line x1="8" y1="11" x2="8" y2="11.01" />
                    <line x1="16" y1="11" x2="16" y2="11.01" />
                </svg>
            </Motion>
        </router-link>
    </div>
</template>

<script>
import Motion from 'tinymotion'

export default {
  name: 'Navbar',

  components: {
    Motion
  }
}
</script>
