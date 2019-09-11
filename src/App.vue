<template>
  <div id="app">
    <img alt="Avatar" src="./assets/avatar.jpeg">
    <h1>CV Martin Ott</h1>
    <h2>Secondary education</h2>
    <EducationSection
      v-for="ins in CvData.education.secondary"
      v-bind:institution="ins.institution"
      v-bind:start="ins.start"
      v-bind:end="ins.end"
    />
    <h2>Higher education</h2>
    <EducationSection
      v-for="ins in CvData.education.higher"
      v-bind:institution="ins.institution"
      v-bind:major="ins.major"
      v-bind:logo="ins.logo"
      v-bind:start="ins.start"
      v-bind:end="ins.end"
      v-bind:extra="ins.extra"
    />
    <h2>Licenses and Certifications</h2>
    <EducationSection
      v-for="ins in CvData.education.certifications"
      v-bind:institution="ins.institution"
      v-bind:major="ins.major"
      v-bind:logo="ins.logo"
      v-bind:start="ins.start"
      v-bind:end="ins.end"
      v-bind:extra="ins.extra"
    />
    <h2>Work experience</h2>
    <ExperienceSection
      v-for="exp in CvData.experience"
      v-bind:title="exp.title"
      v-bind:company="exp.company"
      v-bind:logo="exp.logo"
      v-bind:start="exp.start"
      v-bind:end="exp.end"
      v-bind:duration="exp.duration"
      v-bind:description="exp.description"
      v-bind:extra="exp.extra"
    />
  </div>
</template>

<script>
import CvData from './data/cv.json'
import EducationSection from './components/EducationSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'

export default {
  name: 'app',
  data() {
    return {CvData: CvData}
  },
  components: {
    EducationSection,
    ExperienceSection
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
