<template>
  <div>
    <v-row>
      <v-col>
        <v-img class="back">
          <div class="d-flex justify-center mb-6">
            <div class="img">
              <v-img src="../assets/img/logo/monitor-codigo.jpg"></v-img>
            </div>
          </div>

          <div class="d-flex justify-center mb-6">
            <hgroup class="text">
              <h2>Simon Bustamante</h2>
              <v-divider></v-divider>
              <div class="d-flex justify-center mb-6">
                <p>Desarrollador Junior</p>
              </div>
            </hgroup>
          </div>
        </v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.back {
  background: url("../assets/img/fondoNublado.jpg") no-repeat center;
  background-size: cover;
  height: 40vh;
  width: auto;
  size: 0;
  padding-top: 6vh;
}
.text {
  color: white;
  font-size: 2vh;
}
.img {
  min-width: 2vw;
  min-height: 2vh;
  max-height: 20vh;
  max-width: 20vh;
}
</style>
