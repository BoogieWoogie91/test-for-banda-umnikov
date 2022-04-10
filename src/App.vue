<template>
  <HelloWorld />
  <Person />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Person from "./components/Person.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Person,
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "LabGrotesque-Reg";
  font-weight: 400;
  src: url("~@/assets/fonts/LabGrotesque-Regular.woff2") format("woff2"),
    url("~@/assets/fonts/LabGrotesque-Regular.woff") format("woff");
}

@font-face {
  font-family: "LabGrotesque-Bold";
  font-weight: 700;
  src: url("~@/assets/fonts/LabGrotesque-Bold.woff2") format("woff2"),
    url("~@/assets/fonts/LabGrotesque-Bold.woff") format("woff");
}
body {
  margin: 0;
}
#app {
  display: flex;
  justify-content: flex-end;
}
</style>
