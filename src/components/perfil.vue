<template>
  <div class="pt-12">
    <!-- tile dark  -->
    <div class="d-flex justify-center pb-3">
      <h1 class="tituloView font-weight-bold">Sobre mí</h1>
    </div>
    <div class="d-flex justify-center">
      <v-divider
        inset
        width="35"
        style="border-width: 2px; border-radius: 12px; flex: none; margin: 0"
        color="#0D47A1"
      ></v-divider>
    </div>

    <div class="pt-6">
      <v-row>
        <v-col>
          <div class="text-center">
            <v-avatar
              class="avatar"
              style="
                height: 100%;
                width: 6rem;
                min-height: auto;
                min-width: auto;
                max-width: 100%;
              "
            >
              <v-img src="../assets/img/logo/imgPerfil.png"></v-img>
            </v-avatar>
          </div>

          <h2 class="tilBlack pt-2 text-center align-center">
            Simon Iván Bustamante Venegas
          </h2>
          <h4
            class="font-weight-bold mb-5 text-center align-center"
            style="color: #0f446e; font-size: 80%"
          >
            simonbustamante21@gmail.com
          </h4>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <p class="parrProy text-justify">
            Desde que finalice con mi carrera en ingeniería en informatica, y
            estableciéndome en una empresa, para dar comienzo al mundo laboral,
            mi principal objetivo es conocer nuevas y actuales tecnologías
            ocupadas en el mercado, tanto así, que me permita desarrollarme,
            para crecer en el área profesional y personal, manteniendo mi
            motivación y rapidez por aprender cualquier tecnología y
            metodología, aportando mi apoyo y siempre dispuesto a ayudar.
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
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
    </div>
  </div>
</template>

<script>
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
      // {
      //   icons: "mdi-email",
      //   url: " ",
      //   name: "sim.bustamante@duocuc.cl",
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
      // {
      //   icons: "mdi-file-document",
      //   url: "/assets/document/SimonBustamanteVenegas_CV_Ultimo.pdf",
      //   name: "Curriculum",
      // },
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
  padding-top: 4vh;
  padding-bottom: 6vh;
  border-color: white;
}
.divPa {
  position: relative;
}
</style>
