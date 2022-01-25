<template>
  <div>
    <v-row>
      <v-col>
        <v-img class="back">
          <v-row>
            <v-col
              class="rowImg"
              style="
                border-color: pink;
                border-width: 5px;
                border-style: dotted;
              "
            >
              <div
                class="d-flex justify-center mb-1"
                style="
                  border-color: gray;
                  border-width: 2px;
                  border-style: dotted;
                "
              >
                <div
                  class="pa-2"
                  style="
                    border-color: pink;
                    border-width: 2px;
                    border-style: dotted;
                  "
                >
                  <v-img
                    class="img"
                    src="../assets/img/logo/monitor-codigo.jpg"
                  ></v-img>
                </div>
              </div>
            </v-col>
          </v-row>

          <div class="d-flex justify-center mb-1">
            <h3 style="color: white">Simon Bustamante</h3>
          </div>
          <div class="d-flex justify-center mb-1">
            <h6 style="color: white">Desarrollador Junior</h6>
          </div>

          <!-- <div class="d-flex justify-center mb-6">
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
          </div> -->
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
.rowImg {
  width: 100%;
}
.img {
  min-width: 2vw;
  min-height: 2vh;
  width: 14vw;
  max-height: fit-content;
  max-width: 16vw;
}
</style>
