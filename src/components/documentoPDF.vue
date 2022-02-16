<template>
  <div id="webviewer" ref="viewer"></div>
</template>

<script>
import * as Vue from "vue";
import WebViewer from "@pdftron/webviewer";
export default {
  name: "WebViewer",
  props: { initialDoc: { type: String } },
  setup(props) {
    const viewer = href(null);
    onMounted(() => {
      WebViewer({ path, initialDoc: props.initialDoc }, viewer.value);
    });
    return viewer;
  },
};
</script>

<style>
#pageContainer {
  margin: auto;
  width: 80%;
}

div.page {
  display: inline-block;
}
</style>
