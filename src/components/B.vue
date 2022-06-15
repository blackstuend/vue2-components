<template>
  <div class="b">
    B
    <svg><use xlink:href="#circle" /></svg>
  </div>
</template>

<script>
import '../assets/icon/circle.svg';

export default {
  name: 'BItem',
  components: {},
};
</script>

<style lang="scss" scoped>
.b {
  color: var(--primary);
}
</style>
