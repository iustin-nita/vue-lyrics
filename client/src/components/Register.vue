<template>
  <div>
    <h1>Register</h1>
    <input v-model="email" type="email" name="email" placeholder="Email"/>>
    <input v-model="password" type="password" name="password" placeholder="Password"/>
    <br>
    <div v-html="error"></div>
    <el-button type="primary" @click="register()">Register</el-button>
    <div id="firebaseui-auth-container"></div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      error: null
    } 
  },
  methods: {
    register () { 
        const {
          email,
          password,
        } = this;

        console.log(email, password);

        auth.doCreateUserWithEmailAndPassword(email, password)
          .then(authUser => {
            console.log("NEW USER", authUser)
          })
          .catch(error => {
            this.error = error.message;
            console.log('error', error);
          });

        event.preventDefault();
    }
  }

}
</script>
