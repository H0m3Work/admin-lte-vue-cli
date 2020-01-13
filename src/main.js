import Vue from 'vue'
import App from './App.vue'
import * as moment from 'moment';
import router from './router'

import Default from './components/wrappers/BaseLayout.vue';
import Pages from './components/wrappers/PagesLayout.vue';

Vue.prototype.moment = moment

window.$ = window.jQuery = require('jquery');

Vue.config.productionTip = false

Vue.component('default-layout', Default);
Vue.component('userpages-layout', Pages);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

// <!-- Font Awesome -->
require('./assets/plugins/fontawesome-free/css/all.min.css')
// <!-- Ionicons -->
require('vue-ionicons/ionicons.css')
  // <!-- iCheck for checkboxes and radio inputs -->
require('./assets/plugins/icheck-bootstrap/icheck-bootstrap.min.css')
  // <!-- Bootstrap Color Picker -->
require('./assets/plugins/bootstrap-colorpicker/css/bootstrap-colorpicker.min.css')
// <!-- Tempusdominus Bbootstrap 4 -->
require('./assets/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css')
// <!-- Select2 -->
require('./assets/plugins/select2/css/select2.min.css')
require('./assets/plugins/select2-bootstrap4-theme/select2-bootstrap4.min.css')
// <!-- iCheck -->
require('./assets/plugins/icheck-bootstrap/icheck-bootstrap.min.css')
// <!-- JQVMap -->
require('./assets/plugins/jqvmap/jqvmap.min.css')
// <!-- Theme style -->
// require('./assets/dist/css/adminlte.min.css')
// <!-- overlayScrollbars -->
require('./assets/plugins/overlayScrollbars/css/OverlayScrollbars.min.css')
// <!-- Daterange picker -->
require('./assets/plugins/daterangepicker/daterangepicker.css')
// <!-- summernote -->
require('./assets/plugins/summernote/summernote-bs4.css')
// <!-- Google Font: Source Sans Pro -->
// <style src="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700"></style>

// <!-- jQuery -->
// require('./assets/plugins/jquery/jquery.min.js')
// <!-- jQuery UI 1.11.4 -->
require('./assets/plugins/jquery-ui/jquery-ui.min.js')
// <!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
// <script>
// $.widget.bridge('uibutton', $.ui.button)
// </script>
// <!-- Bootstrap 4 -->
require('./assets/plugins/bootstrap/js/bootstrap.bundle.min.js')
// <!-- Select2 -->
// require('./assets/plugins/select2/js/select2.full.min.js')
// <!-- ChartJS -->
require('./assets/plugins/chart.js/Chart.min.js')
// <!-- Sparkline -->
require('./assets/plugins/sparklines/sparkline.js')
// <!-- JQVMap -->
require('./assets/plugins/jqvmap/jquery.vmap.min.js')
require('./assets/plugins/jqvmap/maps/jquery.vmap.usa.js')
// <!-- jQuery Knob Chart -->
require('./assets/plugins/jquery-knob/jquery.knob.min.js')
// <!-- daterangepicker -->
// require('./assets/plugins/moment/moment.min.js')
// require('./assets/plugins/moment/locales.min.js')
// require('./assets/plugins/daterangepicker/daterangepicker.js')
// <!-- Tempusdominus Bootstrap 4 -->
// require('./assets/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js')
// <!-- Summernote -->
require('./assets/plugins/summernote/summernote-bs4.min.js')
// <!-- overlayScrollbars -->
require('./assets/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js')
// <!-- AdminLTE App -->
require('./assets/dist/js/adminlte.js')
// <!-- AdminLTE dashboard demo (This is only for demo purposes) -->
// require('./assets/dist/js/pages/dashboard.js')
// <!-- AdminLTE for demo purposes -->
require('./assets/dist/js/demo.js')

