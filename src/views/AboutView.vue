<template>
  <div id="about"></div>
</template>
<script setup>
import { onMounted } from "vue";
import * as THREE from "three";
//创建场景和相机
var scene = new THREE.Scene();
// 相机参数：视野角度（FOV）。长宽比（aspect ratio）。近截面（near）, 远截面（far)
var camera = new THREE.PerspectiveCamera(
  55,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
// 当物体某些部分比摄像机的远截面远或者比近截面近的时候，该这些部分将不会被渲染到场景中

//创建渲染器，设置尺寸为窗口尺寸，并将渲染后的元素添加到body
var renderer = new THREE.WebGLRenderer();
//创建一个Mesh（绿色的3D立方体），并添加到场景中

var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

//设置照相机的位置
camera.position.z = 5;

//浏览器每次渲染的时候更新立方体的旋转角度
var animate = function () {
  // 我们的确可以用 setInterval，但是，requestAnimationFrame 有很多的优点
  // 最重要的一点或许就是当用户切换到其它的标签页时，它会暂停，因此不会浪费用户宝贵的处理器资源，也不会损耗电池的使用寿命。
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  // 渲染循环
  renderer.render(scene, camera);
};

animate();
function handleCavansSize() {
  const min = Math.min(window.innerWidth, window.innerHeight);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById("about")?.appendChild(renderer.domElement);
}
onMounted(() => {
  const min = Math.min(window.innerWidth, window.innerHeight);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById("about")?.appendChild(renderer.domElement);
  window.addEventListener("resize", handleCavansSize);
});
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    background-color: aqua;
  }
}
canvas {
  display: block;
}
</style>
