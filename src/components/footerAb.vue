<template>
  <div>
    <v-footer padless dark>
      <!-- <v-card flat tile width="100%" class="text-center">
        <v-card-text class="blue lighten-1 text-center py-0">
          <v-btn
            @click="red(link.url)"
            v-for="link in links"
            :key="link.name"
            class="mx-2"
            dark
            icon
          >
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-icon size="20px" v-bind="attrs" v-on="on">
                  {{ link.icons }}
                </v-icon>
              </template>
              <span style="font-size: 1.8vh">{{ link.name }}</span>
            </v-tooltip>
          </v-btn>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text class="py-2 white--text text-center textFooter Sfooter">
          Todos los derechos reservados por
          <strong> Simon Ivan Bustamante Venegas</strong> ©2022
        </v-card-text>
      </v-card> -->
      <v-row class="containerFooter" justify="center">
        <v-col cols="3">
          <div class="mi-perfil">
            <h2
              class="text-caption text-sm-body-2 text-md-body-1 text-lg-h6 text-xl-h4"
            >
              Situación Actual
            </h2>
            <div class="containerText">
              <p
                class="textFooter text-caption text-sm-body-2 text-md-body-1 text-justify"
              >
                Actualmente me encuentro en el desarrollo de ciertos proyectos
                de aprendizaje, en donde voy ampliando mis conocimientos de
                desarrollador, sin embargo, me encuentro disponible de forma
                inmediata para cualquier actividad laboral con jornada completa.
              </p>
            </div>
          </div>
        </v-col>
        <v-col cols="3">
          <div class="tecnologias-web">
            <h2
              class="text-caption text-sm-body-2 text-md-body-1 text-lg-h6 text-xl-h4"
            >
              Tecnologias Usadas
            </h2>
            <div class="containerTec">
              <div v-for="tecnologia in tecnologias" :key="tecnologia.id">
                <v-img
                  :src="tecnologia.url"
                  :alt="tecnologia.alt"
                  :max-width="tecnologia.wd"
                  :max-height="tecnologia.hg"
                ></v-img>
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="3">
          <div class="item-web">
            <h2
              class="text-caption text-sm-body-2 text-md-body-1 text-lg-h6 text-xl-h4"
            >
              Mi Portafolio
            </h2>
            <div class="containerItem">
              <div v-for="item in itemsWeb" :key="item.title">
                <p class="white--text itemSeleccion" @click="red(item.route)">
                  {{ item.title }}
                </p>
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="3">
          <div class="contactos">
            <h2
              class="text-caption text-sm-body-2 text-md-body-1 text-lg-h6 text-xl-h4"
            >
              Contactos
            </h2>
            <div class="containerRedes">
              <div
                class="redes"
                v-for="redes in links"
                :key="redes.name"
                :title="redes.name"
              >
                <v-icon class="pr-2">
                  {{ redes.icons }}
                </v-icon>
                <p class="white--text mb-0" @click="red(redes.url)">
                  {{ redes.name }}
                </p>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <div class="subFooter">
            <v-divider></v-divider>

            <p class="text-center white--text pt-6">
              Todos los derechos reservados ©2022
              <strong class="white--text">
                Simon Ivan Bustamante Venegas</strong
              >
            </p>
          </div>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-linkedin", "mdi-email", "mdi-git", "mdi-phone"],
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
    tecnologias: [
      {
        id: 1,
        url: require("@/assets/logo.png"),
        title: "Vue",
        alt: "vue",
        wd: "47",
        hg: "auto",
      },
      {
        id: 2,
        url: require("@/assets/img/logo/vuetify2.0.png"),
        title: "Vuetify",
        alt: "vuetify",
        wd: "60",
        hg: "auto",
      },
    ],
    itemsWeb: [
      { id: 1, title: "Inicio", icon: "mdi-home", route: "/" },
      {
        id: 2,
        title: "Proyectos",
        icon: "mdi-wallet-travel",
        route: "/proyectos",
      },
      { id: 3, title: "Contactos", icon: "mdi-phone", route: "/contacto" },
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
.v-footer {
  --padLeft: 8vw;
  --padRight: 8vw;
}
.row {
  margin: 0 !important;
}

.containerFooter {
  padding-top: 10vh;
  padding-right: var(--padLeft);
  padding-left: var(--padRight);
  padding-bottom: 1rem;
}

.containerText {
  padding-top: 2.5rem;
}

.tecnologias-web {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.containerTec {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: auto;
  padding-top: 2.5rem;
}

.item-web {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.containerItem {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: auto;
  padding-top: 2.5rem;
}

.contactos {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.containerRedes {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: auto;
  padding-top: 2.5rem;
}

.redes {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5rem;
  cursor: pointer;
}

.redes > p:hover {
  color: aqua !important;
}

.redes[title^="Linkedin"] {
  padding-top: 0rem;
}

.itemSeleccion {
  cursor: pointer;
}

.itemSeleccion:hover {
  color: aqua !important;
}

.subFooter {
  padding-right: var(--padLeft);
  padding-left: var(--padRight);
}

.textFooter {
  color: rgb(255, 255, 255);
  /* font-size: 10px; */
}
</style>
