<template>
  <div class="category">
    <div v-if="loading" class="loading">Loading...</div>

    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="apis.length > 0" class="content">
      <div v-if="apis.length > 0">
        <h1>APIs in the category "{{ this.$route.params.category }}"</h1>
        <div class="content">
          <SingleAPI
            v-for="api in apis"
            v-bind:api="api"
            v-bind:key="api.Link"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SingleAPI from "@/components/SingleAPI.vue";
import url from "@/url";

export default {
  data() {
    return {
      loading: false,
      apis: [],
      error: null,
    };
  },
  watch: {
    // call again the method if the route changes
    "$route.params.category": function () {
      this.fetchCategoryAPIs();
    },
  },
  created() {
    // fetch the data when the view is created and the data is
    // already being observed
    this.error = null;
    this.apis = [];
    this.loading = true;
    this.fetchCategoryAPIs();
  },
  methods: {
    async fetchCategoryAPIs() {
      try {
        const response = await fetch(
          `${url}/entries?category=${encodeURIComponent(
            this.$route.params.category
          )}`
        );
        this.loading = false;
        const body = await response.json();
        if (!response.ok) {
          this.error = body.toString(); // TODO точно тут нужен toString?
        } else {
          this.apis = body.entries;
        }
      } catch (error) {
        this.error = error;
      }
    },
  },

  name: "Category",
  components: {
    SingleAPI,
  },
};
</script>

<style scoped>
.category {
  padding-top: 2.5rem;
}
.content {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
}
a {
  color: #42b983;
  word-break: break-all;
}
</style>
