<template>
  <div>
    <nBar />
    <preS />
    <proy />
    <!-- <contactos /> -->
    <foAb />
  </div>
</template>

<script>
import proy from "../components/proyectos.vue";
import preS from "../components/presentacion.vue";
import nBar from "../components/navBar.vue";

import foAb from "../components/footerAb.vue";
export default {
  components: {
    nBar,
    preS,
    proy,
    foAb,
  },
};
</script>

<style></style>
