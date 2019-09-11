import Vue from 'vue'
import App from './App.vue'
import moment from 'moment'

Vue.config.productionTip = false
Vue.filter('duration', function(start, end) {
  if (!end) {
    end = new Date();
  }
  var endMoment = moment(end, ["MM-YYYY", "YYYY"], true);
  if (!endMoment.isValid()) {
    endMoment = moment(new Date());
  }
  return moment.duration(
      endMoment.diff(moment(start, ["MM-YYYY", "YYYY"], true))
    ).humanize();
});
new Vue({
  render: h => h(App),
}).$mount('#app')
