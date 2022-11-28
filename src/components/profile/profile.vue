<template>

  <div class="profile">
    <ProfileSXSHorizontal v-if="renderedComponent === 'ProfileSXSHorizontal'"/>
    <ProfileSXSVertical v-else-if="renderedComponent === 'ProfileSXSVertical'"/>
    <ProfileXMHorizontal v-else-if="renderedComponent === 'ProfileXMHorizontal'"/>
    <ProfileXMVertical v-else-if="renderedComponent === 'ProfileXMVertical'"/>
  </div>

</template>

<script lang="ts">
import {Component, Prop, Vue, Watch} from "vue-property-decorator";
import ProfileSXSHorizontal from "@/components/profile/ProfileSXSHorizontal.vue";
import ProfileSXSVertical from "@/components/profile/ProfileSXSVertical.vue";
import ProfileXMHorizontal from "@/components/profile/ProfileXMHorizontal.vue";
import ProfileXMVertical from "@/components/profile/ProfileXMVertical.vue";

@Component({
  components: {ProfileSXSHorizontal, ProfileSXSVertical, ProfileXMHorizontal, ProfileXMVertical}
})
export default class Profile extends Vue {
  @Prop({default: 0})
  windowHeight = 0

  @Prop({default: 0})
  windowWidth = 0

  renderedComponent = 'ProfileSXSHorizontal'

  @Watch('windowHeight')
  onWindowResolutionChanged(): void {
    if (this.windowHeight <= 560 && this.windowHeight >= 360) {
      this.renderedComponent = 'ProfileSXSHorizontal'
    } else if (this.windowHeight <= 667 && this.windowHeight >= 561) {
      this.renderedComponent = 'ProfileSXSVertical'
    } else if (this.windowHeight <= 767 && this.windowHeight >= 668) {
      this.renderedComponent = 'ProfileXMHorizontal'
    } else if (this.windowWidth >= 768 && this.windowHeight >= 896) {
      this.renderedComponent = 'ProfileXMVertical'
    }
  }
}
</script>

<style scoped>

.profile {
  width: 90%;
  /*height: 40%;*/
  margin: 3% 4% 1% 0;
  display: flex;
  color: #E0D1CA;
  background-color: #332F2E;
  border: 1px solid black;
  box-shadow: 10px 10px 18px 0 rgb(0, 0, 0);
  background-image: url("../../../public/assets/black-paper.png");
  background-repeat: repeat;
}

</style>
