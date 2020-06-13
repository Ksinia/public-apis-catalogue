<template>
  <div class="random">
    <h1>Random API</h1>
    <div v-if="loading" class="loading">Loading...</div>

    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="api" class="content">
      <SingleAPI v-bind:api="api" />
    </div>
    <button v-on:click="fetchRandomAPI">Another random API</button>
  </div>
</template>

<script lang="ts">
import url from "@/url";
import Vue from "vue";
import SingleAPI from "@/components/SingleAPI.vue";

export default Vue.extend({
  name: "Random",
  data() {
    return {
      loading: false,
      api: null,
      error: null,
    };
  },
  created() {
    // fetch the data when the view is created and the data is
    // already being observed
    this.error = this.api = null;
    this.loading = true;
    this.fetchRandomAPI();
  },
  // watch: {
  //   // call again the method if the route changes
  //   $route: "fetchRandomAPI"
  // },
  methods: {
    async fetchRandomAPI() {
      // replace `getPost` with your data fetching util / API wrapper
      const response = await fetch(`${url}/random`, {
        method: "GET",
      });
      this.loading = false;
      const body = await response.json(); //.toString();
      console.log(body);
      if (!response.ok) {
        this.error = body.toString(); // TODO точно тут нужен toString?
      } else {
        this.api = body.entries[0];
      }
    },
  },
  components: {
    SingleAPI,
  },
});
</script>

<style scoped>
.random {
  padding-top: 2.5rem;
}
</style>
