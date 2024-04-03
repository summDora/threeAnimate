<template>
  <div id="kokomi"></div>
</template>
<script setup>
import { onMounted } from "vue";

import * as THREE from "three";
import * as kokomi from "kokomi.js";

// class Sketch extends kokomi.Base {
//   create() {
//     new kokomi.OrbitControls(this);

//     const box = new kokomi.Box(this);
//     box.addExisting();

//     this.update((time) => {
//       box.spin(time);
//     });
//   }
// }

const Sketch = new kokomi.Base({
  create: () => {
    new kokomi.OrbitControls(this);

    const box = new kokomi.Box(this);
    box.addExisting();

    this.update((time) => {
      box.spin(time);
    });
  },
});
const createSketch = () => {
  const sketch = new Sketch();
  sketch.create();
  return sketch;
};
// function lodaModel() {}
// lodaModel();

onMounted(() => {
createSketch();
  // window.addEventListener("resize", lodaModel);
});
</script>
<style>
@media (min-width: 1024px) {
  #kokomi {
    min-height: 100vh;
    display: flex;
    align-items: center;
    background-color: rgb(7, 44, 32);
  }
}
canvas {
  display: block;
}
</style>
