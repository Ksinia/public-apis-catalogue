<template>
  <div class="api-details">
    <h1>{{ api.API }}</h1>
    <table>
      <tr>
        <td>Description:</td>
        <td class="centered">{{ api.Description }}</td>
      </tr>
      <tr>
        <td>Authentification:</td>
        <td class="centered">{{ api.Auth }}</td>
      </tr>
      <tr>
        <td>HTTPS support:</td>
        <td class="centered">{{ api.HTTPS ? 'yes' : 'no' }}</td>
      </tr>
      <tr>
        <td>CORS:</td>
        <td class="centered">{{ api.Cors }}</td>
      </tr>
      <tr>
        <td>Link:</td>
        <td class="centered">
          <a v-bind:href="api.Link">{{ api.Link }}</a>
        </td>
      </tr>
      <tr>
        <td>Category:</td>
        <td class="centered">
          <router-link v-bind:to="/category/ + api.Category">{{
            api.Category
          }}</router-link>
        </td>
      </tr>
    </table>
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
a {
  color: #42b983;
  word-break: break-all;
}
table {
  margin: auto;
  padding: 1rem;
  max-width: 800px;
}
td {
  padding: 0.3rem 1rem;
  text-align: left;
}
td.centered {
  text-align: center;
}
@media only screen and (max-width: 800px) {
  table {
    max-width: 90%;
    padding: 0.1rem;
  }
  td {
    padding: 0.1rem 0.1rem;
    text-align: left;
  }
}
</style>
