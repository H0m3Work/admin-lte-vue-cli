<template>
  <div class="login-box">
    <div class="login-logo">
      <a href="/"><b>Admin</b>LTE</a>
    </div>
    <div class="card">
      <div class="card-body login-card-body">
        <p class="login-box-msg">Sign in to start your session</p>
        <form method="post">
          <div class="input-group mb-3">
            <input type="email" class="form-control" placeholder="Email">
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-envelope"></span>
              </div>
            </div>
          </div>
          <div class="input-group mb-3">
            <input type="password" class="form-control" placeholder="Password">
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-lock"></span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-8">
              <div class="icheck-primary">
                <input type="checkbox" id="remember">
                <label for="remember">Remember Me</label>
              </div>
            </div>
            <div class="col-4">
              <router-link :to="dashboard" class="btn btn-primary btn-block">Sign In</router-link>
            </div>
          </div>
        </form>
        <div class="social-auth-links text-center mb-3">
          <p>- OR -</p>
          <a href="#" class="btn btn-block btn-primary">
            <i class="fab fa-facebook mr-2"></i> Sign in using Facebook
          </a>
          <a href="#" class="btn btn-block btn-danger">
            <i class="fab fa-google-plus mr-2"></i> Sign in using Google+
          </a>
        </div>
        <p class="mb-1">
          <a href="forgot-password.html">I forgot my password</a>
        </p>
        <p class="mb-0">
          <a href="register.html" class="text-center">Register a new membership</a>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import './../../assets/build/scss/AdminLTE';
@import './../../assets/build/scss/colors';
@import './../../assets/build/scss/pages/login_and_register';
@import './../../assets/build/scss/layout'

</style>
<script>
export default {
  name: 'LoginBoxed',
  data() {
    return {
      dashboard: 'dashboard'
    }
  },
  methods: {

  }
}
</script>
