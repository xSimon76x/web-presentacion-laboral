<template>
  <div class="pt-12">
    <!-- tile dark  -->
    <div class="d-flex justify-center">
      <h1 class="tituloView font-weight-bold text-center">Sobre Mi</h1>
    </div>

    <v-card class="bg" elevation="0">
      <v-row
        no-gutters
        tile
        lights-out
        class="pt-4"
        style="flex-wrap: nowrap"
        align="center"
      >
        <v-col
          cols="12"
          style="min-width: 100px"
          class="flex-grow-0 flex-shrink-1"
        >
          <div class="d-flex pa-2 justify-center" outlined tile>
            <v-sheet
              elevation="5"
              width="700"
              height="auto"
              class="white"
              rounded
            >
              <v-row class="d-flex justify-center py-4 px-4">
                <v-col
                  cols="4"
                  lg="4"
                  sm="4"
                  xl="4"
                  xs="4"
                  class="d-flex flex-column justify-center pr-0"
                  style="margin: 0"
                >
                  <!-- <div class="d-flex flex-column">
                    
                </div> -->
                  <div class="text-center">
                    <v-avatar
                      class="avatar"
                      style="
                        height: 100%;
                        width: 40%;
                        min-height: auto;
                        min-width: auto;
                        max-width: 100%;
                      "
                    >
                      <v-img src="../assets/img/logo/imgPerfil.png"></v-img>
                    </v-avatar>
                  </div>

                  <h2 class="tilBlack pt-2 text-center align-center">
                    Simon Bustamante
                  </h2>
                  <h4
                    class="font-weight-bold mb-5 text-center align-center"
                    style="color: #0f446e; font-size: 80%"
                  >
                    Desarrollador Junior
                  </h4>
                </v-col>
                <v-col class="d-flex flex-column" style="margin: 0">
                  <p class="parrProy text-justify">
                    Desde que finalice con mi carrera en ingeniería en
                    informatica, mi principal objetivo está en la búsqueda de
                    una empresa pequeña o mediana, para poder desarrollarme y
                    crecer en el área profesional (como desarrollador) y
                    personal, manteniendo mi motivación por aprender cualquier
                    tecnología y metodología que requiera la compañía, con el
                    fin de poder optar por la oportunidad de trabajar en dicha
                    empresa.
                  </p>
                  <div class="d-flex justify-center">
                    <v-btn
                      @click="red(link.url)"
                      v-for="link in links"
                      :key="link.name"
                      class="mx-1"
                      dark
                      icon
                      color=" blue"
                    >
                      <!-- v-if="link.name !== 'Curriculum'" -->
                      <v-tooltip top v-if="link.name !== 'Curriculum'">
                        <template v-slot:activator="{ on, attrs }">
                          <v-icon class="icons" v-bind="attrs" v-on="on">
                            {{ link.icons }}
                          </v-icon>
                        </template>
                        <span style="font-size: 1.8vh">{{ link.name }}</span>
                      </v-tooltip>
                    </v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-sheet>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
// import { jsPDF } from "jspdf";

export default {
  components: {},

  data: () => ({
    icons: ["mdi-linkedin", "mdi-email", "mdi-git", "mdi-phone"],
    items: ["default", "absolute", "fixed"],
    nameTool: ["Link", "", "", ""],

    variant: "default",
    links: [
      {
        icons: "mdi-linkedin",
        url: "https://www.linkedin.com/in/simon-bustamante-venegas",
        name: "Linkedin",
      },
      {
        icons: "mdi-email",
        url: "https://www.google.com/gmail/about/",
        name: "Email",
      },
      {
        icons: "mdi-git",
        url: "https://github.com/xSimon76x",
        name: "GitHub",
      },
      {
        icons: "mdi-phone",
        url: "https://wa.me/+56964621648",
        name: "Telefono",
      },
      {
        icons: "mdi-file-document",
        url: "/assets/document/SimonBustamanteVenegas_CV_Ultimo.pdf",
        name: "Curriculum",
      },
    ],
  }),
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
    red(link) {
      window.location.href = link;
    },
    // download() {
    //   let FileSaver = require("file-saver");
    //   let oReq = new XMLHttpRequest();
    //   // El endpoint del servidor
    //   let URLToPDF =
    //     "https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf";
    //   // Configurar el XMLHttpRequest
    //   oReq.open("GET", URLToPDF, true);
    //   // Se debe utilizar el tipo de respuesta de blob
    //   oReq.responseType = "blob";
    //   // Finaliza la solicitud del archivo
    //   oReq.onload = function () {
    //     // Una vez se descarga el archivo, se puede abrir en otra ventana
    //     let file = new Blob([oReq.response], {
    //       type: "application/pdf",
    //     });
    //     // la descarga se estara generando directamente en el navegador
    //     FileSaver.saveAs(file, "SimonBustamante_CV.pdf");
    //   };
    //   oReq.send();
    // },
  },
};
</script>

<style>
.card-container {
  width: 600px;
  height: auto;
}
.icons:hover {
  transform: rotate(22deg);
}

.avatar {
  border-radius: 50%;
  box-shadow: 0 0 0 6px rgba(0, 0, 0, 0.02);
  transition: 0.25;
  border: 1px solid rgb(66, 66, 66);
  padding: 2px;
}
.avatar:hover {
  box-shadow: 0 0 0 12px rgba(0, 0, 0, 0.04);
}
.tilBlack {
  color: black;
  font-size: 100%;
}
p {
  color: black;
}

.bg {
  padding-top: 4vh;
  padding-bottom: 6vh;
  border-color: white;
}
.divPa {
  position: relative;
}
</style>
