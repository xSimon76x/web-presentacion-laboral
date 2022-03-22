<template>
  <div class="pa-12">
    <div class="d-flex justify-center pb-3 titulo">
      <h2>Intereses</h2>
    </div>
    <div class="d-flex justify-center">
      <v-divider
        inset
        width="35"
        style="border-width: 2px; border-radius: 12px; flex: none; margin: 0"
        color="#0D47A1"
      ></v-divider>
    </div>
    <div class="listItereses" width="100%">
      <div
        class="interes titulo"
        v-for="interes in objIntereses"
        :key="interes.id"
      >
        <v-icon color="blue" size="60"> {{ interes.icon }} </v-icon>
        <h3 class="text-center">
          {{ interes.title }}
        </h3>
        <div class="d-flex justify-center pa-1">
          <v-divider
            inset
            width="35"
            style="
              border-width: 2px;
              border-radius: 12px;
              flex: none;
              margin: 0;
            "
            color="#0D47A1"
          ></v-divider>
        </div>
        <p class="pa-12 text-center">{{ interes.descripcion }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    objIntereses: [
      {
        id: 1,
        title: "Viajar",
        icon: "mdi-airplane",
        descripcion:
          "Uno de mis mayores intereses es viajar, por lo cual, a lo largo de mi vida he recorrido gran parte de chile, y algunos sectores de argentina. Sin embargo, y en relación a esto, uno de mis sueños es viajar al extranjero, y posteriormente establecerme trabajando.	",
      },
      {
        id: 2,
        title: "Podcast",
        icon: "mdi-microphone",
        descripcion:
          "Desde hace un par de años, me encuentro realizando junto a unos amigos, un programa en donde comentamos temas como; juegos, noticias de relevancia, anime, etc. ",
      },
      {
        id: 3,
        title: "Videojuegos",
        icon: "mdi-gamepad-variant",
        descripcion:
          "Los videojuegos han sido un gran foco de entretención en mi vida, pasando por juegos competitivos, de historias u otros. Así bien, en un futuro me gustaría formar parte de algún proyecto dedicado a esto.",
      },
    ],
  }),
};
</script>

<style>
.listItereses {
  display: grid;
  position: relative;
  flex-wrap: wrap;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(450px, 2fr));
  grid-gap: 2rem;
  padding-top: 4rem;
  width: 100%;
  height: auto;
}

.interes {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-self: center;
}

.titulo > h2 {
  font-family: "Work Sans", sans-serif !important;
}

.titulo > h3 {
  font-family: "Work Sans", sans-serif !important;
}
</style>
