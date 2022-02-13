<template>
  <v-container>
    <div class="d-flex flex-column mb-6">
      <div class="d-flex justify-center">
        <h1 class="title is-spaced is-size-3-desktop is-size-4-mobile">
          PROYECTOS
        </h1>
      </div>
      <div class="containerPro">
        <!-- <v-row class="row">
          <v-col
            v-for="objProy in ObjProy"
            :key="objProy.id"
            cols="12"
            md="4"
            xs="6"
            sm="6"
            class="pt-2"
          > -->
        <v-card
          md="4"
          elevation="2"
          rounded="xl"
          class="cardBack"
          v-for="objProy in ObjProy"
          :key="objProy.id"
        >
          <v-img class="imgBack" :src="objProy.img"></v-img>
          <div class="contenidoText">
            <h3>{{ objProy.titulo }}</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque,
              autem in! Perferendis provident eius obcaecati ad soluta debitis
              molestiae quae, nihil beatae delectus! Quae molestias quod,
              sapiente accusamus vero a!
            </p>

            <div class="d-flex justify-center mx-1">
              <v-img
                v-for="(ics, index) in objProy.iconos"
                :key="index"
                class="icons"
                :src="ics"
              ></v-img>

              <!-- <p>{{ icons(objProy.titulo) }}</p> -->
            </div>

            <v-btn
              v-if="objProy.id !== 1"
              class="btnVerMas"
              depressed
              outlined
              rounded
              style="color: white"
              @click="clickSrc(objProy.url)"
              >Visitar sitio</v-btn
            >
          </div>
        </v-card>
        <!-- </v-col>
        </v-row> -->
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    ObjProy: [
      {
        id: 1,
        img: require("@/assets/img/fondProyect/xentric1.png"),
        titulo: "Analítica CX",
        p: "",
        url: "",
        iconos: [
          require("@/assets/img/herramientas/flask.png"),
          require("@/assets/img/herramientas/mongoDB.png"),
        ],
      },
      {
        id: 2,
        img: require("@/assets/img/fondProyect/rickandmorty.png"),
        titulo: "Consumo de APIs",
        p: "",
        url: "",
        iconos: ["2", "2"],
      },
      {
        id: 3,
        img: require("@/assets/img/fondProyect/rickandmorty.png"),
        titulo: "Analítica CX",
        p: "",
        url: "",
        iconos: ["3", "2"],
      },
      {
        id: 4,
        img: require("@/assets/img/fondProyect/rickandmorty.png"),
        titulo: "Analítica CX",
        p: "",
        url: "",
        iconos: ["4", "2"],
      },
      {
        id: 5,
        img: require("@/assets/img/fondProyect/rickandmorty.png"),
        titulo: "Analítica CX",
        p: "",
        url: "",
        iconos: ["5", "2"],
      },
    ],
  }),
  methods: {
    clickSrc(url) {
      window.location.href = url;
    },
    icons(titulo) {
      return this.ObjProy.iconos;
    },
  },
};
</script>

<style>
.icons {
  width: 5%;
}
.icons:hover {
  transform: rotate(22deg);
}

.containerPro {
  padding-top: 10%;
  width: 100%;
  display: grid;
  height: 100%;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 2rem;
  margin: 3rem 0;
}

/* @media (min-width: 1204px) {
  .containerPro {
    display: grid;
    justify-content: center;
    align-self: center;
    align-content: center;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 2rem;
    margin: 3rem 0;
  }
} */

.cardBack {
  position: relative;
  height: 300px;
  width: 420px;
  overflow: hidden;
  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.5);
  cursor: pointer;
}

.imgBack {
  width: 100%;
  height: 100%;
  transition: all 500ms ease-out;
}

.cardBack:hover > .contenidoText {
  opacity: 1;
  visibility: visible;
}

.cardBack:hover > .contenidoText h3 {
  margin-top: 8%;
  margin-bottom: 3%;
}

.contenidoText h3 {
  color: white;
  font-weight: 400;
  margin-bottom: 120px;
  transition: all 500ms ease-out;
  margin-top: 30px;
}

.contenidoText p {
  color: white;
  font-size: 15px;
  line-height: 1.5;
  width: 100%;
  max-width: 290px;
  margin: auto;
  padding-bottom: 5%;
}

.cardBack:hover > .imgBack {
  transform: scale(1.3);
}

.contenidoText {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  background: rgba(14, 32, 66, 0.9);
  transition: all 500ms ease-in-out;
  opacity: 0;
  visibility: hidden;
}

.btnVerMas {
  background-color: transparent;
  border-radius: 20px;
  border-width: 2px;
  border-color: #3a087b;
  color: white;
  box-shadow: 10px;
}

.btnVerMas:hover {
  background-color: #3a087b;
  transition: all 500ms ease-in-out;
  color: #ffffff;
}

.title {
  color: aqua;
  line-height: 1.125;
  size: 40;
}
.card {
  /* width: 16vw; */
  width: 100%;
}
</style>
