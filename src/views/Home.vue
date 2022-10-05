<template>
  <div class="home-container">
    <div class="profile-xs">
      <div class="profile-container">
        <div style="display: flex; width: 100%; align-items: center; justify-content: space-around">
          <div class="img-profile-container-xs">
            <img src="@/assets/punpun.jpeg" alt="profile_picture" class="img">
          </div>

          <h1 style="margin-top: 10%; height: 100%; font-size: 1.5rem; width: 100%;">Bryan Jaramillo Baldeón</h1>
        </div>
      </div>

      <div class="social-link-section">
        <SocialLink iconSrc="linkedin.svg"
                    alt="linkedin_icon"
                    href="https://www.linkedin.com/in/bryan-jaramillo-baldeón/"
                    href-text="/in/bryan-jaramillo-baldeón"/>

        <SocialLink iconSrc="github.svg"
                    alt="github_icon"
                    href="https://github.com/AllWKA"
                    href-text="/AllWKA"/>

        <SocialLink iconSrc="twitter.svg"
                    alt="twitter_icon"
                    href="https://twitter.com/bryanjaramillob"
                    href-text="/bryanjaramillob"/>
      </div>
    </div>

    <div class="tech-stack-xs">

      <!--   lines code style   -->
      <div style="height: 50%; display: flex; flex-direction: column">
        <h3 style="text-align: center">Tech Stack</h3>

        <div class="tech-stack-container">

          <TechStack icon-src="JavaScript.svg" alt="javascript_icon" time="3 years"/>

          <TechStack icon-src="Typescript.svg" alt="typescript_icon" time="3 years"/>

          <TechStack icon-src="HTML5.svg" alt="html5_icon" time="3 years"/>

        </div>

        <div class="tech-stack-container">
          <TechStack icon-src="CSS3.svg" alt="css3_icon" time="3 years"/>

          <TechStack icon-src="VueJS.svg" alt="vuejs_icon" time="3 years"/>

          <TechStack icon-src="NodeJS.svg" alt="nodejs_icon" time="3 years"/>
        </div>
      </div>

      <div style="height: 50%; display: flex; flex-direction: column">
        <h3 style="text-align: center">Worked with:</h3>

        <div class="tech-stack-container">
          <TechStack icon-src="ElectronJS.svg" alt="electronjs_icon" tech="ElectronJS"/>

          <TechStack icon-src="Mocha.png" alt="mocha_icon" tech="Mocha"/>

          <TechStack icon-src="Ionic.svg" alt="ionic_icon" tech="Ionic"/>
        </div>

        <div class="tech-stack-container">
          <TechStack icon-src="quarkus.svg" alt="quarkus_icon" tech="Quarkus"/>

          <TechStack icon-src="java.png" alt="java_icon" tech="Java"/>
        </div>

        <div class="tech-stack-container">
          <TechStack icon-src="Kotlin.svg" alt="kotlin_icon" tech="Kotlin"/>

          <TechStack icon-src="quasar.svg" alt="electronjs_icon" tech="Quasar"/>

          <TechStack icon-src="docker.png" alt="docker_icon" tech="Docker"/>
        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import SocialLink from "@/components/mobile/SocialLink.vue";
import TechStack from "@/components/mobile/TechStack.vue";

@Component({
  components: {TechStack, SocialLink},
})
export default class Home extends Vue {
}
</script>

<style scoped>

.home-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
  background-color: #041C32;
}

.profile-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.social-link-section {
  display: flex;
  flex-direction: column;
  margin-top: 3%;
  height: 45%;
}

.img-profile-container-xs {
  height: auto;
  width: 40%;
  margin-top: 5%;
  margin-left: 5%;
  margin-right: 2.5%;
  display: flex;
}

.tech-stack-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
}

.profile-xs {
  height: 35%;
  display: flex;
  flex-direction: column;
  background-color: #000b17;
  border-radius: 20px;
  border: 1px solid black;
  margin: 3% 2% 1%;
  box-shadow: 10px 10px 18px 0 rgb(0, 0, 0);
  background-image: url("../../public/assets/black-paper.png");
  background-repeat: repeat;
}

.tech-stack-xs {
  margin-top: 1%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>
