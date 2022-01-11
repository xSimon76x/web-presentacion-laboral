<template>
  <!-- Menu desplegable -->
  <div>
    <nBar :test="test" @valorMenu="valorMenu = $event" />

    <v-navigation-drawer app v-model="valorMenu" temporary>
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
import nBar from "../components/navBar.vue";
export default {
  components: {
    nBar,
  },
  data() {
    return {
      test: 4,
      items: [
        { title: "Proyectos", icon: "mdi-wallet-travel" },
        { title: "Contactos", icon: "mdi-phone" },
      ],
      valorMenu: null,
    };
  },
  methods: {
    fn(vaolor) {
      alert(vaolor);
    },
  },
};
</script>

<style></style>
