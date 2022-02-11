<template>
  <div>
    <div class="custom-shape-divider-top-1644551658">
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
    </div>
    <div class="back">
      <timLine />
    </div>
    <div class="custom-shape-divider-bottom-1644555398">
      <svg
        data-name="Layer 2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style="stop-color: rgba(0, 172, 193, 1); stop-opacity: 1"
            />
            <stop
              offset="90%"
              style="stop-color: rgba(84, 58, 183, 1); stop-opacity: 10"
            />
          </linearGradient>
        </defs>
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          class="shape-fillBottom"
        ></path>
      </svg>
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
  padding-top: 5%;
  background: linear-gradient(
    60deg,
    rgba(84, 58, 183, 1) 0%,
    rgba(0, 172, 193, 1) 100%
  );
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
