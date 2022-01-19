<template>
  <div>
    <v-footer v-bind="localAttrs" :padless="true">
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
            Desarrollado y diseñado por
            <strong>Simon Ivan Bustamante Venegas</strong>. ©2022. Todos los
            derechos reservados.
          </p>
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
