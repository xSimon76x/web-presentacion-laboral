<template>
  <div>
    <v-container style="max-width: 600px">
      <v-timeline dense clipped>
        <v-timeline-item fill-dot class="white--text mb-4" color="orange" large>
          <template v-slot:icon>
            <span>LT</span>
          </template>
          <v-row>
            <v-col style="color: black" cols="8" class="mt-4">
              <span>Linea de tiempo</span>
            </v-col>
          </v-row>
        </v-timeline-item>

        <v-slide-x-transition group>
          <v-timeline-item
            v-for="event in timeline"
            :key="event.id"
            class="mb-4"
            color="pink"
            small
          >
            <v-row justify="space-between">
              <v-col cols="7" v-text="event.text"></v-col>
              <v-col class="text-right" cols="5" v-text="event.time"></v-col>
            </v-row>
          </v-timeline-item>
        </v-slide-x-transition>

        <v-timeline-item
          class="mb-4"
          color="orange"
          icon-color="grey lighten-2"
          small
        >
          <v-row>
            <v-col cols="2">
              <v-card class="d-flex align-center mb-6" flat height="100" tile>
                <img
                  class="pa-2"
                  src="../assets/img/Logo_DuocUC.png"
                  width="70"
                />
              </v-card>
            </v-col>
            <v-col cols="6">
              <span>Inicio en Ingeniería en Informática</span>
              <p class="text--disabled text-body-2 ma-0 pa-0">
                Duoc UC, Sede San Bernardo
              </p>
            </v-col>
            <v-col class="text-right" cols="3"> 2018 </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item class="mb-4" small color="orange">
          <v-row justify="space-between">
            <v-col cols="2">
              <v-card class="d-flex align-center mb-6" flat height="100" tile>
                <img
                  class="pa-2"
                  src="../assets/img/Pontificia_universidad_catolica_de_chile - puc.png"
                  width="70"
                />
              </v-card>
            </v-col>
            <v-col cols="6">
              <span>Practica Laboral </span>

              <p class="text--disabled text-body-2 ma-0 pa-0">
                Pontificia Universidad Católica de Chile, Campus San Joaquín
              </p>
            </v-col>
            <v-col class="text-right" cols="4"> Ene 2020 - Feb 2020 </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item class="mb-4" color="orange" small>
          <v-row justify="space-between">
            <v-col cols="2">
              <v-card class="d-flex align-center mb-6" flat height="100" tile>
                <img
                  class="pa-2"
                  src="../assets/img/citt - duoc uc.jpg"
                  width="70"
                />
              </v-card>
            </v-col>
            <v-col cols="6">
              <span>Proyecto Citt / Xentric SA. (Practica Profesional)</span>
              <p class="text--disabled text-body-2 ma-0 pa-0">
                Citt - Duoc UC, Sede San Bernardo
              </p>
            </v-col>
            <v-col class="text-right" cols="3"> Jun 2021 - Nov 2021 </v-col>
          </v-row>
        </v-timeline-item>
        <v-timeline-item
          class="mb-4"
          color="orange"
          icon-color="grey lighten-2"
          small
        >
          <v-row>
            <v-col cols="2">
              <v-card class="d-flex align-center mb-6" flat height="100" tile>
                <img
                  class="pa-2"
                  src="../assets/img/Logo_DuocUC.png"
                  width="70"
                />
              </v-card>
            </v-col>
            <v-col cols="6">
              <span>Egreso en Ingeniería en Informática</span>
              <p class="text--disabled text-body-2 ma-0 pa-0">
                Duoc UC, Sede San Bernardo
              </p>
            </v-col>
            <v-col class="text-right" cols="3"> 2021 </v-col>
          </v-row>
        </v-timeline-item>
      </v-timeline>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    events: [],
    input: null,
    nonce: 0,
  }),

  computed: {
    timeline() {
      return this.events.slice().reverse();
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
  },
};
</script>

<style>
.subtitule {
  font: Roboto;
  size: 1rem;
  letter-spacing: 0.009375em;
  weight: 400;
}
.imagenCentro {
  position: absolute;
  bottom: 0;
}
</style>
