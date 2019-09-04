<template>
  <div class="cv-section">
    <div class="cv-icon">
      <img :src="`${publicPath}${logo}`" />
    </div>
    <div class="cv-item">
      <h3>{{major}}</h3>
      <h4>{{institution}}</h4>
      <p>{{start}} - {{end}}
      </p>
      <div v-html="extra"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EducationSection',
  props: {
    logo: {default: "logo-education-generic.svg", type: String},
    institution: String,
    major: String,
    start: String,
    end: String,
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
</style>

