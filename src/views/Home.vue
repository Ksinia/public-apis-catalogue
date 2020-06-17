<template>
  <div class="home">
    <h1>Public APIs Catalogue</h1>
    <div v-if="loading" class="loading">Loading...</div>

    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="apis.length > 0">
      <div class="content">
        <SingleAPI
          v-for="api in apis.slice(
            0 + (currentPage - 1) * 10,
            currentPage * 10
          )"
          v-bind:api="api"
          v-bind:key="api.API"
        />
      </div>
      <div class="pages">
        <button v-if="currentPage > 1" v-on:click="prevPage">Previous</button>
        <p>Page {{ currentPage }} of {{ totalPages }}</p>
        <button v-if="currentPage < totalPages" v-on:click="nextPage">
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SingleAPI from "@/components/SingleAPI.vue";
import url from "@/url";

export default {
  name: "Home",
  components: {
    SingleAPI,
  },
  data() {
    return {
      loading: false,
      apis: [],
      error: null,
      currentPage: parseInt(this.$route.query.page) || 1,
      totalPages: 0,
    };
  },
  async created() {
    // fetch the data when the view is created and the data is
    // already being observed
    this.error = null;
    this.apis = [];
    this.loading = true;
    this.fetchAllAPIs();
  },
  methods: {
    async fetchAllAPIs() {
      try {
        const response = await fetch(`${url}/entries`, {
          method: "GET",
        });
        this.loading = false;
        const body = await response.json();
        if (!response.ok) {
          this.error = body.toString(); // TODO точно тут нужен toString?
        } else if (body.count === 0) {
          this.error = "no apis";
        } else {
          this.apis = body.entries;
          this.totalPages = Math.ceil(body.count / 10);
        }
      } catch (error) {
        this.error = error;
      }
    },
    nextPage() {
      this.$router.push(`?page=${this.currentPage + 1}`);
    },
    prevPage() {
      this.$router.push(`?page=${this.currentPage - 1}`);
    },
    getCurrentPage() {
      this.currentPage = parseInt(this.$route.query.page) || 1;
    },
  },
  watch: {
    // call again the method if the route changes
    $route: "getCurrentPage",
  },
};
</script>

<style scoped>
.home {
  padding-top: 2.5rem;
}
.pages {
  display: flex;
  flex-flow: row wrap;
  margin: auto;
  justify-content: center;
}
.pages button {
  margin: 1rem;
  color: #2c3e50;
}
.content {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
}
</style>
