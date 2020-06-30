<template>
  <div class="api" @click="redirectToDetailsPage">
    <div :style="color" class="tile-header">
      <div class="icon">
        <img v-bind:src="'https://api.statvoo.com/favicon/?url=' + api.Link" />
      </div>
      <h3>{{ api.API }}</h3>
    </div>
    <div class="tile-body">
      <p>{{ api.Description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Api, stringToColour } from '@/services';

export default Vue.extend({
  data() {
    return { color: { 'background-color': stringToColour(this.api.Category) } };
  },
  name: 'SingleAPI',
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
  margin: 1rem 0.1rem;
  cursor: pointer;
  width: 210px;
  height: 150px;
  display: flex;
  flex-direction: column;
}
.tile-header {
  border-bottom: 1px solid lightgrey;
  border-radius: 5px 5px 0 0;
  height: 40%;
  display: flex;
  flex-direction: row;
  padding: 0 0.2rem;
}
.tile-header h3 {
  text-align: left;
  width: 88%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 100%;
}
.tile-body {
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: top;
  text-align: left;
  padding: 0.1rem 0.5rem;
}
.tile-body p {
  margin: 0;
  overflow: hidden;
}
.icon {
  height: 25px;
  margin: auto 0.3rem;
  width: 12%;
  display: flex;
  justify-content: center;
}
img {
  max-width: 100%;
  max-height: 100%;
  margin: auto;
}
@media only screen and (max-width: 420px) {
  .api {
    width: 90vw;
  }
}
</style>
