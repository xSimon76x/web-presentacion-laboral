<template>
  <div>
    <v-card color="grey lighten-4" flat tile>
      <v-toolbar app>
        <v-app-bar-nav-icon
          @click.stop="drawerPadre = !drawerPadre"
        ></v-app-bar-nav-icon>
        <!-- click.stop -->

        <v-toolbar-title class="font-weight-black">
          Web Portafolio
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon color="grey">mdi-wallet-travel</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-phone</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "NavBar",
  props: {
    test: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      alignments: ["start", "center", "end"],
      stop: true,
      drawerPadre: false,
    };
  },

  // methods: {
  //   fnClickMenu(valor) {
  //     return (valor = !valor);
  //   },
  // },
  mounted() {
    this.$emit("valorMenu", this.drawerPadre);
  },
};
</script>
