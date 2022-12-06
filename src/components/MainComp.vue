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

    <div class="bg-color-boost">
      <div class="space-between center align-item">
        <div class="info">
          <h2>
            We Boost Our Clients’ Bottom Line by Optimizing Their Growth
            Potential.
          </h2>
          <h3>
            Quisque aliquet, libero consequat elementum convallis, erat risus
            imperdiet pellentesque sem neque eget.
          </h3>
          <button>Why Work With Us</button>
        </div>
        <div>
          <img
            src="../assets/images/we-boost-our-clients-600x549.jpg"
            alt="image"
          />
        </div>
      </div>

      <div class="center d-flex container-info">
        <div class="container-width">
          <div>
            <h3>We Build Relationships</h3>
            <p>
              Curabitur ac leo nunc. Vestibulum et mauris vel ante finibus
              maximus nec ut leo. Integer consectetur.
            </p>
          </div>
          <div>
            <div class="container-left">
              <h3>Proprietary Processes</h3>
              <p>
                Curabitur ac leo nunc. Vestibulum et mauris vel ante finibus
                maximus nec ut leo. Integer consectetur.
              </p>
            </div>
          </div>
        </div>
        <div class="icons">
          <div class="d-flex">
            <div>
              <font-awesome-icon
                icon="fa-solid fa-square-poll-vertical"
                class="color-icon"
              />
            </div>
            <div>
              <h3>Accountability</h3>
              <p>Curabitur ac leo nunc vestibulum</p>
            </div>
          </div>
          <div class="d-flex">
            <div>
              <font-awesome-icon
                icon="fa-solid fa-folder-plus"
                class="color-icon"
              />
            </div>
            <div>
              <h3>Transparency</h3>
              <p>Curabitur ac leo nunc vestibulum</p>
            </div>
          </div>
          <div class="d-flex">
            <div>
              <font-awesome-icon
                icon="fa-solid fa-chart-simple"
                class="color-icon"
              />
            </div>
            <div>
              <h3>Investment</h3>
              <p>Curabitur ac leo nunc vestibulum</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AwardsComp :awardsIcon="awardsIcon" />
    <MarketingComp />
    <MarketingResourcesComp :technique="technique" />
    <MakeThingsComp />
  </div>
</template>

<script>
import DescriptionComp from "./DescriptionComp.vue";
import BrandsComp from "./BrandsComp.vue";
import CardEmployeeComp from "./CardEmployeeComp.vue";
import AwardsComp from "./AwardsComp.vue";
import MarketingComp from "./MarketingComp.vue";
import MarketingResourcesComp from "./MarketingResourcesComp.vue";
import MakeThingsComp from "./MakeThingsComp.vue";

export default {
  name: "MainComp",

  components: {
    DescriptionComp,
    BrandsComp,
    CardEmployeeComp,
    AwardsComp,
    MarketingComp,
    MarketingResourcesComp,
    MakeThingsComp,
  },

  props: {
    descriptionMain: Array,
    cardEmployee: Array,
    brandsMain: Array,
    awardsIcon: Array,
    technique: Array,
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
.bg-color-boost {
  background-color: rgb(247, 247, 248);
  padding: 50px 0;

  h2 {
    font-size: 3rem;
  }

  h3 {
    font-size: 1.5rem;
    margin-top: 25px;
  }
  button {
    background-color: rgb(248, 96, 17);
    color: white;
    border: none;
    padding: 15px 40px;
    border-radius: 10px;
    font-size: 1.1rem;
    margin-top: 25px;

    &:hover {
      background-color: rgb(208, 85, 20);
      cursor: pointer;
    }
  }
}

.info {
  padding-right: 130px;
}

.icons {
  display: flex;
  flex-direction: column;

  .color-icon {
    color: rgb(248, 96, 17);
    font-size: 2.5rem;
    margin: 20px 15px;
    border: 2px solid rgb(248, 96, 17);
    border-radius: 15px;
    padding: 10px;
  }

  p {
    display: inline;
  }
}

.container-info {
  margin-top: 5%;
}

.container-left {
  margin-top: 50px;
}

.container-width {
  width: 50%;

  p {
    margin-right: 25%;
  }
}
</style>