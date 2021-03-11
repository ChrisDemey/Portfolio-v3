<template>
    <a class="bg-white rounded-lg" href="mailto:demey.christophe.dc@gmail.com" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" :class="$state.contactSvgClass" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <polyline points="3 7 12 13 21 7" />
        </svg>
    </a>
</template>

<script>
export default {
  name: 'gmail'
}
</script>
