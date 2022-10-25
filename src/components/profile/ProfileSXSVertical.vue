<template>
  <div class="profile-xs-s">
    <div class="profile-container">
      <div class="img-profile-container-xs-s">
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
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import SocialLink from "@/components/mobile/SocialLink.vue";

@Component({
  components: {SocialLink}
})
export default class ProfileSXSVertical extends Vue {

}
</script>

<style scoped>

.profile-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.social-link-section {
  display: flex;
  flex-direction: column;
  margin-top: 3%;
}

.img-profile-container-xs-s {
  height: 95%;
  width: 30%;
  margin-top: 5%;
  margin-left: 5%;
  margin-right: 2.5%;
  display: flex;
}

.profile-xs-s {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
}

.name {
  margin-top: 5%;
  font-size: 1.6rem;
  width: 50%;
}

</style>
