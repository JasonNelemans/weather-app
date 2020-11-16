<template>
  <div id="app">
    <Dashboard />
  </div>
</template>

<script lang="ts">
import Dashboard from "@/components/Dashboard.vue";

export default {
  components: {
    Dashboard
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&display=swap");
html,
body {
  font-family: "Poppins", sans-serif;
  margin: 0;
}
</style>
