<template>
  <v-app>
    <v-main>
      <div id="app">
        <!-- <div id="nav"><router-link to="/">Home</router-link></div> -->
        <router-view />
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
