<template>
  <div class="api">
    <h2>{{ api.API }}</h2>
    <p>Description: {{ api.Description }}</p>
    <p>Authentification: {{ api.Auth }}</p>
    <p>Supports HTTPS: {{ api.HTTPS ? "yes" : "no" }}</p>
    <p>CORS: {{ api.Cors }}</p>
    <p>
      Link:
      <a v-bind:href="api.Link">{{ api.Link }}</a>
    </p>
    <p>Category: {{ api.Category }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
type Api = {
  API: String;
  Description: String;
  Auth: String;
  HTTPS: Boolean;
  Cors: String;
  Link: String;
  Category: String;
};

export default Vue.extend({
  name: "SingleAPI",
  props: {
    api: Object as Vue.PropType<Api>,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.api {
  border: 1px solid lightgrey;
  border-radius: 5px;
  margin: 1rem;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
