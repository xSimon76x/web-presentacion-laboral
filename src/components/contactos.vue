<template>
  <div class="contenedor" elevation="0">
    <row class="d-flex justify-center">
      <v-col>
        <h1 class="tituloView font-weight-bold text-center">Contacto</h1>
      </v-col>
    </row>
    <v-row class="d-flex justify-center contact">
      <v-col
        cols="12"
        sm="12"
        md="8"
        xs="12"
        lg="8"
        class="d-flex justify-center mb-6"
      >
        <v-card
          class="overflow-hidden card"
          color="blue lighten-1"
          dark
          elevation="10"
        >
          <v-toolbar flat color="blue darken-1">
            <v-icon>mdi-account</v-icon>
            <v-toolbar-title class="font-weight-light">
              <!-- Contactenme -->
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn
              color="blue darken-3"
              fab
              small
              @click="isEditing = !isEditing"
            >
              <v-icon v-if="isEditing"> mdi-close </v-icon>
              <v-icon v-else> mdi-pencil </v-icon>
            </v-btn>
          </v-toolbar>
          <v-card-text>
            <v-text-field
              :disabled="!isEditing"
              color="white"
              label="Ingresa su correo"
              type="email"
              v-model="from_email"
            ></v-text-field>
            <v-text-field
              :disabled="!isEditing"
              color="white"
              label="Ingresa su nombre"
              type="text"
              v-model="from_name"
            ></v-text-field>
            <v-text-field
              :disabled="!isEditing"
              :items="states"
              color="white"
              item-text="name"
              label="Ingresa un tema"
              v-model="subject"
            ></v-text-field>
            <v-text-field label="Mensaje" v-model="message"></v-text-field>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions class="d-flex align-end" style="height: auto">
            <v-spacer></v-spacer>
            <v-btn :disabled="!isEditing" color="success" @click="enviar()">
              Enviar
            </v-btn>
          </v-card-actions>

          <!-- <v-snackbar v-model="hasSaved" :timeout="2000" absolute bottom left>
            Tu correo ha sido enviado a Simon Bustamante Venegas
          </v-snackbar> -->
        </v-card>
      </v-col>
      <v-col
        cols="12"
        xs="12"
        sm="12"
        md="4"
        lg="4"
        class="d-flex justify-center mb-6"
      >
        <v-card
          class="overflow-hidden card"
          color="white lighten-1"
          dark
          elevation="10"
          width="90%"
          height="48vh"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26545.60258816497!2d-70.76377280365372!3d-33.72963571445844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9663210c269fb48f%3A0x1b1f7184e32f4c9d!2sBuin%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1644557947568!5m2!1ses-419!2scl"
            width="100%"
            height="100%"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";
(function () {
  emailjs.init("user_Zhl3cik28OOAZvafOvRYu");
})();
export default {
  data() {
    return {
      hasSaved: false,
      isEditing: null,
      model: null,
      states: [
        { name: "Entrevista de trabajo", abbr: "ET", id: 1 },
        { name: "Trabajo", abbr: "TR", id: 2 },
      ],
      from_name: " ",
      from_email: " ",
      message: " ",
      subject: " ",
      overlay: false,
      zIndex: 0,
    };
  },

  methods: {
    customFilter(item, queryText, itemText) {
      const textOne = item.name.toLowerCase();
      const textTwo = item.abbr.toLowerCase();
      const searchText = queryText.toLowerCase();

      return (
        textOne.indexOf(searchText) > -1 || textTwo.indexOf(searchText) > -1
      );
    },
    save() {
      this.isEditing = !this.isEditing;
      this.hasSaved = true;
    },
    hide() {
      return (overlay = false);
    },
    enviar() {
      let datos = {
        from_name: this.from_name,
        from_email: this.from_email,
        message: this.message,
        subject: this.subject,
      };
      this.isEditing = !this.isEditing;
      this.hasSaved = true;
      let ov = document.getElementById("ovLay");
      emailjs
        .send(
          "service_7t3unqt",
          "template_3ndzi0v",
          datos,
          "user_Zhl3cik28OOAZvafOvRYu"
        )
        .then(
          function (response) {
            if (response.text === "OK") {
              alert("Tu correo ha sido enviado a Simon Bustamante Venegas");
            }
            console.log(
              "SUCCESS. status=%d, text=%s",
              response.status,
              response.text
            );
          },
          function (err) {
            alert("Ocurrio un problema al enviar el correo");
            console.log("FAILED. error=", err);
          }
        );
    },
  },
};
</script>

<style>
.contact {
  padding-top: 4rem;
}
.tituloView {
  font-family: sans-serif;
  color: #141c3a;
  line-height: 2rem;
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 0.0125em;
  bottom: 0;
}
.contenedor {
  padding-top: 6vh;
  padding-bottom: 6vh;
}
.card {
  width: 90%;
}
</style>
