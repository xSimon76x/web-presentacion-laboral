<template>
  <div>
    <v-container elevation="0" class="pt-12 pb-12">
      <v-row>
        <v-col
          cols="12"
          md="12"
          lg="12"
          sm="12"
          xs="12"
          class="d-flex justify-center pb-2 pt-8"
        >
          <h1
            class="tituloView font-weight-bold text-center"
            style="color: white"
          >
            Mi historia
          </h1>
        </v-col>
      </v-row>
      <div class="d-flex justify-center">
        <v-divider
          inset
          width="35"
          style="border-width: 2px; border-radius: 12px; flex: none; margin: 0"
          color="white"
        ></v-divider>
      </div>

      <v-row>
        <v-col cols="12" class="d-flex justify-center">
          <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
            <v-slide-item
              v-for="card in objCards"
              :key="card.id"
              v-slot="{ active, toggle }"
            >
              <v-card
                color="'white lighten-1'"
                class="ma-4"
                height="430"
                width="320"
                @click="toggle"
              >
                <v-img height="150" width="100%" :src="card.imgExt"></v-img>
                <v-list-item three-line>
                  <v-list-item-content>
                    <v-list-item-title class="text-h5">
                      {{ card.titulo }}
                    </v-list-item-title>
                    <v-list-item-subtitle>{{ card.sub }}</v-list-item-subtitle>
                    <v-list-item-subtitle>{{
                      card.fecha
                    }}</v-list-item-subtitle>
                  </v-list-item-content>

                  <v-list-item-avatar tile size="50">
                    <v-img height="auto" width="100%" :src="card.img"></v-img>
                  </v-list-item-avatar>
                </v-list-item>

                <v-card-text class="card-Text">
                  <div class="text-justify">
                    {{ card.descExtendida }}
                  </div>
                </v-card-text>
                <v-card-actions class="d-flex justify-center">
                  <v-tooltip bottom v-if="card.id == 2">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        v-bind="attrs"
                        v-on="on"
                        text
                        outlined
                        rounded
                        color="blue"
                        @click="redirect(card.urlLinkedin)"
                      >
                        <v-icon size="30px" class="iconCard">
                          mdi-linkedin
                        </v-icon>
                      </v-btn>
                    </template>
                    <span style="font-size: 1.8vh"
                      >Publicación en Linkedin</span
                    >
                  </v-tooltip>
                </v-card-actions>
                <v-row class="fill-height" align="center" justify="center">
                  <v-scale-transition>
                    <v-icon
                      v-if="active"
                      size="48"
                      v-text="'mdi-close-circle-outline'"
                    ></v-icon>
                  </v-scale-transition>
                </v-row>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-col>
      </v-row>
      <!-- <v-row justify="space-around">
        <v-col
          cols="12"
          md="12"
          lg="12"
          sm="12"
          xs="12"
          class="d-flex justify-center pb-8 pt-8"
        >
          <v-timeline
            style="min-width: 70%; max-width: 100%; height: auto"
            xs="12"
            color="blue"
          >
            <cardTimLin />
          </v-timeline>
        </v-col>
      </v-row> -->
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    events: [],
    input: null,
    nonce: 0,
    model: null,
    objCards: [
      {
        id: 0,
        titulo: "Ingenieria en Informatica",
        sub: "Sede San Bernardo",
        img: require("@/assets/img/logo/Logo_DuocUC.png"),
        imgExt: require("@/assets/img/fondos/duoc-sede-san-bernardo.png"),
        desc: "Comienzo de carrera de ingenieria en informatica, introduciendome en el aprendizaje de bases de datos relacionales...",
        descExtendida:
          "Comienzo de carrera de ingenieria en informatica, introduciendome en el aprendizaje de bases de datos relacionales, algunos lenguajes de programación de los cuales me enfoque más, conociendo y aprendiendo metodologias de trabajo.",
        fecha: "Mar 2018",
      },
      {
        id: 1,
        titulo: "Practica Laboral",
        sub: "Departamento de Informatica",
        img: require("@/assets/img/logo/Pontificia_universidad_catolica_de_chile - puc.png"),
        imgExt: require("@/assets/img/fondos/DI-uc.png"),
        desc: "Oportunidad de practica laboral en el departamento de informatica en la Universidad Catolica...",
        descExtendida:
          "Oportunidad de practica laboral en el departamento de informatica en la Universidad Catolica, Estuve  enfocado  en  la  actualización  de componentes programados en PHP 5, a la versión de PHP 7.0, trabajé dentro del Framework de CodeIgniter 3.",
        fecha: "Ene 2020 - Feb 2020",
      },
      {
        id: 2,
        titulo: "Analítica CX",
        sub: "Sede San Bernardo (100% remoto)",
        img: require("@/assets/img/logo/citt - duoc uc.jpg"),
        imgExt: require("@/assets/img/fondos/citt-duoc-uc2.png"),
        desc: "Participación en el proyecto *Analítica CX* entre el Citt de Duoc UC y la empresa Xentric SA...",
        descExtendida:
          "Líder del equipo web, durante el ambicioso proyecto ‘Analítica CX’, implementando el desarrollo de la plataforma con tecnologías como; Vue JS, Flask (Python), HTML, JQuery (JS), CSS y utilizando la metodología SCRUM. ",
        fecha: "Jun 2021 - Nov 2021 ",
        urlLinkedin:
          "https://www.linkedin.com/posts/simon-bustamante-venegas_quiero-compartir-el-orgullo-que-me-hace-sentir-activity-6877388888483090432-cy07",
      },
      {
        id: 3,
        titulo: "Egreso en Ingeniería en Informática",
        sub: "Sede San Bernardo",
        img: require("@/assets/img/logo/Logo_DuocUC.png"),
        imgExt: require("../assets/img/fondos/duoc-sede-san-bernardo.png"),
        desc: "Finalización de carrera profesional en el instituto Duoc UC...",
        descExtendida:
          "Finalización de carrera profesional en el instituto Duoc UC, adquiriendo habilidades tanto tecnicas como *blandas* para poner en practica, y con cierta experiencia en el desarrollo web, gracias al proyecto entre el Citt (Duoc UC) y Xentric SA.",
        fecha: "Dic 2021 ",
      },
    ],
  }),

  computed: {
    timeline() {
      return this.events.slice().reverse();
    },
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
    comment() {
      const time = new Date().toTimeString();
      this.events.push({
        id: this.nonce++,
        text: this.input,
        time: time.replace(
          /:\d{2}\sGMT-\d{4}\s\((.*)\)/,
          (match, contents, offset) => {
            return ` ${contents
              .split(" ")
              .map((v) => v.charAt(0))
              .join("")}`;
          }
        ),
      });

      this.input = null;
    },
    redirect(link) {
      window.location.href = link;
    },
  },
};
</script>

<style>
.v-icon {
  color: white !important;
}

.card-Text {
  padding: 10px !important;
}

.iconCard {
  color: #0968b6 !important;
}

.subtitule {
  font: Roboto;
  size: 1rem;
  letter-spacing: 0.009375em;
}
.imagenCentro {
  position: absolute;
  bottom: 0;
}
.desLineTime {
  font-size: 1.5vh;
}
.annosLineTime {
  font-size: 3vh;
}
.titulosCard {
  font-size: 3vh;
}
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}

.tituloView {
  font-family: "Work Sans", sans-serif !important;
}
</style>
