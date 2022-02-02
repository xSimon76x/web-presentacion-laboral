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
              max-width: 80vw;
              width: 60vw;
              height: auto;
            "
          >
            <!-- componente que trae las card -->
            <cardTimLin />
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
