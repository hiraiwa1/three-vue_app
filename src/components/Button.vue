<script setup lang="ts">

const clearInit = (): void => {
  location.reload();
  window.scrollTo(scrollOption);
}

const scrollOption: object = {
  top: 0
}
</script>

<template>
  <button v-on:click="clearInit">
    初期の場所に戻る。
  </button>
</template>

<style scoped>
button {
  position: fixed;
  top: 70%;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 60px;
  border-radius: 15px;
  background: rgb(255,172,63);
  background: linear-gradient(139deg, rgba(255,172,63,1) 0%, rgba(255,249,63,1) 52%, rgba(255,249,63,1) 52%, rgba(255,172,63,1) 100%);
  border: 5px solid #fff;
  border-top-color: #fff;
  border-right-color: #818181;
  border-bottom-color: #818181;
  font-weight: 500;
  font-family: sans-serif;
  font-size: 0.8rem;
}
button:hover {
  cursor: pointer;
}
button:active {
  border: 5px solid #818181;
  border-top-color: #818181;
  border-right-color: #fff;
  border-bottom-color: #fff;

}
</style>