<template>
  <div>
    <h1>Register</h1>
    <input v-model="email" type="email" name="email" placeholder="Email"/>
    <input v-model="username" type="text" name="username" placeholder="Username"/>
    <input v-model="password" type="password" name="password" placeholder="Password"/>
    <br>
    <div v-html="error"></div>
    <button type="submit" @click="register()">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      username: '',
      password: '',
      error: null
    } 
  },
  methods: {
    register () { 
        AuthenticationService.register({
          email: this.email,
          username: this.username,
          password: this.password
        }).then((response) => {
          if (response.data.message) {
          this.error = response.data.message;
          } else {
            console.log(success);
          }
        })
    }
  }

}
</script>
