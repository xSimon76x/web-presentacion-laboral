<template>
  <div>
    <v-container elevation="0">
      <v-row>
        <v-col
          cols="12"
          md="12"
          lg="12"
          sm="12"
          xs="12"
          class="d-flex justify-center pb-2 pt-8"
        >
          <h1>MI CAMINO NINJA</h1>
        </v-col>
      </v-row>
      <v-row justify="space-around">
        <v-col
          cols="12"
          md="12"
          lg="12"
          sm="12"
          xs="12"
          class="d-flex justify-center pb-8 pt-8"
        >
          <!-- border-color: pink; 
           border-width: 5px;
              border-style: dotted;-->
          <v-timeline
            style="min-width: 70%; max-width: 100%; height: auto"
            xs="12"
            color="blue"
          >
            <!-- componente que trae las card -->
            <cardTimLin />
          </v-timeline>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import cardTimLin from "../components/cardTimeLine.vue";
export default {
  components: {
    cardTimLin,
  },
  data: () => ({
    events: [],
    input: null,
    nonce: 0,
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
  position: absolute;
  width: 100%;
}
</style>
