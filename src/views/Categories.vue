<template>
  <div class="categories">
    <h1>A list of categories</h1>
    <div v-if="loading" class="loading">Loading...</div>

    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="categories.length > 0" class="content">
      <ul>
        <li v-for="category in categories" v-bind:key="category">
          <a v-bind:href="'/category/' + encodeURIComponent(category)">
            {{ category }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import url from '@/url';

export default Vue.extend({
  name: 'Categories',
  data() {
    return {
      loading: false,
      categories: [] as string[],
      error: null as null | string,
    };
  },
  async created() {
    // fetch the data when the view is created and the data is
    // already being observed
    this.error = null;
    this.categories = [];
    this.loading = true;
    this.fetchCategories();
  },
  methods: {
    async fetchCategories() {
      try {
        const response = await fetch(`${url}/categories`);
        this.loading = false;
        const body = await response.json();
        if (!response.ok) {
          this.error = body.toString();
        } else if (body.length === 0) {
          this.error = 'no categories';
        } else {
          this.categories = body;
        }
      } catch (error) {
        this.error = error;
      }
    },
  },
});
</script>

<style scoped>
.categories {
  padding-top: 2.5rem;
}
ul {
  list-style: none;
  padding: 0 1rem;
}
li {
  margin: 0.5rem;
}
a {
  color: #42b983;
}
</style>
