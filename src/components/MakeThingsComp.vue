<template>
  <div>
    <div class="container-makethis">
      <div class="center space-between container-sub">
        <div class="container-left">
          <h2>Let’s Make Things Happen</h2>
          <p>
            Curabitur ac leo nunc. Vestibulum et mauris vel ante finibus maximus
            nec ut leo. Integer consectetur.
          </p>
          <hr>
          <p>
            <i
              >“The team at Avada Marketing Consultant is fabulous. They helped
              us unlock our potential online and offline. We have experienced
              year on year growth due to their progressive approach.”</i
            >
          </p>
          <span> George Anderson </span>
          <span> Digitalbox CEO </span>
        </div>
        <div>
          <JumbotronInput />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import JumbotronInput from "../components/JumbotronInput.vue";
export default {
  name: "MakeThingsComp",

  components: {
    JumbotronInput,
  },
};
</script>

<style lang="scss" scoped>
.container-makethis {
  background-color: black;
}

.container-sub {
  padding: 5% 0;
}
.container-left {
  width: 50%;
  color: white;

  h2 {
    font-size: 3.9rem;
  }

  p{
    margin: 10% 0;
  }
  :nth-child(2) {
    font-size: 1.9rem;
    
  }

  :nth-child(4) {
    font-size: 1.2rem;
  }

  :nth-child(5) {
    font-size: 1.2rem;
    display: block;
  }
  :nth-child(6) {
    font-size: 0.8rem;
    color: grey;
    
  }

  hr{
    width: 15%;
    border: 0.5px solid grey;
  }
}
</style>