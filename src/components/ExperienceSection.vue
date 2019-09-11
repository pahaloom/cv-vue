<template>
  <div class="cv-section">
    <div class="cv-icon">
      <img :src="`${publicPath}${logo}`" />
    </div>
    <div class="cv-item">
      <h3>{{title}}</h3>
      <h4>{{company}}</h4>
      <p>{{start}} - {{end}} {{duration}}
      </p>
      <div v-html="description"></div>
      <div v-html="extra"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExperienceSection',
  props: {
    logo: {default: "logo-work-generic.svg", type: String},
    title: String,
    company: String,
    start: String,
    end: String,
    duration: String,
    description: String,
    extra: String
  },
  data() {
    return {
      publicPath: process.env.BASE_URL
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 1em 0 0 0;
}
h4 {
  margin: .5em 0 0 0;
}
a {
  color: #42b983;
}
.cv-icon {
  position: absolute;
  float: left;
  background-color: #ccc;
  width: 60px;
  height: 60px;
}
.cv-icon > img {
  width: 60px;
  height: 60px;
}
.cv-item {
  margin-left: 75px;
}
.cv-item > div {
  margin-top: 1em;
}
</style>

