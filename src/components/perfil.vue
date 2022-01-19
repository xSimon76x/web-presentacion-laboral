<template>
  <div class="bg">
    <!-- <v-card class="mx-auto" max-width="434" tile elevation="6">
      <v-img
        height="100%"
        src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
      >
        <v-row align="end" class="fill-height">
          <v-col align-self="start" class="pa-0" cols="12">
            <v-avatar class="profile" color="grey" size="164" tile>
              <v-img
                src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
              ></v-img>
            </v-avatar>
          </v-col>
          <v-col class="py-0">
            <v-list-item color="rgba(0, 0, 0, .4)" dark>
              <v-list-item-content>
                <v-list-item-title class="text-h6">
                  Marcus Obrien
                </v-list-item-title>
                <v-list-item-subtitle>Network Engineer</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
      </v-img>
    </v-card> -->

    <v-container class="white lighten-5">
      <v-row no-gutters style="flex-wrap: nowrap" align="center">
        <v-col cols="6" class="flex-grow-0 flex-shrink-0">
          <div class="d-flex justify-center mb-6" color="grey lighten-2" tile>
            <h1 class="pa-2" outlined tile height="100">SOBRE MI</h1>
          </div>
        </v-col>

        <v-col
          cols="6"
          style="min-width: 100px"
          class="flex-grow-0 flex-shrink-1"
        >
          <div class="d-flex pa-2" outlined tile>
            <p>
              Hola! soy un profesional que acaba de egresar en ingeniería en
              informatica, cuento con experiencia básica en el desarrollo web en
              Python - Flask, gracias a la experiencia que obtuve durante mi
              practica profesional con el Citt, mi principal objetivo es formar
              parte de una empresa en la cual pueda desarrollarme y crecer en el
              área profesional y personal, manteniendo mi motivación por
              aprender cualquier tecnología y metodología, que requiera la
              empresa para optar por la oportunidad de trabajar con ellos.
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
.bg {
  padding-top: 6vh;
  padding-bottom: 6vh;
  background-color: #ffffff;
}
.divPa {
  position: relative;
}
.titulo {
  position: absolute;
  top: 50%;
  left: 50%;
  height: 30%;
  width: 50%;
  margin: -15% 0 0 -25%;
}
</style>
