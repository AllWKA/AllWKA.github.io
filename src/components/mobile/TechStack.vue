<template>
  <div class="tech-stack-container">
    <span class="tech-stack-line">{{ line }}</span>

    <span class="tech-stack-const">const</span>

    <div class="tech-stack-img-container">
      <img :src="require(`@/assets/icons/${iconSrc}`)" alt="javascript_logo" class="img">
    </div>

    <span class="tech-stack-desc"> = "{{ tech }}<span v-if="time">: {{ time }}</span>"</span>
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

  @Prop({default: ''})
  line!: string
}
</script>

<style scoped>

.tech-stack-container {
  display: flex;
  width: 100%;
  min-height: 35px;
  align-items: center;
  justify-content: flex-start;
  margin-top: 1%;
}

.tech-stack-img-container {
  width: 25px;
  margin-right: 7px;
}

.tech-stack-line {
  width: 25px;
}

.tech-stack-const {
  margin-right: 3%;
  width: 49px;
}

.tech-stack-desc {
  width: 250px;
}
</style>
