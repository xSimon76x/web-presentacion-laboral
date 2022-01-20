<template>
  <div class="divContainer">
    <div class="d-flex justify-center mb-6">
      <h1 class="pa-2" outlined tile height="100">Conocimientos</h1>
    </div>

    <div>
      <v-container>
        <v-row justify="space-around">
          <v-col
            v-for="herramienta in herramientas"
            :key="herramienta.alt"
            cols="auto"
            md="auto"
          >
            <v-sheet
              :elevation="4"
              class="mx-auto d-flex justify-center align-center"
              height="100"
              width="100"
              style="position: relative"
              :rounded="rounded"
            >
              <v-img
                fixed
                class="img"
                :src="herramienta.url"
                :alt="herramienta.alt"
                :max-width="herramienta.wd"
                :max-height="herramienta.hg"
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
        wd: "87%",
        hg: "100%",
      },
      {
        url: require("@/assets/img/herramientas/js.png"),
        alt: "javascript",
        wd: "77%",
        hg: "100%",
      },
      {
        url: require("@/assets/img/herramientas/flask.png"),
        alt: "flask",
        wd: "83%",
        hg: "100%",
      },
      {
        url: require("@/assets/img/herramientas/mongoDB.png"),
        alt: "mongoDB",
        wd: "70%",
        hg: "100%",
      },
      {
        url: require("@/assets/img/herramientas/github.png"),
        alt: "github",
        wd: "auto",
        hg: "100%",
      },
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
  padding-bottom: 10vh;
}
</style>
