<template>

  <div class="profile">
    <ProfileSXSHorizontal v-if="renderedComponent === 'ProfileSXSHorizontal'"/>
    <ProfileSXSVertical v-else-if="renderedComponent === 'ProfileSXSVertical'"/>
<!--    <ProfileXMHorizontal/>-->
  </div>

</template>

<script lang="ts">
import {Component, Prop, Vue, Watch} from "vue-property-decorator";
import ProfileSXSHorizontal from "@/components/profile/ProfileSXSHorizontal.vue";
import ProfileSXSVertical from "@/components/profile/ProfileSXSVertical.vue";
import ProfileXMHorizontal from "@/components/profile/ProfileXMHorizontal.vue";

@Component({
  components: {ProfileSXSHorizontal, ProfileSXSVertical, ProfileXMHorizontal}
})
export default class Profile extends Vue {
  @Prop({default: 0})
  windowHeight

  @Prop({default: 0})
  windowWidth

  renderedComponent = 'ProfileSXSHorizontal'

  @Watch('windowHeight')
  onWindowResolutionChanged(): void {
    if (this.windowHeight <= 560 && this.windowHeight >= 360) {
      this.renderedComponent = 'ProfileSXSHorizontal'
    } else {
      this.renderedComponent = 'ProfileSXSVertical'
    }
  }
}
</script>

<style scoped>

.profile {
  width: 90%;
  height: 40%;
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
