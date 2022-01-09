<template>
  <div>
    <!-- <hello-world /> -->
    <nBar />
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld";
import nBar from "../components/navBar.vue";

export default {
  name: "Home",

  components: {
    HelloWorld,
    nBar,
  },
};
</script>
