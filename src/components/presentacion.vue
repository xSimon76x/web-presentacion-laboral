<template>
  <div>
    <div class="header">
      <div class="inner-header container-pre">
        <div class="flex-column">
          <h1 class="tituloPres" style="">Desarrollador Junior</h1>
          <h2 class="subtitulo text-sm-body-2">
            Enfocado en algunos proyectos y aplicaciones web
          </h2>
          <v-icon large color="white" class="pr-2 imgPres">
            mdi-monitor
          </v-icon>
        </div>
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
