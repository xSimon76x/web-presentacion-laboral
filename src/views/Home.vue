<template>
  <div>
    <nBar />
    <!-- <hello-world /> -->
    <pFil />
    <fonHome />
    <hBil />
    <conMe />
    <fAb />
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld";
// Dentro de nDrawes esta el menu y la exportacion del componente navBar
import hBil from "../components/habilidades.vue";
import pFil from "../components/perfil.vue";
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
    hBil,
    fonHome,
    conMe,
    fAb,
  },
};
</script>
