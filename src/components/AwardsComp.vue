<template>
  <div>
    <h2 class="text-center">Awards</h2>
    <div class="space-between center align-item prova">
      <div v-for="(elem, index) in awardsIcon" :key="index">
        <img
          :src="require(`../assets/images/${elem.iconwin}`)"
          :style="`${elem.style}`"
          alt=""
        />
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
h2 {
  margin: 5% 0;
}
img {
  width: 150px;

}


p {
  margin-right: 70px;
}
</style>