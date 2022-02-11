<template>
  <div>
    <nBar />
    <preS />
    <!-- <iPres /> -->
    <!-- <hello-world /> -->
    <pFil />

    <fonHome />
    <hBil />

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
import conMe from "@/components/contactos.vue";

import fAb from "../components/footerAb.vue";
export default {
  name: "Home",

  components: {
    HelloWorld,
    nBar,

    pFil,
    preS,
    iPres,
    hBil,
    fonHome,
    conMe,
    fAb,
  },
};
</script>
