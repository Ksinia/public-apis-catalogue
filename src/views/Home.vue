<template>
  <div class="home">
    <HelloWorld
      msg="Public APIs Catalogue Public APIs Catalogue Public APIs Catalogue Public APIs Catalogue Public APIs Catalogue Public APIs Catalogue Public APIs Catalogue Public APIs Catalogue Public APIs Catalogue Public APIs Catalogue Public APIs Catalogue Public APIs Catalogue Public APIs Catalogue Public APIs Catalogue"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>

<style scoped>
.home {
  padding-top: 2.5rem;
}
</style>
