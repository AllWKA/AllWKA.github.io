<template>

  <div class="profile">
    <ProfileSXSHorizontal v-if="renderedComponent === 'ProfileSXSHorizontal'"/>
    <ProfileSXSVertical v-else-if="renderedComponent === 'ProfileSXSVertical'"/>
  </div>

</template>

<script lang="ts">
import {Component, Vue, Watch} from "vue-property-decorator";
import ProfileSXSHorizontal from "@/components/profile/ProfileSXSHorizontal.vue";
import ProfileSXSVertical from "@/components/profile/ProfileSXSVertical.vue";

@Component({
  components: {ProfileSXSHorizontal, ProfileSXSVertical}
})
export default class Profile extends Vue {
  windowHeight = 0

  windowWidth = 0

  renderedComponent = 'ProfileSXSHorizontal'

  onResize(): void {
    this.windowHeight = window.innerHeight

    this.windowWidth = window.innerWidth
  }

  @Watch('windowHeight')
  onWindowResolutionChanged(): void {
    if (this.windowHeight <= 560 && this.windowHeight >= 360) {
      this.renderedComponent = 'ProfileSXSHorizontal'
    } else {
      this.renderedComponent = 'ProfileSXSVertical'
    }
  }

  mounted(): void {
    window.addEventListener('resize', this.onResize);
  }
}
</script>

<style scoped>

.profile {
  width: 90%;
  height: 40%;
  margin: 3% 2% 1%;
  color: #E0D1CA;
  background-color: #332F2E;
  border: 1px solid black;
  box-shadow: 10px 10px 18px 0 rgb(0, 0, 0);
  background-image: url("../../../public/assets/black-paper.png");
  background-repeat: repeat;
}

</style>
