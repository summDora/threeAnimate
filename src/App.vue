<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/canvas">Mi</RouterLink>
      <RouterLink to="/lines">Lines</RouterLink>
      <RouterLink to="/mimodel">MiModel</RouterLink>
    </nav>

    <RouterView />
  </div>
</template>

<style scoped>
nav {
  width: 100%;
  font-size: 16px;
  text-align: center;
  top: 1rem;
  position: absolute;
}
nav a {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
  padding: 8px;
}
</style>
