<template>
  <div class="profile-xm-horizontal">
    <div class="profile-container-xm-horizontal">
      <div class="img-profile-container-xm-horizontal">
        <img src="@/assets/punpun.png" alt="profile_picture" class="img" style="transform: scaleX(-1)">
      </div>

      <h1 class="name name-xm-horizontal">Bryan Jaramillo Baldeón</h1>
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
