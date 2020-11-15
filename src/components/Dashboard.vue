<template>
  <div class="dashboard">
    <WeatherBar />
    <WeatherData v-if="forecastedCity" />
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex'

import WeatherBar from '@/components/WeatherBar.vue'
import WeatherData from '@/components/WeatherData.vue'

export default {
  components: {
    WeatherBar,
    WeatherData,
  },
  computed: {
    ...mapState('weather', ['forecastedCity']),
  },
}
</script>

<style lang="scss">
.dashboard {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;
  position: absolute;
  left: 0px;
  top: 0px;

  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.8)
    ),
    linear-gradient(
      119.25deg,
      #102f7e -11.47%,
      #0c8dd6 3.95%,
      #1aa0ec 19.37%,
      #60c6ff 34.78%,
      #9bdbff 50.19%,
      #b4deda 65.61%,
      #ffd66b 81.02%,
      #ffc178 96.44%,
      #fe9255 111.85%
    );
}
</style>
