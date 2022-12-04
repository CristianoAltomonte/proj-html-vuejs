<template>
  <div>
    <div class="center text-center">
      <h2>Some Brands We Work With</h2>
      <p>Quisque aliquet, libero consequat elementum convallis.</p>
    </div>

    <div class="d-flex center">
      <div v-for="(elem, index) in brandsMain" :key="index">
        <a href=""><img :src="require(`../assets/images/${elem}`)" alt="" /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BrandsComp",

  props: {
    brandsMain: Array,
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 80%;
  margin: 40px 0;
}

h2 {
  font-size: 3.3rem;
  line-height: 4.3rem;
}

p{
  font-size: 1.5rem;
}
</style>