<template>
  <div>
    <div class="bg-jumbotron">
      <div class="container-jumbotron">
        <div class="text-jumbotron">
          <span class="title">Unlock Your Online Growth Potential</span>
          <span class="subtitle"
            >Online marketing to secure customer retention, leads, and sales. We
            focus on the bigger picture.
            </span>
          <button>
            Our Service <font-awesome-icon icon="fa-solid fa-arrow-right" />
          </button>
        </div>
        <JumbotronInput />

      </div>
      
      
    </div>
  </div>
</template>

<script>
import JumbotronInput from "./JumbotronInput.vue";

export default {
  name: "JumbotronHeaderComp",

  components: {
    JumbotronInput,
  },
};
</script>

<style scoped lang="scss">
.bg-jumbotron {
  background-image: url("../assets/images/marketing-intro.jpg");
  height: 70vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.container-jumbotron{
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70vh;
}
.text-jumbotron {
  color: white;
  width: 70vh;
}

.title{
    font-size: 4rem;
}

.subtitle{
    display: block;
    font-size: 1.5rem;
}
button{
    padding: 10px 30px;
    border-radius: 10px;
    font-size: 1.2rem;
    margin: 30px 0;
    cursor: pointer;

    &:hover{
        background-color: transparent;
        color: white;
        border-color: white;
    }
}
</style>