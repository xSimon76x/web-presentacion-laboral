<template>
  <div>
    <v-container style="max-width: 600px">
      <v-row justify="space-around">
        <v-col cols="12" md="12" lg="12" sm="12">
          <v-timeline>
            <v-timeline-item small color="orange">
              <template v-slot:opposite>
                <span :class="`annosLineTime font-weight-bold --text `">
                  2018</span
                >
              </template>
              <v-card class="mx-auto" max-width="250">
                <v-img
                  src="../assets/img/fondos/info-duoc.jpg"
                  height="65px"
                ></v-img>

                <v-card-title class="titulosCard">
                  <v-responsive>
                    Inicio en Ingenieria en Informatica
                  </v-responsive>
                </v-card-title>

                <v-card-subtitle> San bernardo </v-card-subtitle>
              </v-card>
            </v-timeline-item>

            <v-timeline-item small color="orange">
              <template v-slot:opposite>
                <span :class="`annosLineTime font-weight-bold --text`">
                  Ene 2020 - Feb 2020</span
                >
              </template>
              <v-card class="mx-auto" max-width="250">
                <v-img
                  src="../assets/img/fondos/info-duoc.jpg"
                  height="65px"
                ></v-img>

                <v-card-title class="titulosCard">
                  <v-responsive> Practica Laboral </v-responsive>
                </v-card-title>

                <v-card-subtitle> San bernardo </v-card-subtitle>
              </v-card>
            </v-timeline-item>
            <v-timeline-item class="mb-4" small color="orange">
              <template v-slot:opposite>
                <span :class="`annosLineTime font-weight-bold --text`">
                  Jun 2021 - Nov 2021</span
                >
              </template>
              <v-card class="mx-auto" max-width="250">
                <v-img
                  src="../assets/img/fondos/info-duoc.jpg"
                  height="65px"
                ></v-img>

                <v-card-title class="titulosCard">
                  <v-responsive>
                    Proyecto Citt / Xentric SA. (Practica Profesional)
                  </v-responsive>
                </v-card-title>

                <v-card-subtitle>
                  Citt - Duoc UC, Sede San Bernardo
                </v-card-subtitle>
              </v-card>
            </v-timeline-item>

            <v-timeline-item class="mb-4" small color="orange">
              <template v-slot:opposite>
                <span :class="`annosLineTime font-weight-bold --text`">
                  2021</span
                >
              </template>
              <v-card class="mx-auto" max-width="250">
                <v-img
                  src="../assets/img/fondos/info-duoc.jpg"
                  height="65px"
                ></v-img>

                <v-card-title class="titulosCard">
                  <v-responsive>
                    Egreso en Ingeniería en Informática
                  </v-responsive>
                </v-card-title>

                <v-card-subtitle> Duoc UC, Sede San Bernardo </v-card-subtitle>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>
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
.desLineTime {
  font-size: 1.5vh;
}
.annosLineTime {
  font-size: 3vh;
}
.titulosCard {
  font-size: 3vh;
}
</style>
