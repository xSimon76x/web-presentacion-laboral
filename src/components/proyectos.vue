<template>
  <v-container>
    <div class="d-flex flex-column pb-12 pt-12">
      <div class="d-flex flex-column">
        <h1 class="tituloView font-weight-bold text-center">Proyectos</h1>
        <p class="parrProy text-center">
          Aqui se veran algunos de los proyectos, en donde por un lado he
          desarrollado, y otros de los cuales he participado.
        </p>
      </div>

      <div class="containerPro">
        <v-card
          md="4"
          elevation="2"
          rounded="xl"
          class="cardBack"
          v-for="objProy in ObjProy"
          :key="objProy.id"
        >
          <v-img class="imgBack" :src="objProy.img">
            <div class="informationPresentationCard">
              <div class="tools" v-for="icon in objProy.iconos" :key="icon.id">
                <v-img :src="icon" width="35px"></v-img>
              </div>
            </div>
          </v-img>
          <div class="contenidoText">
            <h3>{{ objProy.titulo }}</h3>
            <p class="descripcion">
              {{ objProy.p }}
            </p>
            <p v-if="objProy.p == ''">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
              repudiandae maiores alias autem natus exercitationem itaque ipsum
              sunt sapiente minus corporis aliquam maxime placeat asperiores
              aspernatur at recusandae, saepe earum.
            </p>
            <p
              v-if="objProy.id == 1"
              class="font-weight-black text-center"
              style="
                font-size: 0.7rem;
                max-width: 290px;
                width: 100%;
                margin: auto;
                color: white;
              "
            >
              Por razones de confidencialidad no es posible navegar en la
              plataforma web libremente
            </p>

            <v-btn
              v-if="objProy.id !== 1 && objProy.titulo !== 'Web del clima'"
              class="btnVerMas"
              depressed
              outlined
              rounded
              style="color: white"
              @click="clickSrc(objProy.url)"
              >Visitar sitio</v-btn
            >
            <v-btn
              v-if="objProy.titulo == 'Web del clima'"
              @click="clickSrc(objProy.url)"
              dark
              icon
              color="blue"
            >
              <v-tooltip right>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon class="icons" v-bind="attrs" v-on="on">
                    mdi-git
                  </v-icon>
                </template>
                <span style="font-size: 1.8vh">Repositorio local</span>
              </v-tooltip>
            </v-btn>
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
        p: "Participación en el proyecto enfocado en la creacion de una plataforma web, con el fin de visualizar, apoyar y mejorar el rendimiento de los agentes de ciertos call center. Entre ello usando la libreria ChartJS para mostrar los diversos KPI, y utilizando herramientas como python, flask, Html5, js y css.",
        url: "",
        iconos: [
          require("@/assets/img/herramientas/flask.png"),
          require("@/assets/img/herramientas/mongoDB.png"),
          require("@/assets/img/herramientas/bootstrap.png"),
          require("@/assets/img/herramientas/js.png"),
        ],
      },
      {
        id: 2,
        img: require("@/assets/img/fondProyect/rickandmorty.png"),
        titulo: "Aplicación de 'Rick and Morty'",
        p: "Plataforma web realizada en base al aprendizaje del consumo de una API externa (The Rick and Morty API), esto realizado en el framework de Vue js 2.0, utilizando de Vuex la libreria 'createStore' para agregar los states, mutations y las actions, en el desarrollo del mismo.",
        url: "https://web-rick-and-morty.netlify.app",
        iconos: [
          require("@/assets/logo.png"),

          require("@/assets/img/herramientas/js.png"),
        ],
      },
      {
        id: 3,
        img: require("@/assets/img/fondProyect/JuegoBasico.png"),
        titulo: "Juego basico con JS",
        p: "Un juego realizado en el framework de Phaser, el cual su desarrollo esta basado en HTML5 y Javascript. Para esto, estuve siguiendo un curso en udemy, el cual me ayudo a aprender y realizar este proyecto. Para comenzar a probarlo, puede visitar el sitio.",
        url: "https://atlantisjs.netlify.app",
        iconos: [
          require("@/assets/img/herramientas/phaserJS.png"),
          require("@/assets/img/herramientas/js.png"),
        ],
      },
      {
        id: 4,
        img: require("@/assets/img/fondProyect/web-clima.png"),
        titulo: "Web del clima",
        p: "Un desarrollo en base a un mock up que entrego la web de devchallenges.io, junto con la api de 'metaweather' que se uso. Dicha aplicacion web, esta desarrollada en React JS, en donde estuve aprendiendo sobre Hooks, props, router dom, entre otros vistos en un curso en udemy. Solo ejecución local.",
        url: "https://github.com/xSimon76x/app-clima-localizacion.git",
        iconos: [
          require("@/assets/img/herramientas/reactJS.png"),
          require("@/assets/img/herramientas/bulmaCss.png"),
          require("@/assets/img/herramientas/js.png"),
        ],
      },
      {
        id: 5,
        img: require("@/assets/img/fondProyect/pokemon.png"),
        titulo: "Aplicación de Pokemon",
        p: "Una aplicación web que busca visualizar una lista de Pokémon, para generar una cierta cantidad de funciones respecto a esto, que desembocarían en ver su detalle al cliquear en su tarjeta. Dicho desarrollo se basó en la Api llamada “PokeAPI”, que fue consumida en el ambiente de React JS.",
        url: "https://app-web-pokemon.netlify.app",
        iconos: [
          require("@/assets/img/herramientas/reactJS.png"),
          require("@/assets/img/herramientas/bootstrap.png"),
          require("@/assets/img/herramientas/js.png"),
        ],
      },
    ],
  }),
  methods: {
    clickSrc(url) {
      window.location.href = url;
    },
  },
};
</script>

<style>
.divIcons {
  width: 100%;
  display: grid;
  height: 100%;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 2rem;
  text-align: center;
  position: absolute;
  display: flex;
  justify-self: center;
}
.icons {
  position: relative;
}
.icons:hover {
  transform: scale(1.3);
}

/* display: grid, y eliminar 'flex-wrap: wrap;
  justify-content: center;' para mantener el anterior orden  */

.informationPresentationCard {
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  height: 15%;
  width: 100%;
  bottom: 0;
  -webkit-box-shadow: inset -3px 0px 72px 32px rgba(204, 204, 204, 1);
  -moz-box-shadow: inset -3px 0px 72px 32px rgba(204, 204, 204, 1);
  box-shadow: inset -3px 0px 72px 32px rgba(204, 204, 204, 1);
}

.tools {
  padding-right: 1vh;
}

.containerPro {
  display: grid;
  position: relative;
  flex-wrap: wrap;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(350px, 3fr));
  grid-gap: 2rem;
  margin: 0;
  padding-top: 2rem;
  padding-bottom: 2rem;
  height: auto;
  width: 100%;
  align-self: center;
}

.cardBack {
  position: relative;
  align-self: center;
  justify-self: center;
  height: 300px;
  width: 420px;
  overflow: hidden;
  box-shadow: 0px 25px 45px rgba(0, 0, 0, 0.5);
  cursor: pointer;
}

.imgBack {
  width: 100%;
  height: 100%;
  transition: all 500ms ease-out;
}

.cardBack:hover > .imgBack .informationPresentationCard {
  -webkit-box-shadow: inset -3px 0px 72px 32px rgba(150, 21, 21, 0);
  -moz-box-shadow: inset -3px 0px 72px 32px rgba(202, 10, 10, 0);
  box-shadow: inset -3px 0px 72px 32px rgba(156, 14, 14, 0);
  transition: all 300ms ease-out;
}

.cardBack:hover > .imgBack .informationPresentationCard .tools {
  opacity: 0;
  visibility: hidden;
  transition: all 300ms ease-out;
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
  margin-top: 15px;
}

.descripcion {
  color: white;
  font-size: 15px;
  line-height: 1.5;
  width: 100%;
  text-align: justify;
  max-width: 330px;
  margin: auto;
  padding-bottom: 0%;
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
  /* width: fixed; */
}

.btnVerMas:hover {
  background-color: #3a087b;
  transition: all 500ms ease-in-out;
  color: #ffffff;
}

.tituloView {
  font-family: sans-serif;
  color: #141c3a;
  line-height: 2rem;
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 0.0125em;
  bottom: 0;
}

.parrProy {
  font-family: "europa", sans-serif;
  font-weight: 300;
  line-height: 1.5;
  font-size: 1rem;
  color: #141c3a;
  padding-top: 4vh;
  letter-spacing: 0.0125em;
}

.card {
  /* width: 16vw; */
  width: 100%;
}
</style>
