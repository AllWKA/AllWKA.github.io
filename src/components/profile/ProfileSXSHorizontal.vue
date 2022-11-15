<template>
  <div class="profile-xs-s-horizontal">
    <div class="profile-container-xs-s-horizontal">
      <div class="img-profile-container-xs-s-horizontal">
        <img src="@/assets/punpun.png" alt="profile_picture" class="img" style="transform: scaleX(-1)">
      </div>

      <h1 class="name name-xs-s-horizontal">Bryan Jaramillo Baldeón</h1>
    </div>

    <div style="width: 55%">
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
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import SocialLink from "@/components/common/SocialLink.vue";

@Component({
  components: {SocialLink}
})
export default class ProfileSXSHorizontal extends Vue {
}
</script>

<style scoped>

.name-xs-s-horizontal {
  width: 70%;
  font-size: 1.3rem;
  padding-left: 4%;
  margin: 1%;
}

.profile-container-xs-s-horizontal {
  height: 100%;
  width: 45%;
  padding-top: 2%;
  padding-left: 2%;
  padding-bottom: 2%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.img-profile-container-xs-s-horizontal {
  display: flex;
  width: 30%;
  height: 100%;
}

.profile-xs-s-horizontal {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

</style>
