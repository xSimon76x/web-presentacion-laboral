<template>
  <div>
    <nBar />
    <preS />
    <proy />

    <foAb />
  </div>
</template>

<script>
import proy from "../components/proyectos.vue";
import preS from "../components/presentacion.vue";
import nBar from "../components/navBar.vue";
import loadingPageVue from "../components/loadingPage.vue";
import foAb from "../components/footerAb.vue";
export default {
  components: {
    nBar,
    preS,
    proy,
    foAb,
    loadingPageVue,
  },
};
</script>

<style></style>
