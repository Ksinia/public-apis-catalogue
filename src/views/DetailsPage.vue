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

<script>
import SingleAPI from "@/components/SingleAPI.vue";
import SingleAPIDetails from "@/components/SingleAPIDetails.vue";
import url from "@/url";

export default {
  data() {
    return {
      loading: false,
      api: null,
      error: null,
      relevantApis: [],
    };
  },
  watch: {
    // call again the method if the route changes
    "$route.params.title": function () {
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
          `${url}/entries?title=${this.$route.params.title}`
        );
        this.loading = false;
        const body = await response.json();
        if (!response.ok) {
          this.error = body.toString(); // TODO точно тут нужен toString?
        } else {
          this.api = body.entries[0];
          const response2 = await fetch(
            `${url}/entries?category=${this.api.Category}`
          );
          const body2 = await response2.json();
          if (!response.ok) {
            this.error = body2.toString(); // TODO точно тут нужен toString?
          } else {
            this.relevantApis = body2.entries
              .filter((entry) => entry.API !== this.api.API)
              .slice(0, 3);
          }
        }
      } catch (error) {
        this.error = error;
      }
    },
  },

  name: "DetailsPage",
  components: {
    SingleAPI,
    SingleAPIDetails,
  },
};
</script>

<style scoped>
.details-page {
  padding-top: 2.5rem;
}
.additional-content {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
}
a {
  color: #42b983;
  word-break: break-all;
}
</style>
