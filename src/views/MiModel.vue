<template>
  <div id="mimodel"></div>
</template>
<script setup>
import { onMounted } from "vue";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// 矩形区域光
import { RectAreaLightUniformsLib } from "three/addons/lights/RectAreaLightUniformsLib.js";
import { RectAreaLightHelper } from "three/addons/helpers/RectAreaLightHelper.js";

let scene = new THREE.Scene();
// 渲染器设置
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
// 设置设备像素比例
// renderer.setPixelRatio(window.devicePixelRatio); // 之后任何对renderer.setSize的调用都会神奇地使用您请求的大小乘以您传入的像素比例. 强烈不建议这样
// renderer.setPixelRatio(3);

// 灯光初始化
RectAreaLightUniformsLib.init();

const camera = new THREE.PerspectiveCamera(
  5,
  window.innerWidth / window.innerHeight,
  20,
  1000
);
camera.position.set(0, 0, -90);
// camera.lookAt(0, 0, 0);
const loader = new GLTFLoader();
const controls = new OrbitControls(camera, renderer.domElement);
// controls.autoRotate = true;
controls.autoRotateSpeed = -0.75;
controls.enableDamping = true;
controls.target.set(0, 0.1, 0);
// 灯光
const color = 0xffffff;
const intensity = 3;
const width = 8;
const height = 100;

// 顶部区域光
const toplight = new THREE.RectAreaLight(color, intensity, width, height);
toplight.position.set(0, 3, 0);
toplight.rotation.x = THREE.MathUtils.degToRad(-90);
toplight.castShadow = true;
scene.add(toplight);
const tophelper = new RectAreaLightHelper(toplight);
toplight.add(tophelper);

// 地板反射光
const bottomlight = new THREE.RectAreaLight("#5c5f60", 2, window.innerWidth, height);
bottomlight.position.set(0, -3, 0);
bottomlight.rotation.x = THREE.MathUtils.degToRad(90);
bottomlight.castShadow = true;
scene.add(bottomlight);
const bottomhelper = new RectAreaLightHelper(bottomlight);
bottomlight.add(bottomhelper);

function lodaModel() {
  loader.load(
    "./../../public/su7-xiaomini/scene.gltf",
    function (gltf) {
      let model = gltf.scene;
      model.scale.set(2.5, 2.5, 2.5);
      model.position.y = -2.5;
      scene.add(model);
      document.getElementById("mimodel")?.appendChild(renderer.domElement);
      renderer.render(scene, camera);
      var animate = function () {
        // 我们的确可以用 setInterval，但是，requestAnimationFrame 有很多的优点
        // 最重要的一点或许就是当用户切换到其它的标签页时，它会暂停，因此不会浪费用户宝贵的处理器资源，也不会损耗电池的使用寿命。
        requestAnimationFrame(animate);
        controls.update();
        // model.rotation.x += 0.01;
        // model.rotation.y += 0.01;
        renderer.render(scene, camera);
      };

      animate();
    },
    undefined,
    function (error) {
      console.error(error, "error");
    }
  );
}
lodaModel();

onMounted(() => {
  window.addEventListener("resize", lodaModel);
});
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
