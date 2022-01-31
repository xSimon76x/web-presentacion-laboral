<template>
  <div>
    <v-container>
      <v-row justify="space-around">
        <v-col
          cols="12"
          md="12"
          lg="12"
          sm="12"
          class="d-flex justify-center mb-6"
        >
          <v-timeline
            style="
              border-color: pink;
              border-width: 5px;
              border-style: dotted;
              max-width: 60vw;
              width: 50vw;
            "
          >
            <v-timeline-item small color="orange">
              <template v-slot:opposite>
                <span :class="`annosLineTime font-weight-bold --text `">
                  2018</span
                >
              </template>
              <!-- <v-card elevation="2" class="mx-auto" max-width="344" outlined>
                 <v-img
                  src="../assets/img/fondos/info-duoc.jpg"
                  height="65px"
                ></v-img> 

                <v-card-title class="text-lg-h6 text-md-body-1 text-xl-h4">
                  <v-badge bordered color="green" inline left>
                    Ingenieria en Informatica
                  </v-badge>
                </v-card-title>

                <v-card-subtitle class="text-caption">
                  San Bernardo
                </v-card-subtitle>
              </v-card> -->
              <v-card class="mx-auto" max-width="344">
                <v-list-item three-line>
                  <v-list-item-content>
                    <!-- <div class="text-overline mb-4">OVERLINE</div> -->
                    <v-list-item-title class="text-h5 mb-1">
                      Ingenieria en Informatica
                    </v-list-item-title>
                    <v-list-item-subtitle
                      >Sede San Bernardo</v-list-item-subtitle
                    >
                  </v-list-item-content>

                  <v-list-item-avatar
                    tile
                    size="60"
                    color="grey"
                  ></v-list-item-avatar>
                </v-list-item>

                <!-- <v-card-actions>
                  <v-btn outlined rounded text> Button </v-btn>
                </v-card-actions> -->
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

                <v-card-title class="titulosCard"
                  ><v-badge bordered color="green" inline left>
                    <v-badge bordered color="red" inline left>
                      <v-responsive> Practica Laboral </v-responsive></v-badge
                    ></v-badge
                  >
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
                  <v-badge bordered color="green" inline left>
                    <v-badge bordered color="red" inline left>
                      <v-responsive>
                        Proyecto Citt / Xentric SA. (Practica Profesional)
                      </v-responsive></v-badge
                    ></v-badge
                  >
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
                  <v-badge bordered color="red" inline left>
                    <v-responsive>
                      Egreso en Ingeniería en Informática
                    </v-responsive>
                  </v-badge>
                </v-card-title>

                <v-card-subtitle> Duoc UC, Sede San Bernardo </v-card-subtitle>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>
      <v-row justify="space-around">
        <v-col
          cols="12"
          lg="12"
          md="12"
          sm="12"
          class="d-flex justify-center mb-6"
        >
          <div>
            <v-badge inline left value="0" color="light blue"></v-badge>
            <v-badge bordered color="green" inline left> Inicio </v-badge>
            <v-divider class="mx-4" vertical></v-divider>
            <v-badge bordered color="red" inline left> Finalizado </v-badge>
          </div>
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
  computed: {
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
