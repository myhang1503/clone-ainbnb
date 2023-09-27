<template>
  <div id="wrapper">
    <the-title-bar></the-title-bar>
    <the-content></the-content>

    <!-- Back To Top Button -->
    <div id="backtotop"><a href="#"></a></div>
  </div>
  <!-- Wrapper / End -->
</template>

<script>
import TheContent from "./TheContent.vue";
import TheTitleBar from "./TheTitleBar.vue";
export default {
  components: {
    TheTitleBar,
    TheContent,
  },
};
</script>

<style></style>
