<template>
  <div>
    <v-card class="bg" tile dark lights-out>
      <v-row no-gutters style="flex-wrap: nowrap" align="center">
        <v-col
          cols="12"
          style="min-width: 100px"
          class="flex-grow-0 flex-shrink-1"
        >
          <div class="d-flex pa-2" outlined tile>
            <v-sheet
              color="white"
              elevation="5"
              height="auto"
              width="450"
              rounded
              class="mx-auto"
            >
              <v-row class="py-6">
                <v-col
                  cols="4"
                  lg="4"
                  sm="4"
                  xl="4"
                  xs="4"
                  class="py-0 pr-0 d-flex justify-center"
                >
                  <v-avatar
                    style="
                      height: auto;
                      width: auto;
                      min-height: auto;
                      min-width: auto;
                    "
                  >
                    <v-img src="../assets/img/logo/imgPerfil.png"></v-img>
                  </v-avatar>
                </v-col>
                <v-col class="d-flex flex-column">
                  <h1 class="tilBlack">Simon bustamante</h1>
                  <h4 class="tilBlack">Desarrollador Junio Web</h4>
                </v-col>
              </v-row>
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
.tilBlack {
  color: black;
}
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
