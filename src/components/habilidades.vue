<template>
  <div class="divContainer" elevation="0">
    <div class="d-flex justify-center mb-6">
      <h1 class="tituloView font-weight-bold text-center pa-2">
        Conocimientos
      </h1>
    </div>

    <div>
      <v-container>
        <div class="vCont">
          <v-sheet
            :elevation="4"
            class=""
            height="100"
            width="100"
            style="position: relative"
            v-for="herramienta in herramientas"
            :key="herramienta.alt"
          >
            <v-img
              class="img"
              :src="herramienta.url"
              :alt="herramienta.alt"
            ></v-img>
          </v-sheet>
        </div>
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
        hg: "auto",
      },
    ],
  }),
};
</script>

<style>
.vCont {
  padding-top: 4rem;
  width: 100%;
  display: flex;
  height: 100%;
  flex-wrap: wrap;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 2rem;
  margin: 1rem 0;
}
.img {
  position: relative;
  align-self: center;
  align-items: center;
  padding-top: 50%;
  padding-bottom: 50%;
  max-height: 100%;
  max-width: 100%;
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
