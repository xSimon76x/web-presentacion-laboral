<template>
  <div>
    <div class="header">
      <div class="inner-header container-pre">
        <v-row>
          <v-col cols="12" md="6" sm="12" align-self="center">
            <h1 class="text-sm-h1 text-sm-h2 text-md-h2 text-lg-h1">
              ¡Hola a todos!
            </h1>
            <h3 style="font-family: 'Roboto', sans-serif">
              Soy Simón, diseño y desarrollo software.
            </h3>
          </v-col>
          <v-col cols="12" md="6" sm="12" align-self="center">
            <div class="container-img">
              <v-img
                class="imagen-presentacion"
                contain
                src="../assets/img/desarrollador-imagen.png"
              ></v-img>
            </div>
          </v-col>
        </v-row>
        <!-- <div class="flex-column">
          <h1 class="display-4" style="font-size: 6rem">¡Hola a todos!</h1>
          <h3 class="text-caption" style="">Soy Simón Bustamante Venegas</h3>
          <h3>Desarrollador Web</h3>
          <h2 class="text-caption">
            Enfocado en algunos proyectos y aplicaciones web
          </h2>
          <v-icon large color="white" class="pr-2 imgPres">
            mdi-monitor
          </v-icon> 
        </div>
        <div class="flex-column">
          <v-responsive min-width="auto" min-height="auto" width="300px">
            <v-img contain src="../assets/img/desarrollador-imagen.png"></v-img>
          </v-responsive>
        </div> -->
      </div>
      <!--Waves Container-->
      <div>
        <svg
          class="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shape-rendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g class="parallax">
            <use
              xlink:href="#gentle-wave"
              x="48"
              y="0"
              fill="rgba(255,255,255,0.7"
            />
            <use
              xlink:href="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(255,255,255,0.5)"
            />
            <use
              xlink:href="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(255,255,255,0.3)"
            />
            <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>
      <!--Waves end-->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url("../assets/css/presentacion/styles.css");
</style>
