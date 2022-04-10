<template>
  <div class="beer">
    <div>
      <h3>{{ beer.brand }}</h3>
      <h5>{{ beer.name }}, {{ beer.alcohol }}</h5>
    </div>
    <button class="beer-generator" @click="generateBeer">
      АКТИВИРОВАТЬ ПИВОГЕНЕРАТОР
    </button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  mounted() {
    this.$store.dispatch("getBeer");
  },
  name: "HelloWorld",

  methods: {
    generateBeer() {
      this.$store.dispatch("getBeer");
    },
  },

  computed: {
    ...mapState(["beer"]),
  },
};
</script>


<style scoped lang="scss">
.beer {
  height: 100vh;
  width: 80vw;
  margin-right: 0;
  margin-left: auto;
  right: 0;
  background: #9696c8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 50px 0;
  box-sizing: border-box;

  h5 {
    font-family: "LabGrotesque-Bold", sans-serif;
    color: #fff;
    font-size: 30px;
    text-align: center;
  }

  h3 {
    font-family: "LabGrotesque-Bold", sans-serif;
    color: #fff;
    font-size: 40px;
    text-align: center;
  }

  .beer-generator {
    width: 200px;
    height: 200px;
    background: #ff2400;
    border-radius: 50%;
    border: 2px solid #ff2400;
    cursor: pointer;
    transition: 300ms ease-in-out;
    color: #fff;
    font-family: "LabGrotesque-Bold", sans-serif;
    font-size: 20px;

    &:hover {
      background: transparent;
    }
  }
  @media (max-width: 1024px) {
    width: 100vw;
  }
}
</style>
