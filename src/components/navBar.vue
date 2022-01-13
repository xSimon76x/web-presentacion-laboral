<template>
  <div>
    <v-card flat tile lights-out dark>
      <v-app-bar absolute elevation="16">
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
          ></v-img>
        </template>

        <v-app-bar-nav-icon
          @click.stop="drawerPadre = !drawerPadre"
        ></v-app-bar-nav-icon>
        <!-- click.stop -->

        <v-toolbar-title class="font-weight-black" hidden>
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
      </v-app-bar>
      <v-container>
        <iPres fluid />
      </v-container>

      <!-- container -->
    </v-card>

    <v-system-bar height="26" lights-out></v-system-bar>
    <!-- menu desplegable -->
    <v-navigation-drawer app v-model="drawerPadre" temporary>
      <div>
        <div>
          <v-list-item>
            <v-list-item-avatar>
              <v-img
                src="https://randomuser.me/api/portraits/men/78.jpg"
              ></v-img>
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
            <v-list-item v-for="item in items" :key="item.title" link>
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-divider></v-divider>
          <v-footer padless>
            <v-col class="text-center" cols="12">
              {{ new Date().getFullYear() }} — <strong>S.B.V</strong>
            </v-col>
          </v-footer>
        </div>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { ref } from "vue";
import navBar from "../components/navDrawers.vue";
import iPres from "../components/imgPresentacion.vue";
export default {
  name: "NavBar",
  components: {
    navBar,
    iPres,
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
        { title: "Proyectos", icon: "mdi-wallet-travel" },
        { title: "Contactos", icon: "mdi-phone" },
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
  background-image: url("../assets/img/fondo.png");
  background-size: cover;
  height: 100vh;
}
</style>
