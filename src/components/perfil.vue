<template>
  <div>
    <v-card class="bg" tile dark lights-out>
      <v-row no-gutters style="flex-wrap: nowrap" align="center">
        <v-col
          cols="12"
          style="min-width: 100px"
          class="flex-grow-0 flex-shrink-1"
        >
          <div class="d-flex pa-2 justify-center" outlined tile>
            <v-sheet
              elevation="5"
              width="600"
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
                    style="color: blue; font-size: 80%"
                  >
                    Desarrollador Junior
                  </h4>
                </v-col>
                <v-col class="d-flex flex-column" style="margin: 0">
                  <p class="text-center">
                    Hola! soy un profesional que acaba de egresar en ingeniería
                    en informatica, cuento con experiencia básica en el
                    desarrollo web en Python - Flask, gracias a la experiencia
                    que obtuve durante mi practica profesional con el Citt, mi
                    principal objetivo es formar parte de una empresa en la cual
                    pueda desarrollarme y crecer en el área profesional y
                    personal, manteniendo mi motivación por aprender cualquier
                    tecnología y metodología, que requiera la empresa para optar
                    por la oportunidad de trabajar con ellos.
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
                      <v-tooltip top>
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
export default {
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
