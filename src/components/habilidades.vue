<template>
  <div class="divContainer">
    <div class="d-flex justify-center mb-6">Conocimientos</div>

    <div>
      <v-container>
        <v-row justify="space-around">
          <v-col
            v-for="herramienta in herramientas"
            :key="herramienta"
            cols="auto"
            md="4"
          >
            <v-sheet
              :elevation="6"
              class="mx-auto"
              height="100"
              width="100"
              style="position: relative"
            >
              <v-img
                fixed
                class="img"
                :src="herramienta.url"
                :alt="herramienta.alt"
              ></v-img>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    elevations: [6, 12, 18],
    herramientas: [
      {
        url: require("@/assets/img/herramientas/html5.png"),
        alt: "html5",
        max_with: "80px",
      },
      { url: require("@/assets/img/herramientas/js.png"), alt: "javascript" },
      { url: require("@/assets/img/herramientas/flask.png"), alt: "flask" },
      { url: require("@/assets/img/herramientas/mongoDB.png"), alt: "mongoDB" },
      { url: require("@/assets/img/herramientas/github.png"), alt: "github" },
    ],
  }),
};
</script>

<style>
.img {
  position: relative;
}
.divContainer {
  padding-top: 6vh;
  padding-bottom: 6vh;
}
</style>
