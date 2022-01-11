<template>
  <div>
    <nDrawers />
    <!-- <hello-world /> -->
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld";
// Dentro de nDrawes esta el menu y la exportacion del componente navBar
import nDrawers from "../components/navDrawers.vue";
export default {
  name: "Home",

  components: {
    HelloWorld,
    nDrawers,
  },
};
</script>
