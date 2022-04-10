<template>
  <div class="person-bar">
    <div class="avatar-wrap">
      <img class="avatar-img" :src="person.avatar" alt="" />
    </div>
    <p>
      {{ person.first_name }} <span>{{ person.last_name }}</span>
    </p>
    <p v-if="mobile">{{ age }} years old</p>
    <p v-if="person && person.employment && mobile">
      {{ person.employment.title }}
    </p>
    <img class="gender-img" :src="gender" alt="" v-if="mobile" />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  mounted() {
    this.$store.dispatch("getPerson");
    const img = document.querySelector(".avatar-img"); //уникальный авторский костыль, ручная работа
    let url;
    let error;
    function imageFailed() {
      if (error) {
        img.src = url;
      }
    }
    img.addEventListener("load", () => {
      error = false;
      console.log(this);
    });
    img.addEventListener("error", () => {
      setTimeout(() => {
        url = img.src;
        img.src = "";
        error = true;
        imageFailed();
      }, 2000);
    });
  },
  name: "HelloWorld",
  computed: {
    ...mapState(["person", "avatar"]),

    age: function () {
      const birthDate = new Date(this.person.date_of_birth);
      const exactTime = new Date();
      return Math.floor((exactTime - birthDate) / 1000 / 60 / 60 / 24 / 365);
    },

    gender: function () {
      const gender = this.person.gender;
      let genderImg = "gay.jpg";
      if (gender == "Male") {
        genderImg = "male.png";
      } else if (gender == "Female") {
        genderImg = "female.png";
      }

      return require(`@/assets/${genderImg}`);
    },

    mobile: function () {
      return window.innerWidth > 1024 ? true : false;
    },
  },
};
</script>


<style scoped lang="scss">
.person-bar {
  height: 100%;
  position: fixed;
  left: 0;
  width: 20vw;
  background: #ffd454;
  padding: 20px;
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: content-box;
  font-family: "LabGrotesque-Reg", sans-serif;
  color: #000;

  .avatar-wrap {
    margin: 0 auto 30px auto;
    border-radius: 50%;
    overflow: hidden;
    background: #000;

    img {
      width: 100%;
    }
  }
  p {
    text-align: center;
  }

  .gender-img {
    width: 30px;
    height: 30px;
    display: flex;
    align-self: center;
  }

  @media (max-width: 1024px) {
    top: 0;
    left: unset;
    width: 100%;
    height: 50px;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px;

    .avatar-wrap {
      width: 40px;
      height: 40px;
      margin: 0 0 0 30px;
    }
  }
}
</style>
