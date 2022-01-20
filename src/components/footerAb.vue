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
        <v-card-text class="blue lighten-1 text-center teal">
          <v-btn
            v-for="link in links"
            :key="link"
            :to="{ path: link.url }"
            class="mx-2"
            dark
            icon
          >
            <v-icon size="20px">
              {{ link.icons }}
            </v-icon>
          </v-btn>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text class="py-2 white--text text-center">
          ©2022 -
          <strong> Simon Ivan Bustamante Venegas</strong>. Todos los derechos
          reservados.
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
        url: "https://www.google.com/gmail/about/",
      },
      {
        icons: "mdi-email",
        url: "https://www.google.com/gmail/about/",
      },
      {
        icons: "mdi-git",
        url: "https://www.google.com/gmail/about/",
      },
      {
        icons: "mdi-phone",
        url: "https://www.google.com/gmail/about/",
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
};
</script>

<style></style>
