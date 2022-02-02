<template>
  <div>
    <v-timeline-item
      small
      color="orange"
      v-for="obj in objCards"
      :key="obj.titulo"
    >
      <template v-slot:opposite>
        <span :class="`annosLineTime font-weight-bold --text `">
          {{ obj.fecha }}</span
        >
      </template>

      <v-card class="mx-auto" max-width="344" height="226">
        <v-list-item three-line>
          <v-list-item-content>
            <!-- <div class="text-overline mt-1">
                      
                    </div> -->
            <v-list-item-title class="text-h5 text--primary text-lg-h5">
              {{ obj.titulo }}
            </v-list-item-title>
            <v-list-item-subtitle style="padding-top: 0px">{{
              obj.sub
            }}</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-avatar tile size="50">
            <v-img
              class="d-flex justify-center"
              tile
              :src="obj.img"
              style="max-height: auto; max-width: 100%"
            ></v-img>
          </v-list-item-avatar>
        </v-list-item>
        <v-card-text style="padding-top: 0px">
          <div class="text--primary text-caption">
            {{ obj.desc }}
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn color="teal accent-4" text @click="reveal = true">
            Ver Más
          </v-btn>
        </v-card-actions>
        <v-expand-transition>
          <v-card
            v-if="reveal"
            class="transition-fast-in-fast-out v-card--reveal"
            style="height: auto"
          >
            <v-card-text style="padding-bottom: 0px">
              <p class="text-h5 text--primary">
                <v-badge bordered color="green" inline left>
                  {{ obj.titulo }}
                </v-badge>
              </p>
              <p class="text-caption" style="padding-bottom: 0px">
                {{ obj.descExtendida }}
              </p>
            </v-card-text>
            <v-card-actions style="padding-top: 0px">
              <v-btn text color="teal accent-4" @click="reveal = false">
                Cerrar
              </v-btn>
              <v-tooltip
                top
                v-if="
                  obj.titulo ===
                  'Proyecto Citt / Xentric SA. (Practica Profesional)'
                "
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    v-bind="attrs"
                    v-on="on"
                    text
                    color="teal accent-4"
                    @click="redirect(obj.urlLinkedin)"
                  >
                    <v-icon size="20px"> mdi-linkedin </v-icon>
                  </v-btn>
                </template>
                <span style="font-size: 1.8vh">Publicación en Linkedin</span>
              </v-tooltip>
            </v-card-actions>
          </v-card>
        </v-expand-transition>
      </v-card>
    </v-timeline-item>
  </div>
</template>

<script>
export default {
  data: () => ({
    events: [],
    input: null,
    nonce: 0,
    reveal: false,
    objCards: [
      {
        titulo: "Ingenieria en Informatica",
        sub: "Sede San Bernardo",
        img: require("@/assets/img/logo/Logo_DuocUC.png"),
        desc: "Comienzo de carrera de ingenieria en informatica, introduciendome en el aprendizaje de bases de datos relacionales...",
        descExtendida:
          "Comienzo de carrera de ingenieria en informatica, introduciendome en el aprendizaje de bases de datos relacionales, algunos lenguajes de programación de los cuales me enfoque más, conociendo y aprendiendo metodologias de trabajo.",
        fecha: "Mar 2018",
      },
      {
        titulo: "Practica Laboral",
        sub: "Departamento de Informatica (PUC)",
        img: require("@/assets/img/logo/Pontificia_universidad_catolica_de_chile - puc.png"),
        desc: "Oportunidad de practica laboral en el departamento de informatica en la Universidad Catolica...",
        descExtendida:
          "Oportunidad de practica laboral en el departamento de informatica en la Universidad Catolica, Estuve  enfocado  en  la  actualización  de componentes programados en PHP 5, a la versión de PHP 7.0, trabajé dentro del Framework de CodeIgniter 3.",
        fecha: "Ene 2020 - Feb 2020",
      },
      {
        titulo: "Proyecto Citt / Xentric SA. (Practica Profesional)",
        sub: "Citt - Duoc UC, Sede San Bernardo (100% remoto)",
        img: require("@/assets/img/logo/citt - duoc uc.jpg"),
        desc: "Participación en el proyecto *Analítica CX* entre el Citt de Duoc UC y la empresa Xentric SA...",
        descExtendida:
          "Participación en el proyecto *Analítica CX* entre el Citt de Duoc UC y la empresa Xentric SA. Estuve enfocado en liderar a un equipo que se centró en la creación de  la  plataforma  web  para  la  empresa,  trabajando  con  tecnologías  como  con Flask (Python), MongoDB y JQuery (JS)..",
        fecha: "Jun 2021 - Nov 2021 ",
        urlLinkedin:
          "https://www.linkedin.com/posts/simon-bustamante-venegas_quiero-compartir-el-orgullo-que-me-hace-sentir-activity-6877388888483090432-cy07",
      },
      {
        titulo: "Egreso en Ingeniería en Informática",
        sub: "Sede San Bernardo",
        img: require("@/assets/img/logo/Logo_DuocUC.png"),
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
  position: fixed;
  width: 100%;
}
</style>
