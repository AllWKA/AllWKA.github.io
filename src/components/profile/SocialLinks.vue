<template>
  <div :class="{
    'social-link-section-column': orientation==='column',
    'social-link-section-row': orientation==='row'
  }">
    <SocialLink iconSrc="linkedin.svg"
                alt="linkedin_icon"
                href="https://www.linkedin.com/in/bryan-jaramillo-baldeón/"
                href-text="/bryan-jaramillo-baldeón"/>

    <SocialLink iconSrc="github.svg"
                alt="github_icon"
                href="https://github.com/AllWKA"
                href-text="/AllWKA"/>

    <SocialLink iconSrc="twitter.svg"
                alt="twitter_icon"
                href="https://twitter.com/bryanjaramillob"
                href-text="/bryanjaramillob"/>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import SocialLink from "@/components/profile/SocialLink.vue";

@Component({
  components: {SocialLink}
})
export default class SocialLinks extends Vue {
  @Prop({default: 'column'})
  orientation = 'column'
}
</script>

<style scoped>

.social-link-section-column {
  display: flex;
  flex-direction: column;
  margin-top: 3%;
  justify-content: space-around;
  height: 65%;
}

.social-link-section-row {
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-top: 3%;
}

</style>
