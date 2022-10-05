<template>
  <div class="tech-stack-container">
    <div class="tech-stack-img-container">
      <img :src="require(`@/assets/icons/${iconSrc}`)" alt="javascript_logo" class="img">
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";

@Component
export default class TechStack extends Vue {
  @Prop({default: ''})
  iconSrc!: string

  @Prop({default: ''})
  alt!: string

  @Prop({default: ''})
  tech!: string

  @Prop({default: ''})
  time!: string
}
</script>

<style scoped>

.tech-stack-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.tech-stack-img-container {
  width: 35%;
}

</style>
