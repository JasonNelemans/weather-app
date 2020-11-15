<template>
  <div class="countries">
    <img
      :src="selectedFlag"
      alt="country-flag"
      class="flag"
      v-if="selectedFlag"
    />
    <div class="country">
      <b>{{ selectedCountry }}</b>
    </div>
    <svg viewBox="0 0 1030 638" class="down-icon">
      <path
        d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z"
        fill="#000000"
      ></path>
    </svg>
  </div>
</template>

<script lang="ts">
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      selectedLocal: 'NL',
      selectedCountry: '',
      selectedFlag: '',
    }
  },
  mounted() {
    this.fetchCountries()
  },
  methods: {
    ...mapActions('countries', ['fetchCountries']),
    findCountry() {
      this.countries.find((country: any) => {
        if (country.code === this.selectedLocal) {
          this.selectedCountry = country.code
          this.selectedFlag = country.flag
        }
      })
    },
  },
  computed: {
    ...mapState('countries', ['countries']),
  },
  watch: {
    countries() {
      this.findCountry()
    },
    selectedLocal() {
      this.findCountry()
    },
  },
}
</script>

<style lang="scss">
.countries {
  position: absolute;
  width: 95px;
  height: 48px;
  left: 82px;
  top: 22px;

  background: #ffffff;
  border: 1px solid rgba(8, 21, 62, 0.05);
  border-radius: 6px;
}

.flag {
  position: absolute;
  width: 18px;
  height: 14px;
  left: 15px;
  top: 17px;

  background: #08153e;
  border: 1px solid #08153e;
  box-sizing: border-box;
  border-radius: 3px;
}

.country {
  position: absolute;
  width: 17px;
  height: 30px;
  left: 44px;
  top: 9px;

  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;

  color: #08153e;
}

.down-icon {
  position: absolute;
  width: 9px;
  left: 70.71px;
  top: 21.2px;
  opacity: 0.4;
  cursor: pointer;
}
</style>
