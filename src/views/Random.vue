<template>
  <div class="random">
    <div v-if="loading" class="loading">Loading...</div>

    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="api" class="content">
      <SingleAPIDetails v-bind:api="api" />
    </div>
    <button v-on:click="fetchRandomAPI">Another random API</button>
  </div>
</template>

<script lang="ts">
import url from '@/url';
import Vue from 'vue';
import SingleAPIDetails from '@/components/SingleAPIDetails.vue';
import { Api } from '../services';

export default Vue.extend({
  name: 'Random',
  data() {
    return {
      loading: false,
      api: null as null | Api,
      error: null as null | string,
    };
  },
  created() {
    // fetch the data when the view is created and the data is
    // already being observed
    this.error = this.api = null;
    this.loading = true;
    this.fetchRandomAPI();
  },
  methods: {
    async fetchRandomAPI() {
      try {
        const response = await fetch(`${url}/random`, {
          method: 'GET',
        });
        this.loading = false;
        const body = await response.json();
        if (!response.ok) {
          this.error = body.toString();
        } else {
          this.api = body.entries[0];
        }
      } catch (error) {
        this.error = error;
      }
    },
  },
  components: {
    SingleAPIDetails,
  },
});
</script>

<style scoped>
.random {
  padding-top: 2.5rem;
}
</style>
