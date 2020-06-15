<template>
  <div class="details-page">
    <h1>This is a details page</h1>
    <div v-if="loading" class="loading">Loading...</div>

    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="api" class="content">
      <SingleAPI v-bind:api="api" />
    </div>
  </div>
</template>

<script>
import SingleAPI from "@/components/SingleAPI.vue";
import url from "@/url";

export default {
  data() {
    return {
      title: this.$route.params.title,
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
    this.fetchAPI();
  },
  methods: {
    async fetchAPI() {
      try {
        const response = await fetch(`${url}/entries?title=${this.title}`, {
          method: "GET",
        });
        this.loading = false;
        const body = await response.json();
        if (!response.ok) {
          this.error = body.toString(); // TODO точно тут нужен toString?
        } else {
          this.api = body.entries[0];
        }
      } catch (error) {
        this.error = error;
      }
    },
  },
  name: "DetailsPage",
  components: {
    SingleAPI,
  },
};
</script>

<style scoped>
.details-page {
  padding-top: 2.5rem;
}
</style>
