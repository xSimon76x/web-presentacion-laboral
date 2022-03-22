<template>
  <div>
    <v-footer padless dark>
      <v-row class="containerFooter" justify="center">
        <v-col cols="12" sm="6" md="3">
          <div class="itemTitulo">
            <h2
              class="titulo text-caption text-sm-body-2 text-md-body-1 text-lg-h6 text-xl-h4"
            >
              Situación actual
            </h2>
            <div class="containerText">
              <p
                class="text-caption text-sm-body-2 text-md-body-1 text-justify"
              >
                Actualmente me encuentro en el desarrollo de ciertos proyectos
                de aprendizaje, en donde voy ampliando mis conocimientos de
                desarrollador, sin embargo, me encuentro disponible de forma
                inmediata para cualquier actividad laboral con jornada completa.
              </p>
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <div class="itemTitulo">
            <h2
              class="titulo text-caption text-sm-body-2 text-md-body-1 text-lg-h6 text-xl-h4"
            >
              Tecnologias usadas
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
        <v-col cols="12" sm="6" md="3">
          <div class="itemTitulo">
            <h2
              class="titulo text-caption text-sm-body-2 text-md-body-1 text-lg-h6 text-xl-h4"
            >
              Web Portafolio
            </h2>
            <div class="containerItem">
              <div
                class="itemsLinks"
                v-for="item in itemsWeb"
                :key="item.title"
                :title="item.title"
              >
                <v-icon class="pr-2"> {{ item.icon }}</v-icon>
                <p class="itemSeleccion" @click="red(item.route)">
                  {{ item.title }}
                </p>
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <div class="itemTitulo">
            <h2
              class="titulo text-caption text-sm-body-2 text-md-body-1 text-lg-h6 text-xl-h4"
            >
              Contactos
            </h2>
            <div class="containerRedes">
              <div
                class="itemsLinks"
                v-for="redes in links"
                :key="redes.name"
                :title="redes.name"
              >
                <v-icon class="pr-2">
                  {{ redes.icons }}
                </v-icon>
                <p class="itemSeleccion mb-0" @click="red(redes.url)">
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
    newIcon: "",
    icons: ["mdi-linkedin", "mdi-email", "mdi-git", "mdi-phone"],
    variant: "default",
    links: [
      {
        icons: "mdi-linkedin",
        url: "https://www.linkedin.com/in/simon-bustamante-venegas",
        name: "Linkedin",
      },
      // {
      //   icons: "mdi-email",
      //   url: "https://www.google.com/gmail/about/",
      //   name: "Email",
      // },
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
  --colorTitulo: #adadad;
  --colorSubtitulo: #adadad;
  --colorIcon: #498ed0;
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

.itemTitulo > .titulo {
  font-family: "Work Sans", sans-serif !important;
  color: var(--colorTitulo);
}

.containerText {
  padding-top: 2.5rem;
}

.itemTitulo > .containerText > p {
  color: var(--colorSubtitulo);
}

.itemTitulo {
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

.itemTitulo {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.item-web > h2 {
  color: var(--colorTitulo);
}

.containerItem {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: auto;
  padding-top: 2.5rem;
}

.itemsLinks {
  display: flex;
  align-content: center;
  padding: 0.5rem;
}

.itemsLinks > p {
  margin: 0;
  color: var(--colorSubtitulo) !important;
}

.itemsLinks > i {
  color: var(--colorIcon) !important;
}

.itemsLinks[title^="Inicio"] {
  padding-top: 0rem;
}

.itemsLinks[title^="Linkedin"] {
  padding-top: 0rem;
}

.itemTitulo {
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
