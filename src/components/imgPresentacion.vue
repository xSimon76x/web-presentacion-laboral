<template>
  <div class="back">
    <div class="div">
      <div class="d-flex justify-center mb-0">
        <v-img class="img" src="../assets/img/logo/monitor-codigo.jpg"></v-img>
      </div>
      <div class="d-flex justify-center mb-0">
        <h3 style="color: white">Simon Bustamante</h3>
      </div>
      <div class="d-flex justify-center mb-0">
        <h6 style="color: white">Desarrollador Junior</h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.back {
  background: url("../assets/img/fondoNublado.jpg") no-repeat center;
  background-size: cover;
  height: 50vh;
  min-height: 40vh;
  max-height: 60vh;
  display: flex;
  align-items: center;
  width: auto;
}

.div {
  margin: 0 auto;
}

.img {
  width: 1vw;
  height: 100%;
}
</style>
