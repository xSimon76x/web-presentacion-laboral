<template>
  <div>
    <!-- <loadingPageVue /> -->
    <nBar />
    <preS />
    <!-- <iPres /> -->
    <!-- <hello-world /> -->
    <v-row style="padding: 5rem">
      <v-col cols="12" xs="" sm="12" md="6">
        <pFil />
      </v-col>
      <v-col cols="12" sm="12" md="6">
        <hBil />
      </v-col>
    </v-row>

    <fonHome style="background-color: #1b263b" />
    <intereses />
    <fAb />
  </div>
</template>

<script>
import preS from "../components/presentacion.vue";
import HelloWorld from "../components/HelloWorld";
// Dentro de nDrawes esta el menu y la exportacion del componente navBar
import hBil from "../components/habilidades.vue";
import pFil from "../components/perfil.vue";
import iPres from "../components/imgPresentacion.vue";
import nBar from "../components/navBar.vue";
import fonHome from "../components/fondoHome.vue";
import contactos from "../components/contactos.vue";
import intereses from "../components/intereses.vue";

import fAb from "../components/footerAb.vue";
import loadingPageVue from "../components/loadingPage.vue";
export default {
  name: "Home",
  components: {
    HelloWorld,
    nBar,
    loadingPageVue,
    pFil,
    preS,
    iPres,
    hBil,
    fonHome,
    intereses,
    fAb,
  },
};
</script>
<style></style>
