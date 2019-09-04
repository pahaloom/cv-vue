<template>
  <div id="app">
    <img alt="Avatar" src="./assets/avatar.jpeg">
    <h1>CV Martin Ott</h1>
    <h2>Secondary education</h2>
    <EducationSection
      v-for="school in CvData.secondaryeducation"
      v-bind:institution="school.institution"
      v-bind:start="school.start"
      v-bind:end="school.end"
    />
    <h2>Higher education</h2>
    <EducationSection
      v-for="school in CvData.highereducation"
      v-bind:institution="school.institution"
      v-bind:major="school.major"
      v-bind:logo="school.logo"
      v-bind:start="school.start"
      v-bind:end="school.end"
      v-bind:extra="school.extra"
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
