<template>
    <div class="welcome container">
      <div class="auth-wrapper">
      <div class="auth-inner">
        Welcome
      </div>
    </div>
    </div>
</template>

<script>
  export default{
    name: 'HelloComponent'
  }
</script>


<style scoped>
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

.welcome-container{
  margin-top: 80px;
  margin-bottom: 80px;

}

</style>

