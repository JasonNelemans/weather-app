<template>
  <div class="weather-bar">
    <Cloud />
    <Countries />
    <CityLocation />
  </div>
</template>

<script lang="ts">
import Cloud from '@/components/Cloud.vue'
import Countries from '@/components/Countries.vue'
import CityLocation from '@/components/CityLocation.vue'
export default {
  components: {
    Cloud,
    Countries,
    CityLocation,
  },
}
</script>

<style lang="scss">
.weather-bar {
  position: absolute;
  width: 632px;
  height: 92px;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.9)
    ),
    #f8f8f8;
  box-shadow: 0px 2px 10px rgba(8, 21, 62, 0.15);
  border-radius: 16px;
}
</style>
