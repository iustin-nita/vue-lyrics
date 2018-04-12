<template>
  <div>
    <h1>Log in</h1>
    <el-input v-model="email" type="email" name="email" placeholder="Email"></el-input>
    <el-input v-model="password" type="password" name="password" placeholder="Password"></el-input>
    <br>
    <div v-html="error"></div>
    <el-button type="primary" @click="login()">Login</el-button>
    
  </div>
</template>

<script>
import { auth } from '@/firebase'
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      error: null
    } 
  },
  methods: {
    login () { 
      const {
      email,
      password,
    } = this;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("login successful");
        this.$router.replace('/');
      })
      .catch(error => {
        console.log('error', error);
        this.error = error;
      });

    event.preventDefault();
    }
  }

}
</script>
