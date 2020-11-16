<template>
  <div class="weather-data">
    <p class="date-range">{{ getDates }}</p>
    <p class="average-temp">
      {{ averageTempTenDays }} <span class="degrees">°C</span>
    </p>
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
}

.date-range {
  top: 0;
  font-size: 12px;
  line-height: 24px;
  letter-spacing: 0.06em;
  margin: 0;

  color: #08153e;

  opacity: 0.6;
}

.average-temp {
  font-size: 120px;
  line-height: 120px;
  margin: 0;
  color: #fff;
}

.degrees {
  font-size: 24px;
  height: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
