<template>
  <!-- <learn-scss></learn-scss> -->
  <the-header></the-header>

  <!--chiu trach nhiem hien thi noi dun tung trang: categories, banner, places, plan...-->
  <router-view />

  <the-footer></the-footer>
</template>

<script>
// import LearnScss from './components/LearnScss.vue';
import TheFooter from "./components/TheFooter.vue";
import TheHeader from "./components/TheHeader.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
    // LearnScss
  },
};
</script>

<style lang="scss"></style>
