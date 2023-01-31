<script setup>
  import Three from "./components/Three.vue";
  import Button from "./components/Button.vue";
  import Title from "./components/Title.vue";

// https://note.nayuta-tech.co.jp/n/n60bb28445272
</script>

<template>
  <div class="bg">
    <Three />
    <Button />
    <Title />
    <small class="license-text">This work is based on <a href="https://sketchfab.com/3d-models/jake-the-dog-adventure-time-fan-art-1a58f2fb304a4c5da8900c2d0afced49">"Jake the Dog - Adventure Time (Fan art)"</a>  by <a href="https://sketchfab.com/TH3WICK3D1">TH3WICK3D1</a> licensed under <a href="http://creativecommons.org/licenses/by/4.0/">CC-BY-4.0</a></small>
  </div>
</template>

<style scoped>
.bg {
  width: 100%;
  height: 100vh;
}
.bg::before {
  content: "";
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url(/public/forest_x1920.jpg);
  background-size: 100% 100%;
  background-position: center;
}
.license-text {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  color: #fff;
}
.license-text a {
  color: #fff;
}
</style>