<template>
  <div id="app">
    <Dashboard />
  </div>
</template>

<script lang="ts">
import Dashboard from '@/components/Dashboard.vue'

export default {
  components: {
    Dashboard,
  },
}
</script>

<style lang="scss">
html,
body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
}
</style>
