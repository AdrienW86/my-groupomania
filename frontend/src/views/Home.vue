<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Sign /> 
    <Users />

   
  </div> 
</template>

<script>
// @ is an alias to /src
import Sign from '@/components/Sign.vue'
import Users from '@/components/Users.vue'

export default {
  name: 'Home',
  components: {
    Sign,
    Users
  }
}
</script>
