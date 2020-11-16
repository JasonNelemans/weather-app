<template>
  <div class="weather-data">
    <p class="date-range">{{ getDates }}</p>
    <p class="average-temp white">
      {{ averageTempTenDays }}<sup class="degrees">°C</sup>
    </p>
    <div class="weekdays">
      <div v-for="day in sevenDayForecast" :key="day.date">
        <div class="weekday-container">
          <p class="weekday">
            {{ getDayName(day.date, 'en-US').toUpperCase() }}
          </p>
          <p class="weekday-temp white">
            {{ day.averageTemp }}
            <sup class="weekday-degrees white">°C</sup>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'

export default {
  name: 'WeatherData',
  computed: {
    ...mapGetters('weather', [
      'getDates',
      'averageTempTenDays',
      'sevenDayForecast',
    ]),
  },
  methods: {
    getDayName(dateStr: any, locale: any) {
      const date = new Date(dateStr)
      return date.toLocaleDateString(locale, { weekday: 'long' })
    },
  },
}
</script>

<style lang="scss">
.weather-data {
  position: absolute;
  top: 42%;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.date-range {
  font-size: 13px;
  letter-spacing: 0.06em;
  margin: 0;

  color: #08153e;

  opacity: 0.6;
}

.average-temp {
  font-size: 120px;
  margin: 0;
  line-height: 1.3;
}

.degrees {
  font-size: 24px;
  position: absolute;
  top: 20%;
}

.white {
  color: #fff;
}

.weekdays {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 680px;
}

.weekday {
  font-size: 12px;
  line-height: 24px;
  letter-spacing: 0.06em;
  margin: 0;
  margin-right: 10px;

  color: #08153e;

  opacity: 0.6;
}

.weekday-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.weekday-temp {
  font-size: 24px;
  height: 24px;
  margin: 0;
}

.weekday-degrees {
  font-size: 14px;
}
</style>
