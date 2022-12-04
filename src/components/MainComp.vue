<template>
  <div>
    <DescriptionComp :descriptionMain="descriptionMain"/>
    <BrandsComp :brandsMain="brandsMain"/>
  </div>
</template>

<script>
import DescriptionComp from "./DescriptionComp.vue";
import BrandsComp from "./BrandsComp.vue";

export default {

  name: "MainComp",

  components: {
    DescriptionComp,
    BrandsComp,
  },

  props: {
    descriptionMain: Array,
    brandsMain: Array,
  },
};
</script>

<style lang="scss" scoped>
</style>