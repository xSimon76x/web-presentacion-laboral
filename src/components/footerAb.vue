<template>
  <div>
    <v-footer v-bind="localAttrs" dark :padless="true">
      <v-card flat tile width="100%" class="text-center">
        <v-card-text class="blue lighten-1 text-center py-0">
          <v-btn
            @click="red(link.url)"
            v-for="link in links"
            :key="link.name"
            class="mx-2"
            dark
            icon
          >
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-icon size="20px" v-bind="attrs" v-on="on">
                  {{ link.icons }}
                </v-icon>
              </template>
              <span style="font-size: 1.8vh">{{ link.name }}</span>
            </v-tooltip>
          </v-btn>
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
    nameTool: ["Link", "", "", ""],
    padless: false,
    variant: "default",
    links: [
      {
        icons: "mdi-linkedin",
        url: "https://www.linkedin.com/in/simon-bustamante-venegas",
        name: "Linkedin",
      },
      {
        icons: "mdi-email",
        url: "https://www.google.com/gmail/about/",
        name: "Email",
      },
      {
        icons: "mdi-git",
        url: "https://github.com/xSimon76x",
        name: "GitHub",
      },
      {
        icons: "mdi-phone",
        url: "https://wa.me/+56964621648",
        name: "Telefono",
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
