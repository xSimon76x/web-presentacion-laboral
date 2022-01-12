<template>
  <!-- componente no usado ya que no se pueden usar variables mutables -->
  <div>
    <!-- <nBar :test="test" @valorMenu="drawerPadre = $event" />
    <v-row>
      <v-col cols="2"> {{ drawerPadre }}</v-col>
      <v-col cols="2"> {{ drawerPadre }}</v-col
      ><v-col cols="2"> {{ drawerPadre }}</v-col>
    </v-row> -->
  </div>
</template>

<script>
import nBar from "../components/navBar.vue";
export default {
  components: {
    nBar,
  },

  data() {
    return {
      test: 4,
    };
  },
  // emits: ["drawerPadre"],
  // computed: {
  //   drawerPadre: {
  //     get() {
  //       return emit.drawerPadre;
  //     },
  //     set(value) {
  //       this.$emit("input", value);
  //     },
  //   },
  // },
};
</script>

<style></style>
