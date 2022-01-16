<template>
  <div>
    <v-row>
      <v-col>
        <v-img class="back">
          <div class="d-flex justify-center mb-6">
            <v-img class="img" src="../assets/logo.svg"></v-img>
            <hgroup class="text">
              <h2>Simon Bustamante</h2>
              <v-divider></v-divider>
              <p>desarrollador</p>
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
  padding-top: 2vh;
}
.text {
  color: white;
  font-size: 2vh;
}
.img {
  height: 20vh;
}
</style>
