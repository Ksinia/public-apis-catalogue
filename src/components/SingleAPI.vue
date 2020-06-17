<template>
  <div class="api" @click="redirectToDetailsPage">
    <h2>{{ api.API }}</h2>
    <p>Description: {{ api.Description }}</p>
    <p>Authentification: {{ api.Auth }}</p>
    <p>Supports HTTPS: {{ api.HTTPS ? "yes" : "no" }}</p>
    <p>CORS: {{ api.Cors }}</p>
    <!-- <p>
      Link:
      <a v-bind:href="api.Link">{{ api.Link }}</a>
    </p> -->
    <p>Category: {{ api.Category }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
type Api = {
  API: string;
  Description: string;
  Auth: string;
  HTTPS: boolean;
  Cors: string;
  Link: string;
  Category: string;
};

export default Vue.extend({
  name: "SingleAPI",
  props: {
    api: Object as Vue.PropType<Api>,
  },
  methods: {
    redirectToDetailsPage() {
      this.$router.push({
        path: `/apis/${this.api.API}`,
      });
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.api {
  border: 1px solid lightgrey;
  border-radius: 5px;
  margin: 1rem;
  padding: 1rem;
  cursor: pointer;
}
a {
  color: #42b983;
  word-break: break-all;
}
</style>
