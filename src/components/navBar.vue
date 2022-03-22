<template>
  <div>
    <v-card flat tile fixed>
      <v-app-bar fixed elevation="7" dark>
        <!--absolute para que no este fijo mientras se hace scroll en la vista-->
        <template v-slot:img="{ props }">
          <v-img class="back" v-bind="props"></v-img>
        </template>

        <v-app-bar-nav-icon
          color="red"
          @click.stop="drawerPadre = !drawerPadre"
        ></v-app-bar-nav-icon>

        <v-toolbar-title class="font-weight-black" hidden>
          Web Portafolio
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <div v-for="item in items" :key="item.title" class="pr-4">
          <router-link
            :to="item.route"
            style="text-decoration: none; color: inherit"
          >
            <div class="d-flex align-center">
              <v-icon class="itemSelectNavBar">{{ item.icon }}</v-icon>
              <p class="itemSelectNavBar pl-1 mb-0">
                {{ item.title }}
              </p>
            </div>
          </router-link>
        </div>
      </v-app-bar>
    </v-card>

    <v-navigation-drawer app v-model="drawerPadre" temporary color="dark" dark>
      <div>
        <div>
          <v-list-item class="pt-6">
            <v-list-item-avatar>
              <v-img src="../assets/img/logo/imgPerfil.png"></v-img>
            </v-list-item-avatar>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                <h5>Simón Bustamante V.</h5>
              </v-list-item-title>
              <v-list-item-subtitle
                >simonbustamante21@gmail.com</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </div>
        <div mt-8>
          <v-divider></v-divider>

          <v-list dense>
            <v-list-item
              v-for="item in items"
              :key="item.title"
              link
              :to="{ path: item.route }"
              style="text-decoration: none; color: inherit"
            >
              <v-list-item-icon>
                <v-icon>
                  {{ item.icon }}
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>
                  {{ item.title }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </div>
      </div>
      <template v-slot:append>
        <div>
          <!-- <foAb /> -->
        </div>
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { ref } from "vue";

import iPres from "../components/imgPresentacion.vue";
import foAb from "../components/footerAb.vue";
export default {
  name: "NavBar",
  components: {
    iPres,
    foAb,
  },
  props: {
    test: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      alignments: ["start", "center", "end"],
      drawerPadre: false,
      items: [
        { title: "Inicio", icon: "mdi-home", route: "/" },
        { title: "Proyectos", icon: "mdi-wallet-travel", route: "/proyectos" },
        { title: "Contactos", icon: "mdi-phone", route: "/contacto" },
      ],
    };
  },

  // mounted() {
  //   this.$emit("valorMenu", this.drawerPadre);
  // },
};
</script>

<style scoped lang="scss">
.v-icon {
  color: #6facdd !important;
}

.back {
  background: transparent;
  // 1f1e1e
}

.barNav {
  background-color: #222222 !important;
}

.itemSelectNavBar {
  color: #6facdd !important;
}
</style>
