<template>
  <div class="details-page">
    <h1>This is a details page</h1>
    <SingleAPI />
  </div>
</template>

<script>
import SingleAPI from "@/components/SingleAPI.vue";
export default {
  name: "DetailsPage",
  components: {
    SingleAPI,
  },
};
</script>

<style scoped>
.details-page {
  padding-top: 2.5rem;
}
</style>
