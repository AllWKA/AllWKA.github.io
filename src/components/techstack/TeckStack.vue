<template>
  <div class="tech-stack-xs-s">
    <TechStackXSSVertical
        v-if="renderedComponent === 'TechStackXSSVertical'"
        :techStackList="techStackList"
        :workedWithList="workedWithList"/>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch} from "vue-property-decorator";
import {TechStack as TechStackType} from "@/Types";
import TechStackXSSVertical from "@/components/techstack/TeckStackXSSVertical.vue";

@Component({
  components: {TechStackXSSVertical}
})
export default class TechStack extends Vue {
  @Prop({default: 0})
  windowHeight

  @Prop({default: 0})
  windowWidth

  renderedComponent = 'TechStackXSSVertical'

  techStackList: Array<TechStackType> = [
    {iconSrc: "JavaScript.svg", alt: "javascript_icon", tech: "JavaScript", time: "3 years"},
    {iconSrc: "Typescript.svg", alt: "typescript_icon", tech: "TypeScript", time: "3 years"},
    {iconSrc: "HTML5_2.png", alt: "html5_icon", tech: "HTML5", time: "3 years"},
    {iconSrc: "CSS3.png", alt: "css3_icon", tech: "CSS3", time: "3 years"},
    {iconSrc: "NodeJS.svg", alt: "nodejs_icon", tech: "NodeJs", time: "3 years"},
    {iconSrc: "VueJS.svg", alt: "vuejs_icon", tech: "VueJs", time: "3 years"}
  ]

  workedWithList: Array<TechStackType> = [
    {iconSrc: "ElectronJS.svg", alt: "electronjs_icon", tech: "ElectronJS"},
    {iconSrc: "Mocha.png", alt: "mocha_icon", tech: "Mocha"},
    {iconSrc: "Ionic.svg", alt: "ionic_icon", tech: "Ionic"},
    {iconSrc: "quarkus.svg", alt: "quarkus_icon", tech: "Quarkus"},
    {iconSrc: "java.png", alt: "java_icon", tech: "Java"},
    {iconSrc: "Kotlin.svg", alt: "kotlin_icon", tech: "Kotlin"},
    {iconSrc: "quasar.svg", alt: "electronjs_icon", tech: "Quasar"},
    {iconSrc: "docker.png", alt: "docker_icon", tech: "Docker"}
  ]

  activeTab = 0

  setActiveTab(tab: number): void {
    this.activeTab = tab
  }

  @Watch('windowHeight')
  onWindowResolutionChanged(): void {
    if (this.windowHeight <= 560 && this.windowHeight >= 360) {
      this.renderedComponent = 'TechStackXSSHorizontal'
    } else {
      this.renderedComponent = 'TechStackXSSVertical'
    }
  }
}
</script>

<style scoped>
.tech-stack-xs-s {
  margin-top: 5%;
  height: 65%;
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
