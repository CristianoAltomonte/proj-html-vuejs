<template>
  <div>
    <div class="container-input">
      <img src="../assets/images/marketing-consultant-expert.jpg" alt="" />
      <span>Richard Madsen</span>
      <span>Marketing Consultant Expert</span>
      <span class="text-orange">
        <font-awesome-icon icon="fa-solid fa-phone" /> (555) 802-1234</span
      >
      <input type="text" name="" id="text" placeholder="Your Name*" />
      <input type="email" name="" id="email" placeholder="Your Email*" />
      <input type="tel" name="" id="phone" placeholder="Your Phone Number*" />
      <button>Get A Call Back</button>
      <p class="sub-button">By submitting my data I agree to be contacted</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container-input {
  background-color: white;
  padding: 15px 30px;
  border-radius: 10px;
  text-align: center;
  line-height: 2.5em;
  position: relative;
  top: 50px;
  border: 1px solid grey;

  span {
    display: block;
    font-size: 1.5rem;
  }

  input {
    display: block;
    width: 100%;
    margin: 10px 0;
    height: 7vh;
    border-radius: 5px;
    padding: 5px;

    &:hover {
      border-color: rgb(248, 96, 17);
    }
  }

  .text-orange {
    color: rgb(248, 96, 17);
  }
}

img {
  aspect-ratio: 1/1;
  border-radius: 50%;
  width: 30%;
}

button{
  background-color: rgb(248, 96, 17);
  color: white;
  border: none;
  padding: 10px 80px;
  border-radius: 10px;
  font-size: 1.4rem;

  &:hover{
    background-color: rgb(208, 85, 20);
    cursor: pointer;
  }

}

.sub-button{
    color: rgb(140, 140, 140);
    font-size: 0.7rem;
  }


</style>