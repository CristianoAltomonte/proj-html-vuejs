<template>
  <div>
    <HeaderComp :navBarHeader="navBar" />
    <MainComp />
    <FooterComp />
  </div>
</template>

<script>
import HeaderComp from "./components/HeaderComp.vue";
import MainComp from "./components/MainComp.vue";
import FooterComp from "./components/FooterComp.vue";

export default {
  name: "App",
  components: {
    HeaderComp,
    MainComp,
    FooterComp,
  },

  data() {
    return {
      navBar: [
        {
          name: "Home",
          link: "/",
        },
        {
          name: "Service",
          link: "/Service",
        },
        {
          name: "Why Us",
          link: "/WhyUS",
        },
        {
          name: "Case Studies",
          link: "/Service",
        },
        {
          name: "About",
          link: "/About",
        },
        {
          name: "Blog",
          link: "/Blog",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "DM Sans", sans-serif;
  font-family: "Fredoka One", cursive;
  font-family: "Inter", sans-serif;
}
</style>
