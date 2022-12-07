<template>
  <header>
    <div class="container-nav">
      <div>
        <a href="https://avada.theme-fusion.com/marketing-consultant/">
          <img
            src="../assets/images/avada-marketing-logo-2x-200x37.png"
            alt="#"
        /></a>
      </div>
      <div>
        <nav class="navbar-menu">
          <a
            v-for="(elem, index) in navBarHeader"
            :key="index"
            :href="elem.link"
            >{{ elem.name }}</a
          >
        </nav>
      </div>
      <div>
        <font-awesome-icon icon="fa-solid fa-phone" />
        <span> (555) 802-1234</span>
        <button>Free Quote</button>
      </div>
    </div>
    <JumbotronHeaderComp />
  </header>
</template>

<script>
import JumbotronHeaderComp from "./JumbotronHeaderComp.vue";

export default {
  name: "HeaderComp",

  components: {
    JumbotronHeaderComp,
  },

  props: {
    navBarHeader: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container-nav {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
}
.fa-phone {
  color: rgb(248, 96, 17);
  cursor: pointer;
}
button {
  background-color: rgba(255, 231, 218, 1);
  border: none;
  border-radius: 10px;
  padding: 15px 40px;
  margin-left: 10px;
  color: rgb(248, 96, 17);
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    background-color: rgb(248, 96, 17);
    color: white;
  }
}
span {
  margin-right: 20px;
}
.navbar-menu {
  a {
    margin: 0px 15px;
    text-decoration: none;
    color: black;
    font-size: 1rem;
    font-weight:900;
    padding: 5px 0;
    &:hover {
      border-bottom: 2px solid rgb(248, 96, 17);
    }
  }
}
</style>