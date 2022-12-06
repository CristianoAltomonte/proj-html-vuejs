<template>
  <div>
    <div class="container-resources">
      <div class="center">
        <div class="space-between container-top">
          <div class="container-left">
            <h1>
              Marketing Resources: Insider Advice on How to Increase Online
              Sales
            </h1>
          </div>
          <div>
            <button>Explore All Resources</button>
          </div>
        </div>

        <div class="d-flex">
          <div v-for="(elem, index) in technique" :key="index">
            <div>
              <img
                style="width: 95%"
                :src="require(`../assets/images/${elem.image}`)"
              />
              <h2>
                {{ elem.title }}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MarketingResourcesComp",

  props: {
    technique: Array,
  },
};
</script>

<style lang="scss" scoped>
.container-resources {
  .container-top {
    margin-bottom: 5%;
  }

  margin-top: 5%;
  background-color: rgb(247, 247, 248);
  padding: 5% 0;

  h2 {
    font-size: 1.9rem;
    margin: 20px 0;
  }

  button {
    background-color: rgb(248, 96, 17);
    color: white;
    border: none;
    padding: 15px 35px;
    border-radius: 10px;
    font-size: 1.1rem;
    margin-top: 25px;
    width: 100%;

    &:hover {
      background-color: rgb(208, 85, 20);
      cursor: pointer;
    }
  }
}
.container-left {
  width: 35%;

  h1 {
    font-size: 2.1rem;
  }
}
img:hover{
  
  filter: drop-shadow(1px 20px 15px rgb(248, 96, 17));
}
</style>