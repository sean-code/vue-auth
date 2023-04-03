<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-light fixed-top">
      <div class="container">
        <a href="#" class="navbar-brand">Home</a>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a href="#" class="nav-link">Login</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">Sign up</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="auth-wrapper">
      <div class="auth-inner">
        Hello
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'App'
}
</script>

<style>
#app{
  text-align: center;
}
*{
  box-sizing: border-box;
}

body{
  background: #1c8ef9de !important;
  min-height: 100vh;
  display: flex;
  font-weight: 400;
  font-family: 'Fira Sans', sans-serif;
}

h1, h2, h3, h5, h6, label, span{
  font-weight: 500;
  font-family: 'Fira Sans' sans-serif;
}

body, html, #app, #root, .auth-wrapper{
  width: 100%;
  height: 100%;
}
nav{
    background: white;
  }

.navbar-light{
  box-shadow: 0 14px 80px rgba(34, 35, 58, 0.2);
}
.auth-wrapper{
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
}

.auth-inner{
  width: 450px;
  margin: auto;
  background: #ffffff;
  box-shadow: 0 14px 80px rgba(14, 35, 58, 0.2);
  padding: 40px 55px 45px 55px;
  border-radius: 15px;
  transition: all .3s;
}
.auth-wrapper h3{
  text-align: center;
  margin: 0;
  line-height: 1;
  padding-bottom: 20px;
}
.custom-control-label{
  font-weight: 400;
}
.forgot-password,
.forgot-password a {
  text-align: right;
  font-size: 13px;
  padding-top: 10px;
  color: #7f7d7d;
  margin: 0;
}

.forgot-password a{
  color: #167bff;
}
</style>
