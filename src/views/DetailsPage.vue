<template>
  <div class="details-page">
    <div v-if="loading" class="loading">Loading...</div>

    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="api" class="content">
      <SingleAPIDetails v-bind:api="api" />
    </div>
    <div v-if="relevantApis.length > 0">
      <h1>{{ relevantApis.length }} relevant APIs</h1>
      <div class="additional-content">
        <SingleAPI
          v-for="api in relevantApis"
          v-bind:api="api"
          v-bind:key="api.API"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import SingleAPI from '@/components/SingleAPI.vue';
import SingleAPIDetails from '@/components/SingleAPIDetails.vue';
import url from '@/url';
import { Api } from '../services';

export default Vue.extend({
  data() {
    return {
      loading: false,
      api: null as null | Api,
      error: null as null | string,
      relevantApis: [] as Api[],
    };
  },
  watch: {
    // call again the method if the route changes
    '$route.params.title': function () {
      this.fetchAPI();
    },
  },
  created() {
    // fetch the data when the view is created and the data is
    // already being observed
    this.error = this.api = null;
    this.loading = true;
    this.fetchAPI();
  },
  methods: {
    async fetchAPI() {
      try {
        const response = await fetch(
          `${url}/entries?title=${encodeURIComponent(this.$route.params.title)}`
        );
        this.loading = false;
        const body = await response.json();
        if (!response.ok) {
          this.error = body.toString();
        } else {
          this.api = body.entries[0];

          const response2 =
            this.api &&
            (await fetch(
              `${url}/entries?category=${encodeURIComponent(this.api.Category)}`
            ));
          const body2 = response2 && (await response2.json());
          if (!response.ok) {
            this.error = body2.toString();
          } else {
            this.relevantApis = body2.entries
              .filter((entry: Api) => entry.API !== (this.api && this.api.API))
              .slice(0, 3);
          }
        }
      } catch (error) {
        this.error = error;
      }
    },
  },

  name: 'DetailsPage',
  components: {
    SingleAPI,
    SingleAPIDetails,
  },
});
</script>

<style scoped>
.details-page {
  padding-top: 3rem;
}
.additional-content {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
}
h1 {
  margin-top: 0;
}
a {
  color: #42b983;
  word-break: break-all;
}
</style>
