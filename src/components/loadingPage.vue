<template>
  <div class="totalPage" v-if="isLoading == false">
    <div class="containerLoading">
      <p class="white--text textCargando">Cargando...</p>
      <v-progress-circular
        :size="50"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
    };
  },

  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == "loading") {
        // console.log("loading");
      }
      if (document.readyState == "interactive") {
        this.isLoading = true;
        // console.log("interactive");
      }
      if (document.readyState == "complete") {
        // console.log("complete");
      }
    };
  },
};
</script>

<style>
.totalPage {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgb(44, 44, 44);
  z-index: 999;
  transition: all 1000ms ease-in;
}

.containerLoading {
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
</style>
