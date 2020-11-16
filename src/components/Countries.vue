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
    <svg
      viewBox="0 0 1030 638"
      class="down-icon"
      @click="dropMenuIsOpen = !dropMenuIsOpen"
    >
      <path
        d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z"
        fill="#000000"
      ></path>
    </svg>
    <transition name="fade" appear>
      <nav>
        <div class="sub-menu" v-if="dropMenuIsOpen">
          <div v-for="(country, i) in countries" :key="i" class="menu-item">
            <p @click="userSelected(country.flag, country.code)">
              <img :src="country.flag" width="18px" height="14px" />
              <b>{{ country.code }}</b>
            </p>
          </div>
        </div>
      </nav>
    </transition>
  </div>
</template>

<script lang="ts">
import { mapState, mapActions, mapMutations } from 'vuex'
import Component from 'vue-class-component'
import Vue from 'vue'
import { Watch } from 'vue-property-decorator'

import { Country } from '@/types/CountryTypes'

@Component({
  mounted() {
    this.$store.dispatch('countries/fetchCountries')
  },
  computed: {
    ...mapState('countries', ['countries', 'country']),
  },
})
export default class Countries extends Vue {
  selectedCountry = ''
  selectedFlag = ''
  dropMenuIsOpen = false
  countries: any
  country: string | undefined

  findCountryAndFlag() {
    this.countries.find((country: Country) => {
      if (country.code === this.country) {
        this.selectedCountry = country.code
        this.selectedFlag = country.flag
      }
    })
  }

  userSelected(flag: string, country: string) {
    this.selectedFlag = flag
    this.selectedCountry = country
    this.dropMenuIsOpen = false
    this.$store.commit('countries/updateCountry', country)
  }

  @Watch('countries') renderFlag() {
    this.findCountryAndFlag()
  }
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
  top: 16.5px;

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

.sub-menu {
  overflow: scroll;
  height: 250px;
  position: absolute;
  background-color: #fff;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  width: max-content;
  overflow-x: hidden;
  z-index: 1;
}

.menu-item {
  cursor: pointer;
  b {
    margin-left: 5px;
  }

  img {
    background: #08153e;
    border: 1px solid #08153e;
    box-sizing: border-box;
    border-radius: 3px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
