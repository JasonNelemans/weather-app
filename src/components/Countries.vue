<template>
  <div class="countries"></div>
</template>

<script lang="ts">
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  mounted() {
    this.fetchCountries()
  },
  methods: {
    ...mapActions('countries', ['fetchCountries']),
  },
  computed: {
    ...mapState('countries', ['countries']),
  },
  watch: {
    countries() {
      console.log('this countries: ', this.countries)
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
</style>
