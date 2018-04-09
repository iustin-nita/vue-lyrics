<template>
  <div>
    <h1>Register</h1>
    <input v-model="email" type="email" name="email" placeholder="Email"/>
    <input v-model="password" type="password" name="password" placeholder="Password"/>
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
      password: ''
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data);
    }
  }

}
</script>
