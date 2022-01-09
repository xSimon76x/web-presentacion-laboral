<template>
  <div class="hello">
    <h1>{{ msg }} mensaje</h1>
  </div>
</template>

<script>
import nBar from "../components/navBar.vue";
export default {
  props: {
    msg: String,
  },
  components: {
    nBar,
  },
};
</script>
