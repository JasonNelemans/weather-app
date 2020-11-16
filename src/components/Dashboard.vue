<template>
  <div class="dashboard">
    <WeatherBar
      v-bind:class="{
        withResults:
          (forecastedCity && appStatus === 'ok') || appStatus === 'error',
      }"
    />
    <WeatherData v-if="forecastedCity && appStatus === 'ok'" />
    <h2 v-if="appStatus === 'error'" class="error-message">
      Unable to find data, please double check input
    </h2>
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
    ...mapState('appState', ['appStatus']),
  },
}
</script>

<style lang="scss">
.dashboard {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;
  position: absolute;

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

.withResults {
  top: 23.13%;
}

.error-message {
  color: #08153e;
  opacity: 0.8;
}
</style>
