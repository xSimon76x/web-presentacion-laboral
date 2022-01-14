<template>
  <div>
    <v-parallax
      height="auto"
      src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
    >
      <timLine />
    </v-parallax>
    <p hidden>otro fondo :0</p>
  </div>
</template>

<script>
import timLine from "../components/timeLines.vue";
export default {
  components: {
    timLine,
  },
};
</script>

<style></style>
