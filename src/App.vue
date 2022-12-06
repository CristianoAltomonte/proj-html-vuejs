<template>
  <div>
    <HeaderComp :navBarHeader="navBar" />
    <MainComp
      :descriptionMain="description"
      :brandsMain="brands"
      :cardEmployee="cards"
      :awardsIcon="awards"
    />
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
          paragraph:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor placerat luctus. Nullam sit amet ante sed orci convallis gravida et at massa.",
          button: "Get A Consultation",
        },
        {
          image: "image_2.png",
          title: "In-House Sales Training",
          paragraph:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor placerat luctus. Nullam sit amet ante sed orci convallis gravida et at massa.",
          button: "Get A Consultation",
          invert: "rotate:180deg",
        },
        {
          image: "image_3.png",
          title: "Harness Your Social Proof",
          paragraph:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor placerat luctus. Nullam sit amet ante sed orci convallis gravida et at massa.",
          button: "Get A Consultation",
        },
      ],

      brands: [
        "abstract.png",
        "cglobal.png",
        "next.png",
        "hemisferio.png",
        "spaces.png",
        "digitalbox.png",
      ],

      cards: [
        {
          image: "case-studies-1-400x450.jpg",
          about:
            "How Spaces attracted five million visitors by improving the content",
          score: "200%",
          role: "Higher revenue from digital",
        },
        {
          image: "case-studies-4-400x450.jpg",
          about:
            "Creativity helped Hemisferio to increase their brand reach vertically",
          score: "10x",
          role: "Sales increase with the same ad spend",
        },
        {
          image: "case-studies-6-400x450.jpg",
          about: "How DigitalBox used AI-powered data insight to boost sales",
          score: "3-year",
          role: "Partnership with Avada Consultant",
        },
      ],

      awards: [
        {
          iconwin: "award-a-200x191.png",
          contain: "Winner Seo Master MAGT Smart Start Award 2017",
        },
        {
          iconwin: "award-b-200x191.png",
          contain: "Top Social Media Agencies Next Partner 2018",
        },
        {
          iconwin: "award-c-200x191.png",
          contain: "10 Fastest Growing Abstract Solution Providers 2019",
        },
        {
          iconwin: "award-d-200x191.png",
          contain: "National Excellence Agencie Award Winner 2020",
        },
      ],
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

.d-flex {
  display: flex;
}

.center {
  width: 80%;
  margin: 0 auto;
}

.space-between {
  display: flex;
  justify-content: space-between;
}

.text-center {
  text-align: center;
}

.align-item {
  align-items: center;
}
</style>
