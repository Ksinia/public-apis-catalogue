<template>
  <div class="categories">
    <h1>A list of categories</h1>
    <div v-if="loading" class="loading">Loading...</div>

    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="categories.length > 0" class="content">
      <div class="tag" v-for="category in categories" v-bind:key="category">
        <a
          v-bind:style="{
            color: stringToColour(category),
            'font-size': fontSizes[category] + 'px' || '14px',
          }"
          v-bind:href="'/categories/' + encodeURIComponent(category)"
          >{{ category }}</a
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import url from '@/url';
import { stringToColour, Api } from '@/services';

export default Vue.extend({
  name: 'Categories',
  data() {
    return {
      loading: false,
      categories: [] as string[],
      error: null as null | string,
      stringToColour: stringToColour,
      fontSizes: {} as { [key: string]: number },
    };
  },
  created() {
    // fetch the data when the view is created and the data is
    // already being observed
    this.error = null;
    this.categories = [];
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
        } else if (body.length === 0) {
          this.error = 'no categories';
        } else {
          const apis = body.entries;
          apis.forEach((api: Api) => {
            if (api.Category in this.fontSizes) {
              this.fontSizes[api.Category] += 1;
            } else {
              this.fontSizes[api.Category] = 9;
              this.categories.push(api.Category);
            }
          });
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
.content {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  padding: 0 1rem;
}
.tag {
  margin: 0 0.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.tag a {
  text-decoration: none;
}
.tag a:hover {
  transform: scale(1.1);
}
a {
  color: #42b983;
}
</style>
