<template>
  <div>
    <nBar />
    <iPres />
    <contactos />
    <foAb />
  </div>
</template>

<script>
import nBar from "../components/navBar.vue";
import iPres from "../components/imgPresentacion.vue";
import contactos from "../components/contactos.vue";
import foAb from "../components/footerAb.vue";

export default {
  components: {
    nBar,
    contactos,
    foAb,
    iPres,
  },
};
</script>
<style></style>
