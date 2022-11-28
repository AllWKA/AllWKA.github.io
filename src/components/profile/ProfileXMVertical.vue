<template>
  <div class="profile-xm-vertical">
    <div class="profile-container-xm-vertical">
      <div class="img-profile-container-xm-vertical">
        <img src="@/assets/punpun.png" alt="profile_picture" class="img" style="transform: scaleX(-1)">
      </div>

      <h1 class="name name-xm-vertical">Bryan Jaramillo Baldeón</h1>
    </div>

    <SocialLinks orientation="row"/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import SocialLinks from "@/components/profile/SocialLinks.vue";

@Component({
  components: {SocialLinks}
})
export default class ProfileXMVertical extends Vue {
}
</script>

<style scoped>
.profile-xm-vertical {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.name-xm-vertical {
  font-size: 1.8rem;
  margin-right: 3%;
}

.profile-container-xm-vertical {
  height: 60%;
  width: 100%;
  padding-top: 2%;
  padding-left: 2%;
  padding-bottom: 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.img-profile-container-xm-vertical {
  display: flex;
  width: 30%;
  height: 100%;
}
</style>
