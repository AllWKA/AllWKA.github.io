<template>
  <div class="home-container">
    <Profile :window-height="windowHeight" :window-width="windowWidth"/>
    <TechStack :window-height="windowHeight" :window-width="windowWidth"/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import Profile from "@/components/profile/profile.vue";
import TechStack from "@/components/techstack/TeckStack.vue";

@Component({
  components: {TechStack, Profile}
})
export default class Home extends Vue {
  windowHeight = 0

  windowWidth = 0

  onResize(): void {
    this.windowHeight = window.innerHeight

    this.windowWidth = window.innerWidth
  }

  mounted(): void {
    window.addEventListener('resize', this.onResize);

    this.windowWidth = window.innerWidth
    this.windowHeight = window.innerHeight
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
</style>
