<template>
  <div class="contenedor">
    <v-row justify="space-around">
      <v-col>
        <v-card
          class="overflow-hidden"
          color="blue lighten-1"
          dark
          justify="space-around"
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
            ></v-text-field>
            <v-autocomplete
              :disabled="!isEditing"
              :items="states"
              :filter="customFilter"
              color="white"
              item-text="name"
              label="Ingresa un tema"
            ></v-autocomplete>
            <v-textarea autocomplete="email" label="Mensaje"></v-textarea>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn :disabled="!isEditing" color="success" @click="save">
              Enviar
            </v-btn>
          </v-card-actions>
          <v-snackbar v-model="hasSaved" :timeout="2000" absolute bottom left>
            Tu correo ha sido enviado a Simon Bustamante
          </v-snackbar>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
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
  },
};
</script>

<style>
.contenedor {
  padding-top: 6vh;
  padding-bottom: 6vh;
}
</style>
