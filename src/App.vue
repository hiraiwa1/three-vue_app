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
</style>