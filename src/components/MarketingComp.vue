<template>
  <div>
    <div class="center d-flex align-item container-marketing">
      <div>
        <img src="../assets/images/large-testimonial-600x583.jpg" alt="image" />
      </div>
      <div>
        <p>
          “The team at Avada Marketing Consultant is fabulous. They helped us
          unlock our potential online and offline. We have experienced year on
          year growth due to their progressive approach.”
        </p>
        <div class="profile">
          <span> <strong>Kate Schadler</strong> </span>
          <span>Marketing Consultant – Abstract</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MarketingComp",
};
</script>

<style lang="scss" scoped>
.container-marketing {
  margin-top: 15%;
}

p {
  font-size: 2rem;
  text-align: start;
  margin: 0 80px;
  font-weight: bolder;
}

img {
  border-radius: 10px;

}

span {
  display: block;
  text-align: start;
  margin: 0 80px;
  line-height: 2rem;
}

.profile{
    margin-top: 30px;

    span{
        font-size: 1.2rem;
    }
    span:nth-child(2){

        font-size: smaller;
    }
}
</style>