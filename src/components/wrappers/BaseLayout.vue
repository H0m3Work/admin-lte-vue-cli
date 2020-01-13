<template>
  <div class="wrapper">
    <!-- Navbar -->
    <Header></Header>
    <!-- /.navbar -->
    <!-- Main Sidebar Container -->
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
      <!-- Brand Logo -->
      <a href="index3.html" class="brand-link">
        <img src="../../assets/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
        <span class="brand-text font-weight-light">Demo</span>
      </a>
      <!-- Sidebar -->
      <Sidebar></Sidebar>
      <!-- /.sidebar -->
    </aside>
    <!-- Content Wrapper. Contains page content -->
    <slot></slot>
    <!-- /.content-wrapper -->
    <Footer></Footer>
    <!-- Control Sidebar -->
    <aside class="control-sidebar control-sidebar-dark">
      <!-- Control sidebar content goes here -->
    </aside>
    <!-- /.control-sidebar -->
  </div>
</template>
<script>
import Footer from '../layout/Footer.vue'
import Header from '../layout/Header.vue'
import Sidebar from '../layout/Sidebar.vue'

export default {
  name: 'app',
  components: {
    Footer,
    Header,
    Sidebar
  }
}
</script>
