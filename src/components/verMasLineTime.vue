<template>
  <div>
    <v-dialog v-model="reveal" persistent max-width="600">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="teal accent-4"
          text
          @click="reveal = true"
          v-bind="attrs"
          v-on="on"
        >
          Ver Más
        </v-btn>
      </template>
      <v-card>
        <div v-for="obj in objCards" :key="obj.id">
          <template v-if="obj.id === valId">
            <v-img height="150" :src="obj.imgExt"></v-img>
            <v-card-title class="text-h5">
              {{ obj.titulo }}
            </v-card-title>
            <v-card-text>{{ obj.descExtendida }}</v-card-text>
            <div class="d-flex justify-center">
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
                    <v-icon size="30px"> mdi-linkedin </v-icon>
                  </v-btn>
                </template>
                <span style="font-size: 1.8vh">Publicación en Linkedin</span>
              </v-tooltip>
            </div>
            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn color="green darken-1" text @click="reveal = false">
                Cerrar
              </v-btn>
            </v-card-actions></template
          >
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    objCards: {
      type: Array,
    },
    valId: {
      type: Number,
    },
    redirect: Function,
  },
  data: () => ({
    reveal: false,
    imgFondo: [
      {
        imgExt: require("@/assets/img/fondos/duoc-sede-san-bernardo.jpg"),
      },
      {
        imgExt: require("@/assets/img/fondos/DI-uc.jpg"),
      },
    ],
  }),
};
</script>

<style></style>
