<template>
  <div class="dropdown">
    <label>{{ property }}</label>
    <select
      @change="$emit('change', $event.target.name, $event.target.value)"
      v-bind:name="property"
    >
      <option v-for="option in options" v-bind:key="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Dropdown',
  props: {
    options: Array,
    property: String,
  },
};
</script>

<style>
label {
  margin: 0.2rem;
}
</style>
