<template>
  <div>
    <nBar />
    <!-- <hello-world /> -->
    <timLine />
    <fAb />
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld";
// Dentro de nDrawes esta el menu y la exportacion del componente navBar
import timLine from "../components/timeLines.vue";
import nBar from "../components/navBar.vue";

import fAb from "../components/footerAb.vue";
export default {
  name: "Home",

  components: {
    HelloWorld,
    nBar,
    timLine,
    fAb,
  },
};
</script>
