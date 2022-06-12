<template>
  <div id="app">
    <checkbox-item v-model="value">123</checkbox-item>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      value: true,
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
