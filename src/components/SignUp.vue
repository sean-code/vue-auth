<template>
  <div class="wrapper">
    <form @submit.prevent="handleSubmit">
      <h2>Sign Up</h2>
      <p>
        <label for="firstName" class="floatLabel">First Name</label>
        <input id="firstName" name="firstName" type="text" class="form-control" v-model="firstName" required>
      </p>
      <p>
        <label for="lastName" class="floatLabel">Last Name</label>
        <input id="lastName" name="lastName" type="text" class="form-control" v-model="lastName" required>
      </p>
      <p>
        <label for="Email" class="floatLabel">Email</label>
        <input id="Email" name="Email" type="text" class="form-control" v-model="Email" required>
      </p>
      <p>
        <label for="password" class="floatLabel">Password</label>
        <input id="password" name="Password" type="password" class="form-control" v-model="Password" required>
      </p>
      <p>
        <label for="confirm_password" class="floatLabel">Confirm Password</label>
        <input id="confirm_password" name="confirmPassword" type="password" class="form-control" v-model="confirmPassword" required>
      </p>
      <p>
        <input type="submit" value="Create My Account" id="submit">
      </p>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: 'SignUp',
      firstName: '',
      lastName: '',
      Email: '',
      Password: '',
      confirmPassword: '',
    };
  },
  methods: {
    handleSubmit() {
      const data = {
        firstName: this.firstName,
        lastName: this.lastName,
        Email: this.Email,
        Password: this.Password,
        confirmPassword: this.confirmPassword,
      };
      axios.post('http://localhost:3000/', data)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>


<style scoped>
.wrapper{
    margin-top: 80px;
    margin-bottom: 80px;
}

body {
  background: #384047;
  font-family: sans-serif;
  font-size: 10px;
}

form {
  background: #fff;
  padding: 4em 4em 2em;
  max-width: 400px;
  margin: 50px auto 0;
  border-radius: 2px;
}

form h2 {
  margin: 0 0 50px 0;
  padding: 10px;
  text-align: center;
  font-size: 30px;
  color: darken(#e5e5e5, 50%);
  border-bottom: solid 1px #e5e5e5;
}

form p {
  margin: 0 0 3em 0;
  position: relative;
}

form input {
  display: block;
  box-sizing: border-box;
  width: 100%;
  outline: none;
  margin: 0;
}

form input[type="text"],
form input[type="password"] {
  background: #fff;
  border: 1px solid #dbdbdb;
  font-size: 1.6em;
  padding: .8em .5em;
  border-radius: 2px;
}

form input[type="text"]:focus,
form input[type="password"]:focus {
  background: #fff;
}

form input[type="submit"] {
  background: #1c8ef9de;
  box-shadow: 0 3px 0 0 darken;
  border-radius: 2px;
  border: none;
  color: #fff;
  cursor: pointer;
  display: block;
  font-size: 1.5em;
  line-height: 1.6em;
  margin: 2em 0 0;
  outline: none;
  padding: .5em 0;
  text-shadow: 0 1px #68B25B;
}

form label {
  position: absolute;
  left: 4px;
  top: 12px;
  color: #999;
  font-size: 16px;
  display: inline-block;
  padding: 2px;
  font-weight: 400;
  transition: color .3s, top .3s, background-color .8s;
}

form label.floatLabel {
  top: -11px;
  background-color: rgba(255,255,255,0.8);
  font-size: 14px;
}

.form-control:focus {
    z-index: 2;
}



</style>