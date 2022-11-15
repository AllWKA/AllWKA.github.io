<template>
  <div class="social-link-section">
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
import {Component, Vue} from "vue-property-decorator";
import SocialLink from "@/components/profile/SocialLink.vue";

@Component({
  components: {SocialLink}
})
export default class SocialLinks extends Vue {

}
</script>

<style scoped>

.social-link-section {
  display: flex;
  flex-direction: column;
  margin-top: 3%;
}

</style>
