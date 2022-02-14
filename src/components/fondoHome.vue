<template>
  <div>
    <!-- <div class="custom-shape-divider-top-1644551658">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          class="shape-fill"
        ></path>
      </svg>
    </div> -->
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
  background: #2d6cdf;
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
