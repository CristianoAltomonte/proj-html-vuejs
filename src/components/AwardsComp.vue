<template>
  <div>
    <h2 class="text-center">Awards</h2>
    <div class="space-between center align-item">
      <div v-for="(elem, index) in awardsIcon" :key="index">
        <div></div>
        <img :src="require(`../assets/images/${elem.iconwin}`)" alt="" />
        <p>{{ elem.contain }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AwardsComp",

  props: {
    awardsIcon: Array,
  },
};
</script>

<style lang="scss" scoped>

h2{
    margin: 5% 0;
}
img {

  aspect-ratio: 1/3;
}

p {
  margin-right: 70px;
}
</style>