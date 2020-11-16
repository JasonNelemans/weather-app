<template>
  <div class="city-location">
    <input
      type="text"
      placeholder="Please enter your location..."
      required
      class="input-text"
      v-model="city"
      v-on:keyup.enter="fetchWeather({ city, country })"
    />
    <img
      v-if="!appLoading"
      src="../assets/magnifier.png"
      alt="magnifier"
      class="icon magnifier"
      v-bind:style="{ opacity: this.city && 1 }"
      @click="fetchWeather({ city, country })"
    />
    <img
      v-if="appLoading"
      src="../assets/loading.png"
      alt="loading"
      class="icon loading"
    />
  </div>
</template>

<script lang="ts">
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      city: ""
    };
  },
  computed: {
    ...mapState("countries", ["country"]),
    ...mapState("appState", ["appLoading"])
  },
  methods: {
    ...mapActions("weather", ["fetchWeather"])
  }
};
</script>

<style lang="scss">
.city-location {
  position: absolute;
  width: 425px;
  height: 48px;
  left: 185px;
  top: 22px;

  background: #ffffff;
  border: 1px solid rgba(8, 21, 62, 0.05);
  border-radius: 6px;
}

.city-location:hover {
  border: 1px solid #b5c7ff;
}

.city-location:focus-within {
  border: 2px solid #b5c7ff;
}

.input-text {
  border: none;
  position: absolute;
  width: 299px;
  height: 30px;
  left: 17px;
  top: 9px;

  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;

  color: #08153e;
}

.input-text:focus {
  outline: none;
}

.input-text::placeholder {
  opacity: 0.5;
}

.icon {
  position: absolute;
  width: 25px;
  height: 25px;
  left: 391px;
  top: 13px;
}

.magnifier {
  opacity: 0.5;
}

.loading {
  animation: 2s linear infinite spin;
}

@-moz-keyframes spin {
  from {
    -moz-transform: rotate(0deg);
  }
  to {
    -moz-transform: rotate(360deg);
  }
}
@-webkit-keyframes spin {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
