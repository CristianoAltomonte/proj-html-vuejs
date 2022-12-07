<template>
  <div>
    <div
      v-for="(elem, index) in descriptionMain"
      :key="index"
      class="container-description"
    >
      <div class="card-description" :style="`${elem.invert}`">
        <div>
          <img
            :src="require(`../assets/images/${elem.image}`)"
            :style="`${elem.invert}`"
            alt="#"
          />
        </div>
        <div :style="`${elem.invert}`" class="paragrafo">
          <h2>{{ elem.title }}</h2>
          <p>{{ elem.paragraph }}</p>
          <button>{{ elem.button }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DescriptionComp",

  props: {
    descriptionMain: Array,
  },
};
</script>

<style lang="scss" scoped>
.container-description {
  margin: 10% 0;
}
.card-description {
  display: flex;
  align-items: center;
  width: 80%;
  margin: 0 auto;

  img {
    width: 38rem;
  }

  h2 {
    font-size: 3rem;
  }

  p {
    margin-top: 10px;
    font-size: 1.5rem;
  }
  .paragrafo {
    padding: 0 60px;
  }
  button {
    background-color: rgb(248, 96, 17);
    color: white;
    border: none;
    padding: 15px 40px;
    border-radius: 10px;
    font-size: 1.1rem;
    margin: 50px 0;

    &:hover {
      background-color: rgb(208, 85, 20);
      cursor: pointer;
    }
  }
}
@keyframes mymove {
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(10px, 10px) rotate(10deg);
  }
  50% {
    transform: translate(0, 0) rotate(0eg);
  }
  75% {
    transform: translate(-10px, 10px) rotate(-10deg);
  }
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}
img {
  width: 50%;
  height: 40%;
  &:hover {
    animation: mymove 3s infinite;
  }
}
</style>