<template>
  <div>
    <v-card class="bg" tile dark lights-out>
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
            <v-sheet
              color="white"
              elevation="5"
              height="108"
              width="250"
              rounded
            >
              <div class="d-flex flex-row">
                <v-img
                  max-height="100%"
                  max-width="40%"
                  style="border-radius: 50%"
                  src="../assets/img/logo/imgPerfil.png"
                ></v-img>
                <h1>Simón Bustamante</h1>
              </div>
            </v-sheet>
            <!-- <p>
              Hola! soy un profesional que acaba de egresar en ingeniería en
              informatica, cuento con experiencia básica en el desarrollo web en
              Python - Flask, gracias a la experiencia que obtuve durante mi
              practica profesional con el Citt, mi principal objetivo es formar
              parte de una empresa en la cual pueda desarrollarme y crecer en el
              área profesional y personal, manteniendo mi motivación por
              aprender cualquier tecnología y metodología, que requiera la
              empresa para optar por la oportunidad de trabajar con ellos.
            </p> -->
          </div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style>
.bg {
  padding-top: 6vh;
  padding-bottom: 6vh;
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
