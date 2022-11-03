<template>
  <div class="tech-stack-container">
    <span class="tech-stack-line">{{ line }}</span>

    <span class="tech-stack-const">const</span>

    <span style="margin-right: 2%">{{ tech }} = </span>

    <div class="tech-stack-img-container">
      <img :src="require(`@/assets/icons/${iconSrc}`)" alt="javascript_logo" class="img">
    </div>

    <span class="tech-stack-desc" v-if="time">"{{ time }}"</span>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";

@Component
export default class TechStackLine extends Vue {
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
  min-height: 30px;
  align-items: center;
  justify-content: flex-start;
  margin-top: 1%;
}

.tech-stack-container span {
  font-size: 0.5rem;
}

.tech-stack-img-container {
  width: 20px;
  margin-right: 7px;
}

.tech-stack-line {
  width: 25px;
}

.tech-stack-const {
  margin-right: 3%;
  width: 49px;
  color: orange;
}

.tech-stack-desc {
  color: #42b242;
}
</style>
