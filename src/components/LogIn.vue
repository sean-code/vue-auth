<template>
<div class="wrapper">
        <form class="form-signin" @submit.prevent="handleSubmit">
            <h2 class="form-signin-heading">Please login</h2>
            <input type="text" class="form-control" name="Email" placeholder="Email Address" v-model="Email" required autofocus="" />
            <input type="password" class="form-control" name="Password" placeholder="Password" v-model="Password" required=""/>      
            <label class="checkbox">
                <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"> Remember me
            </label>
            <button class="btn btn-lg btn-primary btn-block" type="submit">Login</button>   
        </form>
  </div>
</template>

<script>
import axios from 'axios';
    export default {
        name: 'LogIn',
        data(){
            return{
                Email: '',
                Password: ''
            }
        },
        methods: {
            async handleSubmit(){
                // console.log("Logged In")
                const response = await axios.post('http://localhost:3000/login', {
                    Email: this.Email,
                    Password: this.Password
                })
                .catch((err) => {
                    console.log(err);
                    throw err;
                });
                    console.log(response)
            }
        }
    }

</script>

<style scoped>
/* @import "bourbon"; */

body {
	background: #eee !important;
}

.wrapper {
    margin-top: 80px;
    margin-bottom: 80px;
}

.form-signin {
  max-width: 380px;
  padding: 15px 35px 45px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid rgba(0,0,0,0.1);
}

  .form-signin-heading,.checkbox {
     margin-bottom: 30px;
	}

	.checkbox {
        font-weight: normal;
	}
    .form-control {
    position: relative;
    font-size: 16px;
    height: auto;
    padding: 10px;
}

.form-control:focus {
    z-index: 2;
}


	input[type="text"] {
        margin-bottom: -1px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
	}

	input[type="password"] {
        margin-bottom: 20px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
	}



</style>