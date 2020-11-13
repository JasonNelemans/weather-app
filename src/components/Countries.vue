<template>
  <div class="countries">
    <v-select :options="countries" label="title">
      <template slot="option" slot-scope="country">
        <img :src="country.flag" width="18px" height="14px" />
        {{ country.code }}
      </template>
    </v-select>
  </div>
</template>

<script lang="ts">
import { mapState, mapActions, mapMutations } from 'vuex'
import vSelect from 'vue-select'
export default {
  components: {
    vSelect,
  },
  data() {
    return {
      selectedCountry: 'NL',
    }
  },
  mounted() {
    this.fetchCountries()
  },
  methods: {
    ...mapActions('countries', ['fetchCountries']),
  },
  computed: {
    ...mapState('countries', ['countries']),
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
  opacity: 0.1;
  border: 1px solid #08153e;
  box-sizing: border-box;
  border-radius: 3px;
}
</style>
