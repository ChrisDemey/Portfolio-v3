<template>
  <div>
    <multiselect
      v-model="value"
      :options="options"
      :searchable="false"
      placeholder="Select a framework"
    >
    </multiselect>
  </div>
</template>

<script>
export default {
  name: 'SelectMenu',
  props: {
    options: Array
  },
  data () {
    return {
      value: ''
    }
  }
}
</script>
