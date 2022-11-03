<template>
  <div class="profile-xm-horizontal">
    <div class="profile-container-xm-horizontal">
      <div class="img-profile-container-xm-horizontal">
        <img src="@/assets/punpun.png" alt="profile_picture" class="img" style="transform: scaleX(-1)">
      </div>

      <h1 class="name name-xm-horizontal">Bryan Jaramillo Baldeón</h1>
    </div>

    <div style="height: 60%; width: 40%; display: flex; flex-direction: column; justify-content: space-around">
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
export default class ProfileXMHorizontal extends Vue {
}
</script>

<style scoped>
.profile-xm-horizontal {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.name-xm-horizontal {
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 1.8rem;
  margin-right: 3%;
}

.profile-container-xm-horizontal {
  height: 100%;
  width: 60%;
  padding-top: 2%;
  padding-left: 2%;
  padding-bottom: 2%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.img-profile-container-xm-horizontal {
  display: flex;
  width: 30%;
  height: 100%;
}
</style>
