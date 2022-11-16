<template>
  <div class="file-container">
    <div class="file-labels-container">
          <span
              :class="[activeTab === 0 ? 'tech-stack-label-active' : 'tech-stack-label-idle']"
              @click="setActiveTab(0)">TechStack.js</span>

      <span :class="[activeTab === 1 ? 'tech-stack-label-active' : 'tech-stack-label-idle']"
            @click="setActiveTab(1)">WorkedWith.js</span>
    </div>

    <div class="tech-stack-list">
      <div v-if="activeTab === 0" style="width: 100%; height: 100%">
        <TechStackLine v-for="(techStack, i) in techStackList" :key="techStack.iconSrc"
                       :line="i + 1"
                       :tech="techStack.tech"
                       :icon-src="techStack.iconSrc"
                       :alt="techStack.alt"
                       :time="techStack.time"
        />
      </div>

      <div v-if="activeTab === 1" style="width: 100%;height: 100%">
        <TechStackLine v-for="(techStack, i) in workedWithList" :key="techStack.iconSrc"
                       :line="i + 1"
                       :tech="techStack.tech"
                       :icon-src="techStack.iconSrc"
                       :alt="techStack.alt"
                       :time="techStack.time"
        />
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import TechStackLine from "@/components/techstack/TechStackLine.vue";
import {TechStack as TechStackType} from "@/Types";

@Component({
  components: {TechStackLine}
})
export default class TechStackXMHorizontal extends Vue {
  @Prop({default: []})
  techStackList!: Array<TechStackType>

  @Prop({default: []})
  workedWithList!: Array<TechStackType>

  activeTab = 0

  setActiveTab(tab: number): void {
    this.activeTab = tab
  }
}
</script>

<style scoped>
.file-container {
  margin-top: 2%;
  width: 40%;
  height: 75%;
  display: flex;
  flex-direction: column;
}

.tech-stack-list {
  width: 100%;
  height: 85%;
  overflow: auto;
  padding-left: 3%;
  border: 1px solid white;
  background-color: #332F2E;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 0 10px 10px 10px;
}

.file-labels-container {
  display: flex;
  width: 100%;
}
</style>
