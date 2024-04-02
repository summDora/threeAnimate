<template>
  <div id="mimodel"></div>
</template>
<script setup>
import { onMounted } from "vue";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

var scene = new THREE.Scene();
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
const camera = new THREE.PerspectiveCamera(
  5,
  window.innerWidth / window.innerHeight,
  1,
  500
);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

const loader = new GLTFLoader();

function lodaModel() {
  loader.load(
    "./../../public/su7-xiaomini/scene.gltf",
    function (gltf) {
      console.log(1231231231, gltf);
      //
      var model = gltf.scene;
      gltf.scene.traverse((item) => {
        if (item.isMesh) {
          console.log(item);
          item.material = new THREE.MeshLambertMaterial({
            color: 0x004444,
            transparent: true,
            opacity: 0.5,
          });
          const edges = new THREE.EdgesGeometry(item.geometry);
          const edgesMaterial = new THREE.LineBasicMaterial({
            color: 0x00ffff,
          });
          const line = new THREE.LineSegments(edges, edgesMaterial);
          item.add(line);
        }
      });
      scene.add(model);

      document.getElementById("mimodel")?.appendChild(renderer.domElement);
      renderer.render(scene, camera);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.update();
    },
    undefined,
    function (error) {
      console.error(error, "error");
    }
  );
}

lodaModel();
</script>
<style>
@media (min-width: 1024px) {
  #mimodel {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
canvas {
  display: block;
}
</style>
