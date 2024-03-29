module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'vue-icon': '#42b883',
        'tailwind-icon': '#07b6d5',
        'laravel-icon': '#FF2D20'
      }
    }
  },
  variants: {
    extend: {
      animation: ['hover']
    }
  },
  plugins: []
}
