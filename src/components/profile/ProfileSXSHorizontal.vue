<template>
  <div class="profile-xs-s-horizontal">
    <div class="profile-container-xs-s-horizontal">
      <div class="img-profile-container-xs-s-horizontal">
        <img src="@/assets/punpun.png" alt="profile_picture" class="img" style="transform: scaleX(-1)">
      </div>

      <h1 class="name name-xs-s-horizontal">Bryan Jaramillo Baldeón</h1>
    </div>

    <SocialLinks/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import SocialLinks from "@/components/profile/SocialLinks.vue";

@Component({
  components: {SocialLinks}
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
  margin-bottom: 3%;
}

</style>
