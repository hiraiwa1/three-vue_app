<template>
  <div class="title-area">
    <h1>Corder</h1>
    <p>I am Developer</p>
  </div>
</template>

<style scoped>
.title-area {
  position: fixed;
  top: 15%;
  left: 5%;
  background-image: none;
  font-family: serif;
  color: #777;
}

h1 {
  margin: 0;
  font-size: 4rem;
  letter-spacing: -0.01em;
  text-shadow: 2px 2px 0 #222;
}
p {
  margin: 0;
  font-size: 1.5rem;
  padding-left: 1em;
  color: #888;
  text-shadow: 1px 1px 0 #222;
}

@media screen and (min-width: 601px) {
  .title-area {
    top: 30%;
    left: 18%;
  }
  h1 {
    font-size: 6rem;
    border-bottom: 1px solid #555;
  }
}
</style>