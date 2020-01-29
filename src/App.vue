<template>
  <div id="app">
    <img width="25%" src="https://www.clipartkey.com/mpngs/m/159-1592008_rabbits-drawing-skeleton-rabbit-skeleton.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
