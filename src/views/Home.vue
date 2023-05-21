<template>
  <div class="home-container">
    <ProfileInfo/>

    <ProjectsSection/>
  </div>
</template>

<script>
import ProfileInfo from '@/components/ProfileInfo'
import ProjectsSection from '@/components/ProjectsSection'

export default {
  name: 'Home',
  components: {
    ProfileInfo,
    ProjectsSection
  }
}
</script>

<style scoped>
.home-container {
  background-color: #121317;
  color: #EEEEEE;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
}
</style>
