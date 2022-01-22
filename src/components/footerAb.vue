<template>
  <div>
    <!-- <v-footer v-bind="localAttrs" :padless="true">
      <v-card flat tile width="100%" class="blue lighten-1 text-center">
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-2" icon>
            <v-icon class="" size="15px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="black--text">
          <p style="font-size: 10px">
            ©2022 -
            <strong> Simon Ivan Bustamante Venegas</strong>. Todos los derechos
            reservados.
          </p>
        </v-card-text>
      </v-card>
    </v-footer> -->
    <v-footer v-bind="localAttrs" dark :padless="true">
      <v-card flat tile width="100%" class="text-center">
        <v-card-text class="blue lighten-1 text-center py-2">
          <!-- <v-tooltip top>
            <template v-slot:activator="{ on, attrs }"> -->
          <v-btn
            @click="red(link.url)"
            v-for="link in links"
            :key="link"
            class="mx-2"
            dark
            icon
          >
            <!-- v-bind="attrs"
                v-on="on" -->
            <v-icon size="20px">
              {{ link.icons }}
            </v-icon>
          </v-btn>
          <!-- </template>
            <span>asdasdasd</span> 
          </v-tooltip>-->
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text class="py-2 white--text text-center textFooter">
          Todos los derechos reservados por
          <strong> Simon Ivan Bustamante Venegas</strong> ©2022
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-linkedin", "mdi-email", "mdi-git", "mdi-phone"],
    items: ["default", "absolute", "fixed"],
    padless: false,
    variant: "default",
    links: [
      {
        icons: "mdi-linkedin",
        url: "https://www.linkedin.com/in/simon-bustamante-venegas",
        name: "linkedin",
        lugar: "top",
      },
      {
        icons: "mdi-email",
        url: "https://www.google.com/gmail/about/",
        name: "linkedin",
        lugar: "top",
      },
      {
        icons: "mdi-git",
        url: "https://github.com/xSimon76x",
        name: "linkedin",
        lugar: "top",
      },
      {
        icons: "mdi-phone",
        url: "https://wa.me/+56964621648",
        name: "linkedin",
        lugar: "top",
      },
    ],
  }),
  computed: {
    localAttrs() {
      const attrs = {};

      if (this.variant === "default") {
        attrs.absolute = false;
        attrs.fixed = false;
      } else {
        attrs[this.variant] = true;
      }
      return attrs;
    },
  },
  methods: {
    red(link) {
      window.location.href = link;
    },
  },
};
</script>

<style>
.textFooter {
  font-size: 10px;
}
</style>
