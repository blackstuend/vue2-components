<template>
  <div class="a">
    A
    <svg><use xlink:href="#about" /></svg>
  </div>
</template>

<script>
import '../assets/icon/about.svg';

export default {
  name: 'AItem',
  components: {},
};
</script>

<style lang="scss" scoped>
.a {
  color: var(--primary);
}
</style>
