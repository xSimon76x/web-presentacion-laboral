<template>
  <div id="appPDF">
    <WebViewer
      initialDoc="https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf"
    />
  </div>
</template>

<script>
import WebViewer from "../components/documentoPDF.vue";

export default {
  name: "App",
  components: {
    WebViewer,
  },
};
</script>

<style>
#appPDF {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* background-color: rgb(104, 57, 57); */
  padding: 50px;
}
</style>
