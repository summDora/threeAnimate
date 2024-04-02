<template>
  <div id="drawlines"></div>
</template>
<script setup>
import { onMounted } from "vue";
import * as THREE from "three";
//创建场景和相机
var scene = new THREE.Scene();
var renderer = new THREE.WebGLRenderer();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  1,
  500
);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);
renderer.setSize(window.innerWidth, window.innerHeight);
const material = new THREE.LineBasicMaterial({ color: 0x00f0ff });
const points = [];
points.push(new THREE.Vector3(-10, 10, 0));
points.push(new THREE.Vector3(0, 0, 0));
points.push(new THREE.Vector3(10, -10, 0));
points.push(new THREE.Vector3(0, 0, 0));
points.push(new THREE.Vector3(-10, -10, 0));
points.push(new THREE.Vector3(0, 0, 0));
points.push(new THREE.Vector3(10, 10, 0));
// points.push(new THREE.Vector3(-10, 0, 0));
// points.push(new THREE.Vector3(0, 10, 0));
// points.push(new THREE.Vector3(10, 0, 0));

const geometry = new THREE.BufferGeometry().setFromPoints(points);
const line = new THREE.Line(geometry, material);
scene.add(line);
onMounted(() => {
  document.getElementById("drawlines")?.appendChild(renderer.domElement);
  renderer.render(scene, camera);
});
</script>
<style>
@media (min-width: 1024px) {
  #drawlines {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
canvas {
  display: block;
}
</style>
