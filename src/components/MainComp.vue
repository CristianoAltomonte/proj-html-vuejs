<template>
  <div>
    <DescriptionComp :descriptionMain="descriptionMain" />
    <BrandsComp :brandsMain="brandsMain" />
    <div class="space-between align-item center container-card">
      <div class="d-flex align-item">
        <div>
          <img src="../assets/images/marketing-expert-cta.png" alt="" />
        </div>
        <div>
          <h3>Sandy Riff</h3>
          <span>marketing Consultant Expert</span>
        </div>
      </div>
      <div>
        <div>
          <h2>Drive Leads and Sales with Avada</h2>
        </div>
      </div>
      <div>
        <button>
          <font-awesome-icon icon="fa-solid fa-phone" />
          <span> (555) 802-1234</span>
        </button>
      </div>
    </div>
    <CardEmployeeComp :cardEmployee="cardEmployee" />
  </div>
</template>

<script>
import DescriptionComp from "./DescriptionComp.vue";
import BrandsComp from "./BrandsComp.vue";
import CardEmployeeComp from "./CardEmployeeComp.vue";

export default {
  name: "MainComp",

  components: {
    DescriptionComp,
    BrandsComp,
    CardEmployeeComp,
  },

  props: {
    descriptionMain: Array,
    cardEmployee: Array,
    brandsMain: Array,
  },
};
</script>

<style lang="scss" scoped>
.container-card {

  padding: 5px 20px;
  box-shadow: 1px 5px 5px rgba(0, 0, 0, 0.229);
  border-radius: 10px;


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
  img {
    aspect-ratio: 1/1;
    border-radius: 50%;
    width: 70%;
  }
}
</style>