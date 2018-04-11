<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
    <el-menu-item index="1"><router-link to="/">Browse</router-link></el-menu-item>
    <el-menu-item index="2"><router-link to="register">Sign up</router-link></el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
    }
  }
}
</script>