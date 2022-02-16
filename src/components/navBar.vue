<template>
  <div>
    <v-card flat tile fixed>
      <v-app-bar absolute elevation="0" color="transparent">
        <!--absolute para que no este fijo mientras se hace scroll en la vista-->
        <template v-slot:img="{ props }">
          <v-img class="back" v-bind="props"></v-img>
        </template>

        <v-app-bar-nav-icon
          color="black"
          @click.stop="drawerPadre = !drawerPadre"
        ></v-app-bar-nav-icon>
        <!-- click.stop -->

        <v-toolbar-title class="font-weight-black" hidden>
          Web Portafolio
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <router-link to="/" style="text-decoration: none; color: inherit">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon color="black">mdi-home</v-icon>
              </v-btn>
            </template>
            <span style="font-size: 1.8vh">Inicio</span>
          </v-tooltip>
        </router-link>

        <router-link
          to="/proyectos"
          style="text-decoration: none; color: inherit"
        >
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon color="black">mdi-wallet-travel</v-icon>
              </v-btn>
            </template>
            <span style="font-size: 1.8vh">Proyectos</span>
          </v-tooltip>
        </router-link>

        <router-link
          to="/contacto"
          style="text-decoration: none; color: inherit"
        >
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon color="black">mdi-phone</v-icon>
              </v-btn>
            </template>
            <span style="font-size: 1.8vh">Contacto</span>
          </v-tooltip>
        </router-link>
      </v-app-bar>

      <!-- container -->
    </v-card>

    <!-- <v-container> </v-container> -->

    <!-- espacio entre la img de presentacion y lo demas -->
    <!-- <v-system-bar hidden height="26" lights-out></v-system-bar> -->

    <!-- menu desplegable -->
    <v-navigation-drawer app v-model="drawerPadre" temporary>
      <div>
        <div>
          <v-list-item>
            <v-list-item-avatar>
              <v-img src="../assets/img/logo/imgPerfil.png"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-row>
                <v-col> Simon Bustamante V. </v-col>
              </v-row>
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
              <!-- <v-dialog
                v-if="item.title == 'Proyectos'"
                transition="dialog-bottom-transition"
                max-width="600"
              >
                <template v-slot:default="dialog">
                  <v-card>
                    <v-toolbar color="primary" dark>Proyectos</v-toolbar>
                    <v-card-text>
                      <div class="text-h5 pa-12">
                        En proceso...pienso realizar una vista dedicada a los
                        proyectos, relacionada con visualizar el repositorio de
                        github
                      </div>
                    </v-card-text>
                    <v-card-actions class="justify-end">
                      <v-btn text @click="dialog.value = false">Cerrar</v-btn>
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog> -->
              <v-list-item-icon>
                <v-icon>
                  {{ item.icon }}
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <!-- <router-link
                  to="/"
                  style="text-decoration: none; color: inherit"
                  v-if="item.title === 'Proyectos'"
                > -->
                <v-list-item-title>
                  {{ item.title }}
                </v-list-item-title>
                <!-- </router-link>
                <v-list-item-title v-else>{{ item.title }}</v-list-item-title> -->
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <!-- <v-divider></v-divider>
          <v-footer :padless="true" v-bind="localAttrs">
            <v-col flat tile class="text-center" cols="12">
              {{ new Date().getFullYear() }} — <strong>S.B.V</strong>
            </v-col>
          </v-footer> -->
        </div>
      </div>
      <template v-slot:append>
        <div>
          <foAb />
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
.back {
  background: transparent;
  // 1f1e1e
}
</style>
