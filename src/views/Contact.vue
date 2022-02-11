<template>
  <div>
    <nBar />
    <preS />
    <contactos />
    <foAb />
  </div>
</template>

<script>
import preS from "../components/presentacion.vue";
import nBar from "../components/navBar.vue";
import iPres from "../components/imgPresentacion.vue";
import contactos from "../components/contactos.vue";
import foAb from "../components/footerAb.vue";

export default {
  components: {
    nBar,
    contactos,
    preS,
    foAb,
    iPres,
  },
};
</script>
<style></style>
