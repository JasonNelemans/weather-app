<template>
  <div class="weather-data">
    <p class="date-range">{{ getDates }}</p>
    <p class="average-temp white">
      {{ averageTempTenDays }}
    </p>
    <span class="degrees white">°C</span>
  </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'

export default {
  name: 'WeatherData',
  computed: {
    ...mapGetters('weather', ['getDates', 'averageTempTenDays']),
  },
}
</script>

<style lang="scss">
.weather-data {
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 600;
  position: absolute;
  top: 42%;
}

.date-range {
  font-size: 12px;
  line-height: 24px;
  letter-spacing: 0.06em;
  margin: 0;

  color: #08153e;

  opacity: 0.6;
}

.average-temp {
  position: absolute;
  font-size: 120px;
  line-height: 120px;
  margin: 0;
  top: 140%;
  left: 15%;
}

.degrees {
  position: absolute;
  top: 150%;
  left: 80%;
  font-size: 24px;
  height: 13px;
}

.white {
  color: #fff;
}
</style>
