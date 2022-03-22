<template>
  <div>
    <div class="back">
      <timLine />
    </div>
  </div>
</template>

<script>
import timLine from "../components/timeLines.vue";
export default {
  components: {
    timLine,
  },
};
</script>

<style>
.back {
  /* padding-top: 5%; */
  /* background: linear-gradient(
    60deg,
    rgba(84, 58, 183, 1) 0%,
    rgba(0, 172, 193, 1) 100%
  ); */
  /* background: #2d6cdf; */
}

/* start shape top */
.custom-shape-divider-top-1644551658 {
  position: absolute;
  /* cambio de top:0 a top:auto */
  top: auto;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

.custom-shape-divider-top-1644551658 svg {
  position: relative;
  display: block;
  width: calc(129% + 1.3px);
  height: 97px;
}

.custom-shape-divider-top-1644551658 .shape-fill {
  fill: #ffffff;
}
/* end shape top */
.custom-shape-divider-bottom-1644555398 {
  position: absolute;
  bottom: auto;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(360deg);
}

.custom-shape-divider-bottom-1644555398 svg {
  position: relative;
  display: block;
  width: calc(116% + 1.3px);
  height: 99px;
  transform: rotateY(180deg);
}

.custom-shape-divider-bottom-1644555398 .shape-fillBottom {
  fill: url(#grad1);
}
</style>
