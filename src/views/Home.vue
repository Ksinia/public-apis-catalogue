<template>
  <div class="home">
    <h1>Public APIs Catalogue</h1>
    <div v-if="loading" class="loading">Loading...</div>

    <div v-if="error" class="error">{{ error }}</div>

    <div class="filters">
      <DropDown
        v-for="property in Object.keys(options)"
        v-bind:key="property"
        v-bind:options="options[property]"
        v-bind:property="property"
        @change="setFilter"
      />
      <div class="sorting">
        <span>Sort:</span>
        <button @click="sortAscending" :disabled="sortingAscending">
          a-z
        </button>
        <button @click="sortDescending" :disabled="!sortingAscending">
          z-a
        </button>
      </div>
    </div>
    <div v-if="filteredApis.length > 0">
      <div class="content">
        <SingleAPI
          v-for="api in filteredApis.slice(
            0 + (currentPage - 1) * 10,
            currentPage * 10
          )"
          v-bind:api="api"
          v-bind:key="api.Link"
        />
      </div>
      <div class="pages">
        <button v-if="currentPage > 1" v-on:click="prevPage">
          Previous
        </button>
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
import SingleAPI from '@/components/SingleAPI.vue';
import DropDown from '@/components/Dropdown.vue';
import url from '@/url';
import { getOptions, filterApis } from '@/services';

export default {
  name: 'Home',
  components: {
    SingleAPI,
    DropDown,
  },
  data() {
    return {
      loading: false,
      apis: [],
      error: null,
      currentPage: parseInt(this.$route.query.page) || 1,
      filters: {
        Auth: 'all',
        HTTPS: 'all',
        Cors: 'all',
        Category: 'all',
      },
      sortingAscending: true,
    };
  },
  computed: {
    options: function () {
      return getOptions(this.apis);
    },
    filteredApis: function () {
      return filterApis(this.apis, this.filters, this.sortingAscending);
    },
    totalPages: function () {
      return Math.ceil(this.filteredApis.length / 10);
    },
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
        const response = await fetch(`${url}/entries`);
        this.loading = false;
        const body = await response.json();
        if (!response.ok) {
          this.error = body.toString();
        } else if (body.count === 0) {
          this.error = 'no apis';
        } else {
          this.apis = body.entries;
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
    setFilter(event) {
      this.filters[event.target.name] = event.target.value;
    },
    sortAscending() {
      console.log('sort');
      this.sortingAscending = true;
      console.log(this.filteredApis[0].API);
    },
    sortDescending() {
      this.sortingAscending = false;
      console.log(this.filteredApis[0].API);
    },
  },
  watch: {
    // call the method if the route changes
    $route: 'getCurrentPage',

    filteredApis: function () {
      if (this.$route.query.page) {
        this.$router.push('/');
      }
    },
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
.filters {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}
.sorting > * {
  margin: 0 0.2rem;
}
</style>
