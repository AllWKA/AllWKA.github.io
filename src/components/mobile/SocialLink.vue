<template>
  <div class="social-link-container">
    <div class="social-link-icon">
      <img :src="require(`@/assets/icons/${iconSrc}`)" :alt="alt" class="img">
    </div>

    <a :href="href" class="social-link">{{ hrefText }}</a>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";

@Component
export default class SocialLink extends Vue {
  @Prop({default: ''})
  iconSrc!: string

  @Prop({default: ''})
  alt!: string

  @Prop({default: ''})
  href!: string

  @Prop({default: ''})
  hrefText!: string
}
</script>

<style scoped>
.social-link-container {
  display: flex;
  align-items: center;
}

.social-link-icon {
  height: 30px;
  width: 30px;
  margin-left: 4.5%;
}

.social-link {
  color: white;
  font-size: 1rem;
  margin-left: 3%;
}
</style>
