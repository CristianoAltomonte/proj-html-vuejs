<template>
  <div>
    <HeaderComp :navBarHeader="navBar" />
    <MainComp :descriptionMain="description" :brandsMain="brands"/>
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
          link: "https://avada.theme-fusion.com/marketing-consultant/services/",
        },
        {
          name: "Why Us",
          link: "https://avada.theme-fusion.com/marketing-consultant/why-us/",
        },
        {
          name: "Case Studies",
          link: "https://avada.theme-fusion.com/marketing-consultant/case-studies/",
        },
        {
          name: "About",
          link: "https://avada.theme-fusion.com/marketing-consultant/about/",
        },
        {
          name: "Blog",
          link: "https://avada.theme-fusion.com/marketing-consultant/blog/",
        },
      ],

      description: [
        {
          image: "image_1.png",
          title: "Increase Brand Awareness",
          paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor placerat luctus. Nullam sit amet ante sed orci convallis gravida et at massa.",
          button: "Get A Consultation",

        },
        {
          image: "image_2.png",
          title: "In-House Sales Training",
          paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor placerat luctus. Nullam sit amet ante sed orci convallis gravida et at massa.",
          button: "Get A Consultation",
          invert: "rotate:180deg"

        },
        {
          image: "image_3.png",
          title: "Harness Your Social Proof",
          paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor placerat luctus. Nullam sit amet ante sed orci convallis gravida et at massa.",
          button: "Get A Consultation"

        },
      ],

      brands:["abstract.png", "cglobal.png", "next.png", "hemisferio.png", "spaces.png", "digitalbox.png"],

    };
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital@1&family=Fredoka+One&family=Inter&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "DM Sans", sans-serif;
  font-family: "Fredoka One", cursive;
  font-family: "Inter", sans-serif;
}

.d-flex{
  display: flex;
}

.center{
  width: 80%;
  margin: 0 auto;
}

.space-between{
  display: flex;
  justify-content: space-between;
}

.text-center{
  text-align: center;
}
</style>
