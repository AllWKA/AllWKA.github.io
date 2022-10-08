<template>
  <div class="home-container">
    <div class="profile-xs">
      <div class="profile-container">
        <div class="img-profile-container-xs">
          <img src="@/assets/punpun.png" alt="profile_picture" class="img" style="transform: scaleX(-1)">
        </div>

        <h1 class="name">Bryan <br> Jaramillo <br> Baldeón</h1>
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
      <div style="height: 100%; margin-top: 3%; padding-left: 1.5%; padding-right: 1.5%">
        <div style="display:flex; justify-content: flex-start; height: 7%">
          <span class="tech-stack-label-active" @click="setActiveTab(0)">TechStack.js</span>

          <span class="tech-stack-label-idle" @click="setActiveTab(1)">WorkedWith.js</span>
        </div>

        <div class="tech-stack-list">
          <div v-if="activeTab===0">
            <TechStack v-for="(techStack, i) in techStackList" :key="techStack.iconSrc"
                       :line="i + 1"
                       :tech="techStack.tech"
                       :icon-src="techStack.iconSrc"
                       :alt="techStack.alt"
                       :time="techStack.time"
            />
          </div>

          <div v-if="activeTab===1">
            <TechStack v-for="(techStack, i) in workedWithList" :key="techStack.iconSrc"
                       :line="i + 1"
                       :tech="techStack.tech"
                       :icon-src="techStack.iconSrc"
                       :alt="techStack.alt"
                       :time="techStack.time"
            />
          </div>
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
  components: {TechStack, SocialLink}
})
export default class Home extends Vue {

  techStackList: Array<TechStack> = [
    {iconSrc: "JavaScript.svg", alt: "javascript_icon", tech: "JavaScript", time: "3 years"},
    {iconSrc: "Typescript.svg", alt: "typescript_icon", tech: "TypeScript", time: "3 years"},
    {iconSrc: "HTML5_2.png", alt: "html5_icon", tech: "HTML5", time: "3 years"},
    {iconSrc: "CSS3.png", alt: "css3_icon", tech: "CSS3", time: "3 years"},
    {iconSrc: "NodeJS.svg", alt: "nodejs_icon", tech: "NodeJs", time: "3 years"},
    {iconSrc: "VueJS.svg", alt: "vuejs_icon", tech: "VueJs", time: "3 years"}
  ]

  workedWithList: Array<TechStack> = [
    {iconSrc: "ElectronJS.svg", alt: "electronjs_icon", tech: "ElectronJS"},
    {iconSrc: "Mocha.png", alt: "mocha_icon", tech: "Mocha"},
    {iconSrc: "Ionic.svg", alt: "ionic_icon", tech: "Ionic"},
    {iconSrc: "quarkus.svg", alt: "quarkus_icon", tech: "Quarkus"},
    {iconSrc: "java.png", alt: "java_icon", tech: "Java"},
    {iconSrc: "Kotlin.svg", alt: "kotlin_icon", tech: "Kotlin"},
    {iconSrc: "quasar.svg", alt: "electronjs_icon", tech: "Quasar"},
    {iconSrc: "docker.png", alt: "docker_icon", tech: "Docker"}
  ]


  activeTab = 0

  setActiveTab(tab: number): void {
    this.activeTab = tab
  }
}
</script>

<style scoped>

.home-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: #191919;
}

.profile-container {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around
}

.social-link-section {
  display: flex;
  flex-direction: column;
  margin-top: 3%;
  height: 45%;
}

.img-profile-container-xs {
  height: auto;
  width: 25%;
  margin-top: 5%;
  margin-left: 5%;
  margin-right: 2.5%;
  display: flex;
}

.profile-xs {
  height: 36%;
  width: 90%;
  display: flex;
  flex-direction: column;
  color: #E0D1CA;
  background-color: #332F2E;
  border-radius: 5px;
  border: 1px solid black;
  margin: 3% 2% 1%;
  box-shadow: 10px 10px 18px 0 rgb(0, 0, 0);
  background-image: url("../../public/assets/black-paper.png");
  background-repeat: repeat;
}

.tech-stack-xs {
  margin-top: 1%;
  height: 60%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.name {
  margin-top: 5%;
  font-size: 1.6rem;
  width: 50%;
}

.tech-stack-list {
  width: 100%;
  height: 90%;
  padding-left: 6%;
  border: 1px solid white;
  background-color: #332F2E;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.tech-stack-label-active {
  border: 1px solid white;
  background-color: #332F2E;
  padding-left: 10px;
  padding-right: 10px;
}

.tech-stack-label-idle {
  border: 1px solid #867a7a;
  background-color: #151313;
  padding-left: 10px;
  padding-right: 10px;
}
</style>
