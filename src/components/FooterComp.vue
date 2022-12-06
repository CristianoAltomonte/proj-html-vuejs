<template>
  <div>
    <div class="main-footer">
      <div class="center space-between">
        <div class="container-left">
          <h2>
            Grow Your Online Business Strategically, and Improve Customer
            Retention.
          </h2>
          <div class="d-flex align-item">
            <div v-for="(elem, index) in socials" :key="index" class="icons">
              <font-awesome-icon :icon="elem" />
            </div>
          </div>
        </div>

        <div>
          <div class="space-between">
            <div>
              <h3>Services</h3>
              <ul v-for="(lista, index) in services" :key="index">
                <li>{{ lista }}</li>
              </ul>
            </div>
            <div>
              <h3>Resources</h3>
              <ul v-for="(lista, index) in resources" :key="index">
                <li>{{ lista }}</li>
              </ul>
            </div>
            <div>
              <h3>Company</h3>
              <ul v-for="(lista, index) in company" :key="index">
                <li>{{ lista }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="space-between center info">
        <span> © 2020 • Avada Consultant • Powered by WordPress </span>
        <span> Call Us (555) 802-1234 </span>
        <span> info@yourcompany.com </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterComp",

  props: {
    socials: Array,
    services: Array,
    resources: Array,
    company: Array,
  },
};
</script>

<style lang="scss" scoped>

.main-footer{
    padding: 5% 0;
}
.container-left {
  width: 35%;

  h2{
    font-size: 2.1rem;
  }
}
.icons {
  margin: 10px 10px;
  cursor: pointer;
  font-size: 1.3rem;
}

h3 {
  margin-bottom: 10px;
}
li {
  list-style: none;
  line-height: 2rem;
  font-size: 0.8rem;
  margin-right: 100px;
}
.info{
    margin-top: 10%;
}
</style>