<template>
  <div id="app">
    <Simon />
  </div>
</template>

<script>
import Simon from "./components/Simon";

export default {
  name: "App",
  components: {
    Simon,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
}
</style>
