<template>
  <div>
    <h2 class="text-center">Trusted by Leading Organisations</h2>
    <div class="container-card center">
      <div class="space-between">
        <div v-for="(elem, index) in cardEmployee" :key="index">
          <div class="margin">
            <img :src="require(`../assets/images/${elem.image}`)" alt="image" />
            <h3 class="border">{{ elem.about }}</h3>
            <span class="score">{{ elem.score }}</span>
            <span class="role">{{ elem.role }}</span>
          </div>
        </div>
      </div>
      <div class="text-center div-button">
        <button>Read More Case Studies</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardEmployeeComp",

  props: {
    cardEmployee: Array,
  },
};
</script>

<style lang="scss" scoped>
h2 {
  margin: 8% 0;
  font-size: 3.5rem;
}
.container-card {
  h3 {
    font-size: 1.8rem;
    margin: 25px 0;
  }

  .border {
    border-bottom-style: dashed;
    border-color: rgb(192, 192, 192);
    padding-bottom: 20px;
  }

  .score {
    font-weight: bolder;
    font-size: 2.5rem;
  }

  img {
    width: 380px;
    cursor: pointer;
  }

  .margin {
    padding-right: 20px;
  }

  .role {
    font-size: 1.2rem;
    display: block;
  }

  button {
    background-color: rgb(248, 96, 17);
    color: white;
    border: none;
    padding: 15px 40px;
    border-radius: 10px;
    font-size: 1.1rem;

    &:hover {
      background-color: rgb(208, 85, 20);
      cursor: pointer;
    }
  }

  .div-button{
    margin: 5% 0;
  }
}
</style>