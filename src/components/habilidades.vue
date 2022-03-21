<template>
  <div class="divContainer" elevation="0">
    <div class="d-flex justify-center pb-3">
      <h1 class="tituloView font-weight-bold">Conocimientos</h1>
    </div>
    <div class="d-flex justify-center">
      <v-divider
        inset
        width="35"
        style="border-width: 2px; border-radius: 12px; flex: none; margin: 0"
        color="#0D47A1"
      ></v-divider>
    </div>

    <div class="pt-6 vCont">
      <div v-for="herramienta in herramientas" :key="herramienta.alt">
        <v-row>
          <v-col cols="12">
            <v-img
              :src="herramienta.url"
              :alt="herramienta.alt"
              :width="herramienta.wd"
            ></v-img
          ></v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="text-center">{{ herramienta.alt }}</v-col>
        </v-row>
      </div>
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
        alt: "HTML",
        wd: "80",
        hg: "100%",
      },
      {
        url: require("@/assets/img/herramientas/js.png"),
        alt: "Javacript",
        wd: "80",
        hg: "100%",
      },
      {
        url: require("@/assets/img/herramientas/flask.png"),
        alt: "Flask",
        wd: "80",
        hg: "100%",
      },
      {
        url: require("@/assets/img/herramientas/mongoDB.png"),
        alt: "MongoDB",
        wd: "80",
        hg: "100%",
      },
      {
        url: require("@/assets/img/herramientas/github.png"),
        alt: "Github",
        wd: "80",
        hg: "100%",
      },
      {
        url: require("@/assets/logo.png"),
        alt: "Vue",
        wd: "80",
        hg: "100%",
      },
      {
        url: require("@/assets/img/logo/vuetify2.0.png"),
        alt: "Vuetify",
        wd: "92",
        hg: "auto",
      },
      {
        url: require("@/assets/img/herramientas/reactJS.png"),
        alt: "React JS",
        wd: "80",
        hg: "auto",
      },
      {
        url: require("@/assets/img/herramientas/bulmaCss.png"),
        alt: "Bulma Css",
        wd: "80",
        hg: "auto",
      },
    ],
  }),
};
</script>

<style>
.vCont {
  padding-top: 0rem;
  width: 100%;
  display: flex;
  height: 100%;
  flex-wrap: wrap;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(350px, 2fr));
  grid-gap: 2rem;
  /* margin: 1rem 0; */
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
  padding-top: 5vh;
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
