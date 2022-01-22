<template>
  <div class="contenedor">
    <v-row>
      <v-col class="d-flex justify-center mb-6">
        <v-card
          class="overflow-hidden card"
          color="blue lighten-1"
          dark
          elevation="10"
        >
          <v-toolbar flat color="blue darken-1">
            <v-icon>mdi-account</v-icon>
            <v-toolbar-title class="font-weight-light">
              Contactenme
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
          <v-card-actions>
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
.contenedor {
  padding-top: 6vh;
  padding-bottom: 6vh;
}
.card {
  width: 90%;
}
</style>
