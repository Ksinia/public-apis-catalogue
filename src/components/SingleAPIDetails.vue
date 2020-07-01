<template>
  <div class="api-details">
    <img v-bind:src="'https://api.statvoo.com/favicon/?url=' + api.Link" />
    <div class="api-content">
      <h1>{{ api.API }}</h1>
      <h3>{{ api.Description }}</h3>
      <p>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"
          />
        </svg>
        Authentification: {{ api.Auth || 'unknown' }}
      </p>
      <p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
        HTTPS: {{ api.HTTPS ? 'yes' : 'no' }}
      </p>
      <p>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M7.467.133a1.75 1.75 0 011.066 0l5.25 1.68A1.75 1.75 0 0115 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.7 1.7 0 01-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 011.217-1.667l5.25-1.68zm.61 1.429a.25.25 0 00-.153 0l-5.25 1.68a.25.25 0 00-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.2.2 0 00.154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.25.25 0 00-.174-.237l-5.25-1.68zM9 10.5a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.75a.75.75 0 10-1.5 0v3a.75.75 0 001.5 0v-3z"
          />
        </svg>
        Cors: {{ api.Cors }}
      </p>
    </div>
    <div class="links">
      <router-link class="link" v-bind:to="/categories/ + api.Category">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"
          />
          <line x1="7" y1="7" x2="7" y2="7" />
        </svg>
        Category: {{ api.Category }}
      </router-link>
      <a class="link" v-bind:href="api.Link" target="_blank">API Docs</a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Api } from '../services';

export default Vue.extend({
  name: 'SingleAPIDetails',
  props: {
    api: Object as Vue.PropType<Api>,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.api-details {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: auto;
  text-align: left;
}
img {
  width: 60px;
  height: 60px;
  vertical-align: top;
  padding: 1rem;
}
.api-content {
  padding: 1rem;
  max-width: 400px;
}
a {
  color: #42b983;
  word-break: break-all;
}
.links {
  display: flex;
  flex-direction: column;
  padding: 1rem;
}
.link {
  background-color: #42b983;
  border-radius: 5px;
  border: 1px solid lightgrey;
  color: #2c3e50;
  text-decoration: none;
  padding: 0.5em;
  margin-bottom: 2rem;
  text-align: center;
}
.link:hover {
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
}
h1 {
  margin-top: 0;
}
@media only screen and (max-width: 800px) {
}
svg {
  vertical-align: sub;
}
</style>
