<template>
  <div class="divContainer" elevation="0">
    <div class="d-flex justify-center mb-6">
      <h1 class="tituloView font-weight-bold text-center pa-2">
        Conocimientos
      </h1>
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
      {
        url: require("@/assets/logo.png"),
        alt: "vue",
        wd: "auto",
        hg: "100%",
      },
      {
        url: require("@/assets/img/logo/vuetify2.0.png"),
        alt: "vuetify",
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
/* start shape top */
.custom-shape-divider-top-1644554184 {
  position: absolute;
  top: auto;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.custom-shape-divider-top-1644554184 svg {
  position: relative;
  display: block;
  width: calc(129% + 1.3px);
  height: 97px;
}

.custom-shape-divider-top-1644554184 .shape-fill {
  fill: red;
}
/* end shape top */
</style>
