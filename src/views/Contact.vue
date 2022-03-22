<template>
  <div>
    <nBar />
    <preS />
    <contacto />
    <foAb />
  </div>
</template>

<script>
import preS from "../components/presentacion.vue";
import nBar from "../components/navBar.vue";
import iPres from "../components/imgPresentacion.vue";
import contacto from "../components/contactos.vue";
import foAb from "../components/footerAb.vue";
import loadingPageVue from "../components/loadingPage.vue";
export default {
  name: "Contact",
  components: {
    nBar,
    contacto,
    preS,
    foAb,
    iPres,
    loadingPageVue,
  },
};
</script>
<style></style>
