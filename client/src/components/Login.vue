<template>
  <div>
    <h1>Log in</h1>
    <el-input v-model="email" type="email" name="email" placeholder="Email"></el-input>
    <el-input v-model="username" type="text" name="username" placeholder="Username"></el-input>
    <el-input v-model="password" type="password" name="password" placeholder="Password"></el-input>
    <br>
    <div v-html="error"></div>
    <el-button type="primary" @click="login()">Login</el-button>
    
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      username: '',
      password: '',
      error: null
    } 
  },
  methods: {
    login () { 
        this.$router.replace('/');
    }
  }

}
</script>
